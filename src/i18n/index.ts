export const DEFAULT_LOCALE = 'es';
export const LOCALES = ['es', 'ca', 'en', 'it', 'nl'] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** Quita el prefijo de idioma de un pathname ('/ca/precios' → '/precios'). */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (match && isLocale(match[1])) return match[2] || '/';
  return pathname;
}

/**
 * Devuelve la URL de `pathname` en el idioma `locale`. Todas las rutas existen
 * en todos los idiomas gracias al fallback con rewrite de Astro (las páginas
 * sin traducir sirven el contenido castellano con el chrome en el idioma).
 */
export function localizePath(pathname: string, locale: Locale): string {
  const path = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return path;
  return `/${locale}${path === '/' ? '/' : path}`;
}

/** Alias de localizePath para enlaces de navegación. */
export function localizeHref(href: string, locale: Locale): string {
  return localizePath(href, locale);
}

/** Con el fallback por rewrite, toda ruta tiene versión en todos los idiomas. */
export function hasTranslation(_pathname: string): boolean {
  return true;
}

const es = {
  meta: {
    title: 'Desarrollo de app móvil sin código para tu eCommerce | Reskyt',
    description:
      'Plataforma para transformar tu tienda online en app nativa sin programar, mejorando la conversión y fidelización de tus clientes',
  },
  nav: {
    funcionalidades: 'Funcionalidades',
    casosDeExito: 'Casos de éxito',
    precios: 'Precios',
    blog: 'Blog',
    login: 'Login',
    contacta: 'Contacta',
    ariaMain: 'Navegación principal',
    ariaLang: 'Seleccionar idioma',
  },
  hero: {
    titleStart: 'Lanza tu App en solo ',
    titleHighlight: '4 semanas',
    subtitle:
      'Multiplica las ventas de tu eCommerce con una app nativa 100% personalizable, conectada y lista para convertirse.',
    demo: 'Pide tu demo',
    roi: 'Calcula tu ROI',
    brandsAria: 'Marcas que confían en Reskyt',
  },
  appselling: {
    titleStart: 'Descubre el ',
    titleHighlight: 'Appselling',
    more: 'Descubre más',
    intro1:
      'Una fórmula ágil, rentable y eficaz para aumentar tu tasa de conversión, ticket medio y recurrencia de compra.',
    intro2:
      'Aprovecha todo el poder del App Commerce, sin complicaciones técnicas, y gracias a tecnología UWT de Reskyt.',
    cards: [
      {
        title: 'Sin extensos plazos de lanzamiento',
        text: 'Tu App, totalmente operativa, lista en menos de cuatro semanas.',
      },
      {
        title: 'Sin elevados costes de desarrollo y mantenimiento',
        text: 'Reduce los costes de desarrollo en un 80%. Disfruta de un modelo de suscripción con actualizaciones incluidas y sin gastos de mantenimiento.',
      },
      {
        title: 'Sin escalabilidad limitada, ni rigidez operativa',
        text: 'Activa actualizaciones y personalizaciones, sin fricciones ni conocimientos técnicos.',
      },
      {
        title: 'Sin constantes sincronizaciones',
        text: 'Tu app siempre conectada con tu eCommerce y actualizada en tiempo real.',
      },
      {
        title: 'Sin depender del equipo de IT',
        text: 'Convierte tu app en un canal de ventas autogestionado sin necesidad de intervención técnica.',
      },
      {
        title: 'Sin necesitar recursos especializados',
        text: 'Tu App siempre optimizada para iOS y Android sin necesidad de equipos técnicos.',
      },
    ],
  },
  stats: {
    titleTop: 'Nuestros,',
    titleBottom: 'números',
    phoneAlt: 'Móvil con las apps de clientes creadas con Reskyt',
    appsCreadas: 'Apps creadas',
    push: 'Notificaciones Push',
    descargas: 'Descargas',
    visitas: 'Visitas diarias',
    conversion: 'Conversión vs. Web Mobile',
    roi: 'Positivo en menos de 6 meses',
  },
  testimonials: {
    titleStart: 'Las ',
    titleHighlight: 'mejores marcas',
    titleEnd: ' ya confían en nosotros',
  },
  cta: {
    titleStart: '¿Listo para lanzar la app de tu ',
    titleHighlight: 'eCommerce',
    titleEnd: '?',
    text: 'Pide una demo y descubre cómo transformar tu tienda online en una app nativa en menos de cuatro semanas.',
  },
  footer: {
    plataforma: 'Plataforma',
    empresa: 'Empresa',
    ayuda: 'Ayuda',
    precio: 'Precio',
    roiCalculator: 'Calculadora ROI',
    sobreNosotros: 'Sobre nosotros',
    contacto: 'Contacto',
    collab: 'con colaboración de',
    condiciones: 'Condiciones Generales',
    cookies: 'Política de Cookies',
    avisoLegal: 'Aviso Legal',
  },
};

