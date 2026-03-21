import { Component, createSignal, onMount, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { getAllNotes, NoteMetadata } from "~/lib/content";

const SearchPage: Component = () => {
  const [query, setQuery] = createSignal("");
  const [results, setResults] = createSignal<any[]>([]);
  const [loading, setLoading] = createSignal(false);
  const [allNotes, setAllNotes] = createSignal<NoteMetadata[]>([]);

  onMount(async () => {
    setAllNotes(getAllNotes());
  });

  const basicSearch = (q: string): NoteMetadata[] => {
    if (!q.trim()) return [];
    const lower = q.toLowerCase();
    return allNotes().filter(
      (note) =>
        note.title.toLowerCase().includes(lower) ||
        note.tags.some((t) => t.toLowerCase().includes(lower))
    );
  };

  const handleSearch = async (value: string) => {
    setQuery(value);
    setLoading(true);

    setResults(basicSearch(value));

    setLoading(false);
  };

  return (
    <>
      <Title>Search - Notes</Title>
      
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
          <h1>Search</h1>
          
          <input
            type="search"
            class="search-box"
            placeholder="Search notes... (full-text + fuzzy)"
            value={query()}
            onInput={(e) => handleSearch(e.currentTarget.value)}
            autofocus
          />

          <Show when={loading()}>
            <p class="note-meta">Searching...</p>
          </Show>

          <Show when={!loading() && query() && results().length === 0}>
            <p class="note-meta">No results found for "{query()}"</p>
          </Show>

          <Show when={!loading() && results().length > 0}>
            <p class="note-meta">{results().length} results</p>
            <ul class="note-list">
              <For each={results()}>
                {(result) => (
                  <li class="note-list-item">
                    <A href={result.url || `/notes/${result.slug}`}>
                      {result.meta?.title || result.title || "Untitled"}
                    </A>
                    <Show when={result.excerpt}>
                      <div class="meta" innerHTML={result.excerpt}></div>
                    </Show>
                  </li>
                )}
              </For>
            </ul>
          </Show>

          <Show when={!query()}>
            <p class="note-meta">Start typing to search all notes...</p>
            <div style={{ "margin-top": "1.5rem" }}>
              <h3>All Notes</h3>
              <ul class="note-list">
                <For each={allNotes().slice(0, 10)}>
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
            </div>
          </Show>
        </main>
      </div>
    </>
  );
};

export default SearchPage;
