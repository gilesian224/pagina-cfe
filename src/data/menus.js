import { categorias } from './enlaces';

// Pestañas de la barra superior.
// "seccion" enlaza cada pestaña con su menú lateral (abajo); "ruta" es null si aún no existe la página.
export const pestanas = [
  { texto: 'Inicio', ruta: '/', seccion: 'inicio' },
  { texto: 'Superintendencia', ruta: '/superintendencia', seccion: 'superintendencia' },
  { texto: 'Operación', ruta: null, seccion: null },
  { texto: 'Programación y Equipos', ruta: null, seccion: null },
  { texto: 'Enlaces', ruta: '/enlaces', seccion: 'enlaces' }
];

// Opciones del menú lateral para cada sección.
export const menus = {
  inicio: {
    titulo: 'Inicio',
    opciones: [
      { texto: 'Ubicación', ruta: '/ubicacion' },
      { texto: 'Escenario Tecnológico', ruta: '/escenario-tecnologico' },
      { texto: 'Misión, Visión y Ambición', ruta: '/vision-mision-ambicion' },
      { texto: 'Organigrama', ruta: '/organigrama' },
      { texto: 'Directorio ZOTPT', ruta: '/directorio-zotpt' },
      { texto: 'Directorio ZOTVER', ruta: '/directorio-zotver' },
      { texto: 'Directorio ZOTGM', ruta: '/directorio-zotgm' },
      { texto: 'GRTC', ruta: '/grtc' }
    ]
  },
  superintendencia: {
    titulo: 'Superintendencia',
    opciones: [
      // Una opción con "subopciones" se abre y cierra al hacer clic.
      // Puede tener submenús dentro de submenús.
      {
        texto: 'Procedimientos',
        ruta: null,
        subopciones: [
          {
            texto: 'Formato de registro',
            ruta: null,
            subopciones: [
              { texto: 'Lista de asistencia', ruta: '/superintendencia/procedimientos/lista-asistencia' },
              { texto: 'Formato de asistencia', ruta: '/superintendencia/procedimientos/formato-asistencia' }
            ]
          }
        ]
      },
      { texto: 'FODA', ruta: '/superintendencia/foda' },
      { texto: 'Compromisos GRTC', ruta: '/superintendencia/compromisos-grtc' },
      { texto: 'SICLO', ruta: '/superintendencia/ciclo' },
      { texto: 'SIGET', ruta: '/superintendencia/siget' },
      {
        texto: 'Capacitación',
        ruta: null,
        subopciones: [
          { texto: 'Programa de capacitación', ruta: '/superintendencia/capacitacion/programa' }
        ]
      }
    ]
  },
  enlaces: {
    titulo: 'Sitios de interés',
    // Se genera solo a partir de las categorías de enlaces.js
    opciones: categorias.map(c => ({ texto: c.nombre, ruta: '/enlaces/' + c.id }))
  }
};
