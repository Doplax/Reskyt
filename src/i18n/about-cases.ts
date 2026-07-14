// Traducciones de contenido: "Sobre nosotros" y detalles de casos de éxito.
import type { Locale } from './index';

interface Item {
  title: string;
  text?: string;
}

// -------------------------------------------------------------- sobre nosotros

export interface AboutContent {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  lead: string;
  description: string[];
  closing: string[];
  closingBold: string;
  valoresTitle: string;
  valores: Item[];
  objetivosStart: string;
  objetivosHighlight: string;
  objetivosText: string;
  evolucionStart: string;
  evolucionHighlight: string;
  timeline: Record<string, { badges?: string[]; texts: string[] }>;
}

export const aboutContent: Record<Locale, AboutContent> = {
  es: {
    titleStart: 'La Agencia Nº1 en desarrollo de ',
    titleHighlight: 'Aplicaciones móviles',
    titleEnd: ' en España para eCommerce',
    lead: 'En 2013 nace Reskyt con sus 3 fundadores, apasionados del mundo del software e internet. Iniciaron este viaje fruto de la pasión por el eCommerce, tras ver la necesidad que tenían las tiendas online de poder vender a través de aplicaciones móviles.',
    description: [
      'Su objetivo iba más allá de poder crear Apps, querían que cualquier eCommerce manager o Responsable de marketing de un eCommerce pudiera personalizar su App o realizar cambios en el momento que quisieran. Así nació la primera plataforma de creación de Apps para eCommerce, B2B y marketplace de España.',
      'Reskyt creó una de las primeras plataformas de Europa que permite adaptarse a cualquier plataforma de eCommerce (Shopify, Magento, Prestashop, Vtex, Woocommerce, Logicommerce, etc.) siendo su factor diferenciador el poder crear Apps totalmente a medida, sin plantillas, combinando las mejores partes de un eCommerce con nuevas funcionalidades nativas, consiguiendo, como resultado, Apps que mejoran con diferencia la conversión de venta respecto a la Web mobile.',
    ],
    closing: [
      'Actualmente, Reskyt cuenta con más de 600 Apps y se ha consolidado como una de las plataformas más sólidas del mercado. Contamos con un equipo altamente experimentado para seguir creciendo e innovando en el mundo de las Apps.',
      'Durante tres años consecutivos nuestra plataforma obtuvo el premio eAwards como mejor Agencia de creación de Apps y ha obtenido el Premio a la mejor plataforma de España en la Gala eCommerce Tools.',
    ],
    closingBold: 'En Reskyt, hemos creado Apps para todo tipo de eCommerce, desde los más pequeños hasta los eCommerce más exigentes, con 21 millones de visitas mensuales.',
    valoresTitle: 'Nuestros valores siempre están presentes',
    valores: [
      { title: 'Innovación', text: 'La innovación es el motor que impulsa nuestro crecimiento y el éxito de nuestros clientes.' },
      { title: 'Servicio', text: 'Nuestro objetivo es ofrecer un servicio excepcional para cada cliente, basado en la rapidez y la eficiencia.' },
      { title: 'Equipo', text: 'Nos encanta el trabajo en equipo, mezclando la experiencia y la creatividad para conseguir lo mejor de cada uno.' },
    ],
    objetivosStart: 'Nuestros ',
    objetivosHighlight: 'Objetivos',
    objetivosText: 'Crear Apps para cualquier tipo de eCommerce, sea cual sea su plataforma (Shopify, Magento, Prestashop, Logicommerce, Vtex, Salesforce, etc.). Gracias al largo recorrido y experiencia adquirida después de la realización de más de 580 Apps, hoy es una de las plataformas más sólidas del mercado, pudiendo dar soporte simultáneo a los mejores eCommerce de Europa.',
    evolucionStart: 'Evolución ',
    evolucionHighlight: 'Reskyt',
    timeline: {
      '2013': { texts: ['Creación de la empresa Reskyt e inicio de la programación de la plataforma de creación de apps.'] },
      '2014': { texts: ['Seguimos evolucionando la plataforma Reskyt, para una mejor y más sencilla interacción.'] },
      '2015': { badges: ['🚀 Creación de la primera app para ecommerce'], texts: ['Automatización de la Plataforma para la creación de Apps y reducir el time to market de la creación de las apps.'] },
      '2016': { badges: ['🚀 Lanzamiento App plus', '🏆 eAwards mejor agencia creación de apps 2016'], texts: ['Adaptación de la plataforma para webs corporativas: gimnasios, restaurantes, ayuntamientos, etc.'] },
      '2017': { badges: ['🚀 Primeras apps para ecommerce de alto rendimiento', '🏆 eAwards mejor agencia creación de apps 2017'], texts: ['Incorporación de las primeras funcionalidades nativas en la Plataforma. Especialización en Apps para eCommerce. Creación de API Notificaciones Push. Integración con las plataformas de eCommerce Prestashop, Magento, osCommerce y Woocommerce.'] },
      '2018': { badges: ['🚀 Lanzamiento App Enterprise', '🏆 eAwards mejor agencia creación de apps 2018'], texts: ['Nuevo diseño UX en la Plataforma. Integración con las plataformas de eCommerce, VTEX, Salesforce y Logicommerce.'] },
      '2019': { texts: ['Instalación de Servidores en Amazon. Aumento de capacidades para el envío masivo de millones de Notificaciones Push.'] },
      '2020': { badges: ['🚀 Posibilidad de incorporación de SDK nativo'], texts: ['Adaptación de la plataforma para poder instalar SDK a medida de forma nativa.', 'Comienzo del desarrollo para el envío de notificaciones push a carritos abandonados. Integración con Shopify.'] },
      '2021': { texts: ['Comienzo del desarrollo del Módulo de Integración para una customización automatizada del contenido del eCommerce y así conseguir una mejor integración con la App.', 'Incorporación en la plataforma de herramientas de integración con terceros como buscadores, chatbots y pasarelas de pago.'] },
      '2022': { badges: ['🚀 Lanzamiento del módulo de integración'], texts: ['Programación e incorporación en la Plataforma del Módulo de Segmentación. Integración con todas las plataformas de eCommerce actuales.'] },
      '2023': { texts: ['Evolución importante en la Plataforma Reskyt con la incorporación de nuevas prestaciones para los eCommerce más exigentes.'] },
    },
  },
  ca: {
    titleStart: "L'Agència Núm. 1 en desenvolupament d'",
    titleHighlight: 'aplicacions mòbils',
    titleEnd: ' a Espanya per a eCommerce',
    lead: "El 2013 neix Reskyt amb els seus 3 fundadors, apassionats del món del software i internet. Van iniciar aquest viatge fruit de la passió per l'eCommerce, després de veure la necessitat que tenien les botigues online de poder vendre a través d'aplicacions mòbils.",
    description: [
      "El seu objectiu anava més enllà de poder crear Apps: volien que qualsevol eCommerce manager o responsable de màrqueting d'un eCommerce pogués personalitzar la seva App o fer canvis quan volgués. Així va néixer la primera plataforma de creació d'Apps per a eCommerce, B2B i marketplace d'Espanya.",
      "Reskyt va crear una de les primeres plataformes d'Europa que permet adaptar-se a qualsevol plataforma d'eCommerce (Shopify, Magento, Prestashop, Vtex, Woocommerce, Logicommerce, etc.), sent el seu factor diferenciador poder crear Apps totalment a mida, sense plantilles, combinant les millors parts d'un eCommerce amb noves funcionalitats natives, aconseguint com a resultat Apps que milloren amb diferència la conversió de venda respecte a la web mòbil.",
    ],
    closing: [
      "Actualment, Reskyt compta amb més de 600 Apps i s'ha consolidat com una de les plataformes més sòlides del mercat. Comptem amb un equip altament experimentat per seguir creixent i innovant en el món de les Apps.",
      "Durant tres anys consecutius la nostra plataforma va obtenir el premi eAwards com a millor agència de creació d'Apps i ha obtingut el Premi a la millor plataforma d'Espanya a la Gala eCommerce Tools.",
    ],
    closingBold: "A Reskyt hem creat Apps per a tota mena d'eCommerce, des dels més petits fins als eCommerce més exigents, amb 21 milions de visites mensuals.",
    valoresTitle: 'Els nostres valors sempre hi són presents',
    valores: [
      { title: 'Innovació', text: "La innovació és el motor que impulsa el nostre creixement i l'èxit dels nostres clients." },
      { title: 'Servei', text: 'El nostre objectiu és oferir un servei excepcional per a cada client, basat en la rapidesa i l’eficiència.' },
      { title: 'Equip', text: "Ens encanta el treball en equip, barrejant l'experiència i la creativitat per aconseguir el millor de cadascú." },
    ],
    objetivosStart: 'Els nostres ',
    objetivosHighlight: 'Objectius',
    objetivosText: "Crear Apps per a qualsevol tipus d'eCommerce, sigui quina sigui la seva plataforma (Shopify, Magento, Prestashop, Logicommerce, Vtex, Salesforce, etc.). Gràcies al llarg recorregut i l'experiència adquirida després de fer més de 580 Apps, avui és una de les plataformes més sòlides del mercat, podent donar suport simultani als millors eCommerce d'Europa.",
    evolucionStart: 'Evolució ',
    evolucionHighlight: 'Reskyt',
    timeline: {
      '2013': { texts: ["Creació de l'empresa Reskyt i inici de la programació de la plataforma de creació d'apps."] },
      '2014': { texts: ['Seguim evolucionant la plataforma Reskyt, per a una interacció millor i més senzilla.'] },
      '2015': { badges: ['🚀 Creació de la primera app per a ecommerce'], texts: ["Automatització de la plataforma per a la creació d'Apps i reducció del time to market de la creació de les apps."] },
      '2016': { badges: ['🚀 Llançament App plus', "🏆 eAwards millor agència de creació d'apps 2016"], texts: ['Adaptació de la plataforma per a webs corporatives: gimnasos, restaurants, ajuntaments, etc.'] },
      '2017': { badges: ["🚀 Primeres apps per a ecommerce d'alt rendiment", "🏆 eAwards millor agència de creació d'apps 2017"], texts: ["Incorporació de les primeres funcionalitats natives a la plataforma. Especialització en Apps per a eCommerce. Creació de l'API de Notificacions Push. Integració amb les plataformes d'eCommerce Prestashop, Magento, osCommerce i Woocommerce."] },
      '2018': { badges: ['🚀 Llançament App Enterprise', "🏆 eAwards millor agència de creació d'apps 2018"], texts: ["Nou disseny UX a la plataforma. Integració amb les plataformes d'eCommerce VTEX, Salesforce i Logicommerce."] },
      '2019': { texts: ["Instal·lació de servidors a Amazon. Augment de capacitats per a l'enviament massiu de milions de notificacions push."] },
      '2020': { badges: ["🚀 Possibilitat d'incorporació de SDK natiu"], texts: ['Adaptació de la plataforma per poder instal·lar SDK a mida de forma nativa.', "Inici del desenvolupament per a l'enviament de notificacions push a carrets abandonats. Integració amb Shopify."] },
      '2021': { texts: ["Inici del desenvolupament del Mòdul d'Integració per a una customització automatitzada del contingut de l'eCommerce i aconseguir així una millor integració amb l'App.", "Incorporació a la plataforma d'eines d'integració amb tercers com cercadors, chatbots i passarel·les de pagament."] },
      '2022': { badges: ["🚀 Llançament del mòdul d'integració"], texts: ["Programació i incorporació a la plataforma del Mòdul de Segmentació. Integració amb totes les plataformes d'eCommerce actuals."] },
      '2023': { texts: ["Evolució important a la plataforma Reskyt amb la incorporació de noves prestacions per als eCommerce més exigents."] },
    },
  },
  en: {
    titleStart: 'The No. 1 Agency in ',
    titleHighlight: 'mobile app',
    titleEnd: ' development in Spain for eCommerce',
    lead: 'Reskyt was born in 2013 with its 3 founders, passionate about software and the internet. They started this journey out of a passion for eCommerce, after seeing the need online stores had to sell through mobile applications.',
    description: [
      'Their goal went beyond creating Apps: they wanted any eCommerce manager or marketing lead to be able to personalise their App or make changes whenever they wanted. That is how the first App creation platform for eCommerce, B2B and marketplaces in Spain was born.',
      'Reskyt created one of the first platforms in Europe able to adapt to any eCommerce platform (Shopify, Magento, Prestashop, Vtex, Woocommerce, Logicommerce, etc.). Its differentiator: fully bespoke Apps, without templates, combining the best parts of an eCommerce with new native features — resulting in Apps that clearly outperform the mobile web in sales conversion.',
    ],
    closing: [
      'Today, Reskyt has more than 600 Apps and has established itself as one of the most solid platforms on the market. We have a highly experienced team to keep growing and innovating in the world of Apps.',
      'For three consecutive years our platform won the eAwards for best App creation agency, and it received the Award for the best platform in Spain at the eCommerce Tools Gala.',
    ],
    closingBold: 'At Reskyt we have created Apps for every kind of eCommerce, from the smallest to the most demanding ones, with 21 million monthly visits.',
    valoresTitle: 'Our values are always present',
    valores: [
      { title: 'Innovation', text: 'Innovation is the engine that drives our growth and our customers’ success.' },
      { title: 'Service', text: 'Our goal is to offer an exceptional service for every customer, based on speed and efficiency.' },
      { title: 'Team', text: 'We love teamwork, mixing experience and creativity to get the best out of everyone.' },
    ],
    objetivosStart: 'Our ',
    objetivosHighlight: 'Goals',
    objetivosText: 'To create Apps for any kind of eCommerce, whatever its platform (Shopify, Magento, Prestashop, Logicommerce, Vtex, Salesforce, etc.). Thanks to the long track record and experience gained after building more than 580 Apps, today it is one of the most solid platforms on the market, supporting the best eCommerce in Europe simultaneously.',
    evolucionStart: 'Reskyt ',
    evolucionHighlight: 'evolution',
    timeline: {
      '2013': { texts: ['Founding of Reskyt and start of the development of the app creation platform.'] },
      '2014': { texts: ['We kept evolving the Reskyt platform for a better, simpler interaction.'] },
      '2015': { badges: ['🚀 First ecommerce app created'], texts: ['Automation of the platform for App creation, reducing the time to market of app development.'] },
      '2016': { badges: ['🚀 App plus launch', '🏆 eAwards best app creation agency 2016'], texts: ['Adaptation of the platform for corporate websites: gyms, restaurants, town councils, etc.'] },
      '2017': { badges: ['🚀 First high-performance ecommerce apps', '🏆 eAwards best app creation agency 2017'], texts: ['First native features added to the platform. Specialisation in eCommerce Apps. Creation of the Push Notifications API. Integration with the Prestashop, Magento, osCommerce and Woocommerce eCommerce platforms.'] },
      '2018': { badges: ['🚀 App Enterprise launch', '🏆 eAwards best app creation agency 2018'], texts: ['New UX design in the platform. Integration with the VTEX, Salesforce and Logicommerce eCommerce platforms.'] },
      '2019': { texts: ['Servers installed on Amazon. Increased capacity for the mass sending of millions of push notifications.'] },
      '2020': { badges: ['🚀 Native SDK integration available'], texts: ['Platform adapted to install custom SDKs natively.', 'Start of development for sending push notifications for abandoned carts. Shopify integration.'] },
      '2021': { texts: ['Start of development of the Integration Module for automated customisation of eCommerce content, achieving better integration with the App.', 'Third-party integration tools added to the platform: search engines, chatbots and payment gateways.'] },
      '2022': { badges: ['🚀 Integration module launch'], texts: ['Development and incorporation of the Segmentation Module into the platform. Integration with all current eCommerce platforms.'] },
      '2023': { texts: ['Major evolution of the Reskyt platform with new capabilities for the most demanding eCommerce.'] },
    },
  },
  it: {
    titleStart: 'L’Agenzia N. 1 nello sviluppo di ',
    titleHighlight: 'applicazioni mobili',
    titleEnd: ' in Spagna per l’eCommerce',
    lead: 'Nel 2013 nasce Reskyt con i suoi 3 fondatori, appassionati del mondo del software e di internet. Hanno iniziato questo viaggio spinti dalla passione per l’eCommerce, dopo aver visto la necessità dei negozi online di vendere tramite applicazioni mobili.',
    description: [
      'Il loro obiettivo andava oltre la creazione di App: volevano che qualsiasi eCommerce manager o responsabile marketing potesse personalizzare la propria App o fare modifiche quando volesse. Così è nata la prima piattaforma di creazione di App per eCommerce, B2B e marketplace della Spagna.',
      'Reskyt ha creato una delle prime piattaforme d’Europa capace di adattarsi a qualsiasi piattaforma eCommerce (Shopify, Magento, Prestashop, Vtex, Woocommerce, Logicommerce, ecc.), con il fattore differenziante di creare App totalmente su misura, senza template, combinando le parti migliori di un eCommerce con nuove funzionalità native — ottenendo App che migliorano nettamente la conversione rispetto al web mobile.',
    ],
    closing: [
      'Attualmente Reskyt conta più di 600 App e si è consolidata come una delle piattaforme più solide del mercato. Abbiamo un team di grande esperienza per continuare a crescere e innovare nel mondo delle App.',
      'Per tre anni consecutivi la nostra piattaforma ha ottenuto il premio eAwards come migliore agenzia di creazione di App e ha ricevuto il Premio alla migliore piattaforma di Spagna alla Gala eCommerce Tools.',
    ],
    closingBold: 'In Reskyt abbiamo creato App per ogni tipo di eCommerce, dai più piccoli ai più esigenti, con 21 milioni di visite mensili.',
    valoresTitle: 'I nostri valori sono sempre presenti',
    valores: [
      { title: 'Innovazione', text: 'L’innovazione è il motore che guida la nostra crescita e il successo dei nostri clienti.' },
      { title: 'Servizio', text: 'Il nostro obiettivo è offrire un servizio eccezionale a ogni cliente, basato su rapidità ed efficienza.' },
      { title: 'Squadra', text: 'Amiamo il lavoro di squadra, mescolando esperienza e creatività per ottenere il meglio da ognuno.' },
    ],
    objetivosStart: 'I nostri ',
    objetivosHighlight: 'Obiettivi',
    objetivosText: 'Creare App per qualsiasi tipo di eCommerce, qualunque sia la piattaforma (Shopify, Magento, Prestashop, Logicommerce, Vtex, Salesforce, ecc.). Grazie al lungo percorso e all’esperienza maturata dopo oltre 580 App, oggi è una delle piattaforme più solide del mercato, in grado di supportare contemporaneamente i migliori eCommerce d’Europa.',
    evolucionStart: 'Evoluzione ',
    evolucionHighlight: 'Reskyt',
    timeline: {
      '2013': { texts: ['Creazione dell’azienda Reskyt e inizio della programmazione della piattaforma di creazione di app.'] },
      '2014': { texts: ['Continuiamo a far evolvere la piattaforma Reskyt, per un’interazione migliore e più semplice.'] },
      '2015': { badges: ['🚀 Creazione della prima app per ecommerce'], texts: ['Automazione della piattaforma per la creazione di App e riduzione del time to market.'] },
      '2016': { badges: ['🚀 Lancio App plus', '🏆 eAwards migliore agenzia di creazione di app 2016'], texts: ['Adattamento della piattaforma per siti corporate: palestre, ristoranti, comuni, ecc.'] },
      '2017': { badges: ['🚀 Prime app ecommerce ad alte prestazioni', '🏆 eAwards migliore agenzia di creazione di app 2017'], texts: ['Prime funzionalità native nella piattaforma. Specializzazione in App per eCommerce. Creazione dell’API di Notifiche Push. Integrazione con Prestashop, Magento, osCommerce e Woocommerce.'] },
      '2018': { badges: ['🚀 Lancio App Enterprise', '🏆 eAwards migliore agenzia di creazione di app 2018'], texts: ['Nuovo design UX della piattaforma. Integrazione con VTEX, Salesforce e Logicommerce.'] },
      '2019': { texts: ['Installazione di server su Amazon. Aumento delle capacità per l’invio massivo di milioni di notifiche push.'] },
      '2020': { badges: ['🚀 Possibilità di integrare SDK nativi'], texts: ['Piattaforma adattata per installare SDK su misura in modo nativo.', 'Inizio dello sviluppo per l’invio di notifiche push sui carrelli abbandonati. Integrazione con Shopify.'] },
      '2021': { texts: ['Inizio dello sviluppo del Modulo di Integrazione per la personalizzazione automatizzata dei contenuti dell’eCommerce e una migliore integrazione con l’App.', 'Strumenti di integrazione con terze parti aggiunti alla piattaforma: motori di ricerca, chatbot e gateway di pagamento.'] },
      '2022': { badges: ['🚀 Lancio del modulo di integrazione'], texts: ['Programmazione e incorporazione del Modulo di Segmentazione nella piattaforma. Integrazione con tutte le piattaforme eCommerce attuali.'] },
      '2023': { texts: ['Evoluzione importante della piattaforma Reskyt con nuove funzionalità per gli eCommerce più esigenti.'] },
    },
  },
  nl: {
    titleStart: 'Het nr. 1 bureau in de ontwikkeling van ',
    titleHighlight: 'mobiele apps',
    titleEnd: ' in Spanje voor eCommerce',
    lead: 'In 2013 werd Reskyt opgericht door zijn 3 oprichters, gepassioneerd door software en internet. Ze begonnen deze reis vanuit hun passie voor eCommerce, nadat ze zagen dat webshops via mobiele applicaties wilden verkopen.',
    description: [
      'Hun doel ging verder dan apps maken: ze wilden dat elke eCommerce-manager of marketingverantwoordelijke zijn app kon personaliseren of wijzigen wanneer hij maar wilde. Zo ontstond het eerste platform voor het maken van apps voor eCommerce, B2B en marketplaces in Spanje.',
      'Reskyt creëerde een van de eerste platforms in Europa dat zich aan elk eCommerce-platform kan aanpassen (Shopify, Magento, Prestashop, Vtex, Woocommerce, Logicommerce, enz.), met als onderscheidende factor volledig op maat gemaakte apps, zonder sjablonen, die het beste van een eCommerce combineren met nieuwe native functies — met als resultaat apps die de verkoopconversie duidelijk verbeteren ten opzichte van het mobiele web.',
    ],
    closing: [
      'Vandaag telt Reskyt meer dan 600 apps en heeft het zich gevestigd als een van de meest solide platforms op de markt. We hebben een zeer ervaren team om te blijven groeien en innoveren in de wereld van apps.',
      'Drie jaar op rij won ons platform de eAwards voor beste app-creatiebureau, en het ontving de prijs voor beste platform van Spanje op het eCommerce Tools Gala.',
    ],
    closingBold: 'Bij Reskyt hebben we apps gemaakt voor elk type eCommerce, van de kleinste tot de meest veeleisende, met 21 miljoen maandelijkse bezoeken.',
    valoresTitle: 'Onze waarden zijn altijd aanwezig',
    valores: [
      { title: 'Innovatie', text: 'Innovatie is de motor achter onze groei en het succes van onze klanten.' },
      { title: 'Service', text: 'Ons doel is een uitzonderlijke service voor elke klant, gebaseerd op snelheid en efficiëntie.' },
      { title: 'Team', text: 'We houden van teamwerk, waarbij we ervaring en creativiteit mengen om het beste uit iedereen te halen.' },
    ],
    objetivosStart: 'Onze ',
    objetivosHighlight: 'Doelen',
    objetivosText: 'Apps maken voor elk type eCommerce, ongeacht het platform (Shopify, Magento, Prestashop, Logicommerce, Vtex, Salesforce, enz.). Dankzij het lange traject en de ervaring van meer dan 580 apps is het vandaag een van de meest solide platforms op de markt, dat de beste eCommerce van Europa tegelijk kan ondersteunen.',
    evolucionStart: 'Evolutie ',
    evolucionHighlight: 'Reskyt',
    timeline: {
      '2013': { texts: ['Oprichting van Reskyt en start van de ontwikkeling van het app-creatieplatform.'] },
      '2014': { texts: ['We bleven het Reskyt-platform verbeteren voor een betere, eenvoudigere interactie.'] },
      '2015': { badges: ['🚀 Eerste ecommerce-app gemaakt'], texts: ['Automatisering van het platform voor app-creatie en verkorting van de time-to-market.'] },
      '2016': { badges: ['🚀 Lancering App plus', '🏆 eAwards beste app-creatiebureau 2016'], texts: ['Aanpassing van het platform voor bedrijfswebsites: sportscholen, restaurants, gemeenten, enz.'] },
      '2017': { badges: ['🚀 Eerste high-performance ecommerce-apps', '🏆 eAwards beste app-creatiebureau 2017'], texts: ['Eerste native functies in het platform. Specialisatie in eCommerce-apps. Creatie van de pushmeldingen-API. Integratie met Prestashop, Magento, osCommerce en Woocommerce.'] },
      '2018': { badges: ['🚀 Lancering App Enterprise', '🏆 eAwards beste app-creatiebureau 2018'], texts: ['Nieuw UX-ontwerp in het platform. Integratie met VTEX, Salesforce en Logicommerce.'] },
      '2019': { texts: ['Servers geïnstalleerd op Amazon. Grotere capaciteit voor het massaal versturen van miljoenen pushmeldingen.'] },
      '2020': { badges: ['🚀 Native SDK-integratie mogelijk'], texts: ['Platform aangepast om op maat gemaakte SDK’s native te installeren.', 'Start van de ontwikkeling voor pushmeldingen bij verlaten winkelwagens. Integratie met Shopify.'] },
      '2021': { texts: ['Start van de ontwikkeling van de Integratiemodule voor geautomatiseerde personalisatie van eCommerce-content en betere integratie met de app.', 'Integratietools met derden toegevoegd aan het platform: zoekmachines, chatbots en betaalgateways.'] },
      '2022': { badges: ['🚀 Lancering van de integratiemodule'], texts: ['Ontwikkeling en integratie van de Segmentatiemodule in het platform. Integratie met alle huidige eCommerce-platforms.'] },
      '2023': { texts: ['Belangrijke evolutie van het Reskyt-platform met nieuwe mogelijkheden voor de meest veeleisende eCommerce.'] },
    },
  },
};

