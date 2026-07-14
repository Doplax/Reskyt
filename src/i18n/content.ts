// Traducciones del CONTENIDO de las páginas principales (el chrome vive en
// index.ts). Cada bloque exporta un objeto por idioma; las páginas eligen con
// contentFor(Astro.currentLocale).
import { DEFAULT_LOCALE, isLocale, type Locale } from './index';

export function contentFor<T>(map: Record<Locale, T>, locale: string | undefined): T {
  return map[isLocale(locale) ? locale : DEFAULT_LOCALE];
}

interface Card {
  title: string;
  text: string;
}

// ------------------------------------------------------------ funcionalidades

export interface FuncionalidadesContent {
  heroStart: string;
  heroHighlight: string;
  heroEnd: string;
  subtitle: string;
  convStart: string;
  convHighlight: string;
  convEnd: string;
  pushStart: string;
  pushHighlight: string;
  pushEnd: string;
  conversionCards: Card[];
  pushCards: Card[];
}

export const funcionalidadesContent: Record<Locale, FuncionalidadesContent> = {
  es: {
    heroStart: 'La ',
    heroHighlight: 'solución No-Code',
    heroEnd: ' diseñada para el crecimiento',
    subtitle:
      'Todas las herramientas al alcance de tu mano para crear una app intuitiva que hará disparar las ventas de tu eCommerce',
    convStart: 'Soluciones para ',
    convHighlight: 'incrementar la conversión',
    convEnd: ' de tu tienda',
    pushStart: 'Segmentación avanzada para tus ',
    pushHighlight: 'notificaciones push',
    pushEnd: '',
    conversionCards: [
      { title: 'Checkout en un click', text: 'Integración con cualquiera de los checkouts de última generación: Paypal, Amazon Pay, Apple Pay, Klarna, Aplazame...' },
      { title: 'Inicio de sesión social', text: 'Incrementa las conversiones en ventas gracias a la rapidez de inicio de sesión con Facebook, Google, Amazon o Apple.' },
      { title: 'Buscadores avanzados', text: 'Buscadores avanzados como Doofinder, APISearch, Empathy, directamente integrados dentro de la app' },
      { title: 'Chatbots', text: 'Ten el mismo contacto con el cliente utilizando el mismo chatbot que tienes en el eCommerce, ya que estará dentro de la app' },
      { title: 'Lector de QR/EAN nativo en app', text: 'Tus clientes podrán escanear tus productos desde cualquier lugar, ¡acelerando así el proceso de compra!' },
      { title: 'Promociones exclusivas para la app', text: 'El eCommerce con un simple desarrollo podrá generar promociones exclusivas para la app' },
      { title: 'Posicionamiento de Marca', text: 'Fortalece tu marca. Con una App vas a generar más impacto a tus clientes. Mayor comunicación, más feeling y más ventas.' },
      { title: 'Google Analytics/GA4', text: 'Todas las visitas a la app, estarán en tu Google Analytics, ya que automáticamente Google Analytics detectará un nuevo medio por el cual entran visitas.' },
    ],
    pushCards: [
      { title: 'API Push', text: 'Vincula nuestra API para el envío de notificaciones push y personaliza las notificaciones para tus usuarios, información logística el envío de paquetes, descuentos en función de los productos que el cliente compra, etc.' },
      { title: 'Carritos Abandonados', text: 'Notifica a tus usuarios cuando se dejen elementos en el carrito, para que continúen su compra, ofreciéndoles descuentos, promociones, etc.' },
      { title: 'Geolocalización', text: 'Envía notificaciones push delimitadas por una zona, mediante geolocalización procedente de las entradas en la app' },
      { title: 'Formulario de Segmentación', text: 'Genera un formulario in-app, para saber qué intereses tienen en tus productos, para poder aportarles información más importante a tus usuarios' },
      { title: 'País', text: 'Apps con múltiples países se benefician de poder segmentar las notificaciones en función del país de uso de la app' },
      { title: 'Aperturas', text: 'Envia una notificación push en función de que usuarios han abierto una notificación anterior' },
      { title: 'Bienvenida', text: 'Envía notificación push con un descuento a cada usuario, por descargarse la app' },
      { title: 'Dispositivo de pruebas', text: 'Prueba todas las notificaciones push antes de enviarlas, para asegurarte de que todo está correcto' },
    ],
  },
  ca: {
    heroStart: 'La ',
    heroHighlight: 'solució No-Code',
    heroEnd: ' dissenyada per al creixement',
    subtitle:
      "Totes les eines a l'abast de la teva mà per crear una app intuïtiva que farà disparar les vendes del teu eCommerce",
    convStart: 'Solucions per ',
    convHighlight: 'incrementar la conversió',
    convEnd: ' de la teva botiga',
    pushStart: 'Segmentació avançada per a les teves ',
    pushHighlight: 'notificacions push',
    pushEnd: '',
    conversionCards: [
      { title: 'Checkout en un clic', text: "Integració amb qualsevol dels checkouts d'última generació: Paypal, Amazon Pay, Apple Pay, Klarna, Aplazame..." },
      { title: 'Inici de sessió social', text: "Incrementa les conversions en vendes gràcies a la rapidesa d'inici de sessió amb Facebook, Google, Amazon o Apple." },
      { title: 'Cercadors avançats', text: "Cercadors avançats com Doofinder, APISearch, Empathy, directament integrats dins de l'app" },
      { title: 'Chatbots', text: "Tingues el mateix contacte amb el client utilitzant el mateix chatbot que tens a l'eCommerce, ja que estarà dins de l'app" },
      { title: "Lector de QR/EAN natiu a l'app", text: 'Els teus clients podran escanejar els teus productes des de qualsevol lloc, accelerant així el procés de compra!' },
      { title: "Promocions exclusives per a l'app", text: "L'eCommerce amb un simple desenvolupament podrà generar promocions exclusives per a l'app" },
      { title: 'Posicionament de Marca', text: 'Enforteix la teva marca. Amb una App generaràs més impacte als teus clients. Més comunicació, més feeling i més vendes.' },
      { title: 'Google Analytics/GA4', text: "Totes les visites a l'app estaran al teu Google Analytics, ja que automàticament Google Analytics detectarà un nou mitjà pel qual entren visites." },
    ],
    pushCards: [
      { title: 'API Push', text: "Vincula la nostra API per a l'enviament de notificacions push i personalitza les notificacions per als teus usuaris: informació logística de l'enviament de paquets, descomptes segons els productes que el client compra, etc." },
      { title: 'Carrets Abandonats', text: 'Notifica els teus usuaris quan deixin elements al carret, perquè continuïn la seva compra, oferint-los descomptes, promocions, etc.' },
      { title: 'Geolocalització', text: "Envia notificacions push delimitades per una zona, mitjançant geolocalització procedent de les entrades a l'app" },
      { title: 'Formulari de Segmentació', text: 'Genera un formulari in-app per saber quins interessos tenen en els teus productes i poder aportar informació més rellevant als teus usuaris' },
      { title: 'País', text: "Les apps amb múltiples països es beneficien de poder segmentar les notificacions segons el país d'ús de l'app" },
      { title: 'Obertures', text: "Envia una notificació push en funció de quins usuaris han obert una notificació anterior" },
      { title: 'Benvinguda', text: "Envia una notificació push amb un descompte a cada usuari per descarregar-se l'app" },
      { title: 'Dispositiu de proves', text: "Prova totes les notificacions push abans d'enviar-les, per assegurar-te que tot és correcte" },
    ],
  },
  en: {
    heroStart: 'The ',
    heroHighlight: 'No-Code solution',
    heroEnd: ' designed for growth',
    subtitle:
      'All the tools at your fingertips to create an intuitive app that will skyrocket your eCommerce sales',
    convStart: 'Solutions to ',
    convHighlight: 'boost your store’s conversion',
    convEnd: '',
    pushStart: 'Advanced segmentation for your ',
    pushHighlight: 'push notifications',
    pushEnd: '',
    conversionCards: [
      { title: 'One-click checkout', text: 'Integration with any of the latest-generation checkouts: Paypal, Amazon Pay, Apple Pay, Klarna, Aplazame...' },
      { title: 'Social login', text: 'Increase sales conversions thanks to fast sign-in with Facebook, Google, Amazon or Apple.' },
      { title: 'Advanced search engines', text: 'Advanced search engines such as Doofinder, APISearch or Empathy, directly integrated into the app' },
      { title: 'Chatbots', text: 'Keep the same contact with your customer using the same chatbot you have on your eCommerce, right inside the app' },
      { title: 'Native QR/EAN scanner in app', text: 'Your customers can scan your products from anywhere, speeding up the purchase process!' },
      { title: 'App-exclusive promotions', text: 'With a simple development, your eCommerce can create app-exclusive promotions' },
      { title: 'Brand positioning', text: 'Strengthen your brand. With an App you will make a bigger impact on your customers. More communication, more feeling and more sales.' },
      { title: 'Google Analytics/GA4', text: 'Every app visit will show up in your Google Analytics, which automatically detects a new source of traffic.' },
    ],
    pushCards: [
      { title: 'Push API', text: 'Connect our API to send push notifications and personalise them for your users: logistics updates on parcels, discounts based on the products each customer buys, and more.' },
      { title: 'Abandoned carts', text: 'Notify your users when they leave items in the cart so they complete their purchase, offering discounts, promotions, etc.' },
      { title: 'Geolocation', text: 'Send push notifications limited to an area, using geolocation from app sessions' },
      { title: 'Segmentation form', text: 'Create an in-app form to learn what interests your users, so you can send them more relevant information' },
      { title: 'Country', text: 'Multi-country apps benefit from segmenting notifications by the country where the app is used' },
      { title: 'Opens', text: 'Send a push notification based on which users opened a previous one' },
      { title: 'Welcome', text: 'Send a push notification with a discount to every user who downloads the app' },
      { title: 'Test device', text: 'Test every push notification before sending it, to make sure everything is right' },
    ],
  },
  it: {
    heroStart: 'La ',
    heroHighlight: 'soluzione No-Code',
    heroEnd: ' pensata per la crescita',
    subtitle:
      'Tutti gli strumenti a portata di mano per creare un’app intuitiva che farà decollare le vendite del tuo eCommerce',
    convStart: 'Soluzioni per ',
    convHighlight: 'aumentare la conversione',
    convEnd: ' del tuo negozio',
    pushStart: 'Segmentazione avanzata per le tue ',
    pushHighlight: 'notifiche push',
    pushEnd: '',
    conversionCards: [
      { title: 'Checkout in un clic', text: 'Integrazione con qualsiasi checkout di ultima generazione: Paypal, Amazon Pay, Apple Pay, Klarna, Aplazame...' },
      { title: 'Login social', text: 'Aumenta le conversioni grazie alla rapidità di accesso con Facebook, Google, Amazon o Apple.' },
      { title: 'Motori di ricerca avanzati', text: 'Motori di ricerca avanzati come Doofinder, APISearch, Empathy, integrati direttamente nell’app' },
      { title: 'Chatbot', text: 'Mantieni lo stesso contatto con il cliente usando lo stesso chatbot del tuo eCommerce, direttamente nell’app' },
      { title: 'Lettore QR/EAN nativo in app', text: 'I tuoi clienti potranno scansionare i tuoi prodotti ovunque, accelerando il processo di acquisto!' },
      { title: 'Promozioni esclusive per l’app', text: 'Con un semplice sviluppo, l’eCommerce può creare promozioni esclusive per l’app' },
      { title: 'Posizionamento del brand', text: 'Rafforza il tuo brand. Con un’App genererai più impatto sui tuoi clienti. Più comunicazione, più feeling e più vendite.' },
      { title: 'Google Analytics/GA4', text: 'Tutte le visite all’app saranno nel tuo Google Analytics, che rileva automaticamente una nuova sorgente di traffico.' },
    ],
    pushCards: [
      { title: 'API Push', text: 'Collega la nostra API per inviare notifiche push personalizzate: informazioni logistiche sulle spedizioni, sconti in base ai prodotti acquistati, ecc.' },
      { title: 'Carrelli abbandonati', text: 'Avvisa i tuoi utenti quando lasciano articoli nel carrello perché completino l’acquisto, offrendo sconti, promozioni, ecc.' },
      { title: 'Geolocalizzazione', text: 'Invia notifiche push delimitate a una zona, tramite la geolocalizzazione degli accessi all’app' },
      { title: 'Modulo di segmentazione', text: 'Genera un modulo in-app per conoscere gli interessi dei tuoi utenti e inviare informazioni più rilevanti' },
      { title: 'Paese', text: 'Le app multi-paese possono segmentare le notifiche in base al paese di utilizzo' },
      { title: 'Aperture', text: 'Invia una notifica push in base agli utenti che hanno aperto una notifica precedente' },
      { title: 'Benvenuto', text: 'Invia una notifica push con uno sconto a ogni utente che scarica l’app' },
      { title: 'Dispositivo di prova', text: 'Prova tutte le notifiche push prima di inviarle, per assicurarti che tutto sia corretto' },
    ],
  },
  nl: {
    heroStart: 'De ',
    heroHighlight: 'No-Code oplossing',
    heroEnd: ' ontworpen voor groei',
    subtitle:
      'Alle tools binnen handbereik om een intuïtieve app te maken die de verkoop van je eCommerce laat exploderen',
    convStart: 'Oplossingen om de ',
    convHighlight: 'conversie van je winkel te verhogen',
    convEnd: '',
    pushStart: 'Geavanceerde segmentatie voor je ',
    pushHighlight: 'pushmeldingen',
    pushEnd: '',
    conversionCards: [
      { title: 'Checkout met één klik', text: 'Integratie met elke checkout van de nieuwste generatie: Paypal, Amazon Pay, Apple Pay, Klarna, Aplazame...' },
      { title: 'Social login', text: 'Verhoog je conversies dankzij snel inloggen met Facebook, Google, Amazon of Apple.' },
      { title: 'Geavanceerde zoekmachines', text: 'Geavanceerde zoekmachines zoals Doofinder, APISearch en Empathy, direct geïntegreerd in de app' },
      { title: 'Chatbots', text: 'Houd hetzelfde contact met je klant via dezelfde chatbot als op je eCommerce, gewoon in de app' },
      { title: 'Native QR/EAN-scanner in de app', text: 'Je klanten kunnen je producten overal scannen, wat het aankoopproces versnelt!' },
      { title: 'App-exclusieve promoties', text: 'Met een eenvoudige ontwikkeling kan je eCommerce app-exclusieve promoties aanmaken' },
      { title: 'Merkpositionering', text: 'Versterk je merk. Met een app maak je meer impact op je klanten. Meer communicatie, meer feeling en meer verkoop.' },
      { title: 'Google Analytics/GA4', text: 'Elk appbezoek verschijnt in je Google Analytics, dat automatisch een nieuwe verkeersbron detecteert.' },
    ],
    pushCards: [
      { title: 'Push-API', text: 'Koppel onze API om pushmeldingen te versturen en te personaliseren: logistieke informatie over pakketten, kortingen op basis van gekochte producten, enz.' },
      { title: 'Verlaten winkelwagens', text: 'Waarschuw je gebruikers wanneer ze artikelen in de winkelwagen achterlaten, zodat ze hun aankoop afronden, met kortingen, promoties, enz.' },
      { title: 'Geolocatie', text: 'Verstuur pushmeldingen beperkt tot een gebied, via geolocatie van app-sessies' },
      { title: 'Segmentatieformulier', text: 'Maak een in-app formulier om de interesses van je gebruikers te kennen en relevantere informatie te sturen' },
      { title: 'Land', text: 'Apps met meerdere landen profiteren van meldingen gesegmenteerd per land van gebruik' },
      { title: 'Openingen', text: 'Verstuur een pushmelding op basis van welke gebruikers een eerdere melding hebben geopend' },
      { title: 'Welkom', text: 'Stuur elke gebruiker die de app downloadt een pushmelding met korting' },
      { title: 'Testapparaat', text: 'Test elke pushmelding vóór verzending, zodat alles klopt' },
    ],
  },
};

