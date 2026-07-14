// Traducciones de contenido: calculadora ROI, landings y piezas sueltas.
import type { Locale } from './index';

interface Item {
  title: string;
  text: string;
}

interface LabelTip {
  label: string;
  tip: string;
}

// --------------------------------------------------------------- calculadora ROI

export interface RoiContent {
  heroHighlight: string;
  heroEnd: string;
  subtitle: string;
  panelTitle: string;
  kpis: LabelTip[];
  fields: LabelTip[];
  sliders: LabelTip[];
  chartMonthlyTitle: string;
  chartMonthlySubtitle: string;
  chartAccTitle: string;
  chartAccSubtitle: string;
  summaryStart: string;
  summaryHighlight: string;
  chipRevenue: string;
  chipTx: string;
  colCurrent: string;
  colWithApp: string;
  tableRows: string[];
  brandsStart: string;
  brandsHighlight: string;
  brandsEnd: string;
  month: string;
  dsMonthlyBase: string;
  dsMonthlyApp: string;
  dsAccBase: string;
  dsAccIncr: string;
}

export const roiContent: Record<Locale, RoiContent> = {
  es: {
    heroHighlight: 'Impulsa tu ROI',
    heroEnd: ' con una app móvil personalizada',
    subtitle: 'Descubre cuánto podrías ganar con la calculadora de ROI de appselling de Reskyt y lleva tu negocio al siguiente nivel en la era mobile-first',
    panelTitle: 'Tus datos',
    kpis: [
      { label: 'ROI del primer año', tip: 'Retorno sobre la inversión anual en la app: (ingresos incrementales del primer año − inversión) / inversión.' },
      { label: 'Crecimiento de las transacciones', tip: 'Incremento de transacciones totales con la adopción de la app plenamente desplegada.' },
      { label: 'Crecimiento de los ingresos', tip: 'Incremento de ingresos totales con la adopción de la app plenamente desplegada.' },
      { label: 'Incremento del valor medio del pedido', tip: 'Variación del AOV combinado de todos los canales gracias al mayor ticket medio en la app.' },
    ],
    fields: [
      { label: 'Visitas mensuales a tu web', tip: 'Número total de visitas a tu sitio web cada mes, sumando todos los dispositivos.' },
      { label: 'Valor medio del pedido', tip: 'Importe medio de cada pedido en tu eCommerce (AOV).' },
      { label: 'Visitas desde móvil', tip: 'Porcentaje del tráfico que llega desde dispositivos móviles.' },
      { label: 'Visitas desde escritorio', tip: 'Se calcula automáticamente: 100% menos las visitas desde móvil.' },
      { label: 'Conversión en móvil', tip: 'Porcentaje de visitas móviles que acaban en compra.' },
      { label: 'Conversión en escritorio', tip: 'Porcentaje de visitas de escritorio que acaban en compra.' },
      { label: 'Inversión anual en la app', tip: 'Coste anual estimado de desarrollo y mantenimiento de la app. Se usa para calcular el ROI.' },
    ],
    sliders: [
      { label: 'Tasa de adopción de la app', tip: 'Porcentaje de tus usuarios móviles que acabarán comprando a través de la app. La adopción crece de forma progresiva durante los primeros meses.' },
      { label: 'Crecimiento mensual del tráfico', tip: 'Crecimiento mensual esperado del tráfico total de tu web.' },
      { label: 'Mejora de conversión en app nativa vs web móvil', tip: 'Cuánto mejor convierte la app frente a la web móvil. Un 100% significa que la app convierte el doble.' },
      { label: 'Incremento del AOV con adopción de la app', tip: 'Incremento del ticket medio de los pedidos realizados desde la app.' },
    ],
    chartMonthlyTitle: 'Ingresos mensuales por adopción de la app',
    chartMonthlySubtitle: 'Proyección a 24 meses con curva de adopción progresiva',
    chartAccTitle: 'Ingresos acumulados por adopción de la app',
    chartAccSubtitle: 'Acumulado del escenario actual más el incremental de la app',
    summaryStart: '¡Hora del AppSell! ',
    summaryHighlight: 'Resultados a 2 años',
    chipRevenue: ' en ingresos adicionales',
    chipTx: ' más transacciones',
    colCurrent: 'Actual',
    colWithApp: 'AppSelling con Reskyt',
    tableRows: [
      'Transacciones en escritorio',
      'Transacciones en móvil',
      'Transacciones en app',
      'Total de transacciones',
      'Ingresos desde escritorio',
      'Ingresos desde móvil',
      'Ingresos desde app',
      'Ingresos totales',
    ],
    brandsStart: 'Únete a las ',
    brandsHighlight: '+750 historias de éxito',
    brandsEnd: ' de Reskyt en todos los sectores',
    month: 'Mes',
    dsMonthlyBase: 'Ingresos mensuales sin app',
    dsMonthlyApp: 'Ingresos mensuales con AppSelling',
    dsAccBase: 'Ingresos acumulados sin app',
    dsAccIncr: 'Ingresos incrementales con AppSelling',
  },
  ca: {
    heroHighlight: 'Impulsa el teu ROI',
    heroEnd: ' amb una app mòbil personalitzada',
    subtitle: "Descobreix quant podries guanyar amb la calculadora de ROI d'appselling de Reskyt i porta el teu negoci al següent nivell en l'era mobile-first",
    panelTitle: 'Les teves dades',
    kpis: [
      { label: 'ROI del primer any', tip: "Retorn sobre la inversió anual en l'app: (ingressos incrementals del primer any − inversió) / inversió." },
      { label: 'Creixement de les transaccions', tip: "Increment de transaccions totals amb l'adopció de l'app plenament desplegada." },
      { label: 'Creixement dels ingressos', tip: "Increment d'ingressos totals amb l'adopció de l'app plenament desplegada." },
      { label: 'Increment del valor mitjà de la comanda', tip: "Variació de l'AOV combinat de tots els canals gràcies al tiquet mitjà més alt a l'app." },
    ],
    fields: [
      { label: 'Visites mensuals a la teva web', tip: 'Nombre total de visites al teu lloc web cada mes, sumant tots els dispositius.' },
      { label: 'Valor mitjà de la comanda', tip: 'Import mitjà de cada comanda al teu eCommerce (AOV).' },
      { label: 'Visites des de mòbil', tip: 'Percentatge del trànsit que arriba des de dispositius mòbils.' },
      { label: 'Visites des d’escriptori', tip: 'Es calcula automàticament: 100% menys les visites des de mòbil.' },
      { label: 'Conversió en mòbil', tip: 'Percentatge de visites mòbils que acaben en compra.' },
      { label: 'Conversió en escriptori', tip: 'Percentatge de visites d’escriptori que acaben en compra.' },
      { label: "Inversió anual en l'app", tip: "Cost anual estimat de desenvolupament i manteniment de l'app. S'usa per calcular el ROI." },
    ],
    sliders: [
      { label: "Taxa d'adopció de l'app", tip: "Percentatge dels teus usuaris mòbils que acabaran comprant a través de l'app. L'adopció creix progressivament durant els primers mesos." },
      { label: 'Creixement mensual del trànsit', tip: 'Creixement mensual esperat del trànsit total de la teva web.' },
      { label: 'Millora de conversió en app nativa vs web mòbil', tip: "Quant millor converteix l'app respecte a la web mòbil. Un 100% vol dir que l'app converteix el doble." },
      { label: "Increment de l'AOV amb l'adopció de l'app", tip: "Increment del tiquet mitjà de les comandes fetes des de l'app." },
    ],
    chartMonthlyTitle: "Ingressos mensuals per adopció de l'app",
    chartMonthlySubtitle: "Projecció a 24 mesos amb corba d'adopció progressiva",
    chartAccTitle: "Ingressos acumulats per adopció de l'app",
    chartAccSubtitle: "Acumulat de l'escenari actual més l'incremental de l'app",
    summaryStart: "És l'hora de l'AppSell! ",
    summaryHighlight: 'Resultats a 2 anys',
    chipRevenue: ' en ingressos addicionals',
    chipTx: ' més transaccions',
    colCurrent: 'Actual',
    colWithApp: 'AppSelling amb Reskyt',
    tableRows: [
      'Transaccions en escriptori',
      'Transaccions en mòbil',
      'Transaccions en app',
      'Total de transaccions',
      'Ingressos des d’escriptori',
      'Ingressos des de mòbil',
      'Ingressos des de l’app',
      'Ingressos totals',
    ],
    brandsStart: "Uneix-te a les ",
    brandsHighlight: "+750 històries d'èxit",
    brandsEnd: ' de Reskyt en tots els sectors',
    month: 'Mes',
    dsMonthlyBase: 'Ingressos mensuals sense app',
    dsMonthlyApp: 'Ingressos mensuals amb AppSelling',
    dsAccBase: 'Ingressos acumulats sense app',
    dsAccIncr: 'Ingressos incrementals amb AppSelling',
  },
  en: {
    heroHighlight: 'Boost your ROI',
    heroEnd: ' with a personalised mobile app',
    subtitle: 'Find out how much you could earn with Reskyt’s appselling ROI calculator and take your business to the next level in the mobile-first era',
    panelTitle: 'Your data',
    kpis: [
      { label: 'First-year ROI', tip: 'Return on the annual app investment: (first-year incremental revenue − investment) / investment.' },
      { label: 'Transactions growth', tip: 'Increase in total transactions with app adoption fully deployed.' },
      { label: 'Revenue growth', tip: 'Increase in total revenue with app adoption fully deployed.' },
      { label: 'Average order value increase', tip: 'Change in the combined AOV across all channels thanks to the higher average ticket in the app.' },
    ],
    fields: [
      { label: 'Monthly visits to your website', tip: 'Total number of visits to your website each month, across all devices.' },
      { label: 'Average order value', tip: 'Average amount of each order in your eCommerce (AOV).' },
      { label: 'Mobile visits', tip: 'Percentage of traffic coming from mobile devices.' },
      { label: 'Desktop visits', tip: 'Calculated automatically: 100% minus mobile visits.' },
      { label: 'Mobile conversion', tip: 'Percentage of mobile visits that end in a purchase.' },
      { label: 'Desktop conversion', tip: 'Percentage of desktop visits that end in a purchase.' },
      { label: 'Annual app investment', tip: 'Estimated annual cost of developing and maintaining the app. Used to calculate ROI.' },
    ],
    sliders: [
      { label: 'App adoption rate', tip: 'Percentage of your mobile users who will end up buying through the app. Adoption grows progressively over the first months.' },
      { label: 'Monthly traffic growth', tip: 'Expected monthly growth of your total website traffic.' },
      { label: 'Native app conversion improvement vs mobile web', tip: 'How much better the app converts compared to the mobile web. 100% means the app converts twice as much.' },
      { label: 'AOV increase with app adoption', tip: 'Increase in the average ticket of orders placed through the app.' },
    ],
    chartMonthlyTitle: 'Monthly revenue from app adoption',
    chartMonthlySubtitle: '24-month projection with a progressive adoption curve',
    chartAccTitle: 'Accumulated revenue from app adoption',
    chartAccSubtitle: 'Current scenario accumulated plus the app’s incremental revenue',
    summaryStart: 'AppSell time! ',
    summaryHighlight: '2-year results',
    chipRevenue: ' in additional revenue',
    chipTx: ' more transactions',
    colCurrent: 'Current',
    colWithApp: 'AppSelling with Reskyt',
    tableRows: [
      'Desktop transactions',
      'Mobile transactions',
      'App transactions',
      'Total transactions',
      'Desktop revenue',
      'Mobile revenue',
      'App revenue',
      'Total revenue',
    ],
    brandsStart: 'Join Reskyt’s ',
    brandsHighlight: '+750 success stories',
    brandsEnd: ' across all sectors',
    month: 'Month',
    dsMonthlyBase: 'Monthly revenue without app',
    dsMonthlyApp: 'Monthly revenue with AppSelling',
    dsAccBase: 'Accumulated revenue without app',
    dsAccIncr: 'Incremental revenue with AppSelling',
  },
  it: {
    heroHighlight: 'Aumenta il tuo ROI',
    heroEnd: ' con un’app mobile personalizzata',
    subtitle: 'Scopri quanto potresti guadagnare con il calcolatore di ROI appselling di Reskyt e porta il tuo business al livello successivo nell’era mobile-first',
    panelTitle: 'I tuoi dati',
    kpis: [
      { label: 'ROI del primo anno', tip: 'Ritorno sull’investimento annuale nell’app: (ricavi incrementali del primo anno − investimento) / investimento.' },
      { label: 'Crescita delle transazioni', tip: 'Aumento delle transazioni totali con l’adozione dell’app pienamente attiva.' },
      { label: 'Crescita dei ricavi', tip: 'Aumento dei ricavi totali con l’adozione dell’app pienamente attiva.' },
      { label: 'Aumento del valore medio dell’ordine', tip: 'Variazione dell’AOV combinato di tutti i canali grazie allo scontrino medio più alto nell’app.' },
    ],
    fields: [
      { label: 'Visite mensili al tuo sito', tip: 'Numero totale di visite al tuo sito web ogni mese, su tutti i dispositivi.' },
      { label: 'Valore medio dell’ordine', tip: 'Importo medio di ogni ordine nel tuo eCommerce (AOV).' },
      { label: 'Visite da mobile', tip: 'Percentuale del traffico proveniente da dispositivi mobili.' },
      { label: 'Visite da desktop', tip: 'Calcolato automaticamente: 100% meno le visite da mobile.' },
      { label: 'Conversione mobile', tip: 'Percentuale di visite mobili che terminano con un acquisto.' },
      { label: 'Conversione desktop', tip: 'Percentuale di visite desktop che terminano con un acquisto.' },
      { label: 'Investimento annuale nell’app', tip: 'Costo annuale stimato di sviluppo e manutenzione dell’app. Si usa per calcolare il ROI.' },
    ],
    sliders: [
      { label: 'Tasso di adozione dell’app', tip: 'Percentuale dei tuoi utenti mobili che finiranno per comprare tramite l’app. L’adozione cresce progressivamente nei primi mesi.' },
      { label: 'Crescita mensile del traffico', tip: 'Crescita mensile prevista del traffico totale del tuo sito.' },
      { label: 'Miglioramento di conversione app nativa vs web mobile', tip: 'Quanto meglio converte l’app rispetto al web mobile. Il 100% significa che l’app converte il doppio.' },
      { label: 'Aumento dell’AOV con l’adozione dell’app', tip: 'Aumento dello scontrino medio degli ordini effettuati dall’app.' },
    ],
    chartMonthlyTitle: 'Ricavi mensili per adozione dell’app',
    chartMonthlySubtitle: 'Proiezione a 24 mesi con curva di adozione progressiva',
    chartAccTitle: 'Ricavi accumulati per adozione dell’app',
    chartAccSubtitle: 'Accumulato dello scenario attuale più l’incrementale dell’app',
    summaryStart: 'È ora di AppSell! ',
    summaryHighlight: 'Risultati a 2 anni',
    chipRevenue: ' di ricavi aggiuntivi',
    chipTx: ' transazioni in più',
    colCurrent: 'Attuale',
    colWithApp: 'AppSelling con Reskyt',
    tableRows: [
      'Transazioni desktop',
      'Transazioni mobile',
      'Transazioni in app',
      'Totale transazioni',
      'Ricavi da desktop',
      'Ricavi da mobile',
      'Ricavi dall’app',
      'Ricavi totali',
    ],
    brandsStart: 'Unisciti alle ',
    brandsHighlight: '+750 storie di successo',
    brandsEnd: ' di Reskyt in tutti i settori',
    month: 'Mese',
    dsMonthlyBase: 'Ricavi mensili senza app',
    dsMonthlyApp: 'Ricavi mensili con AppSelling',
    dsAccBase: 'Ricavi accumulati senza app',
    dsAccIncr: 'Ricavi incrementali con AppSelling',
  },
  nl: {
    heroHighlight: 'Verhoog je ROI',
    heroEnd: ' met een gepersonaliseerde mobiele app',
    subtitle: 'Ontdek hoeveel je zou kunnen verdienen met de appselling ROI-calculator van Reskyt en til je bedrijf naar het volgende niveau in het mobile-first tijdperk',
    panelTitle: 'Jouw gegevens',
    kpis: [
      { label: 'ROI eerste jaar', tip: 'Rendement op de jaarlijkse app-investering: (incrementele omzet eerste jaar − investering) / investering.' },
      { label: 'Groei van transacties', tip: 'Toename van het totale aantal transacties bij volledig uitgerolde app-adoptie.' },
      { label: 'Omzetgroei', tip: 'Toename van de totale omzet bij volledig uitgerolde app-adoptie.' },
      { label: 'Stijging gemiddelde bestelwaarde', tip: 'Verandering van de gecombineerde AOV van alle kanalen dankzij het hogere gemiddelde ticket in de app.' },
    ],
    fields: [
      { label: 'Maandelijkse bezoeken aan je website', tip: 'Totaal aantal bezoeken aan je website per maand, over alle apparaten.' },
      { label: 'Gemiddelde bestelwaarde', tip: 'Gemiddeld bedrag van elke bestelling in je eCommerce (AOV).' },
      { label: 'Mobiele bezoeken', tip: 'Percentage van het verkeer dat van mobiele apparaten komt.' },
      { label: 'Desktopbezoeken', tip: 'Automatisch berekend: 100% min de mobiele bezoeken.' },
      { label: 'Mobiele conversie', tip: 'Percentage mobiele bezoeken dat eindigt in een aankoop.' },
      { label: 'Desktopconversie', tip: 'Percentage desktopbezoeken dat eindigt in een aankoop.' },
      { label: 'Jaarlijkse investering in de app', tip: 'Geschatte jaarlijkse kosten voor ontwikkeling en onderhoud van de app. Wordt gebruikt om de ROI te berekenen.' },
    ],
    sliders: [
      { label: 'App-adoptiegraad', tip: 'Percentage van je mobiele gebruikers dat uiteindelijk via de app zal kopen. De adoptie groeit geleidelijk in de eerste maanden.' },
      { label: 'Maandelijkse verkeersgroei', tip: 'Verwachte maandelijkse groei van het totale verkeer op je website.' },
      { label: 'Conversieverbetering native app vs mobiel web', tip: 'Hoeveel beter de app converteert dan het mobiele web. 100% betekent dat de app twee keer zoveel converteert.' },
      { label: 'AOV-stijging bij app-adoptie', tip: 'Stijging van het gemiddelde ticket van bestellingen via de app.' },
    ],
    chartMonthlyTitle: 'Maandelijkse omzet door app-adoptie',
    chartMonthlySubtitle: '24-maands projectie met progressieve adoptiecurve',
    chartAccTitle: 'Gecumuleerde omzet door app-adoptie',
    chartAccSubtitle: 'Cumulatief van het huidige scenario plus de incrementele omzet van de app',
    summaryStart: 'Tijd voor AppSell! ',
    summaryHighlight: 'Resultaten over 2 jaar',
    chipRevenue: ' aan extra omzet',
    chipTx: ' meer transacties',
    colCurrent: 'Huidig',
    colWithApp: 'AppSelling met Reskyt',
    tableRows: [
      'Desktoptransacties',
      'Mobiele transacties',
      'App-transacties',
      'Totaal transacties',
      'Desktopomzet',
      'Mobiele omzet',
      'App-omzet',
      'Totale omzet',
    ],
    brandsStart: 'Sluit je aan bij de ',
    brandsHighlight: '+750 succesverhalen',
    brandsEnd: ' van Reskyt in alle sectoren',
    month: 'Maand',
    dsMonthlyBase: 'Maandelijkse omzet zonder app',
    dsMonthlyApp: 'Maandelijkse omzet met AppSelling',
    dsAccBase: 'Gecumuleerde omzet zonder app',
    dsAccIncr: 'Incrementele omzet met AppSelling',
  },
};

