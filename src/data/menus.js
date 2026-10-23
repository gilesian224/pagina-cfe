// Pestañas de la barra superior.
// "seccion" enlaza cada pestaña con su menú lateral (abajo); "ruta" es null si aún no existe la página.
export const pestanas = [
  { texto: 'Inicio', ruta: '/', seccion: 'inicio' },
  { texto: 'Superintendencia', ruta: null, seccion: null },
  { texto: 'Operación', ruta: null, seccion: null },
  { texto: 'Programación y Equipos', ruta: null, seccion: null },
  { texto: 'Enlaces', ruta: /enlaces, seccion: 'enlaces' }
];

// Opciones del menú lateral para cada sección.
export const menus = {
  inicio: {
    titulo: 'Inicio',
    opciones: [
      { texto: 'Nuestro Centro de Trabajo', ruta: '/ubicacion' },
      { texto: 'Escenario Tecnológico', ruta: null },
      { texto: 'Misión, Visión y Ambición', ruta: '/vision-mision-ambicion' },
      { texto: 'Organigrama', ruta: null },
      { texto: 'Directorio ZOTGM', ruta: null },
      { texto: 'Directorio ZOTPT', ruta: null },
      { texto: 'Directorio ZOTVER', ruta: null },
      { texto: 'GRTC', ruta: null }
      
    
    ]
    Enlaces: {
      titulo: "Enlaces",
        opciones: [
        { texto: 'Todos los enlaces', ruta: '/enlaces'}
        ]
  }
};
