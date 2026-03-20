import { marked } from "marked";

export function renderMarkdown(content: string): string {
  let html = marked.parse(content, { async: false }) as string;

  html = html.replace(/\[\[([^\]]+)\]\]/g, (_, link) => {
    const slug = link.toLowerCase().replace(/\s+/g, "-");
    return `<a href="/notes/${slug}" class="wiki-link">${link}</a>`;
  });

  return html;
}

export function extractTags(content: string): string[] {
  const tagMatch = content.match(/tags:\s*\[([^\]]+)\]/);
  if (tagMatch) {
    return tagMatch[1].split(",").map((t) => t.trim().replace(/['"]/g, ""));
  }
  return [];
}

export function extractTitle(content: string): string {
  const titleMatch = content.match(/title:\s*["']?([^"'\n]+)["']?/);
  return titleMatch ? titleMatch[1] : "";
}
