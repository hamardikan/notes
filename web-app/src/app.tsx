import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="app">
          <header class="header">
            <a href="/" class="logo">📝 Notes</a>
            <nav class="nav">
              <a href="/notes">All Notes</a>
              <a href="/daily">Daily</a>
              <a href="/tags">Tags</a>
              <a href="/search">Search</a>
            </nav>
          </header>
          <main class="main">
            <Suspense fallback={<div class="loading">Loading...</div>}>
              {props.children}
            </Suspense>
          </main>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