export type Dict = typeof es;

const ca: Dict = {
  meta: {
    title: "Desenvolupament d'app mòbil sense codi per al teu eCommerce | Reskyt",
    description:
      'Plataforma per transformar la teva botiga online en una app nativa sense programar, millorant la conversió i la fidelització dels teus clients',
  },
  nav: {
    funcionalidades: 'Funcionalitats',
    casosDeExito: "Casos d'èxit",
    precios: 'Preus',
    blog: 'Blog',
    login: 'Login',
    contacta: 'Contacta',
    ariaMain: 'Navegació principal',
    ariaLang: 'Seleccionar idioma',
  },
  hero: {
    titleStart: 'Llança la teva App en només ',
    titleHighlight: '4 setmanes',
    subtitle:
      'Multiplica les vendes del teu eCommerce amb una app nativa 100% personalitzable, connectada i llesta per convertir.',
    demo: 'Demana la teva demo',
    roi: 'Calcula el teu ROI',
    brandsAria: 'Marques que confien en Reskyt',
  },
  appselling: {
    titleStart: "Descobreix l'",
    titleHighlight: 'Appselling',
    more: 'Descobreix més',
    intro1:
      'Una fórmula àgil, rendible i eficaç per augmentar la teva taxa de conversió, tiquet mitjà i recurrència de compra.',
    intro2:
      "Aprofita tot el poder de l'App Commerce, sense complicacions tècniques, gràcies a la tecnologia UWT de Reskyt.",
    cards: [
      {
        title: 'Sense llargs terminis de llançament',
        text: 'La teva App, totalment operativa, llesta en menys de quatre setmanes.',
      },
      {
        title: 'Sense costos elevats de desenvolupament i manteniment',
        text: "Redueix els costos de desenvolupament un 80%. Gaudeix d'un model de subscripció amb actualitzacions incloses i sense despeses de manteniment.",
      },
      {
        title: 'Sense escalabilitat limitada ni rigidesa operativa',
        text: 'Activa actualitzacions i personalitzacions, sense friccions ni coneixements tècnics.',
      },
      {
        title: 'Sense sincronitzacions constants',
        text: 'La teva app sempre connectada amb el teu eCommerce i actualitzada en temps real.',
      },
      {
        title: "Sense dependre de l'equip d'IT",
        text: "Converteix la teva app en un canal de vendes autogestionat sense necessitat d'intervenció tècnica.",
      },
      {
        title: 'Sense necessitar recursos especialitzats',
        text: "La teva App sempre optimitzada per a iOS i Android sense necessitat d'equips tècnics.",
      },
    ],
  },
  stats: {
    titleTop: 'Els nostres,',
    titleBottom: 'números',
    phoneAlt: 'Mòbil amb les apps de clients creades amb Reskyt',
    appsCreadas: 'Apps creades',
    push: 'Notificacions Push',
    descargas: 'Descàrregues',
    visitas: 'Visites diàries',
    conversion: 'Conversió vs. Web Mobile',
    roi: 'Positiu en menys de 6 mesos',
  },
  testimonials: {
    titleStart: 'Les ',
    titleHighlight: 'millors marques',
    titleEnd: ' ja confien en nosaltres',
  },
  cta: {
    titleStart: "A punt per llançar l'app del teu ",
    titleHighlight: 'eCommerce',
    titleEnd: '?',
    text: 'Demana una demo i descobreix com transformar la teva botiga online en una app nativa en menys de quatre setmanes.',
  },
  footer: {
    plataforma: 'Plataforma',
    empresa: 'Empresa',
    ayuda: 'Ajuda',
    precio: 'Preu',
    roiCalculator: 'Calculadora ROI',
    sobreNosotros: 'Sobre nosaltres',
    contacto: 'Contacte',
    collab: 'amb la col·laboració de',
    condiciones: 'Condicions Generals',
    cookies: 'Política de Cookies',
    avisoLegal: 'Avís Legal',
  },
};

