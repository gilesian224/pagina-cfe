<template>
  <section class="section">
    <h2 class="section-title">Sitios de interés</h2>

    <!-- Una tabla por cada categoría visible -->
    <div v-for="categoria in categoriasVisibles" :key="categoria.id" class="si-bloque">
      <h3 class="si-titulo">{{ categoria.nombre }}</h3>

      <table class="si-tabla">
        <thead>
          <tr>
            <th>Sitio</th>
            <th class="si-acceso">Acceso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="enlace in categoria.enlaces" :key="enlace.titulo">
            <td>
              <span class="si-nombre">{{ enlace.titulo }}</span>
              <span v-if="enlace.descripcion" class="si-desc">{{ enlace.descripcion }}</span>
              <span v-if="enlace.interno" class="si-nota">Disponible solo en la red interna de CFE.</span>
            </td>
            <td class="si-acceso">
              <a v-if="enlace.url" :href="enlace.url" target="_blank" rel="noopener noreferrer">Abrir sitio ↗</a>
              <span v-else class="si-pendiente">Dirección pendiente</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-if="categoriasVisibles.length === 0" class="si-desc">
      No hay sitios en esta categoría.
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
.si-bloque { margin-bottom: 30px; }

.si-titulo {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px 0;
}

.si-tabla {
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 14px;
}
.si-tabla th,
.si-tabla td {
  border: 1px solid #d9d9d9;
  padding: 10px 14px;
  text-align: left;
  vertical-align: top;
}
.si-tabla thead th {
  background-color: #009a44;
  color: white;
  font-weight: 600;
}
.si-tabla tbody tr:nth-child(even) { background-color: #f7f7f7; }

.si-nombre { display: block; font-weight: 600; color: #222; }
.si-desc { display: block; font-size: 12px; color: #555; margin-top: 3px; }
.si-nota { display: block; font-size: 12px; color: #777; font-style: italic; margin-top: 3px; }

.si-acceso { width: 170px; white-space: nowrap; }
.si-acceso a {
  color: #007a33;
  font-weight: 600;
  text-decoration: none;
}
.si-acceso a:hover { text-decoration: underline; }
.si-pendiente { color: #999; font-size: 13px; }

@media (max-width: 480px) {
  .si-tabla { font-size: 13px; }
  .si-tabla th,
  .si-tabla td { padding: 8px; }
  .si-acceso { width: auto; }
}
</style>
