// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    preview: {
      // allow the production hostname for vite preview
      allowedHosts: ["nixxonaustralia.com", "localhost", "www.nixxonaustralia.com"],
      // alternatively to allow any host (less secure): allowedHosts: "all"
    },
  },
  site: "https://nixxonaustralia.com",
  output: "static",
  integrations: [sitemap()],
  devToolbar: {
    enabled: true,
  },
});