import { Component, For, createSignal, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { getAllTags, getNotesByTag, NoteMetadata } from "~/lib/content";

const TagPage: Component = () => {
  const params = useParams<{ tag: string }>();
  const [notes, setNotes] = createSignal<NoteMetadata[]>([]);

  onMount(() => {
    setNotes(getNotesByTag(params.tag));
  });

  return (
    <>
      <Title>#{params.tag} - Notes</Title>
      
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

          <div>
            <h3>All Tags</h3>
            <div class="tags">
              <For each={getAllTags().slice(0, 10)}>
                {(t) => (
                  <A href={`/tags/${t.tag}`} class="tag">#{t.tag}</A>
                )}
              </For>
            </div>
          </div>
        </aside>

        <main>
          <h1>#{params.tag}</h1>
          <p class="note-meta">{notes().length} notes with this tag</p>

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
        </main>
      </div>
    </>
  );
};

export default TagPage;
