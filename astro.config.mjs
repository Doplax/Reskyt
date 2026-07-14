// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.reskyt.app',
  // Rutas del sitemap oficial cuyo contenido duplica otras páginas.
  // Las redirecciones no pasan por el fallback i18n, así que se declaran
  // también con el prefijo de cada idioma.
  redirects: Object.fromEntries(
    ['', '/ca', '/en', '/it', '/nl'].flatMap((prefix) => [
      [`${prefix}/blog`, `${prefix}/noticias-ecommerce-app`],
      [`${prefix}/partners-plataforma-creacion-apps-agencias-ecommerce`, `${prefix}/partners`],
      [
        `${prefix}/agencia-desarrollo-apps/agencia-creacion-y-diseno-aplicaciones-moviles-ecommerce`,
        `${prefix}/agencia-desarrollo-apps/nosotros-v2`,
      ],
    ])
  ),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en', 'it', 'nl'],
    // Las páginas sin traducir se sirven también bajo /<locale>/ con el
    // contenido castellano (rewrite), manteniendo el chrome en el idioma.
    fallback: {
      ca: 'es',
      en: 'es',
      it: 'es',
      nl: 'es',
    },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite',
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
