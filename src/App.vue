<template>
  <div id="app">
    <!-- 1. NAVBAR SUPERIOR -->
    <NavBar />

    <!-- 2. HEADER Y CARRUSEL -->
    <HeroCarousel />

    <!-- 3. CONTENIDO PRINCIPAL (2 Columnas) -->
    <div class="main-container">
      <!-- Columna Izquierda: Menú Lateral y Calendario -->
      <SideMenu />

      <!-- Columna Derecha: Contenido de la página elegida -->
      <main class="content-area">
        <router-view />
      </main>
    </div>

    <!-- 4. FOOTER -->
    <AppFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroCarousel from './components/HeroCarousel.vue';
import SideMenu from './components/SideMenu.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroCarousel,
    SideMenu,
    AppFooter
  }
}
</script>

<style>
/* --- ESTILOS GLOBALES --- */
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
  overflow-x: hidden; /* Evita el scroll horizontal en celulares */
}
* { box-sizing: inherit; }
#app { width: 100%; min-height: 100vh; display: flex; flex-direction: column; }

/* --- CONTENIDO PRINCIPAL --- */
.main-container {
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  gap: 20px;
  width: 100%;
}
.content-area { flex-grow: 1; min-width: 0; }

/* Secciones compartidas (Sitios de Interés, Actualizaciones) */
.section { margin-bottom: 30px; }
.section-title { font-size: 20px; color: #333; margin-bottom: 15px; font-weight: 600; }

/* Móviles y tablets: poner las columnas una debajo de otra */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    padding: 10px;
    margin: 10px auto;
  }
}
</style>
