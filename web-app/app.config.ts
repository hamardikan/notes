import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "static",
  },
  vite: {
    resolve: {
      alias: {
        "~": "/src",
      },
    },
  },
  nitro: {
    compatibilityDate: "2024-04-03",
  },
});
