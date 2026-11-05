<template>
  <section class="section">
    <h2 class="section-title">Escenario Tecnológico</h2>
    <p class="subtitulo">
      Red Nacional de Transmisión · Zona de Operación de Transmisión Puebla – Tlaxcala
    </p>

    <!-- 1. Resumen: un total por bloque -->
    <div class="resumen">
      <div v-for="bloque in bloques" :key="bloque.id" class="resumen-tile">
        <span class="resumen-icono" aria-hidden="true">{{ bloque.icono }}</span>
        <span class="resumen-titulo">{{ bloque.titulo }}</span>
        <span class="resumen-valor">
          {{ formato(totalDeColumna(bloque, bloque.barra)) }}
          <small>{{ bloque.unidad }}</small>
        </span>
        <!-- Líneas: además de los km, el total de líneas -->
        <span v-if="bloque.id === 'lineas'" class="resumen-extra">
          en {{ formato(totalDeColumna(bloque, 0)) }} líneas
        </span>
      </div>
    </div>

    <!-- 2. Detalle: una tabla por bloque -->
    <div class="bloques">
      <article v-for="bloque in bloques" :key="bloque.id" class="bloque">
        <h3 class="bloque-titulo">
          <span aria-hidden="true">{{ bloque.icono }}</span> {{ bloque.titulo }}
        </h3>

        <table class="tabla">
          <thead>
            <tr>
              <th scope="col">{{ bloque.encabezadoFila }}</th>
              <th scope="col" class="col-barra"><span class="sr-only">Proporción</span></th>
              <th v-for="columna in bloque.columnas" :key="columna" scope="col" class="num">
                {{ columna }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fila in bloque.filas" :key="fila.etiqueta">
              <th scope="row">{{ fila.etiqueta }}</th>
              <td class="col-barra">
                <!-- Barra proporcional al valor más alto de la columna marcada en "barra" -->
                <div class="barra-fondo">
                  <div
                    class="barra"
                    :style="{ width: porcentaje(bloque, fila) + '%' }"
                    :title="`${fila.etiqueta}: ${formato(fila.valores[bloque.barra])} ${bloque.columnas[bloque.barra]}`"
                  ></div>
                </div>
              </td>
              <td v-for="(valor, i) in fila.valores" :key="i" class="num">{{ formato(valor) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td class="col-barra"></td>
              <td v-for="(columna, i) in bloque.columnas" :key="columna" class="num">
                {{ formato(totalDeColumna(bloque, i)) }}
              </td>
            </tr>
          </tfoot>
        </table>
      </article>
    </div>

    <p class="fuente">Fuente: presentación "Escenario Tecnológico ZOT Puebla – Tlaxcala".</p>
  </section>
</template>

<script>
import { bloques } from '@/data/escenarioTecnologico';

export default {
  name: 'EscenarioTecnologicoView',
  data() {
    return { bloques };
  },
  methods: {
    // Suma una columna del bloque (0 = primera columna de números)
    totalDeColumna(bloque, indice) {
      return bloque.filas.reduce((suma, fila) => suma + fila.valores[indice], 0);
    },
    // Ancho de la barra: el valor más alto del bloque ocupa el 100 %
    porcentaje(bloque, fila) {
      const maximo = Math.max(...bloque.filas.map(f => f.valores[bloque.barra]));
      return maximo ? (fila.valores[bloque.barra] / maximo) * 100 : 0;
    },
    // 2238 → "2,238"
    formato(numero) {
      return numero.toLocaleString('es-MX');
    }
  }
}
</script>

<style scoped>
.subtitulo {
  margin: -8px 0 20px 0;
  font-size: 13px;
  color: #666;
}

/* --- Resumen --- */
.resumen {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}
.resumen-tile {
  background: white;
  border-radius: 8px;
  padding: 16px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-top: 4px solid #009a44;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.resumen-icono { font-size: 22px; }
.resumen-titulo { font-size: 12px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.3px; }
.resumen-valor { font-size: 28px; font-weight: 700; color: #222; line-height: 1.1; }
.resumen-valor small { font-size: 13px; font-weight: 600; color: #555; }
.resumen-extra { font-size: 12px; color: #666; }

/* --- Tablas --- */
.bloques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
.bloque {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.bloque-titulo {
  margin: 0;
  background-color: #009a44;
  color: white;
  font-size: 15px;
  padding: 12px 18px;
  border-bottom: 4px solid #e2c044;
}
.tabla {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.tabla th,
.tabla td {
  padding: 9px 18px;
  text-align: left;
}
.tabla thead th {
  font-size: 11px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border-bottom: 1px solid #eee;
  white-space: nowrap;
}
.tabla tbody tr + tr { border-top: 1px solid #f2f2f2; }
.tabla tbody th { font-weight: 600; color: #333; white-space: nowrap; }
.tabla .num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; color: #222; }
.tabla tfoot th,
.tabla tfoot td { border-top: 2px solid #e0f2e9; font-weight: 700; color: #222; }

/* Barra: fondo verde muy claro y relleno verde CFE, con punta redondeada */
.col-barra { width: 40%; }
.barra-fondo {
  background: #eef6f1;
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
}
.barra {
  background: #009a44;
  height: 100%;
  border-radius: 0 4px 4px 0;
  min-width: 2px;
}

.fuente { margin-top: 15px; font-size: 11px; color: #888; }

/* Texto solo para lectores de pantalla */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Celular: tablas más compactas */
@media (max-width: 480px) {
  .tabla th,
  .tabla td { padding: 8px 10px; }
  .col-barra { width: 30%; }
  .resumen-valor { font-size: 24px; }
}
</style>