// ------------------------------------------------------------- casos de éxito

export interface CasosContent {
  title: string;
  subtitle: string;
  sectors: { bata: string; toys: string; galileo: string };
  mockups: string[];
  appsTitle: string;
}

export const casosContent: Record<Locale, CasosContent> = {
  es: {
    title: 'Casos de éxito en todos los sectores',
    subtitle:
      'La plataforma de creación de Aplicaciones móviles más utilizada por las tiendas online en España, Latam y Europa.',
    sectors: { bata: 'Moda', toys: 'Juguetes', galileo: 'Parafarmacia' },
    mockups: [
      'Página de Inicio personalizada por vertical del cliente',
      'Carrusel de productos destacados. Información del producto mediante escaneo de código de barras',
      'eCommerce marketplace integral, completamente sincronizado con las nuevas funcionalidades web',
      'Diseño totalmente personalizado, web a app eCommerce',
      'Catálogo personalizado de precios B2B. Lector inteligente de códigos EAN',
      'Tarjeta de Fidelización en la App del cliente',
      'Escaparate con galería de marcas destacadas. Buscador inteligente sincronizado y vídeos de TikTok con accesos a producto',
      'Comunicación de eventos y registro de asistencia de clientes',
    ],
    appsTitle: 'Apps publicadas en todo el mundo',
  },
  ca: {
    title: "Casos d'èxit en tots els sectors",
    subtitle:
      "La plataforma de creació d'aplicacions mòbils més utilitzada per les botigues online a Espanya, Latam i Europa.",
    sectors: { bata: 'Moda', toys: 'Joguines', galileo: 'Parafarmàcia' },
    mockups: [
      "Pàgina d'inici personalitzada per vertical del client",
      'Carrusel de productes destacats. Informació del producte mitjançant escaneig de codi de barres',
      'eCommerce marketplace integral, completament sincronitzat amb les noves funcionalitats web',
      'Disseny totalment personalitzat, de web a app eCommerce',
      'Catàleg personalitzat de preus B2B. Lector intel·ligent de codis EAN',
      "Targeta de fidelització a l'App del client",
      'Aparador amb galeria de marques destacades. Cercador intel·ligent sincronitzat i vídeos de TikTok amb accés a producte',
      "Comunicació d'esdeveniments i registre d'assistència de clients",
    ],
    appsTitle: 'Apps publicades a tot el món',
  },
  en: {
    title: 'Success stories across every sector',
    subtitle:
      'The mobile app creation platform most used by online stores in Spain, Latam and Europe.',
    sectors: { bata: 'Fashion', toys: 'Toys', galileo: 'Parapharmacy' },
    mockups: [
      'Home page personalised by customer vertical',
      'Featured products carousel. Product information via barcode scanning',
      'Full marketplace eCommerce, completely synced with the new web features',
      'Fully customised design, from web to eCommerce app',
      'Personalised B2B price catalogue. Smart EAN code scanner',
      'Loyalty card inside the customer’s App',
      'Showcase with a gallery of featured brands. Synced smart search and TikTok videos linking to products',
      'Event communication and customer attendance registration',
    ],
    appsTitle: 'Apps published all over the world',
  },
  it: {
    title: 'Casi di successo in tutti i settori',
    subtitle:
      'La piattaforma di creazione di app mobili più utilizzata dai negozi online in Spagna, Latam ed Europa.',
    sectors: { bata: 'Moda', toys: 'Giocattoli', galileo: 'Parafarmacia' },
    mockups: [
      'Home page personalizzata per verticale del cliente',
      'Carosello di prodotti in evidenza. Informazioni sul prodotto tramite scansione del codice a barre',
      'eCommerce marketplace integrale, completamente sincronizzato con le nuove funzionalità web',
      'Design totalmente personalizzato, dal web all’app eCommerce',
      'Catalogo personalizzato di prezzi B2B. Lettore intelligente di codici EAN',
      'Carta fedeltà nell’App del cliente',
      'Vetrina con galleria di brand in evidenza. Ricerca intelligente sincronizzata e video TikTok con accesso al prodotto',
      'Comunicazione di eventi e registrazione delle presenze dei clienti',
    ],
    appsTitle: 'App pubblicate in tutto il mondo',
  },
  nl: {
    title: 'Succesverhalen in elke sector',
    subtitle:
      'Het platform voor het maken van mobiele apps dat het meest wordt gebruikt door webshops in Spanje, Latam en Europa.',
    sectors: { bata: 'Mode', toys: 'Speelgoed', galileo: 'Parafarmacie' },
    mockups: [
      'Homepagina gepersonaliseerd per klantvertical',
      'Carrousel met uitgelichte producten. Productinformatie via barcode scannen',
      'Volledige marketplace-eCommerce, volledig gesynchroniseerd met de nieuwe webfuncties',
      'Volledig aangepast ontwerp, van web naar eCommerce-app',
      'Gepersonaliseerde B2B-prijscatalogus. Slimme EAN-codescanner',
      'Loyaliteitskaart in de app van de klant',
      'Etalage met galerij van uitgelichte merken. Gesynchroniseerde slimme zoekfunctie en TikTok-video’s met productlinks',
      'Evenementcommunicatie en registratie van klantaanwezigheid',
    ],
    appsTitle: 'Apps gepubliceerd over de hele wereld',
  },
};

