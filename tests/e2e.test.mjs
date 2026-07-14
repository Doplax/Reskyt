// Suite E2E: rutas por HTTP y comportamiento con Puppeteer contra el build de
// producción (astro preview). Cada test de navegador usa un contexto incógnito
// propio para que la persistencia de idioma no contamine al resto.
// Ejecutar con: npm test  (o npm run test:e2e si ya existe dist/)
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import puppeteer from 'puppeteer';

const PORT = 4399;
const BASE = `http://localhost:${PORT}`;

let server;
let browser;

async function waitForServer(url, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 400));
  }
  throw new Error(`El servidor no respondió en ${url}`);
}

/** Página en contexto incógnito propio (localStorage limpio). */
async function newPage(viewport = { width: 1440, height: 900 }) {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  await page.setViewport(viewport);
  return { context, page };
}

before(async () => {
  server = spawn(process.execPath, ['node_modules/astro/astro.js', 'preview', '--port', String(PORT)], {
    stdio: 'ignore',
  });
  await waitForServer(BASE);
  browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
});

after(async () => {
  await browser?.close();
  server?.kill();
});

// ------------------------------------------- rutas clave (HTTP puro, sin JS)

const routes = [
  ['/', 'Desarrollo de app móvil sin código'],
  ['/funcionalidades', 'Funcionalidades'],
  ['/precios', 'Precios'],
  ['/casos-de-exito-app', 'Casos de éxito'],
  ['/casos-de-exito/bata', 'Bata'],
  ['/noticias-ecommerce-app', 'Noticias'],
  ['/noticias-ecommerce-app/pagina/2', 'página 2'],
  ['/roi-calculator', 'ROI'],
  ['/solicitar-una-demo', 'demo'],
  ['/contacta', 'Contacta'],
  ['/descubre-reskyt', 'UWT'],
  ['/partners', 'Partners'],
  ['/agencia-desarrollo-apps/nosotros-v2', 'agencias'],
  ['/legal/aviso-legal', 'Aviso'],
  ['/gracias-por-contactar', 'Gracias'],
  ['/en/', 'no-code'],
  ['/en/precios', 'Precios'],
  ['/ca/funcionalidades', 'Funcionalidades'],
];

for (const [path, titlePart] of routes) {
  test(`la ruta ${path} responde y su título contiene "${titlePart}"`, async () => {
    const res = await fetch(BASE + path);
    assert.equal(res.status, 200, `status de ${path}`);
    const html = await res.text();
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    assert.ok(
      title.toLowerCase().includes(titlePart.toLowerCase()),
      `título de ${path}: "${title}" no contiene "${titlePart}"`
    );
  });
}

// ------------------------------------------------------- consola sin errores

test('la home carga sin errores de consola ni peticiones locales fallidas', async () => {
  const { context, page } = await newPage();
  try {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('requestfailed', (req) => {
      if (req.url().startsWith(BASE)) errors.push(`request failed: ${req.url()}`);
    });
    await page.goto(BASE + '/', { waitUntil: 'networkidle2' });
    assert.deepEqual(errors, []);
  } finally {
    await context.close();
  }
});

// -------------------------------------------------- contador "Nuestros números"

test('el contador de "Nuestros números" anima hasta +1000', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/', { waitUntil: 'networkidle2' });
    await page.evaluate(() => {
      document.querySelector('.stats-scene')?.scrollIntoView();
    });
    await page.waitForFunction(
      () => document.querySelector('.stat-value')?.textContent === '+1000',
      { timeout: 5000 }
    );
  } finally {
    await context.close();
  }
});

// -------------------------------------------------------- chrome en inglés

test('/en/precios sirve el chrome en inglés (fallback rewrite)', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/en/precios', { waitUntil: 'domcontentloaded' });
    const lang = await page.$eval('html', (el) => el.lang);
    assert.equal(lang, 'en');
    const nav = await page.$$eval('.nav-link', (els) => els.map((el) => el.textContent?.trim()));
    assert.ok(nav.includes('Pricing'), `nav: ${nav.join(', ')}`);
  } finally {
    await context.close();
  }
});

