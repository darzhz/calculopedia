// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/lib/site';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    svelte(),
    sitemap({
      filter: (page) => !page.includes('/embed/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