// ------------------------------------------------------------ descubre-reskyt

export interface DescubreContent {
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  bannerHighlight: string;
  bannerText: string;
  marketingTitleEnd: string;
  marketingSubtitle: string;
  marketing: Item[];
  uwtLead: string;
  uwtFeatures: Item[];
  uwtStats: string[];
  itTitleEnd: string;
  itSubtitle: string;
  it: Item[];
  top5: string;
}

export const descubreContent: Record<Locale, DescubreContent> = {
  es: {
    heroTitle: 'El reto de lanzar una app',
    heroSubtitle: '¿Qué está frenando a las empresas?',
    challenges: ['Costes Elevados', 'Plazos Largos<br />de Desarrollo', 'Dependencia de<br />Equipos Técnicos', 'Retos de<br />Mantenimiento'],
    bannerHighlight: 'Reskyt elimina estos bloqueos',
    bannerText: 'Más rápido, más económico y sin complicaciones tecnológicas.',
    top5: 'Top 5',
    marketingTitleEnd: ' razones para el equipo de marketing',
    marketingSubtitle: 'Convierte el compromiso en ingresos, todo en un solo lugar.',
    marketing: [
      { title: 'Automatización', text: 'Automatización de marketing con tu app, notificaciones push y estrategias para ganar lealtad.' },
      { title: 'Diseño', text: 'Experiencia de usuario optimizada para aumentar las conversiones.' },
      { title: 'Trazabilidad', text: 'Información en tiempo real y seguimiento de campañas push.' },
      { title: 'Versatilidad', text: 'Escalabilidad para crecer a futuro. Totalmente personalizable sin necesidad de conocimientos técnicos.' },
      { title: 'Control', text: 'Controla tus relaciones con los clientes y reduce tu dependencia de Meta y Google Ads.' },
    ],
    uwtLead: 'Todo el Poder del Appselling. Sin las Complicaciones Técnicas de las Apps',
    uwtFeatures: [
      { title: 'Rápida implementación', text: 'Tu app está lista en 4 semanas, totalmente adaptada e integrada…' },
      { title: 'No-Code, Control Total', text: 'Actualiza y personaliza sin intervención de IT' },
      { title: 'Eficiente en Costes', text: 'Sin grandes inversiones, solo un modelo de suscripción escalable' },
      { title: 'Sincronización fluida', text: 'Sin actualizaciones manuales, contenido actualizado en tiempo real' },
    ],
    uwtStats: ['conversión vs. mobile web', 'recurrencia de compra', 'valor de pedido', 'positivo en menos de 6 meses'],
    itTitleEnd: ' razones para el equipo de IT',
    itSubtitle: 'Una app de alto rendimiento, sin sobrecarga para IT',
    it: [
      { title: 'Sin Retrasos', text: 'Lanzamiento rápido, siempre actualizada' },
      { title: 'Sin Recursos Extra', text: 'No requiere equipo técnico dedicado, integración fluida con tu CMS y CRM.' },
      { title: 'Escalabilidad', text: 'Escalado automático, sincronización en tiempo real' },
      { title: 'Normativa', text: 'Seguridad avanzada y cumplimiento normativo' },
      { title: 'Apoyo Técnico', text: 'Soporte técnico especializado para una comunicación fluida cuando sea necesario' },
    ],
  },
  ca: {
    heroTitle: "El repte de llançar una app",
    heroSubtitle: 'Què està frenant les empreses?',
    challenges: ['Costos Elevats', 'Terminis Llargs<br />de Desenvolupament', "Dependència<br />d'Equips Tècnics", 'Reptes de<br />Manteniment'],
    bannerHighlight: 'Reskyt elimina aquests bloqueigs',
    bannerText: 'Més ràpid, més econòmic i sense complicacions tecnològiques.',
    top5: 'Top 5',
    marketingTitleEnd: " raons per a l'equip de màrqueting",
    marketingSubtitle: 'Converteix el compromís en ingressos, tot en un sol lloc.',
    marketing: [
      { title: 'Automatització', text: 'Automatització de màrqueting amb la teva app, notificacions push i estratègies per guanyar lleialtat.' },
      { title: 'Disseny', text: "Experiència d'usuari optimitzada per augmentar les conversions." },
      { title: 'Traçabilitat', text: 'Informació en temps real i seguiment de campanyes push.' },
      { title: 'Versatilitat', text: 'Escalabilitat per créixer a futur. Totalment personalitzable sense necessitat de coneixements tècnics.' },
      { title: 'Control', text: 'Controla les teves relacions amb els clients i redueix la teva dependència de Meta i Google Ads.' },
    ],
    uwtLead: "Tot el poder de l'Appselling. Sense les complicacions tècniques de les apps",
    uwtFeatures: [
      { title: 'Ràpida implementació', text: 'La teva app està llesta en 4 setmanes, totalment adaptada i integrada…' },
      { title: 'No-Code, Control Total', text: "Actualitza i personalitza sense intervenció d'IT" },
      { title: 'Eficient en Costos', text: 'Sense grans inversions, només un model de subscripció escalable' },
      { title: 'Sincronització fluida', text: 'Sense actualitzacions manuals, contingut actualitzat en temps real' },
    ],
    uwtStats: ['conversió vs. web mòbil', 'recurrència de compra', 'valor de comanda', 'positiu en menys de 6 mesos'],
    itTitleEnd: " raons per a l'equip d'IT",
    itSubtitle: "Una app d'alt rendiment, sense sobrecàrrega per a IT",
    it: [
      { title: 'Sense Retards', text: 'Llançament ràpid, sempre actualitzada' },
      { title: 'Sense Recursos Extra', text: 'No requereix equip tècnic dedicat, integració fluida amb el teu CMS i CRM.' },
      { title: 'Escalabilitat', text: 'Escalat automàtic, sincronització en temps real' },
      { title: 'Normativa', text: 'Seguretat avançada i compliment normatiu' },
      { title: 'Suport Tècnic', text: 'Suport tècnic especialitzat per a una comunicació fluida quan calgui' },
    ],
  },
  en: {
    heroTitle: 'The challenge of launching an app',
    heroSubtitle: 'What is holding companies back?',
    challenges: ['High Costs', 'Long Development<br />Timelines', 'Dependence on<br />Technical Teams', 'Maintenance<br />Challenges'],
    bannerHighlight: 'Reskyt removes these blockers',
    bannerText: 'Faster, cheaper and with no technological complications.',
    top5: 'Top 5',
    marketingTitleEnd: ' reasons for the marketing team',
    marketingSubtitle: 'Turn engagement into revenue, all in one place.',
    marketing: [
      { title: 'Automation', text: 'Marketing automation with your app, push notifications and strategies to build loyalty.' },
      { title: 'Design', text: 'User experience optimised to increase conversions.' },
      { title: 'Traceability', text: 'Real-time information and push campaign tracking.' },
      { title: 'Versatility', text: 'Scalability to grow in the future. Fully customisable with no technical knowledge required.' },
      { title: 'Control', text: 'Control your customer relationships and reduce your dependence on Meta and Google Ads.' },
    ],
    uwtLead: 'All the power of Appselling. Without the technical complications of apps',
    uwtFeatures: [
      { title: 'Fast implementation', text: 'Your app is ready in 4 weeks, fully adapted and integrated…' },
      { title: 'No-Code, Full Control', text: 'Update and customise without IT involvement' },
      { title: 'Cost Efficient', text: 'No big investments, just a scalable subscription model' },
      { title: 'Seamless sync', text: 'No manual updates, content updated in real time' },
    ],
    uwtStats: ['conversion vs. mobile web', 'repeat purchases', 'order value', 'positive in under 6 months'],
    itTitleEnd: ' reasons for the IT team',
    itSubtitle: 'A high-performance app, with no overload for IT',
    it: [
      { title: 'No Delays', text: 'Fast launch, always up to date' },
      { title: 'No Extra Resources', text: 'No dedicated technical team required, seamless integration with your CMS and CRM.' },
      { title: 'Scalability', text: 'Automatic scaling, real-time synchronisation' },
      { title: 'Compliance', text: 'Advanced security and regulatory compliance' },
      { title: 'Technical Support', text: 'Specialised technical support for smooth communication whenever needed' },
    ],
  },
  it: {
    heroTitle: 'La sfida di lanciare un’app',
    heroSubtitle: 'Cosa sta frenando le aziende?',
    challenges: ['Costi Elevati', 'Tempi Lunghi<br />di Sviluppo', 'Dipendenza da<br />Team Tecnici', 'Sfide di<br />Manutenzione'],
    bannerHighlight: 'Reskyt elimina questi blocchi',
    bannerText: 'Più veloce, più economico e senza complicazioni tecnologiche.',
    top5: 'Top 5',
    marketingTitleEnd: ' motivi per il team marketing',
    marketingSubtitle: 'Trasforma l’engagement in ricavi, tutto in un unico posto.',
    marketing: [
      { title: 'Automazione', text: 'Marketing automation con la tua app, notifiche push e strategie per costruire fedeltà.' },
      { title: 'Design', text: 'Esperienza utente ottimizzata per aumentare le conversioni.' },
      { title: 'Tracciabilità', text: 'Informazioni in tempo reale e monitoraggio delle campagne push.' },
      { title: 'Versatilità', text: 'Scalabilità per crescere in futuro. Totalmente personalizzabile senza conoscenze tecniche.' },
      { title: 'Controllo', text: 'Controlla le relazioni con i tuoi clienti e riduci la dipendenza da Meta e Google Ads.' },
    ],
    uwtLead: 'Tutta la potenza dell’Appselling. Senza le complicazioni tecniche delle app',
    uwtFeatures: [
      { title: 'Implementazione rapida', text: 'La tua app è pronta in 4 settimane, totalmente adattata e integrata…' },
      { title: 'No-Code, Controllo Totale', text: 'Aggiorna e personalizza senza l’intervento dell’IT' },
      { title: 'Efficiente nei Costi', text: 'Nessun grande investimento, solo un modello di abbonamento scalabile' },
      { title: 'Sincronizzazione fluida', text: 'Nessun aggiornamento manuale, contenuti aggiornati in tempo reale' },
    ],
    uwtStats: ['conversione vs. web mobile', 'acquisti ricorrenti', 'valore dell’ordine', 'positivo in meno di 6 mesi'],
    itTitleEnd: ' motivi per il team IT',
    itSubtitle: 'Un’app ad alte prestazioni, senza sovraccarico per l’IT',
    it: [
      { title: 'Senza Ritardi', text: 'Lancio rapido, sempre aggiornata' },
      { title: 'Senza Risorse Extra', text: 'Non richiede un team tecnico dedicato, integrazione fluida con il tuo CMS e CRM.' },
      { title: 'Scalabilità', text: 'Scalabilità automatica, sincronizzazione in tempo reale' },
      { title: 'Normativa', text: 'Sicurezza avanzata e conformità normativa' },
      { title: 'Supporto Tecnico', text: 'Supporto tecnico specializzato per una comunicazione fluida quando serve' },
    ],
  },
  nl: {
    heroTitle: 'De uitdaging van een app lanceren',
    heroSubtitle: 'Wat houdt bedrijven tegen?',
    challenges: ['Hoge Kosten', 'Lange Ontwikkel-<br />trajecten', 'Afhankelijkheid van<br />Technische Teams', 'Onderhouds-<br />uitdagingen'],
    bannerHighlight: 'Reskyt neemt deze blokkades weg',
    bannerText: 'Sneller, goedkoper en zonder technologische complicaties.',
    top5: 'Top 5',
    marketingTitleEnd: ' redenen voor het marketingteam',
    marketingSubtitle: 'Zet betrokkenheid om in omzet, alles op één plek.',
    marketing: [
      { title: 'Automatisering', text: 'Marketingautomatisering met je app, pushmeldingen en strategieën om loyaliteit op te bouwen.' },
      { title: 'Design', text: 'Gebruikerservaring geoptimaliseerd om conversies te verhogen.' },
      { title: 'Traceerbaarheid', text: 'Realtime informatie en tracking van pushcampagnes.' },
      { title: 'Veelzijdigheid', text: 'Schaalbaarheid om in de toekomst te groeien. Volledig aanpasbaar zonder technische kennis.' },
      { title: 'Controle', text: 'Beheer je klantrelaties en verminder je afhankelijkheid van Meta en Google Ads.' },
    ],
    uwtLead: 'Alle kracht van Appselling. Zonder de technische complicaties van apps',
    uwtFeatures: [
      { title: 'Snelle implementatie', text: 'Je app is klaar in 4 weken, volledig aangepast en geïntegreerd…' },
      { title: 'No-Code, Volledige Controle', text: 'Update en personaliseer zonder tussenkomst van IT' },
      { title: 'Kostenefficiënt', text: 'Geen grote investeringen, alleen een schaalbaar abonnementsmodel' },
      { title: 'Vloeiende synchronisatie', text: 'Geen handmatige updates, content in realtime bijgewerkt' },
    ],
    uwtStats: ['conversie vs. mobiel web', 'herhaalaankopen', 'bestelwaarde', 'positief binnen 6 maanden'],
    itTitleEnd: ' redenen voor het IT-team',
    itSubtitle: 'Een high-performance app, zonder overbelasting voor IT',
    it: [
      { title: 'Geen Vertragingen', text: 'Snelle lancering, altijd up-to-date' },
      { title: 'Geen Extra Middelen', text: 'Geen toegewijd technisch team nodig, naadloze integratie met je CMS en CRM.' },
      { title: 'Schaalbaarheid', text: 'Automatisch schalen, realtime synchronisatie' },
      { title: 'Regelgeving', text: 'Geavanceerde beveiliging en naleving van regelgeving' },
      { title: 'Technische Ondersteuning', text: 'Gespecialiseerde technische ondersteuning voor vlotte communicatie wanneer nodig' },
    ],
  },
};

