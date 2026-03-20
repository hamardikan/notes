import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { getAllNotes, getDailyNotes, getAllTags } from "~/lib/content";

const HomePage: Component = () => {
  const recentNotes = () => getAllNotes().slice(0, 5);
  const dailyNotes = () => getDailyNotes().slice(0, 5);
  const tags = () => getAllTags().slice(0, 10);

  return (
    <>
      <Title>Notes - Home</Title>
      
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
            <h3>Folders</h3>
            <ul>
              <li><A href="/notes/daily">Daily</A></li>
              <li><A href="/notes/topics">Topics</A></li>
              <li><A href="/notes/projects">Projects</A></li>
            </ul>
          </div>

          <div>
            <h3>Tags</h3>
            <div class="tags">
              {tags().map((t) => (
                <A href={`/tags/${t.tag}`} class="tag">#{t.tag}</A>
              ))}
            </div>
          </div>
        </aside>

        <main>
          <h1>Welcome to My Notes</h1>
          <p class="note-meta">
            A personal knowledge base powered by markdown and Obsidian-compatible formatting.
          </p>

          <section style={{ "margin-top": "2rem" }}>
            <h2>Recent Notes</h2>
            <ul class="note-list">
              {recentNotes().map((note) => (
                <li class="note-list-item">
                  <A href={`/notes/${note.slug}`}>{note.title}</A>
                  <div class="meta">
                    {note.created} • {note.tags.map((t) => `#${t}`).join(" ")}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section style={{ "margin-top": "2rem" }}>
            <h2>Daily Notes</h2>
            <ul class="note-list">
              {dailyNotes().map((note) => (
                <li class="note-list-item">
                  <A href={`/notes/${note.slug}`}>{note.title}</A>
                  <div class="meta">{note.created}</div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
