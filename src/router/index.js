import { createRouter, createWebHashHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import VisionMisionView from '../views/VisionMisionView.vue';
import UbicacionView from '../views/UbicacionView.vue';
import EnlacesView from '../views/EnlacesView.vue';
import EscenarioTecnologicoView from '../views/EscenarioTecnologicoView.vue';
import OrganigramaView from '../views/OrganigramaView.vue';
import DirectorioZotgmView from '../views/DirectorioZotgmView.vue';
import DirectorioZotptView from '../views/DirectorioZotptView.vue';
import DirectorioZotverView from '../views/DirectorioZotverView.vue';
import GrtcView from '../views/GrtcView.vue';
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
  { path: '/directorio-zotgm', name: 'directorio-zotgm', component: DirectorioZotgmView, meta: { seccion: 'inicio' } },
  { path: '/directorio-zotpt', name: 'directorio-zotpt', component: DirectorioZotptView, meta: { seccion: 'inicio' } },
  { path: '/directorio-zotver', name: 'directorio-zotver', component: DirectorioZotverView, meta: { seccion: 'inicio' } },
  { path: '/grtc', name: 'grtc', component: GrtcView, meta: { seccion: 'inicio' } },
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
  { path: '/enlaces/:categoria?', name: 'enlaces', component: EnlacesView, meta: { seccion: 'enlaces' } }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