// ---------------------------------------- landings pequeñas y piezas sueltas

export interface MiscContent {
  graciasTitleStart: string;
  graciasTitleHighlight: string;
  graciasText: string;
  graciasPartnerText: string;
  graciasHome: string;
  graciasPartnerCta: string;
  m4cBadge: string;
  m4cTitle: string;
  m4cSubtitle: string;
  desarrolloTitleStart: string;
  desarrolloTitleHighlight: string;
  desarrolloTitleEnd: string;
  desarrolloSubtitle: string;
  desarrolloAppsTitleStart: string;
  desarrolloAppsTitleHighlight: string;
  crearHeroStart: string;
  crearHeroHighlight: string;
  crearHeroEnd: string;
  crearSubtitle: string;
  crearBase: Item[];
  crearReviewsTitle: string;
  crearReviewsText: string;
  postReadingTime: string;
  postRelated: string;
}

export const miscContent: Record<Locale, MiscContent> = {
  es: {
    graciasTitleStart: '¡Gracias por ',
    graciasTitleHighlight: 'Contactar',
    graciasText: '¡En breve nos pondremos en contacto contigo para empezar el proyecto de tu app!',
    graciasPartnerText: '¡En breve nos pondremos en contacto contigo para presentarte nuestro Programa para Partners!',
    graciasHome: 'Volver al inicio',
    graciasPartnerCta: 'Ver el programa Partners',
    m4cBadge: 'Marketing4eCommerce',
    m4cTitle: 'Marketer, gracias a Marketing4eCommerce consigue tu demo personalizada Gratis y un 20% de descuento en tu primer año',
    m4cSubtitle: 'Introduce tus datos y en breve nos pondremos en contacto.',
    desarrolloTitleStart: 'Desarrollo de Apps para los ',
    desarrolloTitleHighlight: 'mejores eCommerce',
    desarrolloTitleEnd: ' B2C y B2B',
    desarrolloSubtitle: 'La plataforma de creación de Aplicaciones móviles más utilizada por las tiendas online en España, Latam y Europa.',
    desarrolloAppsTitleStart: 'Apps publicadas en España ',
    desarrolloAppsTitleHighlight: '¡y muchas más!',
    crearHeroStart: 'La plataforma de creación de Apps con ',
    crearHeroHighlight: 'más funcionalidades',
    crearHeroEnd: ' del mercado',
    crearSubtitle: 'Todas las herramientas al alcance de tu mano para crear una app intuitiva que hará disparar las ventas de tu eCommerce.',
    crearBase: [
      { title: 'Plataforma No-code', text: 'Gracias a la plataforma podrás crear composiciones e iconografía, para dar a tus clientes una manera fácil e intuitiva a la hora de navegar por la app.' },
      { title: 'Notificaciones Push', text: 'Comunícate con tus clientes de forma directa para informarle de ofertas, para recuperar carritos abandonados, novedades o códigos descuento para su cumpleaños.' },
    ],
    crearReviewsTitle: 'Las valoraciones y reseñas generan confianza',
    crearReviewsText: 'La confianza y la seguridad son uno de los puntos más importantes a la hora de la toma de decisión de compra. Nuestras Apps permiten que los usuarios valoren y reseñen directamente.',
    postReadingTime: 'min de lectura',
    postRelated: 'También te puede interesar…',
  },
  ca: {
    graciasTitleStart: 'Gràcies per ',
    graciasTitleHighlight: 'Contactar',
    graciasText: 'En breu ens posarem en contacte amb tu per començar el projecte de la teva app!',
    graciasPartnerText: 'En breu ens posarem en contacte amb tu per presentar-te el nostre Programa per a Partners!',
    graciasHome: "Tornar a l'inici",
    graciasPartnerCta: 'Veure el programa Partners',
    m4cBadge: 'Marketing4eCommerce',
    m4cTitle: 'Marketer, gràcies a Marketing4eCommerce aconsegueix la teva demo personalitzada Gratis i un 20% de descompte el teu primer any',
    m4cSubtitle: 'Introdueix les teves dades i en breu ens posarem en contacte.',
    desarrolloTitleStart: "Desenvolupament d'Apps per als ",
    desarrolloTitleHighlight: 'millors eCommerce',
    desarrolloTitleEnd: ' B2C i B2B',
    desarrolloSubtitle: "La plataforma de creació d'aplicacions mòbils més utilitzada per les botigues online a Espanya, Latam i Europa.",
    desarrolloAppsTitleStart: 'Apps publicades a Espanya ',
    desarrolloAppsTitleHighlight: 'i moltes més!',
    crearHeroStart: "La plataforma de creació d'Apps amb ",
    crearHeroHighlight: 'més funcionalitats',
    crearHeroEnd: ' del mercat',
    crearSubtitle: "Totes les eines a l'abast de la teva mà per crear una app intuïtiva que farà disparar les vendes del teu eCommerce.",
    crearBase: [
      { title: 'Plataforma No-code', text: "Gràcies a la plataforma podràs crear composicions i iconografia, per donar als teus clients una manera fàcil i intuïtiva de navegar per l'app." },
      { title: 'Notificacions Push', text: "Comunica't amb els teus clients de forma directa per informar-los d'ofertes, recuperar carrets abandonats, novetats o codis de descompte pel seu aniversari." },
    ],
    crearReviewsTitle: 'Les valoracions i ressenyes generen confiança',
    crearReviewsText: "La confiança i la seguretat són un dels punts més importants a l'hora de prendre la decisió de compra. Les nostres Apps permeten que els usuaris valorin i ressenyin directament.",
    postReadingTime: 'min de lectura',
    postRelated: 'També et pot interessar…',
  },
  en: {
    graciasTitleStart: 'Thanks for ',
    graciasTitleHighlight: 'getting in touch',
    graciasText: 'We will contact you shortly to start your app project!',
    graciasPartnerText: 'We will contact you shortly to introduce you to our Partner Programme!',
    graciasHome: 'Back to home',
    graciasPartnerCta: 'See the Partner programme',
    m4cBadge: 'Marketing4eCommerce',
    m4cTitle: 'Marketer, thanks to Marketing4eCommerce get your personalised demo for Free and a 20% discount on your first year',
    m4cSubtitle: 'Enter your details and we will contact you shortly.',
    desarrolloTitleStart: 'App development for the ',
    desarrolloTitleHighlight: 'best B2C and B2B eCommerce',
    desarrolloTitleEnd: '',
    desarrolloSubtitle: 'The mobile app creation platform most used by online stores in Spain, Latam and Europe.',
    desarrolloAppsTitleStart: 'Apps published in Spain ',
    desarrolloAppsTitleHighlight: 'and many more!',
    crearHeroStart: 'The app creation platform with the ',
    crearHeroHighlight: 'most features',
    crearHeroEnd: ' on the market',
    crearSubtitle: 'All the tools at your fingertips to create an intuitive app that will skyrocket your eCommerce sales.',
    crearBase: [
      { title: 'No-code platform', text: 'With the platform you can create layouts and iconography, giving your customers an easy, intuitive way to navigate the app.' },
      { title: 'Push notifications', text: 'Communicate directly with your customers about offers, abandoned cart recovery, news or birthday discount codes.' },
    ],
    crearReviewsTitle: 'Ratings and reviews build trust',
    crearReviewsText: 'Trust and security are among the most important factors in the purchase decision. Our Apps let users rate and review directly.',
    postReadingTime: 'min read',
    postRelated: 'You may also be interested in…',
  },
  it: {
    graciasTitleStart: 'Grazie per ',
    graciasTitleHighlight: 'averci contattato',
    graciasText: 'Ti contatteremo a breve per iniziare il progetto della tua app!',
    graciasPartnerText: 'Ti contatteremo a breve per presentarti il nostro Programma Partner!',
    graciasHome: 'Torna alla home',
    graciasPartnerCta: 'Vedi il programma Partner',
    m4cBadge: 'Marketing4eCommerce',
    m4cTitle: 'Marketer, grazie a Marketing4eCommerce ottieni la tua demo personalizzata Gratis e uno sconto del 20% sul primo anno',
    m4cSubtitle: 'Inserisci i tuoi dati e ti contatteremo a breve.',
    desarrolloTitleStart: 'Sviluppo di App per i ',
    desarrolloTitleHighlight: 'migliori eCommerce',
    desarrolloTitleEnd: ' B2C e B2B',
    desarrolloSubtitle: 'La piattaforma di creazione di app mobili più utilizzata dai negozi online in Spagna, Latam ed Europa.',
    desarrolloAppsTitleStart: 'App pubblicate in Spagna ',
    desarrolloAppsTitleHighlight: 'e molte altre!',
    crearHeroStart: 'La piattaforma di creazione di App con ',
    crearHeroHighlight: 'più funzionalità',
    crearHeroEnd: ' sul mercato',
    crearSubtitle: 'Tutti gli strumenti a portata di mano per creare un’app intuitiva che farà decollare le vendite del tuo eCommerce.',
    crearBase: [
      { title: 'Piattaforma No-code', text: 'Grazie alla piattaforma potrai creare composizioni e iconografie, offrendo ai tuoi clienti un modo facile e intuitivo di navigare nell’app.' },
      { title: 'Notifiche Push', text: 'Comunica direttamente con i tuoi clienti per informarli di offerte, recuperare carrelli abbandonati, novità o codici sconto per il compleanno.' },
    ],
    crearReviewsTitle: 'Valutazioni e recensioni generano fiducia',
    crearReviewsText: 'Fiducia e sicurezza sono tra i fattori più importanti nella decisione di acquisto. Le nostre App permettono agli utenti di valutare e recensire direttamente.',
    postReadingTime: 'min di lettura',
    postRelated: 'Potrebbe interessarti anche…',
  },
  nl: {
    graciasTitleStart: 'Bedankt voor je ',
    graciasTitleHighlight: 'bericht',
    graciasText: 'We nemen binnenkort contact met je op om het project van je app te starten!',
    graciasPartnerText: 'We nemen binnenkort contact met je op om ons Partnerprogramma voor te stellen!',
    graciasHome: 'Terug naar home',
    graciasPartnerCta: 'Bekijk het Partnerprogramma',
    m4cBadge: 'Marketing4eCommerce',
    m4cTitle: 'Marketer, dankzij Marketing4eCommerce krijg je je gepersonaliseerde demo Gratis en 20% korting op je eerste jaar',
    m4cSubtitle: 'Vul je gegevens in en we nemen snel contact op.',
    desarrolloTitleStart: 'App-ontwikkeling voor de ',
    desarrolloTitleHighlight: 'beste B2C- en B2B-eCommerce',
    desarrolloTitleEnd: '',
    desarrolloSubtitle: 'Het platform voor het maken van mobiele apps dat het meest wordt gebruikt door webshops in Spanje, Latam en Europa.',
    desarrolloAppsTitleStart: 'Apps gepubliceerd in Spanje ',
    desarrolloAppsTitleHighlight: 'en nog veel meer!',
    crearHeroStart: 'Het app-creatieplatform met de ',
    crearHeroHighlight: 'meeste functies',
    crearHeroEnd: ' op de markt',
    crearSubtitle: 'Alle tools binnen handbereik om een intuïtieve app te maken die de verkoop van je eCommerce laat exploderen.',
    crearBase: [
      { title: 'No-code platform', text: 'Met het platform kun je composities en iconografie maken, zodat je klanten gemakkelijk en intuïtief door de app navigeren.' },
      { title: 'Pushmeldingen', text: 'Communiceer rechtstreeks met je klanten over aanbiedingen, verlaten winkelwagens, nieuwtjes of kortingscodes voor hun verjaardag.' },
    ],
    crearReviewsTitle: 'Beoordelingen en reviews wekken vertrouwen',
    crearReviewsText: 'Vertrouwen en veiligheid behoren tot de belangrijkste factoren bij de aankoopbeslissing. Onze apps laten gebruikers direct beoordelen en reviewen.',
    postReadingTime: 'min leestijd',
    postRelated: 'Misschien vind je dit ook interessant…',
  },
};

