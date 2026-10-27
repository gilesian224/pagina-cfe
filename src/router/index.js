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
  { path: '/enlaces/:categoria?', name: 'enlaces', component: EnlacesView, meta: { seccion: 'enlaces' } }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