// ------------------------------------------------------------------- precios

interface Plan {
  badge: string;
  yearNote: string;
  description: string;
  featuresTitle?: string;
  features: string[];
  push: string[];
}

export interface PreciosContent {
  heroStart: string;
  heroHighlight: string;
  subtitle: string;
  monthly: string;
  yearly: string;
  saveBadge: string;
  perMonth: string;
  perYear: string;
  taxNote: string;
  pushTitle: string;
  cta: string;
  outControlTitle: string;
  outControlText: string;
  plans: { essential: Plan; pro: Plan; master: Plan };
}

export const preciosContent: Record<Locale, PreciosContent> = {
  es: {
    heroStart: 'Precios fijos y predecibles ',
    heroHighlight: 'sin sorpresas',
    subtitle: 'Crece sin enredos: simple, claro y enfocado en tus ingresos.',
    monthly: 'Pago Mensual',
    yearly: 'Pago Anual',
    saveBadge: 'Ahorra hasta 25%',
    perMonth: '/mes',
    perYear: '/año',
    taxNote: 'Imp. excl.',
    pushTitle: 'Notificaciones Push',
    cta: 'Pide una demo',
    outControlTitle: 'Suscripciones fuera del control de Reskyt',
    outControlText: 'Apple ($99/año) + Google Play ($25 pago único)',
    plans: {
      essential: {
        badge: '40K/mes Notificaciones',
        yearNote: 'Coste pago mensualizado 375€',
        description: 'El plan perfecto para pequeños comercios que quieren dar el salto a vender a través de su propia App',
        features: [
          'Desarrollo de App nativa iOS + Android',
          'Contenidos personalizados en la app',
          'Personalización de la experiencia de usuario (UX)',
          'Multi-idioma',
          'Integración Google Analytics 4',
          'Posibilidad de integraciones con SDKs de terceros (Kit de desarrollo básico para conectar con otras herramientas)',
        ],
        push: [
          'Hasta 40.000 notificaciones push/mes. Paquetes extra disponibles bajo petición',
          'Segmentación básica de BBDD para envíos masivos',
          'Push de recordatorio de carrito abandonado y push bienvenida/onboarding',
          'Envío de Notificaciones via API (integración con CRMs y/o ERPs)',
        ],
      },
      pro: {
        badge: '300K/mes Notificaciones',
        yearNote: 'Coste pago mensualizado 808€',
        description: 'Ideal para empresas en expansión que necesitan fidelizar y crear un nuevo canal de ventas.',
        featuresTitle: 'Todo en ESSENTIAL +',
        features: [
          'Búsqueda por código de barras (EAN) y/o QR',
          'Deep links (Enlaces directos dentro de la App)',
          'Banners y Popups configurables nativos en la App',
          'Multi-país',
          'Social login (Inicio de sesión via Google, Facebook, etc)',
        ],
        push: [
          'Hasta 300.000 notificaciones push/mes. Paquetes extra disponibles bajo petición',
          'Servicios Push incluidos en Essential',
          'Segmentación de BBDD para envíos masivos y/o por tipología de clientes',
          'Envío de Notificaciones por país',
        ],
      },
      master: {
        badge: 'Notificaciones Ilimitadas',
        yearNote: '',
        description: 'Pensado para grandes compañías que quieren una solución a medida y soporte total.',
        featuresTitle: 'Todo en PRO +',
        features: [
          'Account Manager dedicado',
          'Entorno de pruebas para desarrolladores (App Developer Test)',
          'Soporte Técnico y de Negocio prioritario',
          'Migración de CMS incluida (trasladamos tu web o tienda online a la app)',
          'Desarrollo a medida',
        ],
        push: ['Ilimitadas', 'Servicios Push incluidos en Pro'],
      },
    },
  },
  ca: {
    heroStart: 'Preus fixos i predictibles ',
    heroHighlight: 'sense sorpreses',
    subtitle: 'Creix sense embolics: simple, clar i centrat en els teus ingressos.',
    monthly: 'Pagament Mensual',
    yearly: 'Pagament Anual',
    saveBadge: 'Estalvia fins al 25%',
    perMonth: '/mes',
    perYear: '/any',
    taxNote: 'Imp. excl.',
    pushTitle: 'Notificacions Push',
    cta: 'Demana una demo',
    outControlTitle: 'Subscripcions fora del control de Reskyt',
    outControlText: 'Apple ($99/any) + Google Play ($25 pagament únic)',
    plans: {
      essential: {
        badge: '40K/mes Notificacions',
        yearNote: 'Cost del pagament mensualitzat 375€',
        description: 'El pla perfecte per a petits comerços que volen fer el salt a vendre a través de la seva pròpia App',
        features: [
          "Desenvolupament d'App nativa iOS + Android",
          "Continguts personalitzats a l'app",
          "Personalització de l'experiència d'usuari (UX)",
          'Multi-idioma',
          'Integració Google Analytics 4',
          "Possibilitat d'integracions amb SDKs de tercers (Kit de desenvolupament bàsic per connectar amb altres eines)",
        ],
        push: [
          'Fins a 40.000 notificacions push/mes. Paquets extra disponibles sota petició',
          'Segmentació bàsica de BBDD per a enviaments massius',
          'Push de recordatori de carret abandonat i push de benvinguda/onboarding',
          "Enviament de notificacions via API (integració amb CRMs i/o ERPs)",
        ],
      },
      pro: {
        badge: '300K/mes Notificacions',
        yearNote: 'Cost del pagament mensualitzat 808€',
        description: 'Ideal per a empreses en expansió que necessiten fidelitzar i crear un nou canal de vendes.',
        featuresTitle: 'Tot a ESSENTIAL +',
        features: [
          'Cerca per codi de barres (EAN) i/o QR',
          "Deep links (enllaços directes dins de l'App)",
          "Banners i popups configurables natius a l'App",
          'Multi-país',
          'Social login (inici de sessió via Google, Facebook, etc.)',
        ],
        push: [
          'Fins a 300.000 notificacions push/mes. Paquets extra disponibles sota petició',
          'Serveis Push inclosos a Essential',
          'Segmentació de BBDD per a enviaments massius i/o per tipologia de clients',
          'Enviament de notificacions per país',
        ],
      },
      master: {
        badge: 'Notificacions Il·limitades',
        yearNote: '',
        description: 'Pensat per a grans companyies que volen una solució a mida i suport total.',
        featuresTitle: 'Tot a PRO +',
        features: [
          'Account Manager dedicat',
          'Entorn de proves per a desenvolupadors (App Developer Test)',
          'Suport Tècnic i de Negoci prioritari',
          'Migració de CMS inclosa (traslladem la teva web o botiga online a l’app)',
          'Desenvolupament a mida',
        ],
        push: ['Il·limitades', 'Serveis Push inclosos a Pro'],
      },
    },
  },
  en: {
    heroStart: 'Fixed, predictable pricing ',
    heroHighlight: 'with no surprises',
    subtitle: 'Grow without tangles: simple, clear and focused on your revenue.',
    monthly: 'Monthly billing',
    yearly: 'Annual billing',
    saveBadge: 'Save up to 25%',
    perMonth: '/month',
    perYear: '/year',
    taxNote: 'Tax excl.',
    pushTitle: 'Push notifications',
    cta: 'Request a demo',
    outControlTitle: 'Subscriptions outside Reskyt’s control',
    outControlText: 'Apple ($99/year) + Google Play ($25 one-off payment)',
    plans: {
      essential: {
        badge: '40K/month notifications',
        yearNote: 'Monthly-equivalent cost €375',
        description: 'The perfect plan for small retailers ready to start selling through their own App',
        features: [
          'Native iOS + Android App development',
          'Personalised content in the app',
          'User experience (UX) customisation',
          'Multi-language',
          'Google Analytics 4 integration',
          'Optional third-party SDK integrations (basic development kit to connect other tools)',
        ],
        push: [
          'Up to 40,000 push notifications/month. Extra packs available on request',
          'Basic database segmentation for bulk sends',
          'Abandoned-cart reminder push and welcome/onboarding push',
          'Notification sending via API (integration with CRMs and/or ERPs)',
        ],
      },
      pro: {
        badge: '300K/month notifications',
        yearNote: 'Monthly-equivalent cost €808',
        description: 'Ideal for growing companies that need to build loyalty and open a new sales channel.',
        featuresTitle: 'Everything in ESSENTIAL +',
        features: [
          'Barcode (EAN) and/or QR search',
          'Deep links (direct links inside the App)',
          'Configurable native banners and popups in the App',
          'Multi-country',
          'Social login (sign in via Google, Facebook, etc.)',
        ],
        push: [
          'Up to 300,000 push notifications/month. Extra packs available on request',
          'Push services included in Essential',
          'Database segmentation for bulk sends and/or by customer type',
          'Notification sending by country',
        ],
      },
      master: {
        badge: 'Unlimited notifications',
        yearNote: '',
        description: 'Designed for large companies that want a tailor-made solution and full support.',
        featuresTitle: 'Everything in PRO +',
        features: [
          'Dedicated Account Manager',
          'Developer test environment (App Developer Test)',
          'Priority Technical and Business support',
          'CMS migration included (we move your website or online store into the app)',
          'Custom development',
        ],
        push: ['Unlimited', 'Push services included in Pro'],
      },
    },
  },
  it: {
    heroStart: 'Prezzi fissi e prevedibili ',
    heroHighlight: 'senza sorprese',
    subtitle: 'Cresci senza complicazioni: semplice, chiaro e orientato ai tuoi ricavi.',
    monthly: 'Pagamento mensile',
    yearly: 'Pagamento annuale',
    saveBadge: 'Risparmia fino al 25%',
    perMonth: '/mese',
    perYear: '/anno',
    taxNote: 'IVA escl.',
    pushTitle: 'Notifiche push',
    cta: 'Richiedi una demo',
    outControlTitle: 'Abbonamenti fuori dal controllo di Reskyt',
    outControlText: 'Apple ($99/anno) + Google Play ($25 pagamento unico)',
    plans: {
      essential: {
        badge: '40K/mese notifiche',
        yearNote: 'Costo mensile equivalente 375€',
        description: 'Il piano perfetto per i piccoli negozi che vogliono iniziare a vendere tramite la propria App',
        features: [
          'Sviluppo App nativa iOS + Android',
          'Contenuti personalizzati nell’app',
          'Personalizzazione dell’esperienza utente (UX)',
          'Multi-lingua',
          'Integrazione Google Analytics 4',
          'Possibilità di integrazioni con SDK di terzi (kit di sviluppo base per collegare altri strumenti)',
        ],
        push: [
          'Fino a 40.000 notifiche push/mese. Pacchetti extra disponibili su richiesta',
          'Segmentazione base del database per invii massivi',
          'Push promemoria carrello abbandonato e push di benvenuto/onboarding',
          'Invio di notifiche via API (integrazione con CRM e/o ERP)',
        ],
      },
      pro: {
        badge: '300K/mese notifiche',
        yearNote: 'Costo mensile equivalente 808€',
        description: 'Ideale per aziende in espansione che devono fidelizzare e creare un nuovo canale di vendita.',
        featuresTitle: 'Tutto in ESSENTIAL +',
        features: [
          'Ricerca per codice a barre (EAN) e/o QR',
          'Deep link (link diretti all’interno dell’App)',
          'Banner e popup configurabili nativi nell’App',
          'Multi-paese',
          'Social login (accesso via Google, Facebook, ecc.)',
        ],
        push: [
          'Fino a 300.000 notifiche push/mese. Pacchetti extra disponibili su richiesta',
          'Servizi push inclusi in Essential',
          'Segmentazione del database per invii massivi e/o per tipologia di clienti',
          'Invio di notifiche per paese',
        ],
      },
      master: {
        badge: 'Notifiche illimitate',
        yearNote: '',
        description: 'Pensato per le grandi aziende che vogliono una soluzione su misura e supporto totale.',
        featuresTitle: 'Tutto in PRO +',
        features: [
          'Account Manager dedicato',
          'Ambiente di test per sviluppatori (App Developer Test)',
          'Supporto tecnico e di business prioritario',
          'Migrazione CMS inclusa (portiamo il tuo sito o negozio online nell’app)',
          'Sviluppo su misura',
        ],
        push: ['Illimitate', 'Servizi push inclusi in Pro'],
      },
    },
  },
  nl: {
    heroStart: 'Vaste, voorspelbare prijzen ',
    heroHighlight: 'zonder verrassingen',
    subtitle: 'Groei zonder gedoe: simpel, duidelijk en gericht op je omzet.',
    monthly: 'Maandelijkse betaling',
    yearly: 'Jaarlijkse betaling',
    saveBadge: 'Bespaar tot 25%',
    perMonth: '/maand',
    perYear: '/jaar',
    taxNote: 'Excl. btw',
    pushTitle: 'Pushmeldingen',
    cta: 'Vraag een demo aan',
    outControlTitle: 'Abonnementen buiten de controle van Reskyt',
    outControlText: 'Apple ($99/jaar) + Google Play ($25 eenmalige betaling)',
    plans: {
      essential: {
        badge: '40K/maand meldingen',
        yearNote: 'Maandelijks equivalent 375€',
        description: 'Het perfecte plan voor kleine winkels die de sprong willen maken naar verkopen via hun eigen app',
        features: [
          'Native iOS + Android app-ontwikkeling',
          'Gepersonaliseerde content in de app',
          'Personalisatie van de gebruikerservaring (UX)',
          'Meertalig',
          'Google Analytics 4-integratie',
          'Mogelijkheid tot integraties met SDK’s van derden (basisontwikkelkit om andere tools te koppelen)',
        ],
        push: [
          'Tot 40.000 pushmeldingen/maand. Extra pakketten op aanvraag',
          'Basissegmentatie van de database voor bulkverzendingen',
          'Push voor verlaten winkelwagen en welkomst-/onboardingpush',
          'Meldingen versturen via API (integratie met CRM’s en/of ERP’s)',
        ],
      },
      pro: {
        badge: '300K/maand meldingen',
        yearNote: 'Maandelijks equivalent 808€',
        description: 'Ideaal voor groeiende bedrijven die klanten willen binden en een nieuw verkoopkanaal willen openen.',
        featuresTitle: 'Alles in ESSENTIAL +',
        features: [
          'Zoeken op barcode (EAN) en/of QR',
          'Deep links (directe links binnen de app)',
          'Configureerbare native banners en pop-ups in de app',
          'Multi-land',
          'Social login (inloggen via Google, Facebook, enz.)',
        ],
        push: [
          'Tot 300.000 pushmeldingen/maand. Extra pakketten op aanvraag',
          'Pushdiensten inbegrepen in Essential',
          'Databasesegmentatie voor bulkverzendingen en/of per klanttype',
          'Meldingen versturen per land',
        ],
      },
      master: {
        badge: 'Onbeperkte meldingen',
        yearNote: '',
        description: 'Bedoeld voor grote bedrijven die een oplossing op maat en volledige ondersteuning willen.',
        featuresTitle: 'Alles in PRO +',
        features: [
          'Toegewijde accountmanager',
          'Testomgeving voor ontwikkelaars (App Developer Test)',
          'Prioritaire technische en zakelijke ondersteuning',
          'CMS-migratie inbegrepen (we verplaatsen je website of webshop naar de app)',
          'Ontwikkeling op maat',
        ],
        push: ['Onbeperkt', 'Pushdiensten inbegrepen in Pro'],
      },
    },
  },
};

