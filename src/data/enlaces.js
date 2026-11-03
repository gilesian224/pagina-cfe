// Lista de enlaces agrupados por categoría.
// - "id" se usa en la dirección: /enlaces/sistemas-internos
// - Cada categoría aparece sola en el menú lateral (ver menus.js).
// - "interno: true" marca la tarjeta con el aviso "Solo red CFE" (direcciones de intranet).
// Para agregar un enlace, copia un bloque { ... } dentro de "enlaces" y cambia sus datos.
export const categorias = [
  {
    id: 'sistemas-internos',
    nombre: 'Sistemas internos',
    enlaces: [
      {
        icono: '📊',
        titulo: 'SIMOCE',
        descripcion: 'Sistema de Monitoreo de Calidad de Energía.',
        url: 'http://10.9.30.134/calidad/',
        interno: true
      }
    ]
  }
];