// ------------------------------------------------- persistencia de idioma

test('elegir EN persiste: /precios redirige a /en/precios y la portada a /en/', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });

    await page.click('#lang-toggle');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.click('.lang-option[data-locale="en"]'),
    ]);
    assert.equal(new URL(page.url()).pathname, '/en/');

    await page.goto(BASE + '/precios', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => location.pathname === '/en/precios', { timeout: 5000 });

    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => location.pathname === '/en/', { timeout: 5000 });

    // elegir ES desactiva la redirección
    await page.click('#lang-toggle');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.click('.lang-option[data-locale="es"]'),
    ]);
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 600));
    assert.equal(new URL(page.url()).pathname, '/');
  } finally {
    await context.close();
  }
});

// ------------------------------------------------------ paginación del blog

test('la paginación del blog navega a la página 2', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/noticias-ecommerce-app', { waitUntil: 'domcontentloaded' });
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.click('.pagination a.page-item'),
    ]);
    assert.equal(new URL(page.url()).pathname, '/noticias-ecommerce-app/pagina/2');
    const posts = await page.$$eval('.post', (els) => els.length);
    assert.ok(posts > 0, 'la página 2 muestra posts');
  } finally {
    await context.close();
  }
});

// ---------------------------------------------------- formulario de demo

test('el formulario de demo valida y muestra la confirmación', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/solicitar-una-demo', { waitUntil: 'domcontentloaded' });

    await page.click('.form-submit');
    const errorVisible = await page.$eval('#form-error', (el) => !el.hidden);
    assert.ok(errorVisible, 'el envío vacío muestra el error');

    await page.type('#nombre', 'Ana García');
    await page.type('#empresa', 'Mi Tienda SL');
    await page.type('#email', 'ana@mitienda.com');
    await page.type('#url', 'https://www.mitienda.com');
    // clic en la casilla, no en la etiqueta (su centro cae sobre el enlace de términos)
    await page.click('.form-check-box');
    await page.click('.form-submit');

    await page.waitForSelector('#demo-success:not([hidden])', { timeout: 3000 });
    const formHidden = await page.$eval('#demo-form', (el) => getComputedStyle(el).display === 'none');
    assert.ok(formHidden, 'el formulario se oculta tras el envío');
  } finally {
    await context.close();
  }
});

// ------------------------------------------------ regresión: marquee de tech

test('el texto de las tarjetas del marquee de tecnologías no desborda', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/funcionalidades', { waitUntil: 'domcontentloaded' });
    const overflows = await page.$$eval('.tech-card', (cards) =>
      cards.filter((card) => {
        const c = card.getBoundingClientRect();
        const p = card.querySelector('p')?.getBoundingClientRect();
        return p && p.right > c.right + 1;
      }).length
    );
    assert.equal(overflows, 0);
  } finally {
    await context.close();
  }
});

// ------------------------------------------------------- calculadora ROI

test('la calculadora ROI pinta sus dos gráficas', async () => {
  const { context, page } = await newPage();
  try {
    await page.goto(BASE + '/roi-calculator', { waitUntil: 'networkidle2' });
    await page.waitForFunction(
      () => {
        const canvases = document.querySelectorAll('canvas');
        return canvases.length >= 2 && [...canvases].every((c) => c.width > 0);
      },
      { timeout: 8000 }
    );
  } finally {
    await context.close();
  }
});

// ------------------------------------------- sin scroll horizontal en móvil

test('las páginas clave no tienen scroll horizontal a 390px', async () => {
  const { context, page } = await newPage({ width: 390, height: 844 });
  try {
    for (const path of ['/', '/funcionalidades', '/casos-de-exito-app', '/solicitar-una-demo']) {
      await page.goto(BASE + path, { waitUntil: 'domcontentloaded' });
      const { scrollWidth, viewport } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
      }));
      assert.ok(scrollWidth <= viewport, `${path}: scrollWidth ${scrollWidth} > viewport ${viewport}`);
    }
  } finally {
    await context.close();
  }
});