// ------------------------------------------------- contacta + demo + formularios

export interface FormsContent {
  contactTitleStart: string;
  contactTitleHighlight: string;
  contactSubtitle: string;
  contactDemoLink: string;
  mailLine: string;
  phoneLine: string;
  name: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  contactError: string;
  contactSuccessTitle: string;
  contactSuccessText: string;
  demoTitleStart: string;
  demoTitleHighlight: string;
  demoTitleEnd: string;
  demoSubtitle: string;
  benefits: Card[];
  company: string;
  phone: string;
  optional: string;
  urlLabel: string;
  terms: string;
  termsLink: string;
  demoCta: string;
  demoError: string;
  demoNote: string;
  demoSuccessTitle: string;
  demoSuccessText: string;
}

export const formsContent: Record<Locale, FormsContent> = {
  es: {
    contactTitleStart: 'Contacta ',
    contactTitleHighlight: 'con nosotros',
    contactSubtitle: 'Cuéntanos qué necesitas y te responderemos lo antes posible. Si quieres ver la plataforma en acción, ',
    contactDemoLink: 'pide una demo',
    mailLine: 'Envía un mail a',
    phoneLine: 'Llámanos al',
    name: 'Nombre',
    email: 'E-mail',
    message: 'Mensaje',
    messagePlaceholder: '¿En qué podemos ayudarte?',
    send: 'Enviar',
    contactError: 'Revisa los campos: falta algún dato o no es válido.',
    contactSuccessTitle: '¡Mensaje enviado!',
    contactSuccessText: 'Gracias por escribirnos. Te responderemos lo antes posible.',
    demoTitleStart: 'Agenda tu ',
    demoTitleHighlight: 'demo',
    demoTitleEnd: ' ahora',
    demoSubtitle: 'Introduce tus datos y en breve nos pondremos en contacto contigo.',
    benefits: [
      { title: 'Demo personalizada', text: 'Te enseñamos la app con el catálogo de tu propio eCommerce.' },
      { title: 'Sin compromiso', text: '30 minutos con nuestro equipo, sin permanencias ni letra pequeña.' },
      { title: 'Lanzamiento en 4 semanas', text: 'Si te convence, tu app puede estar publicada en menos de un mes.' },
    ],
    company: 'Empresa',
    phone: 'Teléfono',
    optional: '(opcional)',
    urlLabel: 'URL de tu eCommerce',
    terms: 'Acepto los ',
    termsLink: 'términos y condiciones',
    demoCta: 'Pide tu demo',
    demoError: 'Revisa los campos marcados: falta algún dato o no es válido.',
    demoNote: '*Válido para no clientes. Una app por empresa.',
    demoSuccessTitle: '¡Solicitud enviada!',
    demoSuccessText: 'Gracias por tu interés. Nuestro equipo te contactará en menos de 24 h laborables.',
  },
  ca: {
    contactTitleStart: 'Contacta ',
    contactTitleHighlight: 'amb nosaltres',
    contactSubtitle: "Explica'ns què necessites i et respondrem al més aviat possible. Si vols veure la plataforma en acció, ",
    contactDemoLink: 'demana una demo',
    mailLine: 'Envia un mail a',
    phoneLine: "Truca'ns al",
    name: 'Nom',
    email: 'E-mail',
    message: 'Missatge',
    messagePlaceholder: 'En què et podem ajudar?',
    send: 'Envia',
    contactError: 'Revisa els camps: falta alguna dada o no és vàlida.',
    contactSuccessTitle: 'Missatge enviat!',
    contactSuccessText: "Gràcies per escriure'ns. Et respondrem al més aviat possible.",
    demoTitleStart: 'Agenda la teva ',
    demoTitleHighlight: 'demo',
    demoTitleEnd: ' ara',
    demoSubtitle: 'Introdueix les teves dades i en breu ens posarem en contacte amb tu.',
    benefits: [
      { title: 'Demo personalitzada', text: "T'ensenyem l'app amb el catàleg del teu propi eCommerce." },
      { title: 'Sense compromís', text: '30 minuts amb el nostre equip, sense permanències ni lletra petita.' },
      { title: 'Llançament en 4 setmanes', text: 'Si et convenç, la teva app pot estar publicada en menys d’un mes.' },
    ],
    company: 'Empresa',
    phone: 'Telèfon',
    optional: '(opcional)',
    urlLabel: 'URL del teu eCommerce',
    terms: 'Accepto els ',
    termsLink: 'termes i condicions',
    demoCta: 'Demana la teva demo',
    demoError: 'Revisa els camps marcats: falta alguna dada o no és vàlida.',
    demoNote: '*Vàlid per a no clients. Una app per empresa.',
    demoSuccessTitle: 'Sol·licitud enviada!',
    demoSuccessText: 'Gràcies pel teu interès. El nostre equip et contactarà en menys de 24 h laborables.',
  },
  en: {
    contactTitleStart: 'Get in ',
    contactTitleHighlight: 'touch with us',
    contactSubtitle: 'Tell us what you need and we will get back to you as soon as possible. If you want to see the platform in action, ',
    contactDemoLink: 'request a demo',
    mailLine: 'Send an email to',
    phoneLine: 'Call us on',
    name: 'Name',
    email: 'E-mail',
    message: 'Message',
    messagePlaceholder: 'How can we help you?',
    send: 'Send',
    contactError: 'Check the fields: something is missing or invalid.',
    contactSuccessTitle: 'Message sent!',
    contactSuccessText: 'Thanks for writing to us. We will reply as soon as possible.',
    demoTitleStart: 'Book your ',
    demoTitleHighlight: 'demo',
    demoTitleEnd: ' now',
    demoSubtitle: 'Enter your details and we will contact you shortly.',
    benefits: [
      { title: 'Personalised demo', text: 'We show you the app with your own eCommerce catalogue.' },
      { title: 'No commitment', text: '30 minutes with our team, with no lock-in and no small print.' },
      { title: 'Launch in 4 weeks', text: 'If you like it, your app can be published in less than a month.' },
    ],
    company: 'Company',
    phone: 'Phone',
    optional: '(optional)',
    urlLabel: 'Your eCommerce URL',
    terms: 'I accept the ',
    termsLink: 'terms and conditions',
    demoCta: 'Request your demo',
    demoError: 'Check the highlighted fields: something is missing or invalid.',
    demoNote: '*Valid for non-customers. One app per company.',
    demoSuccessTitle: 'Request sent!',
    demoSuccessText: 'Thanks for your interest. Our team will contact you within 24 business hours.',
  },
  it: {
    contactTitleStart: 'Contatta',
    contactTitleHighlight: 'ci',
    contactSubtitle: 'Raccontaci di cosa hai bisogno e ti risponderemo il prima possibile. Se vuoi vedere la piattaforma in azione, ',
    contactDemoLink: 'richiedi una demo',
    mailLine: 'Invia una mail a',
    phoneLine: 'Chiamaci al',
    name: 'Nome',
    email: 'E-mail',
    message: 'Messaggio',
    messagePlaceholder: 'Come possiamo aiutarti?',
    send: 'Invia',
    contactError: 'Controlla i campi: manca qualche dato o non è valido.',
    contactSuccessTitle: 'Messaggio inviato!',
    contactSuccessText: 'Grazie per averci scritto. Ti risponderemo il prima possibile.',
    demoTitleStart: 'Prenota la tua ',
    demoTitleHighlight: 'demo',
    demoTitleEnd: ' ora',
    demoSubtitle: 'Inserisci i tuoi dati e ti contatteremo a breve.',
    benefits: [
      { title: 'Demo personalizzata', text: 'Ti mostriamo l’app con il catalogo del tuo eCommerce.' },
      { title: 'Senza impegno', text: '30 minuti con il nostro team, senza vincoli né clausole nascoste.' },
      { title: 'Lancio in 4 settimane', text: 'Se ti convince, la tua app può essere pubblicata in meno di un mese.' },
    ],
    company: 'Azienda',
    phone: 'Telefono',
    optional: '(facoltativo)',
    urlLabel: 'URL del tuo eCommerce',
    terms: 'Accetto i ',
    termsLink: 'termini e condizioni',
    demoCta: 'Richiedi la tua demo',
    demoError: 'Controlla i campi evidenziati: manca qualche dato o non è valido.',
    demoNote: '*Valido per non clienti. Una app per azienda.',
    demoSuccessTitle: 'Richiesta inviata!',
    demoSuccessText: 'Grazie per il tuo interesse. Il nostro team ti contatterà entro 24 ore lavorative.',
  },
  nl: {
    contactTitleStart: 'Neem ',
    contactTitleHighlight: 'contact met ons op',
    contactSubtitle: 'Vertel ons wat je nodig hebt en we antwoorden zo snel mogelijk. Wil je het platform in actie zien, ',
    contactDemoLink: 'vraag dan een demo aan',
    mailLine: 'Stuur een e-mail naar',
    phoneLine: 'Bel ons op',
    name: 'Naam',
    email: 'E-mail',
    message: 'Bericht',
    messagePlaceholder: 'Waarmee kunnen we je helpen?',
    send: 'Versturen',
    contactError: 'Controleer de velden: er ontbreekt iets of iets is ongeldig.',
    contactSuccessTitle: 'Bericht verzonden!',
    contactSuccessText: 'Bedankt voor je bericht. We antwoorden zo snel mogelijk.',
    demoTitleStart: 'Plan nu je ',
    demoTitleHighlight: 'demo',
    demoTitleEnd: '',
    demoSubtitle: 'Vul je gegevens in en we nemen snel contact met je op.',
    benefits: [
      { title: 'Gepersonaliseerde demo', text: 'We laten je de app zien met de catalogus van je eigen eCommerce.' },
      { title: 'Vrijblijvend', text: '30 minuten met ons team, zonder verplichtingen of kleine lettertjes.' },
      { title: 'Lancering in 4 weken', text: 'Bevalt het, dan kan je app binnen een maand gepubliceerd zijn.' },
    ],
    company: 'Bedrijf',
    phone: 'Telefoon',
    optional: '(optioneel)',
    urlLabel: 'URL van je eCommerce',
    terms: 'Ik accepteer de ',
    termsLink: 'algemene voorwaarden',
    demoCta: 'Vraag je demo aan',
    demoError: 'Controleer de gemarkeerde velden: er ontbreekt iets of iets is ongeldig.',
    demoNote: '*Geldig voor niet-klanten. Eén app per bedrijf.',
    demoSuccessTitle: 'Aanvraag verzonden!',
    demoSuccessText: 'Bedankt voor je interesse. Ons team neemt binnen 24 werkuren contact met je op.',
  },
};

