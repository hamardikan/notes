import { Component, For } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { getAllNotes } from "~/lib/content";

const NotesIndexPage: Component = () => {
  const notes = () => getAllNotes();

  return (
    <>
      <Title>All Notes - Notes</Title>
      
      <h1>All Notes</h1>
      <p class="note-meta">{notes().length} notes total</p>

      <ul class="note-list">
        <For each={notes()}>
          {(note) => (
            <li class="note-list-item">
              <A href={`/notes/${note.slug}`}>{note.title}</A>
              <div class="meta">
                {note.created}
                {note.tags.length > 0 && ` • ${note.tags.map((t) => `#${t}`).join(" ")}`}
              </div>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default NotesIndexPage;
