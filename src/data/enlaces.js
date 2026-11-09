// Lista de sitios de interés agrupados por categoría.
// - "id" se usa en la dirección: /enlaces/sistemas-internos
// - Cada categoría aparece sola en el menú lateral (ver menus.js).
// - "url": dirección del sitio. Si todavía no se tiene, se deja en null
//   y la tabla muestra "Dirección pendiente".
// - "interno: true" indica que el sitio solo abre desde la red de CFE.
// - "descripcion" es opcional.
// Para agregar un sitio, copia una línea { ... } dentro de "enlaces" y cambia sus datos.
export const categorias = [
  {
    id: 'sistemas-internos',
    nombre: 'Sistemas internos',
    enlaces: [
      { titulo: 'SIMOCE', descripcion: 'Sistema de Monitoreo de Calidad de Energía.', url: 'http://10.9.30.134/calidad/', interno: true }
    ]
  },
  {
    id: 'sitios-consulta',
    nombre: 'Sitios de consulta',
    enlaces: [
      { titulo: 'Gerencia Regional de Transmisión Central', url: 'http://10.25.15.142:8080/central', interno: true },
      { titulo: 'GCROR', url: 'http://10.25.117.65:8086/enlaces_cenace/enlaces_gcror.html', interno: true },
      { titulo: 'Mi CFE', url: 'https://mi.cfe.mx/' },
      { titulo: 'SUTERM', descripcion: 'Sindicato Único de Trabajadores Electricistas de la República Mexicana.', url: 'https://www.suterm.mx/es/' },
      { titulo: 'Portal de Comprobantes Fiscales', descripcion: 'Verificación de comprobantes fiscales digitales (CFDI) del SAT.', url: 'https://verificacfdi.facturaelectronica.sat.gob.mx/' },
      { titulo: 'CIJUBILA', url: 'https://verificacfdi.facturaelectronica.sat.gob.mx/' },
      { titulo: 'Energía a Debate', descripcion: 'Publicación de análisis y opinión sobre el sector energético.', url: 'https://energiaadebate.com/' },
      { titulo: 'FHSSTE', url: 'https://intranet.cfemex.com/fhsste/pages/default.aspx', interno: true }
    ]
  }
];
