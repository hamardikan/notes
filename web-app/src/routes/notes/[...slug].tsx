import { Component, Show, createMemo } from "solid-js";
import { useParams } from "@solidjs/router";
import { getNoteBySlug, Note } from "~/lib/content";
import { NotePage } from "~/components/NotePage";

const NoteSlugPage: Component = () => {
  const params = useParams<{ slug: string }>();
  
  const note = createMemo(() => {
    const slug = params.slug || "index";
    return getNoteBySlug(slug);
  });

  return (
    <Show when={note()} fallback={<div>Note not found</div>}>
      <NotePage note={note()!} />
    </Show>
  );
};

export default NoteSlugPage;
