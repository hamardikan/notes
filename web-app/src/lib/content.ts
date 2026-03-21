import matter from "gray-matter";

export interface Note {
  slug: string;
  title: string;
  created: string;
  modified?: string;
  tags: string[];
  aliases?: string[];
  content: string;
  raw: string;
}

export interface NoteMetadata {
  slug: string;
  title: string;
  created: string;
  modified?: string;
  tags: string[];
}

const modules = import.meta.glob("../../../content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const notes: Note[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = toSlug(path);

    return {
      slug,
      title: toStringValue(data.title) || slug,
      created: toDateString(data.created),
      modified: data.modified ? toDateString(data.modified) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
      aliases: Array.isArray(data.aliases)
        ? data.aliases.map((alias) => String(alias))
        : undefined,
      content,
      raw,
    };
  })
  .sort((a, b) => b.created.localeCompare(a.created));

const noteMap = new Map<string, Note>(notes.map((note) => [note.slug, note]));

export function getAllNotes(): NoteMetadata[] {
  return notes.map((note) => ({
    slug: note.slug,
    title: note.title,
    created: note.created,
    modified: note.modified,
    tags: note.tags,
  }));
}

export function getNoteBySlug(slug: string): Note | null {
  if (!slug) return noteMap.get("index") || null;
  return noteMap.get(slug) || noteMap.get(`${slug}/index`) || null;
}

export function getNotesByTag(tag: string): NoteMetadata[] {
  return getAllNotes().filter((note) => note.tags.includes(tag));
}

export function getDailyNotes(): NoteMetadata[] {
  return getAllNotes()
    .filter((note) => note.slug.startsWith("daily/") && note.slug !== "daily/index")
    .sort((a, b) => b.created.localeCompare(a.created));
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagCounts = new Map<string, number>();

  for (const note of notes) {
    for (const tag of note.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getBacklinks(slug: string): NoteMetadata[] {
  return notes
    .filter((note) => {
      const links = extractWikiLinks(note.content);
      return links.includes(slug) || links.includes(slug.replace(/\/index$/, ""));
    })
    .map((note) => ({
      slug: note.slug,
      title: note.title,
      created: note.created,
      modified: note.modified,
      tags: note.tags,
    }));
}

function extractWikiLinks(content: string): string[] {
  const matches = content.match(/\[\[([^\]]+)\]\]/g) || [];
  return matches
    .map((match) => match.slice(2, -2).trim())
    .map((link) => link.replace(/\s+/g, "-"));
}

function toStringValue(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function toDateString(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }

  return "";
}

function toSlug(path: string): string {
  const normalized = path.replace(/\\/g, "/");
  const markerIndex = normalized.lastIndexOf("/content/");

  if (markerIndex >= 0) {
    return normalized.slice(markerIndex + "/content/".length).replace(/\.md$/, "");
  }

  return normalized
    .replace(/^\.\.\/\.\.\/\.\.\/content\//, "")
    .replace(/^content\//, "")
    .replace(/\.md$/, "");
}
