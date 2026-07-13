export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: number;
}

// Los dos primeros se muestran como destacados, igual que en la web original.
// La imagen de cada post es /images/blog/<slug>.png
export const blogPosts: BlogPost[] = [
  {
    slug: 'humaniza-la-experiencia-movil-y-fideliza-mas',
    title: 'Humaniza la experiencia móvil y fideliza más',
    date: '12/12/2025',
    readTime: 10,
  },
  {
    slug: 'sesgos-cognitivos-que-influyen-en-compras-moviles',
    title: 'Sesgos cognitivos que influyen en compras móviles',
    date: '8/12/2025',
    readTime: 10,
  },
  {
    slug: 'como-preparar-tu-inventario-para-picos-de-demanda-movil',
    title: 'Cómo preparar tu inventario para picos de demanda móvil',
    date: '5/12/25',
    readTime: 10,
  },
  {
    slug: 'tecnicas-de-venta-cruzada-en-apps-moviles-que-si-funcionan',
    title: 'Técnicas de venta cruzada en Apps Móviles que sí funcionan',
    date: '3/12/25',
    readTime: 10,
  },
  {
    slug: 'como-recuperar-usuarios-inactivos-en-tu-app-ecommerce',
    title: 'Cómo recuperar usuarios inactivos en tu app ecommerce',
    date: '1/12/25',
    readTime: 10,
  },
  {
    slug: 'metricas-avanzadas-que-toda-app-ecommerce-debe-medir',
    title: 'Métricas avanzadas que toda app ecommerce debe medir',
    date: '28/11/25',
    readTime: 10,
  },
  {
    slug: 'como-mejorar-la-velocidad-de-tu-app-ecommerce-para-vender-mas',
    title: 'Cómo mejorar la velocidad de tu app ecommerce para vender más',
    date: '26/11/25',
    readTime: 10,
  },
  {
    slug: 'por-que-tus-clientes-compran-mas-desde-aplicaciones-moviles-segun-la-ciencia',
    title: 'Por qué tus clientes compran más desde aplicaciones móviles según la ciencia',
    date: '24/11/25',
    readTime: 10,
  },
  {
    slug: 'las-microinteracciones-que-hacen-que-tus-clientes-compren',
    title: 'Las microinteracciones que hacen que tus clientes compren',
    date: '21/11/25',
    readTime: 10,
  },
  {
    slug: 'tu-app-lista-para-navidad-estrategias-para-una-campana-ganadora',
    title: 'Tu app lista para Navidad: estrategias para una campaña ganadora',
    date: '19/11/25',
    readTime: 10,
  },
  {
    slug: 'gestiona-tu-catalogo-desde-una-unica-plataforma-con-reskyt-2',
    title: 'Gestiona tu catálogo desde una única plataforma con Reskyt',
    date: '17/11/25',
    readTime: 10,
  },
  {
    slug: 'vende-productos-naturales-con-una-app-ecommerce-eficaz',
    title: 'Vende productos naturales con una app eCommerce eficaz',
    date: '14/11/25',
    readTime: 10,
  },
  {
    slug: 'app-o-web-responsive-lo-que-debes-elegir-para-vender-mas',
    title: '¿App o web responsive? Lo que debes elegir para vender más',
    date: '12/11/25',
    readTime: 10,
  },
  {
    slug: 'como-crear-apps-moviles-para-ecommerce-que-venden-mas',
    title: 'Cómo crear apps móviles para ecommerce que venden más',
    date: '10/11/25',
    readTime: 10,
  },
  {
    slug: 'las-apps-que-arrasan-en-cada-sector-moda-deportes-hogar-y-mas',
    title: 'Las apps que arrasan en cada sector: moda, deportes, hogar y más',
    date: '7/11/25',
    readTime: 10,
  },
  {
    slug: 'como-disenar-una-app-de-ecommerce-que-enamore-al-usuario',
    title: 'Cómo diseñar una app de ecommerce que enamore al usuario',
    date: '5/11/25',
    readTime: 10,
  },
  {
    slug: 'controla-tu-ecommerce-desde-una-app-que-se-actualiza-al-instante',
    title: 'Controla tu ecommerce desde una app que se actualiza al instante',
    date: '3/11/25',
    readTime: 10,
  },
  {
    slug: 'como-mejorar-tus-notificaciones-push-para-ecommerce-movil',
    title: 'Cómo mejorar tus notificaciones push para ecommerce móvil',
    date: '31/10/25',
    readTime: 10,
  },
  {
    slug: 'crea-una-app-para-tu-tienda-de-ropa-y-aumenta-tus-ventas',
    title: 'Crea una app para tu tienda de ropa y aumenta tus ventas',
    date: '29/10/25',
    readTime: 10,
  },
  {
    slug: 'las-cifras-que-demuestran-que-tu-ecommerce-necesita-una-app',
    title: 'Las cifras que demuestran que tu ecommerce necesita una app',
    date: '27/10/25',
    readTime: 10,
  },
  {
    slug: 'como-posicionar-tu-app-de-ecommerce-en-app-store-y-google-play',
    title: 'Cómo posicionar tu app de ecommerce en App Store y Google Play',
    date: '24/10/25',
    readTime: 10,
  },
  {
    slug: 'tu-app-lista-para-vender-en-todo-el-mundo-multidioma-y-divisas',
    title: 'Tu app lista para vender en todo el mundo: multidioma y divisas',
    date: '22/10/25',
    readTime: 10,
  },
  {
    slug: 'como-integrar-tu-app-con-shopify-prestashop-o-woocommerce',
    title: 'Cómo integrar tu app con Shopify, PrestaShop o WooCommerce',
    date: '20/10/25',
    readTime: 10,
  },
  {
    slug: 'expansion-de-reskyt-por-el-mundo',
    title: 'Expansión de Reskyt por el mundo',
    date: '17/10/25',
    readTime: 5,
  },
  {
    slug: '6-formas-de-fidelizar-clientes-con-tu-app-de-ecommerce',
    title: '6 formas de fidelizar clientes con tu app de ecommerce',
    date: '15/10/25',
    readTime: 10,
  },
  {
    slug: 'como-lograr-una-experiencia-de-compra-personalizada-en-tu-app',
    title: 'Cómo lograr una experiencia de compra personalizada en tu app',
    date: '13/10/25',
    readTime: 10,
  },
  {
    slug: 'vende-mas-en-fechas-senaladas-con-tu-app-guia-para-campanas-emotivas',
    title: 'Vende más en fechas señaladas con tu app: guía para campañas emotivas',
    date: '8/10/25',
    readTime: 10,
  },
  {
    slug: 'como-impactar-en-hogar-y-decoracion-desde-una-app-ecommerce',
    title: 'Cómo impactar en hogar y decoración desde una app ecommerce',
    date: '6/10/25',
    readTime: 10,
  },
  {
    slug: 'cuanto-tiempo-se-tarda-en-desarrollar-una-app-nativa-personalizada',
    title: '¿Cuánto tiempo se tarda en desarrollar una app nativa personalizada?',
    date: '26/9/25',
    readTime: 10,
  },
];