const en: Dict = {
  meta: {
    title: 'No-code mobile app development for your eCommerce | Reskyt',
    description:
      'Platform to turn your online store into a native app without coding, improving conversion and customer loyalty',
  },
  nav: {
    funcionalidades: 'Features',
    casosDeExito: 'Success stories',
    precios: 'Pricing',
    blog: 'Blog',
    login: 'Login',
    contacta: 'Contact us',
    ariaMain: 'Main navigation',
    ariaLang: 'Select language',
  },
  hero: {
    titleStart: 'Launch your App in just ',
    titleHighlight: '4 weeks',
    subtitle:
      'Multiply your eCommerce sales with a 100% customizable native app, connected and ready to convert.',
    demo: 'Request your demo',
    roi: 'Calculate your ROI',
    brandsAria: 'Brands that trust Reskyt',
  },
  appselling: {
    titleStart: 'Discover ',
    titleHighlight: 'Appselling',
    more: 'Learn more',
    intro1:
      'An agile, profitable and effective formula to increase your conversion rate, average order value and repeat purchases.',
    intro2:
      "Harness the full power of App Commerce, without technical complications, thanks to Reskyt's UWT technology.",
    cards: [
      {
        title: 'No long launch timelines',
        text: 'Your App, fully operational, ready in less than four weeks.',
      },
      {
        title: 'No high development and maintenance costs',
        text: 'Cut development costs by 80%. Enjoy a subscription model with updates included and no maintenance fees.',
      },
      {
        title: 'No limited scalability or operational rigidity',
        text: 'Roll out updates and customizations, without friction or technical knowledge.',
      },
      {
        title: 'No constant syncing',
        text: 'Your app always connected to your eCommerce and updated in real time.',
      },
      {
        title: 'No dependence on your IT team',
        text: 'Turn your app into a self-managed sales channel with no technical intervention required.',
      },
      {
        title: 'No specialized resources needed',
        text: 'Your App always optimized for iOS and Android without technical teams.',
      },
    ],
  },
  stats: {
    titleTop: 'Our',
    titleBottom: 'numbers',
    phoneAlt: 'Phone showing client apps built with Reskyt',
    appsCreadas: 'Apps created',
    push: 'Push notifications',
    descargas: 'Downloads',
    visitas: 'Daily visits',
    conversion: 'Conversion vs. mobile web',
    roi: 'Positive in under 6 months',
  },
  testimonials: {
    titleStart: 'The ',
    titleHighlight: 'best brands',
    titleEnd: ' already trust us',
  },
  cta: {
    titleStart: 'Ready to launch your ',
    titleHighlight: 'eCommerce',
    titleEnd: ' app?',
    text: 'Request a demo and discover how to turn your online store into a native app in less than four weeks.',
  },
  footer: {
    plataforma: 'Platform',
    empresa: 'Company',
    ayuda: 'Help',
    precio: 'Pricing',
    roiCalculator: 'ROI calculator',
    sobreNosotros: 'About us',
    contacto: 'Contact',
    collab: 'in collaboration with',
    condiciones: 'Terms and Conditions',
    cookies: 'Cookie Policy',
    avisoLegal: 'Legal Notice',
  },
};

