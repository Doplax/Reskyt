// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.reskyt.app',
  // Rutas del sitemap oficial cuyo contenido duplica otras páginas
  redirects: {
    '/blog': '/noticias-ecommerce-app',
    '/partners-plataforma-creacion-apps-agencias-ecommerce': '/partners',
    '/agencia-desarrollo-apps/agencia-creacion-y-diseno-aplicaciones-moviles-ecommerce':
      '/agencia-desarrollo-apps/nosotros-v2',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en', 'it', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // El login del panel no debe aparecer en el sitemap.
      filter: (page) => !page.includes('/admin/'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', ca: 'ca', en: 'en', it: 'it', nl: 'nl' },
      },
    }),
  ],
});
