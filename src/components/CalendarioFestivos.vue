<template>
  <div class="calendar-card">
    <div class="calendar-header">
      <button class="btn-nav" aria-label="Mes anterior" @click="cambiarMes(-1)">&#10094;</button>
      <h3>{{ nombreMes }} {{ anioActual }}</h3>
      <button class="btn-nav" aria-label="Mes siguiente" @click="cambiarMes(1)">&#10095;</button>
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
        :class="clasesDelDia(dia)"
        :title="textoDelDia(dia)"
      >
        {{ dia }}
      </div>
    </div>

    <!-- Eventos del mes: festivos, no laborables y cumpleaños -->
    <div class="eventos">
      <h4>Este mes</h4>
      <ul v-if="eventosDelMes.length">
        <li v-for="evento in eventosDelMes" :key="evento.tipo + evento.dia + evento.nombre" :class="'evento-' + evento.tipo">
          <span class="evento-dia">{{ evento.dia }}</span>
          <span>{{ evento.tipo === 'cumpleanos' ? '🎂 ' : '' }}{{ evento.nombre }}</span>
        </li>
      </ul>
      <p v-else class="sin-eventos">Sin días festivos ni cumpleaños.</p>
    </div>
  </div>
</template>

<script>
import { festivos, noLaborables, cumpleanos } from '@/data/calendario';

export default {
  name: 'CalendarioFestivos',
  data() {
    return {
      fechaActual: new Date()
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
    },
    // Todos los eventos del mes que se está viendo, ordenados por día
    eventosDelMes() {
      const mes = this.mesActual + 1;
      const delMes = (lista, tipo) => (lista || [])
        .filter(e => e.mes === mes)
        .map(e => ({ ...e, tipo }));

      return [
        ...delMes(festivos[this.anioActual], 'festivo'),
        ...delMes(noLaborables[this.anioActual], 'no-laborable'),
        ...delMes(cumpleanos, 'cumpleanos')
      ].sort((a, b) => a.dia - b.dia);
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
    eventosDelDia(dia) {
      return this.eventosDelMes.filter(e => e.dia === dia);
    },
    clasesDelDia(dia) {
      const tipos = this.eventosDelDia(dia).map(e => e.tipo);
      return {
        'hoy': this.esHoy(dia),
        'festivo': tipos.includes('festivo'),
        'no-laborable': tipos.includes('no-laborable'),
        'cumpleanos': tipos.includes('cumpleanos')
      };
    },
    // Texto que aparece al pasar el mouse sobre el día
    textoDelDia(dia) {
      return this.eventosDelDia(dia)
        .map(e => (e.tipo === 'cumpleanos' ? `Cumpleaños: ${e.nombre}` : e.nombre))
        .join('\n') || null;
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
  position: relative;
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

/* Días especiales. Prioridades: Hoy > Festivo > No laborable */
.calendar-day.no-laborable {
  background-color: #fff3e0 !important;
  color: #e65100 !important;
  font-weight: bold;
  border: 1px dashed #ffb74d !important;
}

.calendar-day.festivo {
  background-color: #ffe5e5 !important;
  color: #d32f2f !important;
  font-weight: bold;
  border: 1px solid #ffcdd2 !important;
}

.calendar-day.hoy {
  background-color: #009a44 !important;
  color: white !important;
  font-weight: bold;
  border: none !important;
}

/* Cumpleaños: punto dorado debajo del número (se ve aunque sea festivo u hoy) */
.calendar-day.cumpleanos::after {
  content: '';
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #e2a400;
}

/* Lista de eventos del mes */
.eventos {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}
.eventos h4 {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #333;
}
.eventos ul { list-style: none; margin: 0; padding: 0; }
.eventos li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  font-size: 11px;
  color: #444;
}
.evento-dia {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.evento-festivo .evento-dia { background: #ffe5e5; color: #d32f2f; border: 1px solid #ffcdd2; }
.evento-no-laborable .evento-dia { background: #fff3e0; color: #e65100; border: 1px dashed #ffb74d; }
.evento-cumpleanos .evento-dia { background: #fdf6dc; color: #9a7400; border: 1px solid #e2c044; }
.sin-eventos { margin: 0; font-size: 11px; color: #888; }

/* Móviles y tablets */
@media (max-width: 768px) {
  .calendar-card { padding: 10px; }
  .calendar-day { padding: 6px 0; font-size: 12px; }
  .dias-semana div { font-size: 11px; }
  .eventos li { font-size: 13px; }
}
</style>