// --------------------------------------------------- detalle de casos de éxito

interface CaseStrings {
  lead: string;
  about: string;
  goals: Item[];
  implementation: Item[];
  quote: string;
  statLabels: string[];
  tagline: string;
}

export interface CasesContent {
  badge: string;
  goalsTitle: string;
  implementationTitle: string;
  resultsTitle: string;
  moreTitle: string;
  bata: CaseStrings;
  toys: CaseStrings;
  galileo: CaseStrings;
}

export const casesContent: Record<Locale, CasesContent> = {
  es: {
    badge: 'Caso de éxito',
    goalsTitle: 'Objetivos',
    implementationTitle: 'Aspectos Destacados de la Implementación',
    resultsTitle: 'Resultados y puntos clave',
    moreTitle: 'Explora más casos de éxito',
    bata: {
      lead: 'Elegir Reskyt no fue solo una solución tecnológica, sino una decisión estratégica para acelerar el crecimiento digital y generar valor sostenible',
      about: 'Fundada como el concepto premium de zapatillas y streetwear de Bata, AW LAB se ha consolidado como un actor clave en el mercado europeo, con una fuerte presencia en Italia, España y otras regiones estratégicas. La marca colabora con grandes nombres globales como Nike, Adidas, Puma y New Balance, ofreciendo lanzamientos exclusivos y colecciones seleccionadas que se alinean con las últimas tendencias de la moda urbana.',
      goals: [
        { title: 'Incremento del ARPU en 4–5 veces', text: 'Los usuarios de la app mostraron un compromiso y un comportamiento de gasto significativamente mayores, lo que llevó a un aumento de 4 a 5 veces en el Ingreso Promedio por Usuario (ARPU) en comparación con los usuarios de la web móvil.' },
        { title: 'Lanzamiento en menos de 2 meses', text: 'Aprovechando la plataforma de Reskyt, AW LAB llevó la app al mercado en menos de 60 días, reduciendo el tiempo de desarrollo tradicional a más de la mitad.' },
        { title: 'Duplicar la tasa de conversión', text: 'Al optimizar la experiencia del usuario móvil a través de la app, las tasas de conversión fueron el doble que en la web móvil.' },
      ],
      implementation: [
        { title: 'Fase de Descubrimiento', text: 'AW LAB y Reskyt identificaron una alternativa escalable al desarrollo nativo, enfocándose en la agilidad y la velocidad de lanzamiento en múltiples países.' },
        { title: 'Lanzamiento Acelerado', text: 'La app se desplegó en menos de 2 meses, reduciendo drásticamente el tiempo de desarrollo y acelerando la obtención del ROI.' },
        { title: 'Rendimiento Impactante', text: 'Durante su lanzamiento suave, la app ya generó el 20% de los ingresos totales, sin inversión en marketing, lo que demuestra su valor inmediato.' },
        { title: 'Base Preparada para el Futuro', text: 'La arquitectura de la app permite una integración rápida de funcionalidades como tarjetas de fidelización, escaneo de códigos de barras y geolocalización, abriendo el camino hacia una experiencia retail omnicanal mejorada.' },
      ],
      quote: 'Reskyt nos permitió convertir nuestra web móvil en una app de alto rendimiento en tiempo récord, sin los costes del desarrollo tradicional. No es solo un contenedor, es un habilitador estratégico que duplicó nuestra tasa de conversión y nos ayudó a demostrar el caso de negocio para el crecimiento impulsado por apps',
      statLabels: [
        'Participación en ingresos durante el lanzamiento suave, sin esfuerzos de marketing',
        'Mayor ARPU, demostrando que los usuarios de la app están más comprometidos y dispuestos a gastar más',
        'Tasas de conversión más altas en comparación con la web móvil',
        'De desarrollo hasta el lanzamiento',
      ],
      tagline: 'Bata y Reskyt, escalando el éxito móvil',
    },
    toys: {
      lead: 'Asociarse con Reskyt no es solo una solución, es una estrategia para el éxito a largo plazo',
      about: "Toys 'R' Us es un líder reconocido a nivel mundial en la industria de los juguetes y productos para bebés, dedicado a ofrecer experiencias de compra excepcionales para las familias. Con unos ingresos anuales estimados en más de 600 millones y una fuerte presencia en diversas regiones, la empresa innova continuamente para mantenerse a la vanguardia en el competitivo sector minorista. Nuestro cliente, Toys 'R' us Iberia, cuenta con una larga trayectoria y un gran número de tiendas en España y Portugal.",
      goals: [
        { title: 'Reducir costes', text: 'Busqué lanzar la app móvil rápidamente y a un costo mucho menor.' },
        { title: 'Autónomos a la hora de hacer cambios', text: 'Ser autónomos para adaptar la app.' },
        { title: 'Sin costes para IT', text: 'Desarrollo y despliegue homogéneo de la web y la app.' },
        { title: 'Crear una comunidad', text: 'Permitir que las familias reserven sesiones de juego en tienda y charlas educativas para padres e hijos.' },
      ],
      implementation: [
        { title: 'Fase de Descubrimiento', text: 'Reskyt colaboró con Toys R Us para analizar los desafíos digitales existentes e identificar áreas clave de mejora.' },
        { title: 'Solución Personalizada' },
        { title: 'Integración de Programación de Eventos', text: 'Se creó una base de datos centralizada que permite a las familias reservar sesiones de juego y charlas para padres e hijos en las tiendas más cercanas. Los padres pueden elegir actividades según su ubicación y preferencias.' },
        { title: 'Notificaciones Automáticas', text: 'El sistema envía recordatorios y confirmaciones mediante notificaciones push, garantizando una experiencia fluida para las familias que asisten a eventos en tienda.' },
      ],
      quote: 'Estábamos buscando una solución para impulsar nuestra estrategia móvil de forma rápida, que fuera de la mano con nuestra estrategia web y a un precio accesible. Reskyt resultó ser el socio perfecto para nosotros.',
      statLabels: [
        'Descargas de la app en los primeros 3 meses',
        'Mayor tasa de conversión en usuarios de la app frente a usuarios móviles',
        'Tasa de apertura de notificaciones push',
        'De desarrollo hasta el lanzamiento',
      ],
      tagline: "Toys 'R' Us y Reskyt, impulsando el engagement omnicanal",
    },
    galileo: {
      lead: 'Colaborar con Reskyt no es solo una solución, es una estrategia para el éxito a largo plazo.',
      about: 'Galileo Farma es una destacada farmacia en línea especializada en cosméticos, dermocosméticos y marcas premium de parafarmacia. Fundada en 2015 y con sede en Madrid, España, la empresa ha experimentado una transformación significativa, evolucionando de una farmacia tradicional a una plataforma digital líder en el sector farmacéutico.',
      goals: [
        { title: 'Incremento del CLTV', text: 'Al ofrecer una experiencia de compra personalizada y conveniente, incentivamos a los clientes a realizar compras repetidas.' },
        { title: 'Mejora de la Tasa de Conversión', text: 'La app simplificó el proceso de compra, lo que resultó en un aumento significativo de las conversiones.' },
        { title: 'Apertura de un Nuevo Canal de Comunicación', text: 'Las notificaciones push nos permitieron interactuar directamente con nuestros clientes, ofreciendo promociones exclusivas, recordatorios de productos y contenido relevante. Esto fortaleció nuestra relación con ellos y aumentó su fidelidad.' },
      ],
      implementation: [
        { title: 'Fase de Descubrimiento', text: 'Reskyt colaboró con Galileo Farma para identificar los principales desafíos y definir prioridades.' },
        { title: 'Solución Personalizada', text: 'La solución personalizada que Reskyt implementó para Galileo Farma fue fundamental para nuestro éxito. No se trataba simplemente de lanzar una aplicación móvil estándar, sino de crear una plataforma que se adaptara perfectamente a nuestras necesidades y a las de nuestros clientes.' },
        { title: 'Diseño Personalizado', text: 'Cada elemento de la app, desde la disposición de los productos hasta el proceso de pago, fue personalizado para ofrecer una experiencia de compra fluida y agradable.' },
        { title: 'Mejora en la Experiencia del Usuario', text: 'Funciones como notificaciones push personalizadas y programas de fidelización integrados mejoraron significativamente la interacción con los usuarios y fomentaron la lealtad hacia la marca.' },
        { title: 'Cronograma', text: 'El proyecto se completó en 1 mes, con hitos estructurados para el diseño, desarrollo, pruebas y lanzamiento.' },
      ],
      quote: 'Estábamos buscando una solución que nos ayudara a fidelizar a nuestros clientes y así aumentar la tasa de recurrencia de nuestro comercio electrónico. Reskyt resultó ser el socio perfecto para nosotros.',
      statLabels: [
        'Mayor interacción con la app móvil en 12 semanas',
        'Reducidas de procesos manuales semanales',
        'Aumento de ingresos atribuido directamente a mejoras en las experiencias digitales',
        'De desarrollo hasta el lanzamiento',
      ],
      tagline: 'Galileo Farma & Reskyt, acelerando la transformación digital',
    },
  },
  ca: {
    badge: "Cas d'èxit",
    goalsTitle: 'Objectius',
    implementationTitle: 'Aspectes destacats de la implementació',
    resultsTitle: 'Resultats i punts clau',
    moreTitle: "Explora més casos d'èxit",
    bata: {
      lead: "Triar Reskyt no va ser només una solució tecnològica, sinó una decisió estratègica per accelerar el creixement digital i generar valor sostenible",
      about: "Fundada com el concepte premium de sabatilles i streetwear de Bata, AW LAB s'ha consolidat com un actor clau del mercat europeu, amb una forta presència a Itàlia, Espanya i altres regions estratègiques. La marca col·labora amb grans noms globals com Nike, Adidas, Puma i New Balance, oferint llançaments exclusius i col·leccions seleccionades alineades amb les últimes tendències de la moda urbana.",
      goals: [
        { title: "Increment de l'ARPU en 4–5 vegades", text: "Els usuaris de l'app van mostrar un compromís i un comportament de despesa significativament més grans, cosa que va portar a un augment de 4 a 5 vegades de l'ingrés mitjà per usuari (ARPU) en comparació amb els usuaris de la web mòbil." },
        { title: 'Llançament en menys de 2 mesos', text: "Aprofitant la plataforma de Reskyt, AW LAB va portar l'app al mercat en menys de 60 dies, reduint el temps de desenvolupament tradicional a més de la meitat." },
        { title: 'Duplicar la taxa de conversió', text: "En optimitzar l'experiència de l'usuari mòbil a través de l'app, les taxes de conversió van ser el doble que a la web mòbil." },
      ],
      implementation: [
        { title: 'Fase de Descobriment', text: "AW LAB i Reskyt van identificar una alternativa escalable al desenvolupament natiu, centrant-se en l'agilitat i la velocitat de llançament a múltiples països." },
        { title: 'Llançament Accelerat', text: "L'app es va desplegar en menys de 2 mesos, reduint dràsticament el temps de desenvolupament i accelerant l'obtenció del ROI." },
        { title: 'Rendiment Impactant', text: "Durant el llançament suau, l'app ja va generar el 20% dels ingressos totals, sense inversió en màrqueting, cosa que demostra el seu valor immediat." },
        { title: 'Base Preparada per al Futur', text: "L'arquitectura de l'app permet una integració ràpida de funcionalitats com targetes de fidelització, escaneig de codis de barres i geolocalització, obrint el camí cap a una experiència retail omnicanal millorada." },
      ],
      quote: "Reskyt ens va permetre convertir la nostra web mòbil en una app d'alt rendiment en temps rècord, sense els costos del desenvolupament tradicional. No és només un contenidor: és un habilitador estratègic que va duplicar la nostra taxa de conversió i ens va ajudar a demostrar el cas de negoci per al creixement impulsat per apps",
      statLabels: [
        'Participació en ingressos durant el llançament suau, sense esforços de màrqueting',
        "ARPU més alt, demostrant que els usuaris de l'app estan més compromesos i disposats a gastar més",
        'Taxes de conversió més altes en comparació amb la web mòbil',
        'De desenvolupament fins al llançament',
      ],
      tagline: "Bata i Reskyt, escalant l'èxit mòbil",
    },
    toys: {
      lead: "Associar-se amb Reskyt no és només una solució: és una estratègia per a l'èxit a llarg termini",
      about: "Toys 'R' Us és un líder reconegut mundialment en la indústria de les joguines i els productes per a nadons, dedicat a oferir experiències de compra excepcionals per a les famílies. Amb uns ingressos anuals estimats en més de 600 milions i una forta presència en diverses regions, l'empresa innova contínuament per mantenir-se al capdavant del competitiu sector minorista. El nostre client, Toys 'R' Us Iberia, té una llarga trajectòria i un gran nombre de botigues a Espanya i Portugal.",
      goals: [
        { title: 'Reduir costos', text: "Buscava llançar l'app mòbil ràpidament i a un cost molt menor." },
        { title: 'Autonomia per fer canvis', text: "Ser autònoms per adaptar l'app." },
        { title: 'Sense costos per a IT', text: "Desenvolupament i desplegament homogeni de la web i l'app." },
        { title: 'Crear una comunitat', text: 'Permetre que les famílies reservin sessions de joc a la botiga i xerrades educatives per a pares i fills.' },
      ],
      implementation: [
        { title: 'Fase de Descobriment', text: 'Reskyt va col·laborar amb Toys R Us per analitzar els reptes digitals existents i identificar àrees clau de millora.' },
        { title: 'Solució Personalitzada' },
        { title: "Integració de programació d'esdeveniments", text: 'Es va crear una base de dades centralitzada que permet a les famílies reservar sessions de joc i xerrades per a pares i fills a les botigues més properes. Els pares poden triar activitats segons la seva ubicació i preferències.' },
        { title: 'Notificacions Automàtiques', text: 'El sistema envia recordatoris i confirmacions mitjançant notificacions push, garantint una experiència fluida per a les famílies que assisteixen a esdeveniments a la botiga.' },
      ],
      quote: 'Buscàvem una solució per impulsar la nostra estratègia mòbil de forma ràpida, que anés de la mà amb la nostra estratègia web i a un preu accessible. Reskyt va resultar ser el soci perfecte per a nosaltres.',
      statLabels: [
        "Descàrregues de l'app als primers 3 mesos",
        "Taxa de conversió més alta dels usuaris de l'app respecte als usuaris mòbils",
        "Taxa d'obertura de notificacions push",
        'De desenvolupament fins al llançament',
      ],
      tagline: "Toys 'R' Us i Reskyt, impulsant l'engagement omnicanal",
    },
    galileo: {
      lead: "Col·laborar amb Reskyt no és només una solució: és una estratègia per a l'èxit a llarg termini.",
      about: 'Galileo Farma és una destacada farmàcia en línia especialitzada en cosmètics, dermocosmètics i marques premium de parafarmàcia. Fundada el 2015 i amb seu a Madrid, Espanya, l’empresa ha experimentat una transformació significativa, evolucionant d’una farmàcia tradicional a una plataforma digital líder del sector farmacèutic.',
      goals: [
        { title: 'Increment del CLTV', text: 'En oferir una experiència de compra personalitzada i convenient, incentivem els clients a fer compres repetides.' },
        { title: 'Millora de la taxa de conversió', text: "L'app va simplificar el procés de compra, cosa que va resultar en un augment significatiu de les conversions." },
        { title: "Obertura d'un nou canal de comunicació", text: 'Les notificacions push ens van permetre interactuar directament amb els nostres clients, oferint promocions exclusives, recordatoris de productes i contingut rellevant. Això va enfortir la nostra relació amb ells i va augmentar la seva fidelitat.' },
      ],
      implementation: [
        { title: 'Fase de Descobriment', text: 'Reskyt va col·laborar amb Galileo Farma per identificar els principals reptes i definir prioritats.' },
        { title: 'Solució Personalitzada', text: "La solució personalitzada que Reskyt va implementar per a Galileo Farma va ser fonamental per al nostre èxit. No es tractava simplement de llançar una aplicació mòbil estàndard, sinó de crear una plataforma que s'adaptés perfectament a les nostres necessitats i a les dels nostres clients." },
        { title: 'Disseny Personalitzat', text: "Cada element de l'app, des de la disposició dels productes fins al procés de pagament, es va personalitzar per oferir una experiència de compra fluida i agradable." },
        { title: "Millora de l'experiència d'usuari", text: 'Funcions com notificacions push personalitzades i programes de fidelització integrats van millorar significativament la interacció amb els usuaris i van fomentar la lleialtat cap a la marca.' },
        { title: 'Cronograma', text: 'El projecte es va completar en 1 mes, amb fites estructurades per al disseny, desenvolupament, proves i llançament.' },
      ],
      quote: 'Buscàvem una solució que ens ajudés a fidelitzar els nostres clients i així augmentar la taxa de recurrència del nostre comerç electrònic. Reskyt va resultar ser el soci perfecte per a nosaltres.',
      statLabels: [
        "Més interacció amb l'app mòbil en 12 setmanes",
        'Reduïdes de processos manuals setmanals',
        'Augment dels ingressos atribuït directament a millores en les experiències digitals',
        'De desenvolupament fins al llançament',
      ],
      tagline: 'Galileo Farma & Reskyt, accelerant la transformació digital',
    },
  },
  en: {
    badge: 'Success story',
    goalsTitle: 'Goals',
    implementationTitle: 'Implementation Highlights',
    resultsTitle: 'Results and key points',
    moreTitle: 'Explore more success stories',
    bata: {
      lead: 'Choosing Reskyt was not just a technological solution, but a strategic decision to accelerate digital growth and generate sustainable value',
      about: 'Founded as Bata’s premium sneaker and streetwear concept, AW LAB has established itself as a key player in the European market, with a strong presence in Italy, Spain and other strategic regions. The brand collaborates with major global names such as Nike, Adidas, Puma and New Balance, offering exclusive launches and curated collections aligned with the latest urban fashion trends.',
      goals: [
        { title: '4–5x ARPU increase', text: 'App users showed significantly higher engagement and spending behaviour, leading to a 4–5x increase in Average Revenue Per User (ARPU) compared to mobile web users.' },
        { title: 'Launch in under 2 months', text: 'Leveraging Reskyt’s platform, AW LAB brought the app to market in less than 60 days, cutting traditional development time by more than half.' },
        { title: 'Doubling the conversion rate', text: 'By optimising the mobile user experience through the app, conversion rates were double those of the mobile web.' },
      ],
      implementation: [
        { title: 'Discovery Phase', text: 'AW LAB and Reskyt identified a scalable alternative to native development, focusing on agility and launch speed across multiple countries.' },
        { title: 'Accelerated Launch', text: 'The app was deployed in less than 2 months, drastically reducing development time and accelerating ROI.' },
        { title: 'Impressive Performance', text: 'During its soft launch, the app already generated 20% of total revenue, with no marketing investment, proving its immediate value.' },
        { title: 'Future-Ready Foundation', text: 'The app’s architecture enables fast integration of features such as loyalty cards, barcode scanning and geolocation, paving the way for an enhanced omnichannel retail experience.' },
      ],
      quote: 'Reskyt allowed us to turn our mobile web into a high-performance app in record time, without the costs of traditional development. It is not just a container — it is a strategic enabler that doubled our conversion rate and helped us prove the business case for app-driven growth',
      statLabels: [
        'Revenue share during the soft launch, with no marketing efforts',
        'Higher ARPU, proving app users are more engaged and willing to spend more',
        'Higher conversion rates compared to the mobile web',
        'From development to launch',
      ],
      tagline: 'Bata and Reskyt, scaling mobile success',
    },
    toys: {
      lead: 'Partnering with Reskyt is not just a solution — it is a strategy for long-term success',
      about: "Toys 'R' Us is a globally recognised leader in the toy and baby products industry, dedicated to delivering exceptional shopping experiences for families. With estimated annual revenue of over 600 million and a strong presence across several regions, the company continuously innovates to stay ahead in the competitive retail sector. Our client, Toys 'R' Us Iberia, has a long track record and a large number of stores in Spain and Portugal.",
      goals: [
        { title: 'Reduce costs', text: 'I wanted to launch the mobile app quickly and at a much lower cost.' },
        { title: 'Autonomy to make changes', text: 'Be autonomous in adapting the app.' },
        { title: 'No costs for IT', text: 'Consistent development and deployment of web and app.' },
        { title: 'Build a community', text: 'Allow families to book in-store play sessions and educational talks for parents and children.' },
      ],
      implementation: [
        { title: 'Discovery Phase', text: 'Reskyt worked with Toys R Us to analyse existing digital challenges and identify key areas for improvement.' },
        { title: 'Tailored Solution' },
        { title: 'Event Scheduling Integration', text: 'A centralised database was created so families can book play sessions and parent-child talks at their nearest stores. Parents can choose activities based on their location and preferences.' },
        { title: 'Automatic Notifications', text: 'The system sends reminders and confirmations via push notifications, guaranteeing a smooth experience for families attending in-store events.' },
      ],
      quote: 'We were looking for a solution to boost our mobile strategy quickly, hand in hand with our web strategy and at an affordable price. Reskyt turned out to be the perfect partner for us.',
      statLabels: [
        'App downloads in the first 3 months',
        'Higher conversion rate for app users vs mobile users',
        'Push notification open rate',
        'From development to launch',
      ],
      tagline: "Toys 'R' Us and Reskyt, driving omnichannel engagement",
    },
    galileo: {
      lead: 'Working with Reskyt is not just a solution — it is a strategy for long-term success.',
      about: 'Galileo Farma is a leading online pharmacy specialising in cosmetics, dermocosmetics and premium parapharmacy brands. Founded in 2015 and headquartered in Madrid, Spain, the company has undergone a significant transformation, evolving from a traditional pharmacy into a leading digital platform in the pharmaceutical sector.',
      goals: [
        { title: 'CLTV increase', text: 'By offering a personalised, convenient shopping experience, we encourage customers to make repeat purchases.' },
        { title: 'Conversion rate improvement', text: 'The app simplified the purchase process, resulting in a significant increase in conversions.' },
        { title: 'Opening a new communication channel', text: 'Push notifications let us interact directly with our customers, offering exclusive promotions, product reminders and relevant content. This strengthened our relationship with them and increased their loyalty.' },
      ],
      implementation: [
        { title: 'Discovery Phase', text: 'Reskyt worked with Galileo Farma to identify the main challenges and define priorities.' },
        { title: 'Tailored Solution', text: 'The tailored solution Reskyt implemented for Galileo Farma was fundamental to our success. It was not simply about launching a standard mobile application, but about creating a platform that fit our needs and our customers’ perfectly.' },
        { title: 'Custom Design', text: 'Every element of the app, from product layout to checkout, was customised to deliver a smooth, pleasant shopping experience.' },
        { title: 'Improved User Experience', text: 'Features such as personalised push notifications and integrated loyalty programmes significantly improved user engagement and fostered brand loyalty.' },
        { title: 'Timeline', text: 'The project was completed in 1 month, with structured milestones for design, development, testing and launch.' },
      ],
      quote: 'We were looking for a solution to help us build customer loyalty and increase the repeat-purchase rate of our eCommerce. Reskyt turned out to be the perfect partner for us.',
      statLabels: [
        'Higher engagement with the mobile app in 12 weeks',
        'Weekly manual processes reduced',
        'Revenue increase directly attributed to improvements in digital experiences',
        'From development to launch',
      ],
      tagline: 'Galileo Farma & Reskyt, accelerating digital transformation',
    },
  },
  it: {
    badge: 'Caso di successo',
    goalsTitle: 'Obiettivi',
    implementationTitle: 'Punti salienti dell’implementazione',
    resultsTitle: 'Risultati e punti chiave',
    moreTitle: 'Esplora altri casi di successo',
    bata: {
      lead: 'Scegliere Reskyt non è stata solo una soluzione tecnologica, ma una decisione strategica per accelerare la crescita digitale e generare valore sostenibile',
      about: 'Fondata come il concept premium di sneaker e streetwear di Bata, AW LAB si è affermata come attore chiave del mercato europeo, con una forte presenza in Italia, Spagna e altre regioni strategiche. Il brand collabora con grandi nomi globali come Nike, Adidas, Puma e New Balance, offrendo lanci esclusivi e collezioni selezionate in linea con le ultime tendenze della moda urbana.',
      goals: [
        { title: 'Aumento dell’ARPU di 4–5 volte', text: 'Gli utenti dell’app hanno mostrato un coinvolgimento e una propensione alla spesa significativamente maggiori, portando a un aumento di 4–5 volte del ricavo medio per utente (ARPU) rispetto agli utenti del web mobile.' },
        { title: 'Lancio in meno di 2 mesi', text: 'Sfruttando la piattaforma di Reskyt, AW LAB ha portato l’app sul mercato in meno di 60 giorni, dimezzando abbondantemente i tempi di sviluppo tradizionali.' },
        { title: 'Raddoppio del tasso di conversione', text: 'Ottimizzando l’esperienza utente mobile tramite l’app, i tassi di conversione sono stati il doppio rispetto al web mobile.' },
      ],
      implementation: [
        { title: 'Fase di Scoperta', text: 'AW LAB e Reskyt hanno individuato un’alternativa scalabile allo sviluppo nativo, puntando su agilità e velocità di lancio in più paesi.' },
        { title: 'Lancio Accelerato', text: 'L’app è stata rilasciata in meno di 2 mesi, riducendo drasticamente i tempi di sviluppo e accelerando il ROI.' },
        { title: 'Prestazioni Sorprendenti', text: 'Durante il soft launch, l’app ha già generato il 20% dei ricavi totali, senza investimenti in marketing, dimostrando il suo valore immediato.' },
        { title: 'Base Pronta per il Futuro', text: 'L’architettura dell’app consente un’integrazione rapida di funzionalità come carte fedeltà, scansione di codici a barre e geolocalizzazione, aprendo la strada a un’esperienza retail omnicanale migliorata.' },
      ],
      quote: 'Reskyt ci ha permesso di trasformare il nostro web mobile in un’app ad alte prestazioni in tempi record, senza i costi dello sviluppo tradizionale. Non è solo un contenitore: è un abilitatore strategico che ha raddoppiato il nostro tasso di conversione e ci ha aiutato a dimostrare il business case della crescita guidata dalle app',
      statLabels: [
        'Quota di ricavi durante il soft launch, senza attività di marketing',
        'ARPU più alto, a dimostrazione che gli utenti dell’app sono più coinvolti e disposti a spendere di più',
        'Tassi di conversione più alti rispetto al web mobile',
        'Dallo sviluppo al lancio',
      ],
      tagline: 'Bata e Reskyt, scalando il successo mobile',
    },
    toys: {
      lead: 'Collaborare con Reskyt non è solo una soluzione: è una strategia per il successo a lungo termine',
      about: "Toys 'R' Us è un leader riconosciuto a livello mondiale nell’industria dei giocattoli e dei prodotti per l’infanzia, dedicato a offrire esperienze di acquisto eccezionali per le famiglie. Con ricavi annui stimati oltre i 600 milioni e una forte presenza in diverse regioni, l’azienda innova continuamente per restare all’avanguardia nel competitivo settore retail. Il nostro cliente, Toys 'R' Us Iberia, ha una lunga storia e un gran numero di negozi in Spagna e Portogallo.",
      goals: [
        { title: 'Ridurre i costi', text: 'Volevo lanciare l’app mobile rapidamente e a un costo molto inferiore.' },
        { title: 'Autonomia nelle modifiche', text: 'Essere autonomi nell’adattare l’app.' },
        { title: 'Nessun costo per l’IT', text: 'Sviluppo e distribuzione omogenei di web e app.' },
        { title: 'Creare una community', text: 'Permettere alle famiglie di prenotare sessioni di gioco in negozio e incontri educativi per genitori e figli.' },
      ],
      implementation: [
        { title: 'Fase di Scoperta', text: 'Reskyt ha collaborato con Toys R Us per analizzare le sfide digitali esistenti e individuare le aree chiave di miglioramento.' },
        { title: 'Soluzione Personalizzata' },
        { title: 'Integrazione della programmazione eventi', text: 'È stato creato un database centralizzato che permette alle famiglie di prenotare sessioni di gioco e incontri genitori-figli nei negozi più vicini. I genitori possono scegliere le attività in base a posizione e preferenze.' },
        { title: 'Notifiche Automatiche', text: 'Il sistema invia promemoria e conferme tramite notifiche push, garantendo un’esperienza fluida alle famiglie che partecipano agli eventi in negozio.' },
      ],
      quote: 'Cercavamo una soluzione per potenziare rapidamente la nostra strategia mobile, in linea con la strategia web e a un prezzo accessibile. Reskyt si è rivelato il partner perfetto per noi.',
      statLabels: [
        'Download dell’app nei primi 3 mesi',
        'Tasso di conversione più alto per gli utenti dell’app rispetto agli utenti mobili',
        'Tasso di apertura delle notifiche push',
        'Dallo sviluppo al lancio',
      ],
      tagline: "Toys 'R' Us e Reskyt, alimentando l’engagement omnicanale",
    },
    galileo: {
      lead: 'Collaborare con Reskyt non è solo una soluzione: è una strategia per il successo a lungo termine.',
      about: 'Galileo Farma è una nota farmacia online specializzata in cosmetici, dermocosmetici e marchi premium di parafarmacia. Fondata nel 2015 e con sede a Madrid, Spagna, l’azienda ha vissuto una trasformazione significativa, evolvendo da farmacia tradizionale a piattaforma digitale leader nel settore farmaceutico.',
      goals: [
        { title: 'Aumento del CLTV', text: 'Offrendo un’esperienza di acquisto personalizzata e comoda, incentiviamo i clienti a fare acquisti ripetuti.' },
        { title: 'Miglioramento del tasso di conversione', text: 'L’app ha semplificato il processo di acquisto, portando a un aumento significativo delle conversioni.' },
        { title: 'Apertura di un nuovo canale di comunicazione', text: 'Le notifiche push ci hanno permesso di interagire direttamente con i nostri clienti, offrendo promozioni esclusive, promemoria sui prodotti e contenuti rilevanti. Questo ha rafforzato il rapporto con loro e aumentato la fedeltà.' },
      ],
      implementation: [
        { title: 'Fase di Scoperta', text: 'Reskyt ha collaborato con Galileo Farma per identificare le principali sfide e definire le priorità.' },
        { title: 'Soluzione Personalizzata', text: 'La soluzione personalizzata implementata da Reskyt per Galileo Farma è stata fondamentale per il nostro successo. Non si trattava semplicemente di lanciare un’app standard, ma di creare una piattaforma perfettamente adattata alle nostre esigenze e a quelle dei nostri clienti.' },
        { title: 'Design Personalizzato', text: 'Ogni elemento dell’app, dalla disposizione dei prodotti al checkout, è stato personalizzato per offrire un’esperienza di acquisto fluida e piacevole.' },
        { title: 'Migliore esperienza utente', text: 'Funzioni come notifiche push personalizzate e programmi fedeltà integrati hanno migliorato significativamente l’interazione con gli utenti e favorito la fedeltà al brand.' },
        { title: 'Cronoprogramma', text: 'Il progetto è stato completato in 1 mese, con tappe strutturate per design, sviluppo, test e lancio.' },
      ],
      quote: 'Cercavamo una soluzione che ci aiutasse a fidelizzare i nostri clienti e ad aumentare il tasso di riacquisto del nostro eCommerce. Reskyt si è rivelato il partner perfetto per noi.',
      statLabels: [
        'Maggiore interazione con l’app mobile in 12 settimane',
        'Processi manuali settimanali ridotti',
        'Aumento dei ricavi attribuito direttamente ai miglioramenti delle esperienze digitali',
        'Dallo sviluppo al lancio',
      ],
      tagline: 'Galileo Farma & Reskyt, accelerando la trasformazione digitale',
    },
  },
  nl: {
    badge: 'Succesverhaal',
    goalsTitle: 'Doelen',
    implementationTitle: 'Hoogtepunten van de implementatie',
    resultsTitle: 'Resultaten en kernpunten',
    moreTitle: 'Ontdek meer succesverhalen',
    bata: {
      lead: 'Kiezen voor Reskyt was niet alleen een technologische oplossing, maar een strategische beslissing om de digitale groei te versnellen en duurzame waarde te creëren',
      about: 'Opgericht als het premium sneaker- en streetwearconcept van Bata, heeft AW LAB zich gevestigd als een belangrijke speler op de Europese markt, met een sterke aanwezigheid in Italië, Spanje en andere strategische regio’s. Het merk werkt samen met grote wereldnamen als Nike, Adidas, Puma en New Balance, met exclusieve lanceringen en samengestelde collecties die aansluiten bij de nieuwste urban fashion trends.',
      goals: [
        { title: 'ARPU 4–5 keer hoger', text: 'App-gebruikers toonden aanzienlijk meer betrokkenheid en bestedingsgedrag, wat leidde tot een 4–5 keer hogere gemiddelde omzet per gebruiker (ARPU) vergeleken met mobiele webgebruikers.' },
        { title: 'Lancering in minder dan 2 maanden', text: 'Met het platform van Reskyt bracht AW LAB de app in minder dan 60 dagen op de markt, waarmee de traditionele ontwikkeltijd meer dan gehalveerd werd.' },
        { title: 'Verdubbeling van de conversieratio', text: 'Door de mobiele gebruikerservaring via de app te optimaliseren, waren de conversieratio’s dubbel zo hoog als op het mobiele web.' },
      ],
      implementation: [
        { title: 'Ontdekkingsfase', text: 'AW LAB en Reskyt identificeerden een schaalbaar alternatief voor native ontwikkeling, gericht op wendbaarheid en lanceersnelheid in meerdere landen.' },
        { title: 'Versnelde Lancering', text: 'De app werd in minder dan 2 maanden uitgerold, wat de ontwikkeltijd drastisch verkortte en de ROI versnelde.' },
        { title: 'Indrukwekkende Prestaties', text: 'Tijdens de soft launch genereerde de app al 20% van de totale omzet, zonder marketinginvestering — een bewijs van de onmiddellijke waarde.' },
        { title: 'Toekomstbestendige Basis', text: 'De architectuur van de app maakt snelle integratie mogelijk van functies zoals loyaliteitskaarten, barcodescanning en geolocatie, en effent de weg naar een verbeterde omnichannel retailervaring.' },
      ],
      quote: 'Met Reskyt konden we ons mobiele web in recordtijd omzetten in een high-performance app, zonder de kosten van traditionele ontwikkeling. Het is niet zomaar een container — het is een strategische enabler die onze conversieratio verdubbelde en ons hielp de businesscase voor app-gedreven groei te bewijzen',
      statLabels: [
        'Omzetaandeel tijdens de soft launch, zonder marketinginspanningen',
        'Hogere ARPU, wat bewijst dat app-gebruikers meer betrokken zijn en meer willen besteden',
        'Hogere conversieratio’s vergeleken met het mobiele web',
        'Van ontwikkeling tot lancering',
      ],
      tagline: 'Bata en Reskyt, mobiel succes opschalen',
    },
    toys: {
      lead: 'Samenwerken met Reskyt is niet zomaar een oplossing — het is een strategie voor succes op lange termijn',
      about: "Toys 'R' Us is een wereldwijd erkende leider in de speelgoed- en babyproductenindustrie, toegewijd aan uitzonderlijke winkelervaringen voor gezinnen. Met een geschatte jaaromzet van meer dan 600 miljoen en een sterke aanwezigheid in verschillende regio's innoveert het bedrijf voortdurend om voorop te blijven in de competitieve retailsector. Onze klant, Toys 'R' Us Iberia, heeft een lange staat van dienst en veel winkels in Spanje en Portugal.",
      goals: [
        { title: 'Kosten verlagen', text: 'Ik wilde de mobiele app snel en tegen veel lagere kosten lanceren.' },
        { title: 'Autonoom wijzigingen doorvoeren', text: 'Autonoom zijn om de app aan te passen.' },
        { title: 'Geen kosten voor IT', text: 'Consistente ontwikkeling en uitrol van web en app.' },
        { title: 'Een community opbouwen', text: 'Gezinnen laten reserveren voor speelsessies in de winkel en educatieve talks voor ouders en kinderen.' },
      ],
      implementation: [
        { title: 'Ontdekkingsfase', text: 'Reskyt werkte samen met Toys R Us om de bestaande digitale uitdagingen te analyseren en belangrijke verbeterpunten te identificeren.' },
        { title: 'Oplossing op Maat' },
        { title: 'Integratie van evenementplanning', text: 'Er werd een centrale database gemaakt waarmee gezinnen speelsessies en ouder-kind-talks kunnen reserveren in de dichtstbijzijnde winkels. Ouders kiezen activiteiten op basis van locatie en voorkeuren.' },
        { title: 'Automatische Meldingen', text: 'Het systeem verstuurt herinneringen en bevestigingen via pushmeldingen, wat een vlotte ervaring garandeert voor gezinnen die winkel-evenementen bijwonen.' },
      ],
      quote: 'We zochten een oplossing om onze mobiele strategie snel te versterken, hand in hand met onze webstrategie en tegen een betaalbare prijs. Reskyt bleek de perfecte partner voor ons.',
      statLabels: [
        'App-downloads in de eerste 3 maanden',
        'Hogere conversieratio voor app-gebruikers vs. mobiele gebruikers',
        'Open rate van pushmeldingen',
        'Van ontwikkeling tot lancering',
      ],
      tagline: "Toys 'R' Us en Reskyt, drijvende kracht achter omnichannel engagement",
    },
    galileo: {
      lead: 'Samenwerken met Reskyt is niet zomaar een oplossing — het is een strategie voor succes op lange termijn.',
      about: 'Galileo Farma is een vooraanstaande online apotheek gespecialiseerd in cosmetica, dermocosmetica en premium parafarmaciemerken. Opgericht in 2015 en gevestigd in Madrid, Spanje, heeft het bedrijf een aanzienlijke transformatie doorgemaakt, van traditionele apotheek naar een toonaangevend digitaal platform in de farmaceutische sector.',
      goals: [
        { title: 'CLTV-stijging', text: 'Door een gepersonaliseerde, gemakkelijke winkelervaring te bieden, stimuleren we klanten tot herhaalaankopen.' },
        { title: 'Verbetering van de conversieratio', text: 'De app vereenvoudigde het aankoopproces, met een aanzienlijke toename van de conversies als gevolg.' },
        { title: 'Opening van een nieuw communicatiekanaal', text: 'Met pushmeldingen konden we rechtstreeks met onze klanten communiceren, met exclusieve promoties, productherinneringen en relevante content. Dit versterkte onze relatie en verhoogde hun loyaliteit.' },
      ],
      implementation: [
        { title: 'Ontdekkingsfase', text: 'Reskyt werkte samen met Galileo Farma om de belangrijkste uitdagingen te identificeren en prioriteiten te bepalen.' },
        { title: 'Oplossing op Maat', text: 'De oplossing op maat die Reskyt voor Galileo Farma implementeerde, was fundamenteel voor ons succes. Het ging niet om het lanceren van een standaard mobiele applicatie, maar om een platform dat perfect aansloot op onze behoeften en die van onze klanten.' },
        { title: 'Aangepast Ontwerp', text: 'Elk element van de app, van productindeling tot checkout, werd aangepast voor een vlotte, aangename winkelervaring.' },
        { title: 'Verbeterde Gebruikerservaring', text: 'Functies zoals gepersonaliseerde pushmeldingen en geïntegreerde loyaliteitsprogramma’s verbeterden de interactie met gebruikers aanzienlijk en versterkten de merkloyaliteit.' },
        { title: 'Tijdlijn', text: 'Het project werd in 1 maand afgerond, met gestructureerde mijlpalen voor ontwerp, ontwikkeling, tests en lancering.' },
      ],
      quote: 'We zochten een oplossing om onze klanten te binden en zo de herhaalaankopen van onze eCommerce te verhogen. Reskyt bleek de perfecte partner voor ons.',
      statLabels: [
        'Meer interactie met de mobiele app in 12 weken',
        'Wekelijkse handmatige processen verminderd',
        'Omzetstijging direct toegeschreven aan verbeteringen in de digitale ervaringen',
        'Van ontwikkeling tot lancering',
      ],
      tagline: 'Galileo Farma & Reskyt, digitale transformatie versnellen',
    },
  },
};

