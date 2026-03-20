import { Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { Component, For, Show } from "solid-js";
import { Note, getBacklinks } from "~/lib/content";
import { renderMarkdown } from "~/lib/markdown";

interface NotePageProps {
  note: Note;
}

export const NotePage: Component<NotePageProps> = (props) => {
  const html = () => renderMarkdown(props.note.content);
  const backlinks = () => getBacklinks(props.note.slug);

  return (
    <article>
      <Title>{props.note.title} - Notes</Title>
      <Meta name="description" content={`Notes: ${props.note.title}`} />

      <header>
        <h1>{props.note.title}</h1>
        <div class="note-meta">
          <Show when={props.note.created}>
            Created: {props.note.created}
          </Show>
          <Show when={props.note.modified}>
            {" • "}Modified: {props.note.modified}
          </Show>
        </div>
        <Show when={props.note.tags.length > 0}>
          <div class="tags">
            <For each={props.note.tags}>
              {(tag) => (
                <A href={`/tags/${tag}`} class="tag">
                  #{tag}
                </A>
              )}
            </For>
          </div>
        </Show>
      </header>

      <div class="markdown-content" innerHTML={html()} />

      <Show when={backlinks().length > 0}>
        <div class="backlinks">
          <h3>Backlinks</h3>
          <ul class="backlinks-list">
            <For each={backlinks()}>
              {(note) => (
                <li>
                  <A href={`/notes/${note.slug}`}>{note.title}</A>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </article>
  );
};
