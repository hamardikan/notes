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

const CONTENT_PATH = "/content";

function getAllNoteFiles(): string[] {
  return [
    `${CONTENT_PATH}/index.md`,
    `${CONTENT_PATH}/daily/index.md`,
    `${CONTENT_PATH}/daily/2024-03-20.md`,
    `${CONTENT_PATH}/topics/index.md`,
  ];
}

function parseNote(filePath: string, content: string): Note {
  const { data, content: body } = matter(content);
  
  const slug = filePath
    .replace(`${CONTENT_PATH}/`, "")
    .replace(/\.md$/, "")
    .replace(/^daily\//, "daily/");

  return {
    slug,
    title: data.title || slug,
    created: data.created || "",
    modified: data.modified,
    tags: data.tags || [],
    aliases: data.aliases,
    content: body,
    raw: content,
  };
}

export function getAllNotes(): NoteMetadata[] {
  const files = getAllNoteFiles();
  
  return files.map((file) => {
    const content = getNoteContent(file);
    const { data } = matter(content);
    const slug = file
      .replace(`${CONTENT_PATH}/`, "")
      .replace(/\.md$/, "");

    return {
      slug,
      title: data.title || slug,
      created: data.created || "",
      modified: data.modified,
      tags: data.tags || [],
    };
  });
}

export function getNoteBySlug(slug: string): Note | null {
  const paths = [
    `${CONTENT_PATH}/${slug}.md`,
    `${CONTENT_PATH}/${slug}/index.md`,
  ];

  for (const path of paths) {
    const content = getNoteContent(path);
    if (content) {
      return parseNote(path, content);
    }
  }

  return null;
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
  const notes = getAllNotes();
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
  const allNotes = getAllNotes();
  const targetSlug = slug.replace(/\//g, "");
  
  return allNotes.filter((note) => {
    const noteContent = getNoteContent(`${CONTENT_PATH}/${note.slug}.md`);
    const wikiLinkPattern = new RegExp(`\\[\\[${targetSlug}\\]\\]`, "i");
    return wikiLinkPattern.test(noteContent);
  });
}

function getNoteContent(path: string): string {
  const mockContent: Record<string, string> = {
    "/content/index.md": `---
title: Home
created: 2024-03-20
tags: []
---

# Welcome to My Notes

This is your personal knowledge base.

## Navigation

- [[Daily Notes]] - Quick access to recent daily notes
- [[Topics]] - Browse notes by topic

## Search

Use the search bar above to find notes.`,
    "/content/daily/index.md": `---
title: Daily Notes
created: 2024-03-20
tags: [daily]
---

# Daily Notes

Daily notes capture what you learn and work on each day.

## Recent Daily Notes

[[2024-03-20]]

## How to Use

Create a new file in \`content/daily/YYYY-MM-DD.md\` to add a daily note.`,
    "/content/daily/2024-03-20.md": `---
title: 2024-03-20
created: 2024-03-20
tags: [daily]
---

# 2024-03-20

## Today

## Notes

## Tasks

- [ ]

## Links`,
    "/content/topics/index.md": `---
title: Topics
created: 2024-03-20
tags: []
---

# Topics

Browse notes by topic.

## Structure

Notes are organized in \`content/topics/\` folder.`,
  };

  return mockContent[path] || "";
}
