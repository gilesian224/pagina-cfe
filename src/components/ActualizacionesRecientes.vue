<template>
  <section class="section">
    <h2 class="section-title">Actualizaciones Recientes</h2>
    <div class="grid-updates">
      <div v-for="item in actualizaciones" :key="item" class="update-item">{{ item }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ActualizacionesRecientes',
  data() {
    return {
      actualizaciones: ['Normateca', 'SIRH Formatos', 'GIDD', 'Accesos Móviles', 'SIG', 'Género e Inclusión']
    };
  }
}
</script>

<style scoped>
.grid-updates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}
.update-item {
  background: white;
  padding: 12px;
  text-align: center;
  font-size: 13px;
  color: #444;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}
.update-item:hover { background: #f0fdf4; border-color: #009a44; color: #009a44; }
</style>
