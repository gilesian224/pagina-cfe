import { createRouter, createWebHashHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import VisionMisionView from '../views/VisionMisionView.vue';
import UbicacionView from '../views/UbicacionView.vue';
import EnlacesView from '../views/EnlacesView.vue';
import EscenarioTecnologicoView from '../views/EscenarioTecnologicoView.vue';
import OrganigramaView from '../views/OrganigramaView.vue';
import SuperintendenciaView from '../views/SuperintendenciaView.vue';
import ListaAsistenciaView from '../views/ListaAsistenciaView.vue';
import FormatoAsistenciaView from '../views/FormatoAsistenciaView.vue';
import FodaView from '../views/FodaView.vue';
import CompromisosGrtcView from '../views/CompromisosGrtcView.vue';
import CicloView from '../views/CicloView.vue';
import SigetView from '../views/SigetView.vue';
import ProgramaCapacitacionView from '../views/ProgramaCapacitacionView.vue';
import OperacionView from '../views/OperacionView.vue';
import FodaOperacionView from '../views/FodaOperacionView.vue';
import SolicitudesLicenciasView from '../views/SolicitudesLicenciasView.vue';
import SalidasForzadasView from '../views/SalidasForzadasView.vue';
import CalendarioSiasamView from '../views/CalendarioSiasamView.vue';
import CargaMasivaView from '../views/CargaMasivaView.vue';
import PaginaSeccionView from '../views/PaginaSeccionView.vue';

// Se usa el modo hash (#/ruta) para que las páginas internas
// funcionen en GitHub Pages sin errores 404 al recargar.
// "seccion" indica a qué pestaña de la barra superior pertenece cada página;
// el menú lateral muestra las opciones de esa sección.
const routes = [
  { path: '/', name: 'inicio', component: InicioView, meta: { seccion: 'inicio' } },
  { path: '/ubicacion', name: 'ubicacion', component: UbicacionView, meta: { seccion: 'inicio' } },
  { path: '/vision-mision-ambicion', name: 'vision-mision', component: VisionMisionView, meta: { seccion: 'inicio' } },
  { path: '/escenario-tecnologico', name: 'escenario-tecnologico', component: EscenarioTecnologicoView, meta: { seccion: 'inicio' } },
  { path: '/organigrama', name: 'organigrama', component: OrganigramaView, meta: { seccion: 'inicio' } },
  { path: '/superintendencia', name: 'superintendencia', component: SuperintendenciaView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/procedimientos/lista-asistencia', name: 'lista-asistencia', component: ListaAsistenciaView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/procedimientos/formato-asistencia', name: 'formato-asistencia', component: FormatoAsistenciaView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/foda', name: 'foda', component: FodaView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/compromisos-grtc', name: 'compromisos-grtc', component: CompromisosGrtcView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/ciclo', name: 'ciclo', component: CicloView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/siget', name: 'siget', component: SigetView, meta: { seccion: 'superintendencia' } },
  { path: '/superintendencia/capacitacion/programa', name: 'programa-capacitacion', component: ProgramaCapacitacionView, meta: { seccion: 'superintendencia' } },
  { path: '/operacion', name: 'operacion', component: OperacionView, meta: { seccion: 'operacion' } },
  { path: '/operacion/foda', name: 'foda-operacion', component: FodaOperacionView, meta: { seccion: 'operacion' } },
  { path: '/operacion/cenace/solicitudes-licencias', name: 'solicitudes-licencias', component: SolicitudesLicenciasView, meta: { seccion: 'operacion' } },
  { path: '/operacion/cenace/salidas-forzadas', name: 'salidas-forzadas', component: SalidasForzadasView, meta: { seccion: 'operacion' } },
  { path: '/operacion/cenace/calendario-siasam', name: 'calendario-siasam', component: CalendarioSiasamView, meta: { seccion: 'operacion' } },
  { path: '/operacion/cenace/formato-carga-masiva', name: 'formato-carga-masiva', component: CargaMasivaView, meta: { seccion: 'operacion' } },
  // Operación: páginas sin contenido todavía; todas usan la página genérica con su título
  { path: '/operacion/operacion/acciones-control', name: 'op-acciones-control', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Acciones de control' } },
  { path: '/operacion/operacion/codigo-red', name: 'op-codigo-red', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Código de red 1 y 2' } },
  { path: '/operacion/operacion/guias', name: 'op-guias', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Guías' } },
  { path: '/operacion/operacion/procedimientos', name: 'op-procedimientos', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Procedimientos' } },
  { path: '/operacion/operacion/directorios', name: 'op-directorios', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Directorios' } },
  { path: '/operacion/operacion/cemodat-web', name: 'op-cemodat-web', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Cemodat web' } },
  { path: '/operacion/siasam/relieve', name: 'op-relieve', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Relieve' } },
  { path: '/operacion/siasam/sonorel', name: 'op-sonorel', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'Sonorel' } },
  { path: '/operacion/siasam/sivap', name: 'op-sivap', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'SIVAP' } },
  { path: '/operacion/analisis/simoce/ddcor', name: 'op-ddcor', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'DDCOR' } },
  { path: '/operacion/analisis/simoce/ddse', name: 'op-ddse', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'DDSE' } },
  { path: '/operacion/analisis/sisnov', name: 'op-sisnov', component: PaginaSeccionView, meta: { seccion: 'operacion', titulo: 'SISNOV' } },
  // Programación y Equipos: páginas sin contenido todavía; usan la página genérica con su título
  { path: '/programacion-equipos', name: 'programacion-equipos', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'Programación y Equipos' } },
  { path: '/programacion-equipos/foda', name: 'pe-foda', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'FODA' } },
  { path: '/programacion-equipos/comunicaciones', name: 'pe-comunicaciones', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'Comunicaciones' } },
  { path: '/programacion-equipos/control/scada', name: 'pe-scada', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'SCADA' } },
  { path: '/programacion-equipos/control/sentocs', name: 'pe-sentocs', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'SENTOCs' } },
  { path: '/programacion-equipos/control/sabad', name: 'pe-sabad', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'Sabad' } },
  { path: '/programacion-equipos/control-gestion/sitic', name: 'pe-sitic', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'SITIC' } },
  { path: '/programacion-equipos/control-gestion/siecom', name: 'pe-siecom', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'SIECOM' } },
  { path: '/programacion-equipos/control-gestion/mesa-servicio', name: 'pe-mesa-servicio', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'Mesa de servicio' } },
  { path: '/programacion-equipos/am', name: 'pe-am', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'AM (inventario)' } },
  { path: '/programacion-equipos/pm', name: 'pe-pm', component: PaginaSeccionView, meta: { seccion: 'programacion-equipos', titulo: 'PM' } },
  { path: '/enlaces/:categoria?', name: 'enlaces', component: EnlacesView, meta: { seccion: 'enlaces' } }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
