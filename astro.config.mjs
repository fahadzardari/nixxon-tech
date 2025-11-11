// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    preview: {
      // allow any host (less secure; OK for quick preview)
      allowedHosts: true,
    },
  },
  site: "https://nixxonaustralia.com",
  output: "static",
  integrations: [sitemap()],
  devToolbar: {
    enabled: true,
  },
});