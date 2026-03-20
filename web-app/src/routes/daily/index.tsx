import { Component, For } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { getDailyNotes } from "~/lib/content";

const DailyNotesPage: Component = () => {
  const notes = () => getDailyNotes();

  return (
    <>
      <Title>Daily Notes - Notes</Title>
      
      <div class="layout">
        <aside class="sidebar">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><A href="/">Home</A></li>
              <li><A href="/notes">All Notes</A></li>
              <li><A href="/daily">Daily Notes</A></li>
              <li><A href="/tags">Tags</A></li>
              <li><A href="/search">Search</A></li>
            </ul>
          </div>
        </aside>

        <main>
          <h1>Daily Notes</h1>
          <p class="note-meta">Your daily learning journal</p>

          <ul class="note-list">
            <For each={notes()}>
              {(note) => (
                <li class="note-list-item">
                  <A href={`/notes/${note.slug}`}>{note.title}</A>
                  <div class="meta">{note.created}</div>
                </li>
              )}
            </For>
          </ul>
        </main>
      </div>
    </>
  );
};

export default DailyNotesPage;
