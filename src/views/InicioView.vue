<template>
  <section class="section">
    <h2 class="section-title">Zona de Operación de Transmisión Puebla-Tlaxcala</h2>

    <!-- 1. Presentación -->
    <div class="in-presentacion">
      <p>
        La Zona de Operación de Transmisión Puebla-Tlaxcala es una subdivisión administrativa y
        operativa perteneciente a CFE Transmisión, una de las empresas productivas subsidiarias de la
        Comisión Federal de Electricidad (CFE). Su función principal es operar, mantener y supervisar
        las líneas de alta tensión y subestaciones eléctricas en la región para transportar la energía
        desde las centrales generadoras hacia las redes de distribución.
      </p>
      <p>
        Esta unidad forma parte de la Gerencia Regional de Transmisión Central y es distinta de las
        oficinas de atención al cliente tradicionales (como CFE Suministrador de Servicios Básicos o
        CFE Distribución).
      </p>
    </div>

    <!-- 2. La zona en cifras -->
    <h3 class="in-subtitulo">La zona en cifras</h3>
    <div class="in-cifras">
      <div v-for="cifra in cifras" :key="cifra.texto" class="in-cifra">
        <span class="in-numero">{{ cifra.numero }}</span>
        <span class="in-texto">{{ cifra.texto }}</span>
      </div>
    </div>

    <router-link to="/escenario-tecnologico" class="in-enlace">
      Ver escenario tecnológico completo ›
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'InicioView',
  data() {
    return {
      // Totales de la página Escenario Tecnológico.
      // Si cambian allá, hay que actualizarlos aquí también.
      cifras: [
        { numero: '230', texto: 'Subestaciones' },
        { numero: '2,726 km', texto: 'Líneas de transmisión' },
        { numero: '504', texto: 'Interruptores instalados' },
        { numero: '7,572 MVA', texto: 'Capacidad instalada' }
      ]
    };
  }
}
</script>

<style scoped>
.in-presentacion {
  background: white;
  border: 1px solid #d9d9d9;
  border-left: 4px solid #009a44;
  padding: 18px 22px;
  margin-bottom: 30px;
}
.in-presentacion p {
  font-size: 14px;
  color: #333;
  line-height: 1.7;
  text-align: justify;
  margin: 0 0 12px 0;
}
.in-presentacion p:last-child { margin-bottom: 0; }

.in-subtitulo {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px 0;
}

/* Cuatro recuadros iguales; en celular pasan a dos por fila */
.in-cifras {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #d9d9d9;
  background: white;
}
.in-cifra {
  padding: 16px 12px;
  text-align: center;
  border-right: 1px solid #d9d9d9;
}
.in-cifra:last-child { border-right: none; }
.in-numero {
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: #007a33;
}
.in-texto {
  display: block;
  font-size: 12px;
  color: #555;
  margin-top: 4px;
}

.in-enlace {
  display: inline-block;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #007a33;
  text-decoration: none;
}
.in-enlace:hover { text-decoration: underline; }

@media (max-width: 600px) {
  .in-cifras { grid-template-columns: repeat(2, 1fr); }
  .in-cifra:nth-child(2) { border-right: none; }
  .in-cifra:nth-child(-n+2) { border-bottom: 1px solid #d9d9d9; }
  .in-presentacion { padding: 14px 16px; }
  .in-presentacion p { text-align: left; }
}
</style>
