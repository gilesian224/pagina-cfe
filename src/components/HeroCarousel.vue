<template>
  <header class="hero-header">
    <div class="carousel-container">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="imagen in imagenes" :key="imagen.alt" class="carousel-slide">
          <img :src="imagen.src" :alt="imagen.alt" class="carousel-img" />
        </div>
      </div>
    </div>

    <div class="hero-overlay">
      <h1>GERENCIA REGIONAL DE TRANSMISIÓN CENTRAL</h1>
      <h2>ZONA DE OPERACIÓN DE TRANSMISIÓN PUEBLA TLAXCALA</h2>
    </div>
  </header>
</template>

<script>
import centroControl from '@/assets/centro-control.jpg';
import centroControl2 from '@/assets/centro-control-2.jpg';
import transmision from '@/assets/Transmision.jpg';
import portada from '@/assets/portada.jpg';

export default {
  name: 'HeroCarousel',
  data() {
    return {
      currentIndex: 0,
      intervalId: null,     // Guarda el temporizador del carrusel
      imagenes: [
        { src: centroControl, alt: 'Centro de Control 1' },
        { src: centroControl2, alt: 'Centro de Control 2' },
        { src: transmision, alt: 'Centro de Control 3' },
        { src: portada, alt: 'Centro de Control 4' }
      ]
    };
  },
  mounted() {
    // Inicia el carrusel automático al cargar la página
    this.startCarousel();
  },
  beforeUnmount() {
    // Limpia el temporizador si se cierra el componente
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
      }, 5000); // Cambia de imagen cada 5 segundos
    }
  }
}
</script>

<style scoped>
.hero-header {
  position: relative;
  height: 300px;
  overflow: hidden;
  background-color: #000;
}

.carousel-container {
  width: 100%;
  height: 100%;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  z-index: 2;
}
.hero-overlay h1 { margin: 0; font-size: 28px; letter-spacing: 1px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
.hero-overlay h2 { margin: 5px 0 0 0; font-size: 18px; font-weight: normal; text-shadow: 1px 1px 3px rgba(0,0,0,0.8); }

/* Móviles y tablets: reducir textos para que no se desborden */
@media (max-width: 768px) {
  .hero-header { height: 250px; }
  .hero-overlay h1 { font-size: 18px; }
  .hero-overlay h2 { font-size: 12px; }
}
</style>
