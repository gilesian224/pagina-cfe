import { categorias } from './enlaces';

// Pestañas de la barra superior.
// "seccion" enlaza cada pestaña con su menú lateral (abajo); "ruta" es null si aún no existe la página.
export const pestanas = [
  { texto: 'Inicio', ruta: '/', seccion: 'inicio' },
  { texto: 'Superintendencia', ruta: null, seccion: null },
  { texto: 'Operación', ruta: null, seccion: null },
  { texto: 'Programación y Equipos', ruta: null, seccion: null },
  { texto: 'Enlaces', ruta: '/enlaces', seccion: 'enlaces' }
];

// Opciones del menú lateral para cada sección.
export const menus = {
  inicio: {
    titulo: 'Inicio',
    opciones: [
      { texto: 'Nuestro Centro de Trabajo', ruta: '/ubicacion' },
      { texto: 'Escenario Tecnológico', ruta: '/escenario-tecnologico' },
      { texto: 'Misión, Visión y Ambición', ruta: '/vision-mision-ambicion' },
      { texto: 'Organigrama', ruta: '/organigrama' },
      { texto: 'Directorio ZOTGM', ruta: '/directorio-zotgm' },
      { texto: 'Directorio ZOTPT', ruta: '/directorio-zotpt' },
      { texto: 'Directorio ZOTVER', ruta: '/directorio-zotver' },
      { texto: 'GRTC', ruta: '/grtc' }
    ]
  },
  enlaces: {
    titulo: 'Enlaces',
    // Se genera solo a partir de las categorías de enlaces.js
    opciones: categorias.map(c => ({ texto: c.nombre, ruta: '/enlaces/' + c.id }))
  }
};
