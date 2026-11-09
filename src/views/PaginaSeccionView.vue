<template>
  <section class="section">
    <!-- El título viene de la ruta (meta.titulo en router/index.js) -->
    <h2 class="section-title">{{ $route.meta.titulo }}</h2>

    <!-- Aquí va el contenido de esta sección -->
  </section>
</template>

<script>
// Página genérica: sirve para varias opciones del menú que todavía no tienen contenido.
// Cuando una de ellas lo necesite, se le crea su propio archivo .vue y se cambia
// su "component" en router/index.js.
export default {
  name: 'PaginaSeccionView'
}
</script>
