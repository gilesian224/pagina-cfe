import { categorias } from './enlaces';

// Pestañas de la barra superior.
// "seccion" enlaza cada pestaña con su menú lateral (abajo); "ruta" es null si aún no existe la página.
export const pestanas = [
  { texto: 'Inicio', ruta: '/', seccion: 'inicio' },
  { texto: 'Superintendencia', ruta: '/superintendencia', seccion: 'superintendencia' },
  { texto: 'Operación', ruta: '/operacion', seccion: 'operacion' },
  { texto: 'Programación y Equipos', ruta: '/programacion-equipos', seccion: 'programacion-equipos' },
  { texto: 'Sitios de interés', ruta: '/enlaces', seccion: 'enlaces' }
];

// Opciones del menú lateral para cada sección. Cada opción puede llevar:
//   ruta: '/...'          → abre una página de este sitio
//   url: 'https://...'    → abre otro sitio en una pestaña nueva (muestra ↗)
//   subopciones: [ ... ]  → se despliega al hacer clic
export const menus = {
  inicio: {
    titulo: 'Inicio',
    opciones: [
      { texto: 'Ubicación', ruta: '/ubicacion' },
      { texto: 'Escenario Tecnológico', ruta: '/escenario-tecnologico' },
      { texto: 'Misión, Visión y Ambición', ruta: '/vision-mision-ambicion' },
      { texto: 'Organigrama', ruta: '/organigrama' },
      { texto: 'Directorios', url: 'http://10.25.110.2:8080/comnes/extensionesSE.do' }
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
              { texto: 'Lista de asistencia', url: 'http://10.25.15.142:8080/asistenciaSettings/asistencia.do' },
              { texto: 'Formato de asistencia', url: 'http://sf.cfe.mx/web/login' }
            ]
          }
        ]
      },
      { texto: 'FODA', ruta: '/superintendencia/foda' },
      { texto: 'Compromisos GRTC', url: 'http://10.25.15.142:8080/compromisos/Welcome.do' },
      { texto: 'SICLO', url: 'http://siclo.cfemex.com/Intranet/Index.aspx' },
      { texto: 'SIGET', url: 'http://10.21.1.138/indices/index/login.aspx' },
      {
        texto: 'Capacitación',
        ruta: null,
        subopciones: [
          { texto: 'Programa de capacitación', url: 'http://10.25.15.142:8080/central/especialidad.do?page=5&tag=tem' }
        ]
      }
    ]
  },
  operacion: {
    titulo: 'Operación',
    opciones: [
      { texto: 'FODA', ruta: '/operacion/foda' },
      {
        texto: 'CENACE',
        ruta: null,
        subopciones: [
          { texto: 'Consulta de solicitudes y licencias', url: 'http://10.72.111.102/ReportesRelieve/Home/LogIn' },
          { texto: 'Sistema web de salidas forzadas', url: 'https://servicios.cenace.gob.mx/SWSF/' },
          { texto: 'Calendario SIASAM', ruta: '/operacion/cenace/calendario-siasam' },
          { texto: 'Formato de carga masiva', ruta: '/operacion/cenace/formato-carga-masiva' }
        ]
      },
      {
        texto: 'Operación',
        ruta: null,
        subopciones: [
          { texto: 'Acciones de control', ruta: '/operacion/operacion/acciones-control' },
          { texto: 'Código de red 1 y 2', ruta: '/operacion/operacion/codigo-red' },
          { texto: 'Guías', ruta: '/operacion/operacion/guias' },
          { texto: 'Procedimientos', ruta: '/operacion/operacion/procedimientos' },
          { texto: 'Directorios', ruta: '/operacion/operacion/directorios' },
          { texto: 'Cemodat web', url: 'http://10.30.26.30/cemodatwebgrtce/' }
        ]
      },
      {
        texto: 'SIASAM',
        ruta: null,
        subopciones: [
          { texto: 'Relieve', ruta: '/operacion/siasam/relieve' },
          { texto: 'Sonorel', url: 'http://10.25.117.65/Relieve/SoNoRelGMO/login.aspx' },
          { texto: 'SIVAP', ruta: '/operacion/siasam/sivap' }
        ]
      },
      {
        texto: 'Análisis',
        ruta: null,
        subopciones: [
          {
            texto: 'SIMOCE',
            ruta: null,
            subopciones: [
              { texto: 'DDCOR', ruta: '/operacion/analisis/simoce/ddcor' },
              { texto: 'DDSE', ruta: '/operacion/analisis/simoce/ddse' }
            ]
          },
          { texto: 'SISNOV', url: 'http://novedades-sdt.cfemex.com/novedades/sisnov_nacional.html' }
        ]
      }
    ]
  },
  'programacion-equipos': {
    titulo: 'Programación y Equipos',
    opciones: [
      { texto: 'FODA', ruta: '/programacion-equipos/foda' },
      { texto: 'Comunicaciones', ruta: '/programacion-equipos/comunicaciones' },
      {
        texto: 'Control',
        ruta: null,
        subopciones: [
          { texto: 'SCADA', ruta: '/programacion-equipos/control/scada' },
          { texto: 'SENTOCs', ruta: '/programacion-equipos/control/sentocs' },
          { texto: 'Sabad', ruta: '/programacion-equipos/control/sabad' }
        ]
      },
      {
        texto: 'Control de gestión',
        ruta: null,
        subopciones: [
          { texto: 'SIITIC', url: 'http://siitic.cfemex.com/shell/logon' },
          { texto: 'SIECOM', url: 'http://10.25.15.142:8080/inventario/Welcome.do' },
          { texto: 'Mesa de servicio', ruta: '/programacion-equipos/control-gestion/mesa-servicio' }
        ]
      },
      { texto: 'AM (inventario)', url: 'http://10.25.117.65/ControlInventarioWebSite/Inicio.aspx' },
      { texto: 'PM', ruta: '/programacion-equipos/pm' }
    ]
  },
  enlaces: {
    titulo: 'Sitios de interés',
    // Se genera solo a partir de las categorías de enlaces.js
    opciones: categorias.map(c => ({ texto: c.nombre, ruta: '/enlaces/' + c.id }))
  }
};
