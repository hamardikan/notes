import { Component, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { getAllTags, getNotesByTag, NoteMetadata } from "~/lib/content";

const TagsIndexPage: Component = () => {
  const tags = () => getAllTags();

  return (
    <>
      <Title>Tags - Notes</Title>
      
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
          <h1>Tags</h1>
          <p class="note-meta">{tags().length} tags total</p>

          <div class="tags" style={{ "margin-top": "1rem" }}>
            <For each={tags()}>
              {(t) => (
                <A href={`/tags/${t.tag}`} class="tag" style={{ "font-size": "1rem", padding: "0.5rem 1rem" }}>
                  #{t.tag} ({t.count})
                </A>
              )}
            </For>
          </div>
        </main>
      </div>
    </>
  );
};

export default TagsIndexPage;
