// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.reskyt.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en', 'it', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
