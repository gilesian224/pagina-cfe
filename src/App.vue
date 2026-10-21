<template>
  <div id="app">
    <!-- 1. NAVBAR SUPERIOR -->
    <nav class="navbar">
      <div class="nav-left">
        <img src="@/assets/logo-cfe.png" alt="CFE" class="logo-cfe" />
      </div>
      <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Superintendencia</a></li>
        <li><a href="#">Operación</a></li>
        <li><a href="#">Programación y Equipos</a></li>
        <li><a href="#">Enlaces</a></li>
      </ul>
      <button class="btn-login">Iniciar sesión</button>
    </nav>

    <!-- 2. HEADER Y CARRUSEL -->
    <header class="hero-header">
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div class="carousel-slide">
            <img src="@/assets/centro-control.jpg" alt="Centro de Control 1" class="carousel-img" />
          </div>
          <div class="carousel-slide">
            <img src="@/assets/centro-control-2.jpeg" alt="Centro de Control 2" class="carousel-img" />
          </div>
          
        </div>
      </div>
      
      <div class="hero-overlay">
        <h1>GERENCIA REGIONAL DE TRANSMISIÓN CENTRAL</h1>
        <h2>ZONA DE OPERACIÓN DE TRANSMISIÓN PUEBLA TLAXCALA</h2>
      </div>
    </header>

    <!-- 3. CONTENIDO PRINCIPAL -->
    <div class="main-container">
      
      <!-- Columna Izquierda: Menú y Calendario -->
      <aside class="sidebar">
        <div class="menu-group">
          <h3 class="menu-title">Sobre Nosotros</h3>
          <ul>
            <li>› Visión, Misión y Ambición</li>
            <li>› Objetivos e Indicadores</li>
            <li>› Organigrama</li>
            <li>› ¿Quiénes somos?</li>
            <li>› Nuestra Historia</li>
            <li>› Cronología de Jefes de Subárea</li>
            <li>› Operadores desde 1973 a la fecha</li>
            <li>› Nuestros Recuerdos</li>
          </ul>
        </div>
        
        <div class="menu-group">
          <h3 class="menu-title">Directorio ⌄</h3>
          <h3 class="menu-title">Servicios Internos ⌄</h3>
          <h3 class="menu-title">Enlaces ⌄</h3>
        </div>

        <!-- CALENDARIO -->
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
              :class="{ 
                'hoy': esHoy(dia), 
                'festivo': esFestivo(dia),
                'no-laborable': esNoLaborable(dia) 
              }"
            >
              {{ dia }}
            </div>
          </div>
        </div>
      </aside>

      <!-- Columna Derecha: Tarjetas y Actualizaciones -->
      <main class="content-area">
        
        <section class="section">
          <h2 class="section-title">Sitios de Interés</h2>
          <div class="grid-cards">
            <div class="card">
              <div class="card-icon">📚</div>
              <h4>Normateca</h4>
              <p>Consulta el marco normativo aplicable en materia de transparencia.</p>
              <button class="btn-card">Consultar Normateca</button>
            </div>
            <div class="card">
              <div class="card-icon">⚙️</div>
              <h4>Servicios Tecnológicos</h4>
              <p>Accede a los servicios de soporte y herramientas digitales.</p>
              <button class="btn-card">Consultar Servicios</button>
            </div>
            <div class="card">
              <div class="card-icon">📄</div>
              <h4>SIRH Formatos</h4>
              <p>Descarga y consulta los formatos oficiales de documentos.</p>
              <button class="btn-card">Consultar Formatos</button>
            </div>
            <div class="card">
              <div class="card-icon">🎓</div>
              <h4>GIDD Capacitación</h4>
              <p>Consulta las capacitaciones disponibles para el personal.</p>
              <button class="btn-card">Consultar GIDD</button>
            </div>
            <div class="card">
              <div class="card-icon">🤝</div>
              <h4>Género e Inclusión</h4>
              <p>Conoce las acciones para promover la igualdad e inclusión.</p>
              <button class="btn-card">Consultar Género</button>
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">Actualizaciones Recientes</h2>
          <div class="grid-updates">
            <div class="update-item">Normateca</div>
            <div class="update-item">SIRH Formatos</div>
            <div class="update-item">GIDD</div>
            <div class="update-item">Accesos Móviles</div>
            <div class="update-item">SIG</div>
            <div class="update-item">Género e Inclusión</div>
          </div>
        </section>

      </main>
    </div>

    <!-- 4. FOOTER -->
    <footer class="footer">
      <div class="footer-left">CFE</div>
      <div class="footer-center">
        <p>Camino a la Resurrección No. 11045. Junta Auxiliar de la Resurrección. Puebla, Pue. C.P. 72307</p>
        <p>Tel. 01 (55) 53-38-13-00 EXT. 39370 Y 39300</p>
      </div>
      <div class="footer-right">
        <span>Políticas de privacidad</span>
        <span>Contacto</span>
        <span>Redes Sociales</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fechaActual: new Date(),
      currentIndex: 0,      
      totalImages: 4,       
      intervalId: null,     
      
      // Días de descanso obligatorios LFT / CFE para 2026 (Ya incluyen los inhábiles)
      festivos2026: [
        '0-1',   // 1 de enero (Año Nuevo)
        '1-2',   // 2 de febrero (Constitución)
        '2-16',  // 16 de marzo (Natalicio Benito Juárez)
        '4-1',   // 1 de mayo (Día del Trabajo)
        '8-16',  // 16 de septiembre (Independencia)
        '10-16', // 16 de noviembre (Revolución Mexicana)
        '11-25'  // 25 de diciembre (Navidad)
      ],
      
      // Arreglo vacío por si después quieres agregar días puente o no laborables extra
      noLaborables2026: [] 
    };
  },
  computed: {
    anioActual() { return this.fechaActual.getFullYear(); },
    mesActual() { return this.fechaActual.getMonth(); },
    nombreMes() {
      const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      return meses[this.mesActual];
    },
    diasDelMes() { return new Date(this.anioActual, this.mesActual + 1, 0).getDate(); },
    primerDiaSemana() { return new Date(this.anioActual, this.mesActual, 1).getDay(); }
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        if (this.currentIndex < this.totalImages - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }, 5000); 
    },
    cambiarMes(delta) {
      const nuevaFecha = new Date(this.anioActual, this.mesActual + delta, 1);
      this.fechaActual = nuevaFecha;
    },
    esHoy(dia) {
      const hoy = new Date();
      return dia === hoy.getDate() && this.mesActual === hoy.getMonth() && this.anioActual === hoy.getFullYear();
    },
    esFestivo(dia) {
      if (this.anioActual === 2026) {
        const formatoFecha = `${this.mesActual}-${dia}`;
        return this.festivos2026.includes(formatoFecha);
      }
      return false;
    },
    esNoLaborable(dia) {
      if (this.anioActual === 2026) {
        const formatoFecha = `${this.mesActual}-${dia}`;
        return this.noLaborables2026.includes(formatoFecha);
      }
      return false;
    }
  }
}
</script>

