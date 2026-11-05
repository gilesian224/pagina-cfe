<template>
  <section class="section">
    <h2 class="section-title">Escenario Tecnológico</h2>

    <p class="et-intro">
      Infraestructura de la Zona de Operación de Transmisión Puebla – Tlaxcala,
      perteneciente a la Red Nacional de Transmisión.
    </p>

    <!-- Una tabla por cada tema -->
    <div v-for="(tabla, i) in tablas" :key="tabla.titulo" class="et-bloque">
      <h3 class="et-titulo">{{ i + 1 }}. {{ tabla.titulo }}</h3>

      <table class="et-tabla">
        <thead>
          <tr>
            <th>{{ tabla.encabezado }}</th>
            <th v-for="columna in tabla.columnas" :key="columna" class="num">{{ columna }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fila in tabla.filas" :key="fila.nombre">
            <td>{{ fila.nombre }}</td>
            <td v-for="(valor, j) in fila.valores" :key="j" class="num">{{ formato(valor) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td v-for="(columna, j) in tabla.columnas" :key="columna" class="num">
              {{ formato(total(tabla, j)) }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <p class="et-fuente">
      Fuente: Escenario Tecnológico, Zona de Operación de Transmisión Puebla – Tlaxcala.
    </p>
  </section>
</template>

<script>
export default {
  name: 'EscenarioTecnologicoView',
  data() {
    return {
      // Para actualizar una cifra, solo se cambia el número; el total se calcula solo
      tablas: [
        {
          titulo: 'Subestaciones',
          encabezado: 'Red',
          columnas: ['Número de subestaciones'],
          filas: [
            { nombre: 'RST', valores: [99] },
            { nombre: 'RNT', valores: [16] },
            { nombre: 'RT', valores: [115] }
          ]
        },
        {
          titulo: 'Líneas de transmisión',
          encabezado: 'Nivel de tensión',
          columnas: ['Número de líneas', 'Kilómetros'],
          filas: [
            { nombre: '400 kV', valores: [6, 139] },
            { nombre: '230 kV', valores: [9, 272] },
            { nombre: '115 kV', valores: [118, 2238] },
            { nombre: '69 kV', valores: [2, 77] }
          ]
        },
        {
          titulo: 'Interruptores instalados',
          encabezado: 'Nivel de tensión',
          columnas: ['Número de interruptores'],
          filas: [
            { nombre: '400 kV', valores: [63] },
            { nombre: '230 kV', valores: [57] },
            { nombre: '115 kV', valores: [382] },
            { nombre: '69 kV', valores: [2] }
          ]
        },
        {
          titulo: 'Capacidad instalada',
          encabezado: 'Nivel de tensión',
          columnas: ['MVA'],
          filas: [
            { nombre: '400 kV', valores: [3261] },
            { nombre: '230 kV', valores: [1198] },
            { nombre: '115 kV', valores: [3087] },
            { nombre: '69 kV', valores: [26] }
          ]
        }
      ]
    };
  },
  methods: {
    // Suma la columna "j" de una tabla
    total(tabla, j) {
      let suma = 0;
      for (const fila of tabla.filas) {
        suma += fila.valores[j];
      }
      return suma;
    },
    // 2238 → 2,238
    formato(numero) {
      return numero.toLocaleString('es-MX');
    }
  }
}
</script>

<style scoped>
.et-intro {
  font-size: 14px;
  color: #444;
  line-height: 1.6;
  margin: 0 0 25px 0;
}

.et-bloque { margin-bottom: 30px; }

.et-titulo {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px 0;
}

.et-tabla {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  background: white;
  font-size: 14px;
}
.et-tabla th,
.et-tabla td {
  border: 1px solid #d9d9d9;
  padding: 8px 14px;
  text-align: left;
}
.et-tabla thead th {
  background-color: #009a44;
  color: white;
  font-weight: 600;
}
.et-tabla tbody tr:nth-child(even) { background-color: #f7f7f7; }
.et-tabla tfoot td {
  font-weight: bold;
  background-color: #eeeeee;
}
.et-tabla .num { text-align: right; }

.et-fuente {
  font-size: 12px;
  color: #777;
  margin-top: 10px;
}

@media (max-width: 480px) {
  .et-tabla { font-size: 13px; }
  .et-tabla th,
  .et-tabla td { padding: 7px 8px; }
}
</style>
