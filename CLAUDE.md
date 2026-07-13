# Reskyt (rediseño)

Este proyecto es un **rediseño de https://www.reskyt.app/** — la web de Reskyt, plataforma no-code para convertir un eCommerce en app nativa. Al replicar o rediseñar secciones, la web original es la referencia de contenido y estructura.

## Stack

- Astro (estático), sin framework de UI. Componentes `.astro` con CSS scoped en el propio archivo.
- Tipografías: Bricolage Grotesque (títulos) + Inter (texto), cargadas desde Google Fonts en `src/layouts/Layout.astro`.
- Variables de diseño en `src/styles/global.css` (`--color-red: #d51521`, etc.).

## Comandos

- `npm run dev` — servidor de desarrollo (http://localhost:4321)
- `npm run build` — build de producción (`dist/`)
- `npm run preview` — sirve el build de producción

## Estructura

- `src/pages/` — páginas (`index`, `funcionalidades`, `precios`, `casos-de-exito-app`, `noticias-ecommerce-app` (blog), `roi-calculator`, `admin/login`)
- `src/components/` — secciones de la web (Header, Hero, Appselling, Stats, CtaSection, Footer…)
- `public/images/` — logos de marcas y assets copiados de la web oficial, organizados por sección (`brands/`, `blog/`, `cases/`, `tech/`, `admin/`)

Los ficheros `index.html`, `main.js` y `style.css` de la raíz son un prototipo antiguo anterior a Astro y no forman parte del sitio.

## i18n

Idiomas: **es** (por defecto, sin prefijo de URL), **ca**, **en**, **it**, **nl** — configurados en `astro.config.mjs`.

- Los textos traducibles viven en diccionarios por idioma en `src/i18n/index.ts` (tipo `Dict` derivado del castellano; TypeScript avisa si falta una clave). Los componentes los leen con `getDict(Astro.currentLocale)`.
- Las portadas traducidas están en `src/pages/<locale>/index.astro` (reutilizan los mismos componentes; el idioma lo resuelve `Astro.currentLocale` por la ruta).
- El selector de idioma está en el Header. `localizePath()` en `src/i18n/index.ts` decide a dónde lleva cada idioma: si la página no está traducida aún, lleva a la portada de ese idioma. Al traducir una página nueva, añadir su ruta a `TRANSLATED_PATHS`.
- El resto de páginas (precios, funcionalidades, casos de éxito, blog) todavía solo existen en castellano.