<style>
/* --- ESTILOS GLOBALES --- */
body, html { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; overflow-x: hidden; }
* { box-sizing: inherit; }
#app { width: 100%; min-height: 100vh; display: flex; flex-direction: column; }

/* --- NAVBAR --- */
.navbar { background-color: #ffffff; display: flex; justify-content: space-between; align-items: center; padding: 10px 40px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); z-index: 10; }
.nav-left { display: flex; align-items: center; gap: 10px; }
.logo-cfe { height: 40px; }
.nav-links { list-style: none; display: flex; gap: 25px; margin: 0; padding: 0; }
.nav-links a { text-decoration: none; color: #555; font-size: 14px; font-weight: 500; transition: color 0.3s; }
.nav-links a:hover { color: #009a44; }
.btn-login { background-color: #009a44; color: white; border-radius: 20px; padding: 8px 20px; border: none; cursor: pointer; font-weight: bold; font-size: 14px; }
.btn-login:hover { background-color: #007a33; }

/* --- HEADER Y CARRUSEL --- */
.hero-header { position: relative; height: 300px; overflow: hidden; background-color: #000; }
.carousel-container { width: 100%; height: 100%; }
.carousel-track { display: flex; height: 100%; transition: transform 0.8s ease-in-out; }
.carousel-slide { min-width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
.carousel-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)); z-index: 2; }
.hero-overlay h1 { margin: 0; font-size: 28px; letter-spacing: 1px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
.hero-overlay h2 { margin: 5px 0 0 0; font-size: 18px; font-weight: normal; text-shadow: 1px 1px 3px rgba(0,0,0,0.8); }

/* --- CONTENIDO PRINCIPAL --- */
.main-container { display: flex; max-width: 1200px; margin: 20px auto; padding: 0 20px; gap: 20px; width: 100%; }
.sidebar { width: 250px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); height: fit-content; display: flex; flex-direction: column; }
.menu-group { margin-bottom: 20px; }
.menu-title { font-size: 16px; color: #333; margin-bottom: 10px; border-bottom: 2px solid #009a44; padding-bottom: 5px; }
.sidebar ul { list-style: none; padding: 0; margin: 0; }
.sidebar li { padding: 6px 0; color: #555; font-size: 13px; cursor: pointer; transition: color 0.3s; }
.sidebar li:hover { color: #009a44; }
.content-area { flex-grow: 1; }
.section { margin-bottom: 30px; }
.section-title { font-size: 20px; color: #333; margin-bottom: 15px; font-weight: 600; }

/* Tarjetas */
.grid-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; }
.card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.card-icon { font-size: 30px; margin-bottom: 10px; }
.card h4 { margin: 0 0 10px 0; font-size: 15px; color: #222; }
.card p { font-size: 12px; color: #666; margin-bottom: 15px; flex-grow: 1; }
.btn-card { background-color: #009a44; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold; text-align: center; transition: background 0.3s; }
.btn-card:hover { background-color: #007a33; }

/* Actualizaciones */
.grid-updates { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.update-item { background: white; padding: 12px; text-align: center; font-size: 13px; color: #444; border-radius: 4px; border: 1px solid #ddd; cursor: pointer; transition: background 0.3s, border-color 0.3s; }
.update-item:hover { background: #f0fdf4; border-color: #009a44; color: #009a44; }

/* Footer */
.footer { background-color: #e2c044; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; color: #333; font-size: 13px; margin-top: auto; }
.footer-center { text-align: center; font-size: 12px; line-height: 1.4; }
.footer-center p { margin: 0; }
.footer-right { display: flex; gap: 20px; }
.footer-right span { cursor: pointer; }
.footer-right span:hover { text-decoration: underline; }

/* --- CALENDARIO --- */
.calendar-card { background: #f9f9f9; border-radius: 8px; padding: 15px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-top: 10px; width: 100%; border: 1px solid #eee; }
.calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.calendar-header h3 { margin: 0; font-size: 14px; color: #009a44; text-transform: capitalize; }
.btn-nav { background-color: #fff; border: 1px solid #ddd; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; color: #333; font-size: 10px; display: flex; justify-content: center; align-items: center; transition: all 0.2s; }
.btn-nav:hover { background-color: #e2c044; border-color: #e2c044; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; text-align: center; }
.dias-semana div { font-weight: bold; font-size: 10px; color: #666; padding-bottom: 5px; border-bottom: 1px solid #ddd; margin-bottom: 5px; }
.calendar-day { padding: 4px 0; font-size: 11px; color: #333; border-radius: 4px; cursor: pointer; }
.calendar-day:hover:not(.empty) { background-color: #e0f2e9; color: #009a44; }
.calendar-day.empty { cursor: default; }

/* Estilos de días especiales */
.calendar-day.festivo { background-color: #ffe5e5; color: #d32f2f; font-weight: bold; border: 1px solid #ffcdd2; }
.calendar-day.no-laborable { background-color: #fff3e0; color: #e65100; font-weight: bold; border: 1px dashed #ffb74d; }

/* Prioridades: Hoy > Festivo > No laborable */
.calendar-day.no-laborable { background-color: #fff3e0 !important; color: #e65100 !important; border: 1px dashed #ffb74d !important; }
.calendar-day.festivo { background-color: #ffe5e5 !important; color: #d32f2f !important; border: 1px solid #ffcdd2 !important; }
.calendar-day.hoy { background-color: #009a44 !important; color: white !important; border: none !important; }

/* ========================================= */
/* --- RESPONSIVIDAD (Móviles y Tablets) --- */
/* ========================================= */
@media (max-width: 768px) {
  .navbar { flex-direction: column; padding: 15px 10px; gap: 15px; }
  .nav-links { flex-wrap: wrap; justify-content: center; gap: 15px; padding: 0 10px; }
  .main-container { flex-direction: column; padding: 10px; margin: 10px auto; }
  .sidebar { width: 100%; margin-bottom: 20px; }
  
  .sidebar .menu-group { margin-bottom: 10px; }
  .sidebar ul { display: flex; flex-wrap: wrap; gap: 5px; }
  .sidebar li { width: 100%; }

  .calendar-card { padding: 10px; }
  .calendar-day { padding: 6px 0; font-size: 12px; }
  .dias-semana div { font-size: 11px; }

  .hero-header { height: 250px; }
  .hero-overlay h1 { font-size: 18px; }
  .hero-overlay h2 { font-size: 12px; }

  .footer { flex-direction: column; text-align: center; gap: 15px; padding: 20px; }
  .footer-right { justify-content: center; flex-wrap: wrap; }
}
</style>