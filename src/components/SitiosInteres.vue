<template>
  <section class="section">
    <h2 class="section-title">Sitios de Interés</h2>
    <div class="grid-cards">
      <div v-for="sitio in sitios" :key="sitio.titulo" class="card">
        <div class="card-icon">{{ sitio.icono }}</div>
        <h4>{{ sitio.titulo }}</h4>
        <p>{{ sitio.descripcion }}</p>
        <button class="btn-card">{{ sitio.boton }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SitiosInteres',
  data() {
    return {
      sitios: [
        { icono: '📚', titulo: 'Normateca', descripcion: 'Consulta el marco normativo aplicable en materia de transparencia.', boton: 'Consultar Normateca' },
        { icono: '⚙️', titulo: 'Servicios Tecnológicos', descripcion: 'Accede a los servicios de soporte y herramientas digitales.', boton: 'Consultar Servicios' },
        { icono: '📄', titulo: 'SIRH Formatos', descripcion: 'Descarga y consulta los formatos oficiales de documentos.', boton: 'Consultar Formatos' },
        { icono: '🎓', titulo: 'GIDD Capacitación', descripcion: 'Consulta las capacitaciones disponibles para el personal.', boton: 'Consultar GIDD' },
        { icono: '🤝', titulo: 'Género e Inclusión', descripcion: 'Conoce las acciones para promover la igualdad e inclusión.', boton: 'Consultar Género' }
      ]
    };
  }
}
</script>

<style scoped>
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
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.card-icon { font-size: 30px; margin-bottom: 10px; }
.card h4 { margin: 0 0 10px 0; font-size: 15px; color: #222; }
.card p { font-size: 12px; color: #666; margin-bottom: 15px; flex-grow: 1; }
.btn-card {
  background-color: #009a44; color: white; border: none; padding: 8px;
  border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;
  text-align: center; transition: background 0.3s;
}
.btn-card:hover { background-color: #007a33; }
</style>
