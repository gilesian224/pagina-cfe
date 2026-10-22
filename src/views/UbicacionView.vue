<template>
  <section class="section">
    <h2 class="section-title">Nuestro Centro de Trabajo</h2>

    <div class="ubicacion-card">
      <div class="ubicacion-titulo">Ubicación ZOTPT</div>

      <!-- Mapa interactivo (Leaflet + OpenStreetMap) -->
      <div ref="mapa" class="mapa" title="Da clic en el mapa para hacer zoom con la rueda del mouse"></div>

      <!-- Franja verde con la dirección -->
      <div class="ubicacion-direccion">
        <span class="direccion-icono">📍</span>
        <div>
          <strong>{{ nombre }}</strong>
          <p>{{ direccion }}</p>
        </div>
      </div>

      <div class="ubicacion-acciones">
        <a :href="urlComoLlegar" target="_blank" rel="noopener" class="btn-accion">Cómo llegar</a>
        <a :href="urlMapaGrande" target="_blank" rel="noopener" class="btn-accion btn-secundario">Ver mapa más grande</a>
      </div>
    </div>
  </section>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordenadas de la Subestación Puebla II (OpenStreetMap)
const LATITUD = 19.0820518;
const LONGITUD = -98.1379146;

export default {
  name: 'UbicacionView',
  data() {
    return {
      nombre: 'Subestación Puebla II',
      direccion: 'Camino a la Resurrección No. 11045, Junta Auxiliar de la Resurrección, Puebla, Pue. C.P. 72307',
      urlComoLlegar: `https://www.google.com/maps/dir/?api=1&destination=${LATITUD},${LONGITUD}`,
      urlMapaGrande: `https://www.openstreetmap.org/?mlat=${LATITUD}&mlon=${LONGITUD}#map=16/${LATITUD}/${LONGITUD}`
    };
  },
  mounted() {
    // El mapa se guarda fuera de "data" para que Vue no lo vuelva reactivo
    this.mapa = L.map(this.$refs.mapa, { scrollWheelZoom: false }).setView([LATITUD, LONGITUD], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; Colaboradores de <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.mapa);

    // Marcador verde CFE
    const icono = L.divIcon({
      className: 'marcador-cfe',
      html: '<svg viewBox="0 0 24 36" width="32" height="48"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#009a44" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="12" r="4.5" fill="#fff"/></svg>',
      iconSize: [32, 48],
      iconAnchor: [16, 48],
      popupAnchor: [0, -44]
    });

    L.marker([LATITUD, LONGITUD], { icon: icono })
      .addTo(this.mapa)
      .bindPopup(`<strong>${this.nombre}</strong><br>Zona de Operación de Transmisión Puebla Tlaxcala`)
      .openPopup();

    // La rueda del mouse solo hace zoom después de dar clic en el mapa,
    // para no atorar el desplazamiento de la página.
    this.mapa.on('click', () => this.mapa.scrollWheelZoom.enable());
    this.mapa.on('mouseout', () => this.mapa.scrollWheelZoom.disable());
  },
  beforeUnmount() {
    this.mapa.remove();
  }
}
</script>

<style scoped>
.ubicacion-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.ubicacion-titulo {
  background-color: #009a44;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 14px;
}

.mapa {
  height: 420px;
  width: 100%;
  z-index: 0;
}

/* Franja verde con la dirección */
.ubicacion-direccion {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #009a44;
  color: white;
  padding: 14px 20px;
  border-top: 4px solid #e2c044;
}
.direccion-icono { font-size: 22px; }
.ubicacion-direccion strong { font-size: 15px; }
.ubicacion-direccion p { margin: 3px 0 0 0; font-size: 13px; }

.ubicacion-acciones {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 15px;
  flex-wrap: wrap;
}
.btn-accion {
  background-color: #009a44;
  color: white;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
  transition: background 0.3s;
}
.btn-accion:hover { background-color: #007a33; }
.btn-secundario {
  background-color: white;
  color: #009a44;
  border: 1px solid #009a44;
}
.btn-secundario:hover { background-color: #e0f2e9; }

/* Móviles */
@media (max-width: 768px) {
  .mapa { height: 320px; }
  .ubicacion-direccion { padding: 12px 15px; }
}
</style>

<style>
/* El marcador lo crea Leaflet fuera del alcance de "scoped" */
.marcador-cfe { background: none; border: none; }
</style>
