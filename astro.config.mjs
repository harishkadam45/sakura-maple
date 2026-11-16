import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.sakuramaple.com',
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
