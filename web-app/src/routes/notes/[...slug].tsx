import { Component, For, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { getNoteBySlug, Note } from "~/lib/content";
import { NotePage } from "~/components/NotePage";

const NoteSlugPage: Component = () => {
  const note = (): Note | null => {
    const slug = window.location.pathname.replace("/notes/", "").replace(/^\//, "");
    return getNoteBySlug(slug || "index");
  };

  return (
    <Show when={note()} fallback={<div>Note not found</div>}>
      <NotePage note={note()!} />
    </Show>
  );
};

export default NoteSlugPage;