const it: Dict = {
  meta: {
    title: 'Sviluppo di app mobile senza codice per il tuo eCommerce | Reskyt',
    description:
      "Piattaforma per trasformare il tuo negozio online in un'app nativa senza programmare, migliorando la conversione e la fidelizzazione dei tuoi clienti",
  },
  nav: {
    funcionalidades: 'Funzionalità',
    casosDeExito: 'Casi di successo',
    precios: 'Prezzi',
    blog: 'Blog',
    login: 'Login',
    contacta: 'Contattaci',
    ariaMain: 'Navigazione principale',
    ariaLang: 'Seleziona lingua',
  },
  hero: {
    titleStart: 'Lancia la tua App in sole ',
    titleHighlight: '4 settimane',
    subtitle:
      "Moltiplica le vendite del tuo eCommerce con un'app nativa 100% personalizzabile, connessa e pronta a convertire.",
    demo: 'Richiedi la tua demo',
    roi: 'Calcola il tuo ROI',
    brandsAria: 'Brand che si fidano di Reskyt',
  },
  appselling: {
    titleStart: "Scopri l'",
    titleHighlight: 'Appselling',
    more: 'Scopri di più',
    intro1:
      "Una formula agile, redditizia ed efficace per aumentare il tuo tasso di conversione, lo scontrino medio e la ricorrenza d'acquisto.",
    intro2:
      "Sfrutta tutta la potenza dell'App Commerce, senza complicazioni tecniche, grazie alla tecnologia UWT di Reskyt.",
    cards: [
      {
        title: 'Niente lunghi tempi di lancio',
        text: 'La tua App, totalmente operativa, pronta in meno di quattro settimane.',
      },
      {
        title: 'Niente costi elevati di sviluppo e manutenzione',
        text: "Riduci i costi di sviluppo dell'80%. Goditi un modello in abbonamento con aggiornamenti inclusi e senza spese di manutenzione.",
      },
      {
        title: 'Niente scalabilità limitata né rigidità operativa',
        text: 'Attiva aggiornamenti e personalizzazioni, senza attriti né conoscenze tecniche.',
      },
      {
        title: 'Niente sincronizzazioni continue',
        text: 'La tua app sempre connessa al tuo eCommerce e aggiornata in tempo reale.',
      },
      {
        title: 'Niente dipendenza dal team IT',
        text: 'Trasforma la tua app in un canale di vendita autogestito senza bisogno di interventi tecnici.',
      },
      {
        title: 'Niente risorse specializzate',
        text: 'La tua App sempre ottimizzata per iOS e Android senza bisogno di team tecnici.',
      },
    ],
  },
  stats: {
    titleTop: 'I nostri,',
    titleBottom: 'numeri',
    phoneAlt: 'Smartphone con le app dei clienti create con Reskyt',
    appsCreadas: 'App create',
    push: 'Notifiche push',
    descargas: 'Download',
    visitas: 'Visite giornaliere',
    conversion: 'Conversione vs. web mobile',
    roi: 'Positivo in meno di 6 mesi',
  },
  testimonials: {
    titleStart: 'I ',
    titleHighlight: 'migliori brand',
    titleEnd: ' si fidano già di noi',
  },
  cta: {
    titleStart: "Pronto a lanciare l'app del tuo ",
    titleHighlight: 'eCommerce',
    titleEnd: '?',
    text: "Richiedi una demo e scopri come trasformare il tuo negozio online in un'app nativa in meno di quattro settimane.",
  },
  footer: {
    plataforma: 'Piattaforma',
    empresa: 'Azienda',
    ayuda: 'Aiuto',
    precio: 'Prezzo',
    roiCalculator: 'Calcolatore ROI',
    sobreNosotros: 'Chi siamo',
    contacto: 'Contatto',
    collab: 'in collaborazione con',
    condiciones: 'Condizioni Generali',
    cookies: 'Cookie Policy',
    avisoLegal: 'Note Legali',
  },
};

