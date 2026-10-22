<template>
  <section class="section">
    <h2 class="section-title">Misión y Visión</h2>

    <div class="vm-layout">
      <!-- Foto de las instalaciones -->
      <figure class="vm-figura">
        <img src="@/assets/centro-control-2.jpeg" alt="Edificio de la Zona de Operación de Transmisión Puebla Tlaxcala" />
        <figcaption>Instalaciones</figcaption>
      </figure>

      <!-- Texto principal -->
      <article class="vm-texto">
        <p class="vm-intro">
          La Zona de Operación de Transmisión Puebla Tlaxcala, como parte de las directrices de
          Planeación Estratégica de nuestra Jefatura y alineada a la Dirección Corporativa de
          Operaciones, define la Misión y Visión:
        </p>

        <div class="vm-bloque">
          <h3>Misión</h3>
          <p>
            “Desarrollar actividades empresariales, económicas, industriales y comerciales generando
            valor económico y rentabilidad para el Estado Mexicano, procurando el mejoramiento de la
            productividad con sustentabilidad, en beneficio de la población y contribuir con el
            desarrollo nacional”.
          </p>
        </div>

        <div class="vm-bloque">
          <h3>Visión</h3>
          <p>
            “Ser una de las empresas de energía líder en el sector eléctrico y energético, de las mejores
            en el sector eléctrico a nivel mundial, con presencia internacional, fortaleza financiera e
            ingresos adicionales por servicios relacionados con su capital intelectual e infraestructura
            comercial. Una empresa reconocida por su atención al cliente, competitividad, transparencia,
            calidad en el servicio, capacidad de su personal, vanguardia tecnológica y aplicación de
            criterios de desarrollo sustentable”.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VisionMisionView'
}
</script>

<style scoped>
.vm-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
  align-items: start;
}

/* Tarjeta de la foto */
.vm-figura {
  margin: 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.vm-figura img {
  display: block;
  width: 100%;
}
.vm-figura figcaption {
  background-color: #009a44;
  color: white;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  padding: 10px;
}

/* Texto */
.vm-texto {
  background: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  color: #444;
  font-size: 14px;
  line-height: 1.7;
}
.vm-intro { margin-top: 0; }
.vm-bloque h3 {
  text-align: center;
  color: #009a44;
  font-size: 18px;
  margin: 25px 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid #e2c044;
}
.vm-bloque p {
  text-align: justify;
  margin: 0;
}

/* Pantallas medianas y móviles: la foto arriba del texto */
@media (max-width: 1000px) {
  .vm-layout { grid-template-columns: 1fr; }
  .vm-figura img { max-height: 320px; object-fit: cover; }
  .vm-texto { padding: 18px; }
}
</style>