// -------------------------------------------------------------------- partners

export interface PartnersContent {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  lead: string;
  text: string;
  todoTitle: string;
  todoItems: string[];
  cta: string;
  whyStart: string;
  whyHighlight: string;
  reasons: { title: string; text: string; highlight: string }[];
  closingStart: string;
  closingBold: string;
}

export const partnersContent: Record<Locale, PartnersContent> = {
  es: {
    titleStart: 'Programa ',
    titleHighlight: 'Partners',
    titleEnd: ' RESKYT',
    lead: 'REVOLUCIONA las Ventas de los eCommerce de tus clientes.',
    text: 'Da un paso más en la digitalización de sus negocios, creando sus aplicaciones. En Reskyt no sólo encontrarás un partner tecnológico, sino que te unirás a un equipo que vive con pasión cada proyecto que hace.',
    todoTitle: 'Nos ocupamos de TODO:',
    todoItems: [
      'Presentación de demo a tus clientes.',
      'Creación y diseño de Apps, formación y publicación en los markets Google Play y App Store.',
      'Soporte técnico especializado.',
    ],
    cta: '¡Únete al Appselling!',
    whyStart: '¿Porqué ',
    whyHighlight: 'RESKYT',
    reasons: [
      { title: 'La plataforma más completa', text: 'Para desarrollar una APP se requiere una inversión muy alta en dinero y tiempo. Reskyt es la plataforma más completa y más utilizada por los eCommerce, agencias y partners.', highlight: 'Nos avalan más de 370 eCommerce de alto rendimiento' },
      { title: 'No esperes a que lo haga otro', text: 'Todos los ecommerce terminarán con una APP, no esperes a que lo haga otro. Fideliza a tus clientes.', highlight: '¡Sé el partner GLOBAL de soluciones digitales de tus clientes!' },
      { title: 'Sin depender de programadores', text: 'El responsable de Marketing del cliente o su agencia de MK digital podrá realizar los cambios que necesite a través de la plataforma sin precisar de ningún programador. Modifica Menús, Submenús, Portadas, Sliders, etc.', highlight: 'Bienvenido a la nueva generación de APPs ¡Ahorra tiempo!' },
      { title: 'Sincronización al instante', text: 'Los cambios de contenido en la web se sincronizan al instante en la App ya que carga directamente el contenido de la web.', highlight: 'Más comodidad, más usabilidad, ¡más ventas!' },
      { title: 'El mejor canal para fidelizar', text: 'Gracias a las notificaciones, la App es el mejor canal para fidelizar e incrementar las ventas de un eCommerce. Con Reskyt podrás segmentar las notificaciones según tus necesidades.', highlight: 'Las notificaciones Push tienen la conversión más alta que los emails' },
      { title: 'Compatible con todas tus herramientas', text: 'Reskyt se adapta a la perfección con todas las herramientas de los ecommerce: Whatsapp, Oct8ne, Zendesk, Doofinder, Apisearch, Sequra, Google Maps, Google Analytics y muchas más.', highlight: '¡Nunca había sido tan fácil!' },
      { title: 'En constante evolución', text: 'La plataforma Reskyt está en constante evolución y ofrece la última tecnología, en las nuevas actualizaciones, sin necesidad de publicación en App Store y Google Play.', highlight: '¡Adiós a las actualizaciones manuales!' },
    ],
    closingStart: 'Todas las herramientas al alcance de tu mano para crear una app intuitiva que hará disparar las ventas de tu eCommerce. ',
    closingBold: '¡Nunca había sido tan fácil crear una APP!',
  },
  ca: {
    titleStart: 'Programa ',
    titleHighlight: 'Partners',
    titleEnd: ' RESKYT',
    lead: 'REVOLUCIONA les vendes dels eCommerce dels teus clients.',
    text: "Fes un pas més en la digitalització dels seus negocis, creant les seves aplicacions. A Reskyt no només trobaràs un partner tecnològic, sinó que t'uniràs a un equip que viu amb passió cada projecte que fa.",
    todoTitle: "Ens ocupem de TOT:",
    todoItems: [
      'Presentació de demo als teus clients.',
      "Creació i disseny d'Apps, formació i publicació als markets Google Play i App Store.",
      'Suport tècnic especialitzat.',
    ],
    cta: "Uneix-te a l'Appselling!",
    whyStart: 'Per què ',
    whyHighlight: 'RESKYT',
    reasons: [
      { title: 'La plataforma més completa', text: "Per desenvolupar una APP cal una inversió molt alta en diners i temps. Reskyt és la plataforma més completa i més utilitzada pels eCommerce, agències i partners.", highlight: "Ens avalen més de 370 eCommerce d'alt rendiment" },
      { title: "No esperis que ho faci un altre", text: 'Tots els ecommerce acabaran amb una APP, no esperis que ho faci un altre. Fidelitza els teus clients.', highlight: 'Sigues el partner GLOBAL de solucions digitals dels teus clients!' },
      { title: 'Sense dependre de programadors', text: "El responsable de màrqueting del client o la seva agència de MK digital podrà fer els canvis que necessiti a través de la plataforma sense necessitar cap programador. Modifica menús, submenús, portades, sliders, etc.", highlight: 'Benvingut a la nova generació d’APPs. Estalvia temps!' },
      { title: "Sincronització a l'instant", text: "Els canvis de contingut a la web se sincronitzen a l'instant a l'App, ja que carrega directament el contingut de la web.", highlight: 'Més comoditat, més usabilitat, més vendes!' },
      { title: 'El millor canal per fidelitzar', text: "Gràcies a les notificacions, l'App és el millor canal per fidelitzar i incrementar les vendes d'un eCommerce. Amb Reskyt podràs segmentar les notificacions segons les teves necessitats.", highlight: 'Les notificacions push tenen una conversió més alta que els emails' },
      { title: 'Compatible amb totes les teves eines', text: "Reskyt s'adapta a la perfecció amb totes les eines dels ecommerce: Whatsapp, Oct8ne, Zendesk, Doofinder, Apisearch, Sequra, Google Maps, Google Analytics i moltes més.", highlight: 'Mai havia estat tan fàcil!' },
      { title: 'En constant evolució', text: "La plataforma Reskyt està en constant evolució i ofereix l'última tecnologia, en les noves actualitzacions, sense necessitat de publicació a l'App Store i Google Play.", highlight: 'Adéu a les actualitzacions manuals!' },
    ],
    closingStart: "Totes les eines a l'abast de la teva mà per crear una app intuïtiva que farà disparar les vendes del teu eCommerce. ",
    closingBold: 'Mai havia estat tan fàcil crear una APP!',
  },
  en: {
    titleStart: 'RESKYT ',
    titleHighlight: 'Partner',
    titleEnd: ' Programme',
    lead: 'REVOLUTIONISE your clients’ eCommerce sales.',
    text: 'Take their businesses one step further in digitalisation by creating their applications. At Reskyt you will not only find a technology partner — you will join a team that lives every project with passion.',
    todoTitle: 'We take care of EVERYTHING:',
    todoItems: [
      'Demo presentation to your clients.',
      'App creation and design, training and publication on Google Play and the App Store.',
      'Specialised technical support.',
    ],
    cta: 'Join the Appselling!',
    whyStart: 'Why ',
    whyHighlight: 'RESKYT',
    reasons: [
      { title: 'The most complete platform', text: 'Developing an APP requires a very high investment of money and time. Reskyt is the most complete platform, the most used by eCommerce, agencies and partners.', highlight: 'More than 370 high-performance eCommerce back us' },
      { title: 'Don’t wait for someone else to do it', text: 'Every eCommerce will end up with an APP — don’t wait for someone else to do it. Build your clients’ loyalty.', highlight: 'Become your clients’ GLOBAL digital solutions partner!' },
      { title: 'No dependence on developers', text: 'The client’s marketing manager or their digital agency can make any changes through the platform without needing a developer. Edit menus, submenus, covers, sliders, etc.', highlight: 'Welcome to the new generation of APPs. Save time!' },
      { title: 'Instant synchronisation', text: 'Content changes on the website sync instantly to the App, since it loads the web content directly.', highlight: 'More convenience, more usability, more sales!' },
      { title: 'The best loyalty channel', text: 'Thanks to notifications, the App is the best channel to build loyalty and grow an eCommerce’s sales. With Reskyt you can segment notifications to your needs.', highlight: 'Push notifications convert better than emails' },
      { title: 'Compatible with all your tools', text: 'Reskyt fits perfectly with every eCommerce tool: Whatsapp, Oct8ne, Zendesk, Doofinder, Apisearch, Sequra, Google Maps, Google Analytics and many more.', highlight: 'It has never been this easy!' },
      { title: 'Constantly evolving', text: 'The Reskyt platform is constantly evolving and delivers the latest technology in new updates, with no need to republish on the App Store or Google Play.', highlight: 'Goodbye to manual updates!' },
    ],
    closingStart: 'All the tools at your fingertips to create an intuitive app that will skyrocket your eCommerce sales. ',
    closingBold: 'Creating an APP has never been this easy!',
  },
  it: {
    titleStart: 'Programma ',
    titleHighlight: 'Partner',
    titleEnd: ' RESKYT',
    lead: 'RIVOLUZIONA le vendite degli eCommerce dei tuoi clienti.',
    text: 'Fai un passo avanti nella digitalizzazione dei loro business creando le loro applicazioni. In Reskyt non troverai solo un partner tecnologico: ti unirai a un team che vive con passione ogni progetto.',
    todoTitle: 'Ci occupiamo di TUTTO:',
    todoItems: [
      'Presentazione della demo ai tuoi clienti.',
      'Creazione e design delle App, formazione e pubblicazione su Google Play e App Store.',
      'Supporto tecnico specializzato.',
    ],
    cta: 'Unisciti all’Appselling!',
    whyStart: 'Perché ',
    whyHighlight: 'RESKYT',
    reasons: [
      { title: 'La piattaforma più completa', text: 'Sviluppare un’APP richiede un investimento molto alto di denaro e tempo. Reskyt è la piattaforma più completa e più utilizzata da eCommerce, agenzie e partner.', highlight: 'Ci sostengono più di 370 eCommerce ad alte prestazioni' },
      { title: 'Non aspettare che lo faccia un altro', text: 'Tutti gli ecommerce finiranno con un’APP: non aspettare che lo faccia un altro. Fidelizza i tuoi clienti.', highlight: 'Diventa il partner GLOBALE di soluzioni digitali dei tuoi clienti!' },
      { title: 'Senza dipendere dagli sviluppatori', text: 'Il responsabile marketing del cliente o la sua agenzia digitale potrà fare le modifiche necessarie tramite la piattaforma senza bisogno di programmatori. Modifica menù, sottomenù, copertine, slider, ecc.', highlight: 'Benvenuto nella nuova generazione di APP. Risparmia tempo!' },
      { title: 'Sincronizzazione istantanea', text: 'Le modifiche ai contenuti del sito si sincronizzano all’istante nell’App, che carica direttamente i contenuti web.', highlight: 'Più comodità, più usabilità, più vendite!' },
      { title: 'Il miglior canale di fidelizzazione', text: 'Grazie alle notifiche, l’App è il miglior canale per fidelizzare e aumentare le vendite di un eCommerce. Con Reskyt puoi segmentare le notifiche secondo le tue esigenze.', highlight: 'Le notifiche push convertono più delle email' },
      { title: 'Compatibile con tutti i tuoi strumenti', text: 'Reskyt si adatta alla perfezione a tutti gli strumenti degli ecommerce: Whatsapp, Oct8ne, Zendesk, Doofinder, Apisearch, Sequra, Google Maps, Google Analytics e molti altri.', highlight: 'Non è mai stato così facile!' },
      { title: 'In costante evoluzione', text: 'La piattaforma Reskyt è in costante evoluzione e offre l’ultima tecnologia nei nuovi aggiornamenti, senza bisogno di ripubblicare su App Store e Google Play.', highlight: 'Addio agli aggiornamenti manuali!' },
    ],
    closingStart: 'Tutti gli strumenti a portata di mano per creare un’app intuitiva che farà decollare le vendite del tuo eCommerce. ',
    closingBold: 'Creare un’APP non è mai stato così facile!',
  },
  nl: {
    titleStart: 'RESKYT ',
    titleHighlight: 'Partner',
    titleEnd: 'programma',
    lead: 'REVOLUTIONEER de verkoop van de eCommerce van je klanten.',
    text: 'Zet een stap verder in de digitalisering van hun bedrijven door hun applicaties te bouwen. Bij Reskyt vind je niet alleen een technologiepartner — je sluit je aan bij een team dat elk project met passie beleeft.',
    todoTitle: 'Wij regelen ALLES:',
    todoItems: [
      'Demopresentatie aan je klanten.',
      'Creatie en ontwerp van apps, training en publicatie op Google Play en de App Store.',
      'Gespecialiseerde technische ondersteuning.',
    ],
    cta: 'Doe mee met Appselling!',
    whyStart: 'Waarom ',
    whyHighlight: 'RESKYT',
    reasons: [
      { title: 'Het meest complete platform', text: 'Een APP ontwikkelen vraagt een zeer hoge investering in geld en tijd. Reskyt is het meest complete platform en het meest gebruikt door eCommerce, agencies en partners.', highlight: 'Meer dan 370 goed presterende eCommerce staan achter ons' },
      { title: 'Wacht niet tot een ander het doet', text: 'Elke eCommerce eindigt met een APP — wacht niet tot een ander het doet. Bind je klanten.', highlight: 'Word de WERELDWIJDE partner voor digitale oplossingen van je klanten!' },
      { title: 'Niet afhankelijk van ontwikkelaars', text: 'De marketingverantwoordelijke van de klant of hun digitale bureau kan alle wijzigingen via het platform doorvoeren zonder programmeur. Pas menu’s, submenu’s, covers, sliders enz. aan.', highlight: 'Welkom bij de nieuwe generatie APPs. Bespaar tijd!' },
      { title: 'Directe synchronisatie', text: 'Contentwijzigingen op de website synchroniseren direct met de app, die de webcontent rechtstreeks laadt.', highlight: 'Meer gemak, meer gebruiksvriendelijkheid, meer verkoop!' },
      { title: 'Het beste loyaliteitskanaal', text: 'Dankzij meldingen is de app het beste kanaal om klanten te binden en de verkoop van een eCommerce te verhogen. Met Reskyt kun je meldingen segmenteren naar behoefte.', highlight: 'Pushmeldingen converteren beter dan e-mails' },
      { title: 'Compatibel met al je tools', text: 'Reskyt past perfect bij alle eCommerce-tools: Whatsapp, Oct8ne, Zendesk, Doofinder, Apisearch, Sequra, Google Maps, Google Analytics en nog veel meer.', highlight: 'Zo makkelijk was het nog nooit!' },
      { title: 'Constant in ontwikkeling', text: 'Het Reskyt-platform evolueert voortdurend en biedt de nieuwste technologie in nieuwe updates, zonder opnieuw te publiceren in de App Store en Google Play.', highlight: 'Vaarwel handmatige updates!' },
    ],
    closingStart: 'Alle tools binnen handbereik om een intuïtieve app te maken die de verkoop van je eCommerce laat exploderen. ',
    closingBold: 'Een APP maken was nog nooit zo makkelijk!',
  },
};