const nl: Dict = {
  meta: {
    title: 'No-code mobiele app-ontwikkeling voor je eCommerce | Reskyt',
    description:
      'Platform om je webshop zonder programmeren om te zetten in een native app, met betere conversie en klantloyaliteit',
  },
  nav: {
    funcionalidades: 'Functionaliteiten',
    casosDeExito: 'Succesverhalen',
    precios: 'Prijzen',
    blog: 'Blog',
    login: 'Login',
    contacta: 'Contact',
    ariaMain: 'Hoofdnavigatie',
    ariaLang: 'Taal selecteren',
  },
  hero: {
    titleStart: 'Lanceer je App in slechts ',
    titleHighlight: '4 weken',
    subtitle:
      'Vermenigvuldig de verkoop van je eCommerce met een 100% aanpasbare native app, verbonden en klaar om te converteren.',
    demo: 'Vraag je demo aan',
    roi: 'Bereken je ROI',
    brandsAria: 'Merken die op Reskyt vertrouwen',
  },
  appselling: {
    titleStart: 'Ontdek ',
    titleHighlight: 'Appselling',
    more: 'Ontdek meer',
    intro1:
      'Een wendbare, rendabele en effectieve formule om je conversieratio, gemiddelde bestelwaarde en herhaalaankopen te verhogen.',
    intro2:
      'Benut de volledige kracht van App Commerce, zonder technische complicaties, dankzij de UWT-technologie van Reskyt.',
    cards: [
      {
        title: 'Geen lange lanceringstermijnen',
        text: 'Je App, volledig operationeel, klaar in minder dan vier weken.',
      },
      {
        title: 'Geen hoge ontwikkel- en onderhoudskosten',
        text: 'Verlaag de ontwikkelkosten met 80%. Profiteer van een abonnementsmodel met inbegrepen updates en zonder onderhoudskosten.',
      },
      {
        title: 'Geen beperkte schaalbaarheid of operationele starheid',
        text: 'Activeer updates en personalisaties, zonder frictie of technische kennis.',
      },
      {
        title: 'Geen voortdurende synchronisaties',
        text: 'Je app altijd verbonden met je eCommerce en in realtime bijgewerkt.',
      },
      {
        title: 'Geen afhankelijkheid van het IT-team',
        text: 'Maak van je app een zelfbeheerd verkoopkanaal zonder technische tussenkomst.',
      },
      {
        title: 'Geen gespecialiseerde resources nodig',
        text: 'Je App altijd geoptimaliseerd voor iOS en Android zonder technische teams.',
      },
    ],
  },
  stats: {
    titleTop: 'Onze',
    titleBottom: 'cijfers',
    phoneAlt: 'Telefoon met de klantapps gemaakt met Reskyt',
    appsCreadas: 'Apps gemaakt',
    push: 'Pushmeldingen',
    descargas: 'Downloads',
    visitas: 'Dagelijkse bezoeken',
    conversion: 'Conversie vs. mobiel web',
    roi: 'Positief binnen 6 maanden',
  },
  testimonials: {
    titleStart: 'De ',
    titleHighlight: 'beste merken',
    titleEnd: ' vertrouwen al op ons',
  },
  cta: {
    titleStart: 'Klaar om de app van je ',
    titleHighlight: 'eCommerce',
    titleEnd: ' te lanceren?',
    text: 'Vraag een demo aan en ontdek hoe je je webshop in minder dan vier weken omzet in een native app.',
  },
  footer: {
    plataforma: 'Platform',
    empresa: 'Bedrijf',
    ayuda: 'Hulp',
    precio: 'Prijs',
    roiCalculator: 'ROI-calculator',
    sobreNosotros: 'Over ons',
    contacto: 'Contact',
    collab: 'in samenwerking met',
    condiciones: 'Algemene Voorwaarden',
    cookies: 'Cookiebeleid',
    avisoLegal: 'Juridische kennisgeving',
  },
};

const dictionaries: Record<Locale, Dict> = { es, ca, en, it, nl };

/** Diccionario del idioma actual, con fallback al castellano. */
export function getDict(locale: string | undefined): Dict {
  return isLocale(locale) ? dictionaries[locale] : dictionaries[DEFAULT_LOCALE];
}
