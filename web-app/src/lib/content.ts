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

const notesData: NoteMetadata[] = [
  {
    slug: "index",
    title: "Home",
    created: "2024-03-20",
    tags: [],
  },
  {
    slug: "daily/index",
    title: "Daily Notes",
    created: "2024-03-20",
    tags: ["daily"],
  },
  {
    slug: "daily/2024-03-20",
    title: "2024-03-20",
    created: "2024-03-20",
    tags: ["daily"],
  },
  {
    slug: "topics/index",
    title: "Topics",
    created: "2024-03-20",
    tags: [],
  },
];

const notesContent: Record<string, Note> = {
  "index": {
    slug: "index",
    title: "Home",
    created: "2024-03-20",
    tags: [],
    content: `# Welcome to My Notes

This is your personal knowledge base.

## Navigation

- [[Daily Notes]] - Quick access to recent daily notes
- [[Topics]] - Browse notes by topic

## Search

Use the search bar above to find notes.`,
    raw: "",
  },
  "daily/index": {
    slug: "daily/index",
    title: "Daily Notes",
    created: "2024-03-20",
    tags: ["daily"],
    content: `# Daily Notes

Daily notes capture what you learn and work on each day.

## Recent Daily Notes

[[2024-03-20]]

## How to Use

Create a new file in \`content/daily/YYYY-MM-DD.md\` to add a daily note.`,
    raw: "",
  },
  "daily/2024-03-20": {
    slug: "daily/2024-03-20",
    title: "2024-03-20",
    created: "2024-03-20",
    tags: ["daily"],
    content: `# 2024-03-20

## Today

## Notes

## Tasks

- [ ]

## Links`,
    raw: "",
  },
  "topics/index": {
    slug: "topics/index",
    title: "Topics",
    created: "2024-03-20",
    tags: [],
    content: `# Topics

Browse notes by topic.

## Structure

Notes are organized in \`content/topics/\` folder.`,
    raw: "",
  },
};

export function getAllNotes(): NoteMetadata[] {
  return notesData;
}

export function getNoteBySlug(slug: string): Note | null {
  return notesContent[slug] || null;
}

export function getNotesByTag(tag: string): NoteMetadata[] {
  return notesData.filter((note) => note.tags.includes(tag));
}

export function getDailyNotes(): NoteMetadata[] {
  return notesData
    .filter((note) => note.slug.startsWith("daily/") && note.slug !== "daily/index")
    .sort((a, b) => b.created.localeCompare(a.created));
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagCounts = new Map<string, number>();

  for (const note of notesData) {
    for (const tag of note.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getBacklinks(slug: string): NoteMetadata[] {
  const targetSlug = slug.replace(/\//g, "");
  
  return notesData.filter((note) => {
    const noteData = notesContent[note.slug];
    if (!noteData) return false;
    const wikiLinkPattern = new RegExp(`\\[\\[${targetSlug}\\]\\]`, "i");
    return wikiLinkPattern.test(noteData.content);
  });
}
