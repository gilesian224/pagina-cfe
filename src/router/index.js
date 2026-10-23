import { createRouter, createWebHashHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import VisionMisionView from '../views/VisionMisionView.vue';
import UbicacionView from '../views/UbicacionView.vue';

// Se usa el modo hash (#/ruta) para que las páginas internas
// funcionen en GitHub Pages sin errores 404 al recargar.
// "seccion" indica a qué pestaña de la barra superior pertenece cada página;
// el menú lateral muestra las opciones de esa sección.
const routes = [
  { path: '/', name: 'inicio', component: InicioView, meta: { seccion: 'inicio' } },
  { path: '/ubicacion', name: 'ubicacion', component: UbicacionView, meta: { seccion: 'inicio' } },
  { path: '/vision-mision-ambicion', name: 'vision-mision', component: VisionMisionView, meta: { seccion: 'inicio' } }
  { path: '/Enlaces', name: 'Enlaces', component: EnlacesView, meta: { seccion: 'Enlaces' } },
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
