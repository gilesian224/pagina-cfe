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
import { menus } from '@/data/menus';

export default {
  name: 'SideMenu',
  components: { CalendarioFestivos },
  computed: {
    // Menú de la sección en la que está el usuario
    menu() {
      return menus[this.$route.meta.seccion || 'inicio'];
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

/* Móviles y tablets: el menú pasa al botón ☰ y aquí solo queda el calendario */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }
  .menu-group { display: none; }
}
</style>
