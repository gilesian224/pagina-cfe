<template>
  <aside class="sidebar">
    <div class="menu-group">
      <h3 class="menu-title">Sobre Nosotros</h3>
      <ul>
        <li v-for="opcion in sobreNosotros" :key="opcion">› {{ opcion }}</li>
      </ul>
    </div>

    <div class="menu-group">
      <h3 class="menu-title">Directorio ⌄</h3>
      <h3 class="menu-title">Servicios Internos ⌄</h3>
      <h3 class="menu-title">Enlaces ⌄</h3>
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
      sobreNosotros: [
        'Visión, Misión y Ambición',
        'Objetivos e Indicadores',
        'Organigrama',
        '¿Quiénes somos?',
        'Nuestra Historia',
        'Cronología de Jefes de Subárea',
        'Operadores desde 1973 a la fecha',
        'Nuestros Recuerdos'
      ]
    };
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

/* Móviles y tablets: que ocupe todo el ancho */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
