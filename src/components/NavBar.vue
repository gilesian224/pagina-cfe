<template>
  <nav class="navbar">
    <div class="nav-left">
      <img src="@/assets/logo-cfe.png" alt="CFE" class="logo-cfe" />
    </div>
    <ul class="nav-links">
      <li v-for="enlace in enlaces" :key="enlace">
        <a href="#">{{ enlace }}</a>
      </li>
    </ul>
    <button class="btn-login">Iniciar sesión</button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      enlaces: ['Inicio', 'Superintendencia', 'Operación', 'Programación y Equipos', 'Enlaces']
    };
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
.nav-links { list-style: none; display: flex; gap: 25px; margin: 0; padding: 0; }
.nav-links a { text-decoration: none; color: #555; font-size: 14px; font-weight: 500; transition: color 0.3s; }
.nav-links a:hover { color: #009a44; }
.btn-login {
  background-color: #009a44; color: white; border-radius: 20px;
  padding: 8px 20px; border: none; cursor: pointer; font-weight: bold; font-size: 14px;
}
.btn-login:hover { background-color: #007a33; }

/* Móviles y tablets */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 15px 10px;
    gap: 15px;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 0 10px;
  }
}
</style>