// ------------------------------------------------------- testimonios (portada)

export const testimonialQuotes: Record<Locale, string[]> = {
  es: [
    'Estábamos buscando una solución que nos ayudara a fidelizar a nuestros clientes y así aumentar la tasa de recurrencia de nuestro comercio electrónico. Reskyt resultó ser el socio perfecto para nosotros.',
    'En Reskyt hemos encontrado un partner cercano, profesional y muy ágil que nos ha permitido implementar iniciativas en la app que van más allá de la creación de un canal transaccional adicional: eventos, B2B, personalización, loyalty y ominicanalidad. ¡Imprescindibles!',
    'Gracias a Reskyt y a su soporte, hemos conseguido que nuestra App sea líder en la categoría de farmacia y parafarmacia. Es intuitiva, rápida y accesible.',
    'Gracias a la fácil integración con Google Analytics, podemos medir las visitas, ventas y conversiones de las notificaciones enviadas.',
    'Que nuestros departamentos de Marketing y programación tengan un control total sobre la App, es fundamental para nosotros.',
    'Hemos publicado nuestra App en un tiempo récord con excelentes resultados de usabilidad y diseño. El equipo de Reskyt es muy resolutivo y profesional y su asesoramiento ha sido crucial en el éxito de este proyecto.',
    'Fácil y rápida implementación. Gracias a Reskyt, disponemos de una App que podemos personalizar en cualquier momento y así adaptarnos de forma rápida a los cambios constantes que exige el mercado.',
  ],
  ca: [
    'Buscàvem una solució que ens ajudés a fidelitzar els nostres clients i així augmentar la taxa de recurrència del nostre comerç electrònic. Reskyt va resultar ser el soci perfecte per a nosaltres.',
    "A Reskyt hem trobat un partner proper, professional i molt àgil que ens ha permès implementar iniciatives a l'app que van més enllà de la creació d'un canal transaccional addicional: esdeveniments, B2B, personalització, loyalty i omnicanalitat. Imprescindibles!",
    "Gràcies a Reskyt i al seu suport, hem aconseguit que la nostra App sigui líder en la categoria de farmàcia i parafarmàcia. És intuïtiva, ràpida i accessible.",
    "Gràcies a la fàcil integració amb Google Analytics, podem mesurar les visites, vendes i conversions de les notificacions enviades.",
    "Que els nostres departaments de màrqueting i programació tinguin un control total sobre l'App és fonamental per a nosaltres.",
    "Hem publicat la nostra App en un temps rècord amb excel·lents resultats d'usabilitat i disseny. L'equip de Reskyt és molt resolutiu i professional i el seu assessorament ha estat crucial en l'èxit d'aquest projecte.",
    "Implementació fàcil i ràpida. Gràcies a Reskyt, disposem d'una App que podem personalitzar en qualsevol moment i adaptar-nos així de forma ràpida als canvis constants que exigeix el mercat.",
  ],
  en: [
    'We were looking for a solution to help us build customer loyalty and increase the repeat-purchase rate of our eCommerce. Reskyt turned out to be the perfect partner for us.',
    'In Reskyt we found a close, professional and very agile partner that allowed us to implement initiatives in the app that go beyond creating an additional transactional channel: events, B2B, personalisation, loyalty and omnichannel. Essential!',
    'Thanks to Reskyt and their support, our App is now the leader in the pharmacy and parapharmacy category. It is intuitive, fast and accessible.',
    'Thanks to the easy integration with Google Analytics, we can measure the visits, sales and conversions of the notifications we send.',
    'Having our Marketing and development teams in full control of the App is fundamental for us.',
    'We published our App in record time with excellent usability and design results. The Reskyt team is very effective and professional, and their advice was crucial to the success of this project.',
    'Easy, fast implementation. Thanks to Reskyt, we have an App we can personalise at any time, adapting quickly to the constant changes the market demands.',
  ],
  it: [
    'Cercavamo una soluzione che ci aiutasse a fidelizzare i nostri clienti e ad aumentare il tasso di riacquisto del nostro eCommerce. Reskyt si è rivelato il partner perfetto per noi.',
    'In Reskyt abbiamo trovato un partner vicino, professionale e molto agile che ci ha permesso di implementare nell’app iniziative che vanno oltre la creazione di un canale transazionale aggiuntivo: eventi, B2B, personalizzazione, loyalty e omnicanalità. Imprescindibili!',
    'Grazie a Reskyt e al suo supporto, la nostra App è leader nella categoria farmacia e parafarmacia. È intuitiva, veloce e accessibile.',
    'Grazie alla facile integrazione con Google Analytics, possiamo misurare visite, vendite e conversioni delle notifiche inviate.',
    'Che i nostri reparti di marketing e sviluppo abbiano il controllo totale sull’App è fondamentale per noi.',
    'Abbiamo pubblicato la nostra App in tempi record con eccellenti risultati di usabilità e design. Il team di Reskyt è molto risolutivo e professionale e la sua consulenza è stata cruciale per il successo di questo progetto.',
    'Implementazione facile e veloce. Grazie a Reskyt disponiamo di un’App che possiamo personalizzare in qualsiasi momento, adattandoci rapidamente ai continui cambiamenti che il mercato richiede.',
  ],
  nl: [
    'We zochten een oplossing om onze klanten te binden en zo de herhaalaankopen van onze eCommerce te verhogen. Reskyt bleek de perfecte partner voor ons.',
    'In Reskyt vonden we een betrokken, professionele en zeer wendbare partner waarmee we initiatieven in de app konden implementeren die verder gaan dan een extra transactiekanaal: evenementen, B2B, personalisatie, loyalty en omnichannel. Onmisbaar!',
    'Dankzij Reskyt en hun support is onze app nu leider in de categorie farmacie en parafarmacie. Hij is intuïtief, snel en toegankelijk.',
    'Dankzij de eenvoudige integratie met Google Analytics kunnen we de bezoeken, verkopen en conversies van de verzonden meldingen meten.',
    'Dat onze marketing- en developmentteams volledige controle over de app hebben, is fundamenteel voor ons.',
    'We hebben onze app in recordtijd gepubliceerd met uitstekende resultaten op het gebied van gebruiksvriendelijkheid en design. Het team van Reskyt is zeer doortastend en professioneel en hun advies was cruciaal voor het succes van dit project.',
    'Eenvoudige en snelle implementatie. Dankzij Reskyt hebben we een app die we op elk moment kunnen personaliseren, zodat we ons snel kunnen aanpassen aan de constante veranderingen die de markt vraagt.',
  ],
};
