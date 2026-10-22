<template>
  <nav class="navbar">
    <div class="nav-left">
      <img src="@/assets/logo-cfe.png" alt="CFE" class="logo-cfe" />
    </div>

    <!-- Botón ☰: solo aparece en celulares -->
    <button
      class="btn-menu"
      :aria-expanded="abierto"
      aria-controls="menu-principal"
      :aria-label="abierto ? 'Cerrar menú' : 'Abrir menú'"
      @click="abierto = !abierto"
    >
      {{ abierto ? '✕' : '☰' }}
    </button>

    <div id="menu-principal" class="nav-menu" :class="{ abierto }">
      <ul class="nav-links">
        <li v-for="pestana in pestanas" :key="pestana.texto">
          <router-link
            v-if="pestana.ruta"
            :to="pestana.ruta"
            :class="{ activo: pestana.seccion === seccionActual }"
          >
            {{ pestana.texto }}
          </router-link>
          <a v-else href="#">{{ pestana.texto }}</a>

          <!-- En celular, las opciones del menú lateral se muestran aquí -->
          <ul v-if="pestana.seccion === seccionActual && menus[pestana.seccion]" class="submenu">
            <li v-for="opcion in menus[pestana.seccion].opciones" :key="opcion.texto">
              <router-link v-if="opcion.ruta" :to="opcion.ruta">› {{ opcion.texto }}</router-link>
              <span v-else>› {{ opcion.texto }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <button class="btn-login">Iniciar sesión</button>
    </div>
  </nav>
</template>

<script>
import { pestanas, menus } from '@/data/menus';

export default {
  name: 'NavBar',
  data() {
    return {
      pestanas,
      menus,
      abierto: false
    };
  },
  computed: {
    seccionActual() {
      return this.$route.meta.seccion;
    }
  },
  watch: {
    // Cierra el menú al cambiar de página
    $route() {
      this.abierto = false;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 10;
}
.nav-left { display: flex; align-items: center; gap: 10px; }
.logo-cfe { height: 40px; }

.nav-menu {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 40px;
}
.nav-links { list-style: none; display: flex; gap: 25px; margin: 0 auto; padding: 0; }
.nav-links a { text-decoration: none; color: #555; font-size: 14px; font-weight: 500; transition: color 0.3s; }
.nav-links a:hover { color: #009a44; }
.nav-links a.activo { color: #009a44; font-weight: bold; }
.btn-login {
  background-color: #009a44; color: white; border-radius: 20px;
  padding: 8px 20px; border: none; cursor: pointer; font-weight: bold; font-size: 14px;
}
.btn-login:hover { background-color: #007a33; }

/* En escritorio el submenú y el botón ☰ no se muestran */
.submenu { display: none; }
.btn-menu {
  display: none;
  background: none;
  border: 1px solid #009a44;
  color: #009a44;
  border-radius: 6px;
  font-size: 22px;
  line-height: 1;
  width: 42px;
  height: 42px;
  cursor: pointer;
}

/* Móviles y tablets: menú desplegable con el botón ☰ */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    padding: 10px 15px;
  }
  .btn-menu { display: block; }

  .nav-menu {
    display: none;
    flex-basis: 100%;
    flex-direction: column;
    align-items: stretch;
    margin: 10px 0 0 0;
    padding-top: 10px;
    border-top: 2px solid #009a44;
  }
  .nav-menu.abierto { display: flex; }

  .nav-links { flex-direction: column; gap: 0; margin: 0; }
  .nav-links > li > a {
    display: block;
    padding: 12px 5px;
    font-size: 15px;
    border-bottom: 1px solid #eee;
  }

  .submenu {
    display: block;
    list-style: none;
    margin: 0;
    padding: 5px 0 10px 15px;
    background: #f4faf6;
  }
  .submenu li { padding: 8px 5px; font-size: 13px; color: #555; }
  .submenu a { color: inherit; font-size: 13px; }
  .submenu a.router-link-active { color: #009a44; font-weight: bold; }

  .btn-login { margin: 15px auto 5px auto; }
}
</style>
