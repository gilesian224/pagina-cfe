<template>
  <aside class="sidebar">
    <div v-if="menu" class="menu-group">
      <h3 class="menu-title">{{ menu.titulo }}</h3>
      <ul>
        <li v-for="opcion in menu.opciones" :key="opcion.texto">
          <router-link v-if="opcion.ruta" :to="opcion.ruta">› {{ opcion.texto }}</router-link>
          <span v-else>› {{ opcion.texto }}</span>
        </li>
      </ul>
    </div>

    <CalendarioFestivos />
  </aside>
</template>

<script>
import CalendarioFestivos from './CalendarioFestivos.vue';

export default {
  name: 'SideMenu',
  components: { CalendarioFestivos },
  data() {
    return {
      // Opciones del menú lateral para cada pestaña de la barra superior.
      // "ruta" es la página que se abre al dar clic; null si aún no existe.
      menus: {
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
        }
      }
    };
  },
  computed: {
    // Menú de la sección en la que está el usuario
    menu() {
      return this.menus[this.$route.meta.seccion || 'inicio'];
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.menu-group { margin-bottom: 20px; }
.menu-title { font-size: 16px; color: #333; margin-bottom: 10px; border-bottom: 2px solid #009a44; padding-bottom: 5px; }
.sidebar ul { list-style: none; padding: 0; margin: 0; }
.sidebar li { padding: 6px 0; color: #555; font-size: 13px; cursor: pointer; transition: color 0.3s; }
.sidebar li:hover { color: #009a44; }
.sidebar li a { color: inherit; text-decoration: none; }
.sidebar li a.router-link-active { color: #009a44; font-weight: bold; }

/* Móviles y tablets: que ocupe todo el ancho */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }
  .sidebar .menu-group { margin-bottom: 10px; }
  .sidebar ul { display: flex; flex-wrap: wrap; gap: 5px; }
  .sidebar li { width: 100%; }
}
</style>
