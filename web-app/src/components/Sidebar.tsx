import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const Sidebar: Component = () => {
  return (
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
    </aside>
  );
};
