// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), react()]
  },
  site: 'https://nixxontech.com',
  output: 'static',
  integrations: [react(), sitemap()],
  devToolbar: {
    enabled: false
  }
});