// ---------------------------------------------------------- control horario

export interface ControlHorarioContent {
  titleStart: string;
  titleHighlight: string;
  heroText1: string;
  heroText2: string;
  whyStart: string;
  whyHighlight: string;
  whyEnd: string;
  reasons: Item[];
  featuresTitle: string;
  features: Item[];
  accessTitleStart: string;
  accessTitleHighlight: string;
  access: Item[];
  pricingText: string;
  pricingCta: string;
}

export const controlHorarioContent: Record<Locale, ControlHorarioContent> = {
  es: {
    titleStart: 'Control ',
    titleHighlight: 'Horario',
    heroText1: 'El 12 de mayo entró en vigor el Decreto Ley 8/2019 sobre el Registro de la Jornada Laboral Obligatorio.',
    heroText2: 'Las empresas garantizarán el registro diario de la jornada, que deberá incluir el horario concreto de inicio y finalización de la jornada de trabajo de cada persona trabajadora.',
    whyStart: '¿Por qué contratar el sistema de ',
    whyHighlight: 'CONTROL HORARIO',
    whyEnd: ' Reskyt?',
    reasons: [
      { title: 'Por ser sencillo e intuitivo', text: 'Una vez registrado, el empleado sólo tiene que efectuar un clic en el botón de Inicio-Final, con posibilidad de registro de múltiples tiempos en una jornada laboral.' },
      { title: 'Por no tener inversión ni permanencia', text: 'La modalidad de pago por uso no tiene un coste de inversión inicial y tampoco obliga a ningún sistema de permanencia.' },
      { title: 'Por su facilidad de acceso', text: 'El empleado puede acceder al Control Horario desde la App en móvil o tablet, o por web desde cualquier ordenador. Si instalas dispositivos beacons, los empleados fichan automáticamente.' },
      { title: 'Por sus funcionalidades', text: 'Integramos la facilidad de uso con las mejores funcionalidades y estamos en constante evolución para mejorar el producto.' },
    ],
    featuresTitle: 'Funcionalidades',
    features: [
      { title: 'Geolocalización', text: 'Posibilidad de obtener la geolocalización de un empleado en la entrada y salida de su puesto de trabajo.' },
      { title: 'IP', text: 'Posibilidad de permitir iniciar o finalizar el Control Horario sólo desde una IP determinada o de varias.' },
      { title: 'Múltiples Empresas', text: 'Posibilidad de gestionar múltiples empresas desde la misma App.' },
      { title: 'Múltiples tiempos', text: 'Posibilidad de gestionar múltiples tiempos en una jornada para control de salidas del puesto de trabajo (desayunos, salidas a fumar, etc.).' },
      { title: 'Autorizaciones', text: 'Posibilidad de autorización de modificación de los datos efectuada por el mismo empleado en un día determinado o en cualquier fecha.' },
      { title: 'Ausencias', text: 'Envío diario de ausencias de cualquier tipo vía mail al supervisor para su aprobación o para efectuar cambios directamente desde el propio mail con un solo click.' },
      { title: 'PDF', text: 'Posibilidad de generación de PDF, para su envío al supervisor o para los empleados a final de mes.' },
      { title: 'Alarmas & Push', text: 'Recordatorio para empleados que no hayan fichado en sus horarios habituales de entrada y salida.' },
      { title: 'Analíticas', text: 'Posibilidad de visualización de los datos por un empleado en el día del Control Horario o en días anteriores.' },
    ],
    accessTitleStart: 'El sistema de CONTROL HORARIO está disponible desde ',
    accessTitleHighlight: 'móvil, tablet u ordenador',
    access: [
      { title: 'Acceso desde App Genérica de Reskyt', text: 'Esta App es de diseño genérico e idéntica para todos los clientes y podrá ser descargada gratuitamente de los markets. El usuario se identifica en la App Genérica de Control Horario y accede para efectuar sus fichajes.' },
      { title: 'Acceso desde web', text: 'El usuario se identifica en la web de control horario y accede para efectuar sus fichajes.' },
      { title: 'Acceso desde App Exclusiva de clientes', text: 'Pensada para gestorías, asesorías o asociaciones que quieran ofrecer a sus clientes su imagen de empresa de servicios en la App, escogiendo el diseño y nombre de la App. También para empresas medianas o grandes que quieran disponer de una App exclusiva para sus empleados.' },
    ],
    pricingText: '¿Quieres conocer los precios del sistema de Control Horario?',
    pricingCta: 'Contacta con nosotros',
  },
  ca: {
    titleStart: 'Control ',
    titleHighlight: 'Horari',
    heroText1: "El 12 de maig va entrar en vigor el Decret Llei 8/2019 sobre el Registre de la Jornada Laboral Obligatori.",
    heroText2: "Les empreses garantiran el registre diari de la jornada, que haurà d'incloure l'horari concret d'inici i finalització de la jornada de treball de cada persona treballadora.",
    whyStart: 'Per què contractar el sistema de ',
    whyHighlight: 'CONTROL HORARI',
    whyEnd: ' Reskyt?',
    reasons: [
      { title: 'Per ser senzill i intuïtiu', text: "Un cop registrat, l'empleat només ha de fer un clic al botó d'Inici-Final, amb possibilitat de registrar múltiples temps en una jornada laboral." },
      { title: 'Per no tenir inversió ni permanència', text: 'La modalitat de pagament per ús no té cost d’inversió inicial i tampoc obliga a cap sistema de permanència.' },
      { title: "Per la seva facilitat d'accés", text: "L'empleat pot accedir al Control Horari des de l'App al mòbil o tauleta, o per web des de qualsevol ordinador. Si instal·les dispositius beacons, els empleats fitxen automàticament." },
      { title: 'Per les seves funcionalitats', text: "Integrem la facilitat d'ús amb les millors funcionalitats i estem en constant evolució per millorar el producte." },
    ],
    featuresTitle: 'Funcionalitats',
    features: [
      { title: 'Geolocalització', text: "Possibilitat d'obtenir la geolocalització d'un empleat a l'entrada i sortida del seu lloc de treball." },
      { title: 'IP', text: "Possibilitat de permetre iniciar o finalitzar el Control Horari només des d'una IP determinada o de diverses." },
      { title: 'Múltiples Empreses', text: "Possibilitat de gestionar múltiples empreses des de la mateixa App." },
      { title: 'Múltiples temps', text: "Possibilitat de gestionar múltiples temps en una jornada per controlar sortides del lloc de treball (esmorzars, sortides a fumar, etc.)." },
      { title: 'Autoritzacions', text: "Possibilitat d'autoritzar la modificació de les dades efectuada pel mateix empleat en un dia determinat o en qualsevol data." },
      { title: 'Absències', text: "Enviament diari d'absències de qualsevol tipus via mail al supervisor per aprovar-les o per fer canvis directament des del mateix mail amb un sol clic." },
      { title: 'PDF', text: "Possibilitat de generar PDF, per enviar-lo al supervisor o per als empleats a final de mes." },
      { title: 'Alarmes & Push', text: "Recordatori per a empleats que no hagin fitxat en els seus horaris habituals d'entrada i sortida." },
      { title: 'Analítiques', text: "Possibilitat de visualitzar les dades per un empleat el dia del Control Horari o en dies anteriors." },
    ],
    accessTitleStart: 'El sistema de CONTROL HORARI està disponible des de ',
    accessTitleHighlight: 'mòbil, tauleta o ordinador',
    access: [
      { title: "Accés des de l'App Genèrica de Reskyt", text: "Aquesta App és de disseny genèric i idèntica per a tots els clients, i es pot descarregar gratuïtament dels markets. L'usuari s'identifica a l'App Genèrica de Control Horari i accedeix per fer els seus fitxatges." },
      { title: 'Accés des de web', text: "L'usuari s'identifica a la web de control horari i accedeix per fer els seus fitxatges." },
      { title: "Accés des d'App Exclusiva de clients", text: "Pensada per a gestories, assessories o associacions que vulguin oferir als seus clients la seva imatge d'empresa de serveis a l'App, escollint el disseny i el nom de l'App. També per a empreses mitjanes o grans que vulguin disposar d'una App exclusiva per als seus empleats." },
    ],
    pricingText: 'Vols conèixer els preus del sistema de Control Horari?',
    pricingCta: 'Contacta amb nosaltres',
  },
  en: {
    titleStart: 'Time ',
    titleHighlight: 'Tracking',
    heroText1: 'On 12 May, Decree-Law 8/2019 on Mandatory Working Day Registration came into force.',
    heroText2: 'Companies must guarantee a daily record of the working day, including the specific start and end times of each worker’s working day.',
    whyStart: 'Why hire the Reskyt ',
    whyHighlight: 'TIME TRACKING',
    whyEnd: ' system?',
    reasons: [
      { title: 'Because it is simple and intuitive', text: 'Once registered, the employee only has to click the Start-End button, with the option to record multiple periods in one working day.' },
      { title: 'No investment, no lock-in', text: 'The pay-per-use model has no initial investment cost and no lock-in of any kind.' },
      { title: 'Easy access', text: 'Employees can access Time Tracking from the App on mobile or tablet, or via the web from any computer. If you install beacons, employees clock in automatically.' },
      { title: 'Its features', text: 'We combine ease of use with the best features and keep evolving the product constantly.' },
    ],
    featuresTitle: 'Features',
    features: [
      { title: 'Geolocation', text: 'Option to record an employee’s geolocation when entering and leaving the workplace.' },
      { title: 'IP', text: 'Option to allow clocking in or out only from one or several specific IPs.' },
      { title: 'Multiple Companies', text: 'Option to manage several companies from the same App.' },
      { title: 'Multiple periods', text: 'Option to manage multiple periods in one working day to track exits from the workplace (breakfast, smoke breaks, etc.).' },
      { title: 'Authorisations', text: 'Option to authorise data changes made by the employee for a specific day or any date.' },
      { title: 'Absences', text: 'Daily email of any type of absence to the supervisor for approval, or to make changes directly from the email with a single click.' },
      { title: 'PDF', text: 'Option to generate PDFs to send to the supervisor or to employees at the end of the month.' },
      { title: 'Alarms & Push', text: 'Reminder for employees who have not clocked in at their usual start and end times.' },
      { title: 'Analytics', text: 'Employees can review their Time Tracking data for the current day or previous days.' },
    ],
    accessTitleStart: 'The TIME TRACKING system is available from ',
    accessTitleHighlight: 'mobile, tablet or computer',
    access: [
      { title: 'Access from the generic Reskyt App', text: 'This App has a generic design, identical for all customers, and can be downloaded for free from the app stores. The user signs in to the generic Time Tracking App to clock in and out.' },
      { title: 'Access from the web', text: 'The user signs in to the time tracking website to clock in and out.' },
      { title: 'Access from a customer-exclusive App', text: 'Designed for agencies, consultancies or associations that want to offer their clients their own service-company branding in the App, choosing its design and name. Also for medium and large companies that want an exclusive App for their employees.' },
    ],
    pricingText: 'Want to know the pricing of the Time Tracking system?',
    pricingCta: 'Contact us',
  },
  it: {
    titleStart: 'Controllo ',
    titleHighlight: 'Orario',
    heroText1: 'Il 12 maggio è entrato in vigore il Decreto Legge 8/2019 sulla registrazione obbligatoria della giornata lavorativa.',
    heroText2: 'Le aziende devono garantire la registrazione giornaliera della giornata lavorativa, includendo l’orario preciso di inizio e fine della giornata di ogni lavoratore.',
    whyStart: 'Perché scegliere il sistema di ',
    whyHighlight: 'CONTROLLO ORARIO',
    whyEnd: ' Reskyt?',
    reasons: [
      { title: 'Perché è semplice e intuitivo', text: 'Una volta registrato, il dipendente deve solo fare clic sul pulsante Inizio-Fine, con la possibilità di registrare più periodi in una giornata lavorativa.' },
      { title: 'Nessun investimento né vincolo', text: 'La modalità pay-per-use non ha costi di investimento iniziale né alcun vincolo di permanenza.' },
      { title: 'Facilità di accesso', text: 'Il dipendente può accedere al Controllo Orario dall’App su mobile o tablet, o via web da qualsiasi computer. Installando dei beacon, i dipendenti timbrano automaticamente.' },
      { title: 'Le sue funzionalità', text: 'Uniamo la facilità d’uso alle migliori funzionalità e siamo in continua evoluzione per migliorare il prodotto.' },
    ],
    featuresTitle: 'Funzionalità',
    features: [
      { title: 'Geolocalizzazione', text: 'Possibilità di ottenere la geolocalizzazione di un dipendente all’entrata e all’uscita dal posto di lavoro.' },
      { title: 'IP', text: 'Possibilità di consentire l’inizio o la fine del Controllo Orario solo da uno o più IP specifici.' },
      { title: 'Aziende Multiple', text: 'Possibilità di gestire più aziende dalla stessa App.' },
      { title: 'Periodi multipli', text: 'Possibilità di gestire più periodi in una giornata per controllare le uscite dal posto di lavoro (colazioni, pause sigaretta, ecc.).' },
      { title: 'Autorizzazioni', text: 'Possibilità di autorizzare la modifica dei dati effettuata dallo stesso dipendente in un giorno specifico o in qualsiasi data.' },
      { title: 'Assenze', text: 'Invio giornaliero via mail delle assenze di qualsiasi tipo al supervisore per l’approvazione, o per effettuare modifiche direttamente dalla mail con un solo clic.' },
      { title: 'PDF', text: 'Possibilità di generare PDF da inviare al supervisore o ai dipendenti a fine mese.' },
      { title: 'Allarmi & Push', text: 'Promemoria per i dipendenti che non hanno timbrato nei loro orari abituali di entrata e uscita.' },
      { title: 'Analitiche', text: 'Possibilità per un dipendente di visualizzare i dati del Controllo Orario del giorno o dei giorni precedenti.' },
    ],
    accessTitleStart: 'Il sistema di CONTROLLO ORARIO è disponibile da ',
    accessTitleHighlight: 'mobile, tablet o computer',
    access: [
      { title: 'Accesso dall’App generica di Reskyt', text: 'Questa App ha un design generico, identico per tutti i clienti, e può essere scaricata gratuitamente dagli store. L’utente si identifica nell’App generica di Controllo Orario e accede per le sue timbrature.' },
      { title: 'Accesso dal web', text: 'L’utente si identifica nel sito di controllo orario e accede per le sue timbrature.' },
      { title: 'Accesso da App esclusiva per i clienti', text: 'Pensata per agenzie, consulenze o associazioni che vogliono offrire ai propri clienti la loro immagine aziendale nell’App, scegliendone design e nome. Anche per aziende medie o grandi che vogliono un’App esclusiva per i dipendenti.' },
    ],
    pricingText: 'Vuoi conoscere i prezzi del sistema di Controllo Orario?',
    pricingCta: 'Contattaci',
  },
  nl: {
    titleStart: 'Tijd',
    titleHighlight: 'registratie',
    heroText1: 'Op 12 mei trad Decreet-Wet 8/2019 over de verplichte registratie van de werkdag in werking.',
    heroText2: 'Bedrijven moeten de dagelijkse registratie van de werkdag garanderen, inclusief de exacte begin- en eindtijd van de werkdag van elke werknemer.',
    whyStart: 'Waarom kiezen voor het ',
    whyHighlight: 'TIJDREGISTRATIE',
    whyEnd: '-systeem van Reskyt?',
    reasons: [
      { title: 'Omdat het eenvoudig en intuïtief is', text: 'Eenmaal geregistreerd hoeft de werknemer alleen op de Start-Einde-knop te klikken, met de mogelijkheid meerdere periodes in één werkdag te registreren.' },
      { title: 'Geen investering, geen verplichtingen', text: 'Het pay-per-use-model heeft geen initiële investeringskosten en geen enkele vorm van vaste looptijd.' },
      { title: 'Gemakkelijke toegang', text: 'De werknemer heeft toegang tot de tijdregistratie via de app op mobiel of tablet, of via het web op elke computer. Met beacons klokken werknemers automatisch in.' },
      { title: 'De functies', text: 'We combineren gebruiksgemak met de beste functies en blijven het product voortdurend verbeteren.' },
    ],
    featuresTitle: 'Functies',
    features: [
      { title: 'Geolocatie', text: 'Mogelijkheid om de geolocatie van een werknemer vast te leggen bij het betreden en verlaten van de werkplek.' },
      { title: 'IP', text: 'Mogelijkheid om in- of uitklokken alleen toe te staan vanaf één of meerdere specifieke IP-adressen.' },
      { title: 'Meerdere Bedrijven', text: 'Mogelijkheid om meerdere bedrijven vanuit dezelfde app te beheren.' },
      { title: 'Meerdere periodes', text: 'Mogelijkheid om meerdere periodes in één werkdag te beheren om vertrek van de werkplek te controleren (ontbijt, rookpauzes, enz.).' },
      { title: 'Autorisaties', text: 'Mogelijkheid om wijzigingen van gegevens door de werknemer zelf goed te keuren, voor een bepaalde dag of elke datum.' },
      { title: 'Afwezigheden', text: 'Dagelijkse e-mail met afwezigheden van elk type naar de supervisor ter goedkeuring, of om wijzigingen direct vanuit de e-mail door te voeren met één klik.' },
      { title: 'PDF', text: 'Mogelijkheid om PDF’s te genereren voor de supervisor of voor werknemers aan het einde van de maand.' },
      { title: 'Alarmen & Push', text: 'Herinnering voor werknemers die niet hebben geklokt op hun gebruikelijke begin- en eindtijden.' },
      { title: 'Analyses', text: 'Werknemers kunnen hun tijdregistratiegegevens van de dag of eerdere dagen bekijken.' },
    ],
    accessTitleStart: 'Het TIJDREGISTRATIE-systeem is beschikbaar via ',
    accessTitleHighlight: 'mobiel, tablet of computer',
    access: [
      { title: 'Toegang via de generieke Reskyt-app', text: 'Deze app heeft een generiek ontwerp, identiek voor alle klanten, en is gratis te downloaden in de app stores. De gebruiker meldt zich aan in de generieke tijdregistratie-app om in en uit te klokken.' },
      { title: 'Toegang via het web', text: 'De gebruiker meldt zich aan op de tijdregistratiewebsite om in en uit te klokken.' },
      { title: 'Toegang via een exclusieve klant-app', text: 'Bedoeld voor administratie- en advieskantoren of verenigingen die hun klanten hun eigen bedrijfsimago in de app willen bieden, met eigen ontwerp en naam. Ook voor middelgrote of grote bedrijven die een exclusieve app voor hun werknemers willen.' },
    ],
    pricingText: 'Wil je de prijzen van het tijdregistratiesysteem weten?',
    pricingCta: 'Neem contact met ons op',
  },
};