// ------------------------------------------------------ componentes compartidos

export interface SharedContent {
  demoCtaTitleStart: string;
  demoCtaTitleHighlight: string;
  demoCtaTitleEnd: string;
  demoCtaFeatures: Card[];
  demoCtaButton: string;
  techTitleStart: string;
  techTitleHighlight: string;
  techTitleEnd: string;
  techText1: string;
  techText2: string;
  maximizaTitleHighlight: string;
  maximizaTitleEnd: string;
  maximizaSubtitleStart: string;
  maximizaSubtitleBold: string;
  maximizaSubtitleEnd: string;
  maximizaStats: string[];
  maximizaFeatures: string[];
  blogTitle: string;
  blogSubtitle: string;
  blogPaginationAria: string;
  blogNextAria: string;
  minutes: string;
}

export const sharedContent: Record<Locale, SharedContent> = {
  es: {
    demoCtaTitleStart: 'Tu app lista en ',
    demoCtaTitleHighlight: '4 semanas',
    demoCtaTitleEnd: ' con Reskyt',
    demoCtaFeatures: [
      { title: '100% Personalizada', text: 'Adaptada a tus necesidades y customizable sin necesidad de conocimientos técnicos.' },
      { title: 'Siempre Actualizada', text: 'Sincronizada con tu eCommerce para actualizaciones en tiempo real y siempre optimizada para iOS y Android' },
    ],
    demoCtaButton: 'Pide tu demo',
    techTitleStart: '',
    techTitleHighlight: 'Compatibilidad extendida',
    techTitleEnd: ' con las mejores tecnologías del mercado',
    techText1: 'Podemos crear la App de cualquier plataforma o CMS: Shopify, Magento, Prestashop, Vtex, Logicommerce, Woocommerce, Salesforce, etc.',
    techText2: 'Compatibilidad con los mejores buscadores avanzados, herramientas de Chat, tecnologías web, checkouts, todas las tecnologías más punteras del mercado son compatibles con Reskyt.',
    maximizaTitleHighlight: 'Maximiza tus oportunidades',
    maximizaTitleEnd: ' de aumentar ingresos',
    maximizaSubtitleStart: 'Las apps aumentan la ',
    maximizaSubtitleBold: 'conversión y la fidelidad',
    maximizaSubtitleEnd: ' de los clientes',
    maximizaStats: ['Incremento de la retención', 'Incremento del ROI', 'Incremento del AOV', 'Incremento de la recurrencia'],
    maximizaFeatures: ['Funciones Avanzadas', 'Más Velocidad', 'Mejor Experiencia de Usuario', 'Pantalla Táctil Optimizada', 'Mayor Comodidad'],
    blogTitle: 'Noticias - Apps para eCommerce',
    blogSubtitle: 'Las últimas noticias del mundo de las Apps para eCommerce y desarrollo y diseño de aplicaciones móviles.',
    blogPaginationAria: 'Paginación del blog',
    blogNextAria: 'Página siguiente',
    minutes: 'min',
  },
  ca: {
    demoCtaTitleStart: 'La teva app llesta en ',
    demoCtaTitleHighlight: '4 setmanes',
    demoCtaTitleEnd: ' amb Reskyt',
    demoCtaFeatures: [
      { title: '100% Personalitzada', text: 'Adaptada a les teves necessitats i personalitzable sense necessitat de coneixements tècnics.' },
      { title: 'Sempre Actualitzada', text: 'Sincronitzada amb el teu eCommerce per a actualitzacions en temps real i sempre optimitzada per a iOS i Android' },
    ],
    demoCtaButton: 'Demana la teva demo',
    techTitleStart: '',
    techTitleHighlight: 'Compatibilitat estesa',
    techTitleEnd: ' amb les millors tecnologies del mercat',
    techText1: "Podem crear l'App de qualsevol plataforma o CMS: Shopify, Magento, Prestashop, Vtex, Logicommerce, Woocommerce, Salesforce, etc.",
    techText2: 'Compatibilitat amb els millors cercadors avançats, eines de xat, tecnologies web, checkouts: totes les tecnologies més punteres del mercat són compatibles amb Reskyt.',
    maximizaTitleHighlight: 'Maximitza les teves oportunitats',
    maximizaTitleEnd: " d'augmentar ingressos",
    maximizaSubtitleStart: 'Les apps augmenten la ',
    maximizaSubtitleBold: 'conversió i la fidelitat',
    maximizaSubtitleEnd: ' dels clients',
    maximizaStats: ['Increment de la retenció', 'Increment del ROI', "Increment de l'AOV", 'Increment de la recurrència'],
    maximizaFeatures: ['Funcions Avançades', 'Més Velocitat', "Millor Experiència d'Usuari", 'Pantalla Tàctil Optimitzada', 'Més Comoditat'],
    blogTitle: 'Notícies - Apps per a eCommerce',
    blogSubtitle: "Les últimes notícies del món de les Apps per a eCommerce i del desenvolupament i disseny d'aplicacions mòbils.",
    blogPaginationAria: 'Paginació del blog',
    blogNextAria: 'Pàgina següent',
    minutes: 'min',
  },
  en: {
    demoCtaTitleStart: 'Your app ready in ',
    demoCtaTitleHighlight: '4 weeks',
    demoCtaTitleEnd: ' with Reskyt',
    demoCtaFeatures: [
      { title: '100% Personalised', text: 'Adapted to your needs and customisable with no technical knowledge required.' },
      { title: 'Always Up To Date', text: 'Synced with your eCommerce for real-time updates and always optimised for iOS and Android' },
    ],
    demoCtaButton: 'Request your demo',
    techTitleStart: '',
    techTitleHighlight: 'Extended compatibility',
    techTitleEnd: ' with the best technologies on the market',
    techText1: 'We can create the App for any platform or CMS: Shopify, Magento, Prestashop, Vtex, Logicommerce, Woocommerce, Salesforce, etc.',
    techText2: 'Compatible with the best advanced search engines, chat tools, web technologies and checkouts — all the most cutting-edge technologies on the market work with Reskyt.',
    maximizaTitleHighlight: 'Maximise your opportunities',
    maximizaTitleEnd: ' to grow revenue',
    maximizaSubtitleStart: 'Apps increase customer ',
    maximizaSubtitleBold: 'conversion and loyalty',
    maximizaSubtitleEnd: '',
    maximizaStats: ['Retention increase', 'ROI increase', 'AOV increase', 'Repeat-purchase increase'],
    maximizaFeatures: ['Advanced Features', 'More Speed', 'Better User Experience', 'Optimised Touch Screen', 'More Convenience'],
    blogTitle: 'News - Apps for eCommerce',
    blogSubtitle: 'The latest news from the world of eCommerce Apps and mobile app development and design.',
    blogPaginationAria: 'Blog pagination',
    blogNextAria: 'Next page',
    minutes: 'min',
  },
  it: {
    demoCtaTitleStart: 'La tua app pronta in ',
    demoCtaTitleHighlight: '4 settimane',
    demoCtaTitleEnd: ' con Reskyt',
    demoCtaFeatures: [
      { title: '100% Personalizzata', text: 'Adattata alle tue esigenze e personalizzabile senza bisogno di conoscenze tecniche.' },
      { title: 'Sempre Aggiornata', text: 'Sincronizzata con il tuo eCommerce per aggiornamenti in tempo reale e sempre ottimizzata per iOS e Android' },
    ],
    demoCtaButton: 'Richiedi la tua demo',
    techTitleStart: '',
    techTitleHighlight: 'Compatibilità estesa',
    techTitleEnd: ' con le migliori tecnologie del mercato',
    techText1: 'Possiamo creare l’App per qualsiasi piattaforma o CMS: Shopify, Magento, Prestashop, Vtex, Logicommerce, Woocommerce, Salesforce, ecc.',
    techText2: 'Compatibilità con i migliori motori di ricerca avanzati, strumenti di chat, tecnologie web e checkout: tutte le tecnologie più all’avanguardia del mercato sono compatibili con Reskyt.',
    maximizaTitleHighlight: 'Massimizza le tue opportunità',
    maximizaTitleEnd: ' di aumentare i ricavi',
    maximizaSubtitleStart: 'Le app aumentano la ',
    maximizaSubtitleBold: 'conversione e la fedeltà',
    maximizaSubtitleEnd: ' dei clienti',
    maximizaStats: ['Aumento della retention', 'Aumento del ROI', 'Aumento dell’AOV', 'Aumento della ricorrenza'],
    maximizaFeatures: ['Funzioni Avanzate', 'Più Velocità', 'Migliore Esperienza Utente', 'Touch Screen Ottimizzato', 'Maggiore Comodità'],
    blogTitle: 'Notizie - App per eCommerce',
    blogSubtitle: 'Le ultime notizie dal mondo delle App per eCommerce e dello sviluppo e design di applicazioni mobili.',
    blogPaginationAria: 'Paginazione del blog',
    blogNextAria: 'Pagina successiva',
    minutes: 'min',
  },
  nl: {
    demoCtaTitleStart: 'Je app klaar in ',
    demoCtaTitleHighlight: '4 weken',
    demoCtaTitleEnd: ' met Reskyt',
    demoCtaFeatures: [
      { title: '100% Gepersonaliseerd', text: 'Aangepast aan jouw behoeften en aanpasbaar zonder technische kennis.' },
      { title: 'Altijd Actueel', text: 'Gesynchroniseerd met je eCommerce voor realtime updates en altijd geoptimaliseerd voor iOS en Android' },
    ],
    demoCtaButton: 'Vraag je demo aan',
    techTitleStart: '',
    techTitleHighlight: 'Uitgebreide compatibiliteit',
    techTitleEnd: ' met de beste technologieën op de markt',
    techText1: 'We kunnen de app maken voor elk platform of CMS: Shopify, Magento, Prestashop, Vtex, Logicommerce, Woocommerce, Salesforce, enz.',
    techText2: 'Compatibel met de beste geavanceerde zoekmachines, chattools, webtechnologieën en checkouts — alle meest geavanceerde technologieën op de markt werken met Reskyt.',
    maximizaTitleHighlight: 'Maximaliseer je kansen',
    maximizaTitleEnd: ' om je omzet te verhogen',
    maximizaSubtitleStart: 'Apps verhogen de ',
    maximizaSubtitleBold: 'conversie en loyaliteit',
    maximizaSubtitleEnd: ' van klanten',
    maximizaStats: ['Toename van retentie', 'Toename van ROI', 'Toename van AOV', 'Toename van herhaalaankopen'],
    maximizaFeatures: ['Geavanceerde Functies', 'Meer Snelheid', 'Betere Gebruikerservaring', 'Geoptimaliseerd Touchscreen', 'Meer Gemak'],
    blogTitle: 'Nieuws - Apps voor eCommerce',
    blogSubtitle: 'Het laatste nieuws uit de wereld van eCommerce-apps en de ontwikkeling en het ontwerp van mobiele applicaties.',
    blogPaginationAria: 'Blogpaginering',
    blogNextAria: 'Volgende pagina',
    minutes: 'min',
  },
};
