<template>
  <section class="section">
    <h2 class="section-title">Enlaces</h2>

    <!-- Un bloque por cada categoría visible -->
    <div v-for="categoria in categoriasVisibles" :key="categoria.id" class="categoria">
      <h3 class="categoria-titulo">{{ categoria.nombre }}</h3>

      <div class="grid-cards">
        <!-- La tarjeta completa es el enlace; se abre en una pestaña nueva -->
        <a
          v-for="enlace in categoria.enlaces"
          :key="enlace.titulo"
          :href="enlace.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card"
        >
          <div class="card-icon">{{ enlace.icono }}</div>
          <h4>{{ enlace.titulo }}</h4>
          <p>{{ enlace.descripcion }}</p>
          <span
            v-if="enlace.interno"
            class="aviso-interno"
            title="Esta dirección solo abre desde la red interna de CFE"
          >
            🔒 Solo red CFE
          </span>
          <span class="btn-card">Abrir ↗</span>
        </a>
      </div>
    </div>

    <p v-if="categoriasVisibles.length === 0" class="sin-resultados">
      No hay enlaces en esta categoría.
    </p>
  </section>
</template>

<script>
import { categorias } from '@/data/enlaces';

export default {
  name: 'EnlacesView',
  computed: {
    // Si la dirección trae una categoría (/enlaces/sistemas-internos), muestra solo esa;
    // si no (/enlaces), muestra todas.
    categoriasVisibles() {
      const id = this.$route.params.categoria;
      return id ? categorias.filter(c => c.id === id) : categorias;
    }
  }
}
</script>

<style scoped>
.categoria { margin-bottom: 25px; }
.categoria-titulo {
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
  border-left: 4px solid #009a44;
  padding-left: 8px;
}
.grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
}
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.card-icon { font-size: 30px; margin-bottom: 10px; }
.card h4 { margin: 0 0 10px 0; font-size: 15px; color: #222; }
.card p { font-size: 12px; color: #666; margin-bottom: 15px; flex-grow: 1; }
.aviso-interno {
  align-self: flex-start;
  background: #fff6d9;
  color: #7a5c00;
  border: 1px solid #e2c044;
  border-radius: 12px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 10px;
}
.btn-card {
  background-color: #009a44;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  transition: background 0.3s;
}
.card:hover .btn-card { background-color: #007a33; }
.sin-resultados { color: #666; font-size: 14px; }
</style>
