<template>
  <section class="section">
    <h2 class="section-title">Enlaces</h2>

    <div v-for="grupo in grupos" :key="grupo.titulo" class="enlaces-card">
      <div class="enlaces-titulo">{{ grupo.titulo }}</div>
      <ul class="enlaces-lista">
        <li v-for="enlace in grupo.enlaces" :key="enlace.texto">
          <a :href="enlace.url" target="_blank" rel="noopener">
            <span class="enlace-icono">🔗</span>
            <span>
              <strong>{{ enlace.texto }}</strong>
              <small>{{ enlace.descripcion }}</small>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EnlacesView',
  data() {
    return {
      // Para agregar un enlace, copia una línea { ... } y cambia sus datos
      grupos: [
        {
          titulo: 'Sitios institucionales',
          enlaces: [
            { texto: 'CFE', descripcion: 'Portal oficial de la Comisión Federal de Electricidad', url: 'https://www.cfe.mx' },
            { texto: 'CENACE', descripcion: 'Centro Nacional de Control de Energía', url: 'https://www.cenace.gob.mx' }
            { texto: 'SIMOCE', descripcion: 'Centro Nacional de Control de Energía', url: 'http://10.9.30.134/calidad/' }
          ]
        },
        {
          titulo: 'Sistemas internos',
          enlaces: [
            { texto: 'Ejemplo de sistema', descripcion: 'Cambia este texto y la URL', url: '#' }
          ]
        }
      ]
    };
  }
}
</script>

<style scoped>
.enlaces-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}
.enlaces-titulo {
  background-color: #009a44;
  color: white;
  font-weight: bold;
  padding: 12px 20px;
  border-bottom: 4px solid #e2c044;
}
.enlaces-lista { list-style: none; margin: 0; padding: 0; }
.enlaces-lista li + li { border-top: 1px solid #eee; }
.enlaces-lista a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  color: #333;
  text-decoration: none;
  transition: background 0.2s;
}
.enlaces-lista a:hover { background: #e0f2e9; }
.enlace-icono { font-size: 20px; }
.enlaces-lista strong { display: block; font-size: 14px; color: #009a44; }
.enlaces-lista small { color: #666; font-size: 12px; }
</style>
