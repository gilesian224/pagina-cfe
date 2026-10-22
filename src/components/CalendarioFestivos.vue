<template>
  <div class="calendar-card">
    <div class="calendar-header">
      <button class="btn-nav" @click="cambiarMes(-1)">&#10094;</button>
      <h3>{{ nombreMes }} {{ anioActual }}</h3>
      <button class="btn-nav" @click="cambiarMes(1)">&#10095;</button>
    </div>

    <div class="calendar-grid dias-semana">
      <div>Dom</div><div>Lun</div><div>Mar</div><div>Mié</div><div>Jue</div><div>Vie</div><div>Sáb</div>
    </div>

    <div class="calendar-grid">
      <div v-for="n in primerDiaSemana" :key="'vacio-'+n" class="calendar-day empty"></div>
      <div
        v-for="dia in diasDelMes"
        :key="dia"
        class="calendar-day"
        :class="{ 'hoy': esHoy(dia), 'festivo': esFestivo(dia) }"
      >
        {{ dia }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarioFestivos',
  data() {
    return {
      fechaActual: new Date(),

      // Días de descanso obligatorios LFT / CFE para 2026
      festivos2026: [
        '0-1',   // 1 de enero (Año Nuevo)
        '1-2',   // Primer lunes de febrero
        '2-16',  // Tercer lunes de marzo
        '4-1',   // 1 de mayo
        '8-16',  // 16 de septiembre
        '10-16', // Tercer lunes de noviembre
        '11-25'  // 25 de diciembre
      ]
    };
  },
  computed: {
    anioActual() {
      return this.fechaActual.getFullYear();
    },
    mesActual() {
      return this.fechaActual.getMonth();
    },
    nombreMes() {
      const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      return meses[this.mesActual];
    },
    diasDelMes() {
      return new Date(this.anioActual, this.mesActual + 1, 0).getDate();
    },
    primerDiaSemana() {
      return new Date(this.anioActual, this.mesActual, 1).getDay();
    }
  },
  methods: {
    cambiarMes(delta) {
      this.fechaActual = new Date(this.anioActual, this.mesActual + delta, 1);
    },
    esHoy(dia) {
      const hoy = new Date();
      return dia === hoy.getDate() &&
             this.mesActual === hoy.getMonth() &&
             this.anioActual === hoy.getFullYear();
    },
    esFestivo(dia) {
      if (this.anioActual === 2026) {
        return this.festivos2026.includes(`${this.mesActual}-${dia}`);
      }
      return false;
    }
  }
}
</script>

<style scoped>
.calendar-card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-top: 10px;
  width: 100%;
  border: 1px solid #eee;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-header h3 {
  margin: 0;
  font-size: 14px;
  color: #009a44;
  text-transform: capitalize;
}

.btn-nav {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #333;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
}

.btn-nav:hover {
  background-color: #e2c044;
  border-color: #e2c044;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  text-align: center;
}

.dias-semana div {
  font-weight: bold;
  font-size: 10px;
  color: #666;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
}

.calendar-day {
  padding: 4px 0;
  font-size: 11px;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
}

.calendar-day:hover:not(.empty) {
  background-color: #e0f2e9;
  color: #009a44;
}

.calendar-day.empty {
  cursor: default;
}

/* Estilo para los días festivos */
.calendar-day.festivo {
  background-color: #ffe5e5;
  color: #d32f2f;
  font-weight: bold;
  border: 1px solid #ffcdd2;
}

/* Día de hoy: si un festivo cae hoy, el verde tiene prioridad */
.calendar-day.hoy {
  background-color: #009a44 !important;
  color: white !important;
  font-weight: bold;
  border: none !important;
}
</style>
