<template>
  <div id="app">
    <!-- 1. NAVBAR SUPERIOR -->
    <nav class="navbar">
      <div class="nav-left">
        <img src="@/assets/logo-cfe.png" alt="CFE" class="logo-cfe" />
        <span class="nav-subtitle"></span>
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
      <!-- Aquí está el carrusel en lugar de la imagen estática -->
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          
          <!-- IMAGEN 1 -->
          <div class="carousel-slide">
            <img src="@/assets/centro-control.jpg" alt="Centro de Control 1" class="carousel-img" />
          </div>
          
          <!-- IMAGEN 2 -->
          <div class="carousel-slide">
            <img src="@/assets/centro-control-2.jpg" alt="Centro de Control 2" class="carousel-img" />
          </div>

          <!-- Aquí agregarás las demás imágenes después -->
          
        </div>
      </div>
      
      <!-- Texto sobre el carrusel -->
      <div class="hero-overlay">
        <h1>GERENCIA REGIONAL DE TRANSMISIÓN CENTRAL</h1>
        <h2>ZONA DE OPERACIÓN DE TRANSMISIÓN PUEBLA TLAXCALA</h2>
      </div>
    </header>

    <!-- 3. CONTENIDO PRINCIPAL (2 Columnas) -->
    <div class="main-container">
      
      <!-- Columna Izquierda: Menú Lateral -->
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
      </aside>

      <!-- Columna Derecha: Contenido -->
      <main class="content-area">
        
        <!-- Sección: Sitios de Interés -->
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

        <!-- Sección: Actualizaciones Recientes -->
        <section class="section">
          <h2 class="section-title">Actualizaciones Recientes</h2>
          <div class="grid-updates">
            <div class="update-item">Actualizaciones Recientes</div>
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
      currentIndex: 0,
      totalImages: 2, // <-- CAMBIA ESTE NÚMERO CUANDO AGREGES MÁS IMÁGENES
      intervalId: null
    };
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
      }, 4000); // <-- CAMBIA LA DURACIÓN AQUÍ (4000 = 4 segundos)
    }
  }
}
</script>

<style>
/* --- ESTILOS GLOBALES --- */
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
}
* { box-sizing: inherit; }
#app { width: 100%; min-height: 100vh; display: flex; flex-direction: column; }

/* --- 1. NAVBAR --- */
.navbar {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 10;
}
.nav-left { display: flex; align-items: center; gap: 10px; }
.logo-cfe { height: 40px; }
.nav-subtitle { font-weight: bold; color: #333; border-left: 1px solid #ccc; padding-left: 10px; }
.nav-links { list-style: none; display: flex; gap: 25px; margin: 0; padding: 0; }
.nav-links a { text-decoration: none; color: #555; font-size: 14px; font-weight: 500; transition: color 0.3s; }
.nav-links a:hover { color: #009a44; }
.btn-login {
  background-color: #009a44; color: white; border-radius: 20px;
  padding: 8px 20px; border: none; cursor: pointer; font-weight: bold; font-size: 14px;
}
.btn-login:hover { background-color: #007a33; }

/* --- 2. HEADER CON CARRUSEL --- */
.hero-header {
  position: relative;
  height: 300px; /* Ajusta la altura del carrusel aquí */
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
  object-fit: cover; /* 'cover' para que llene el espacio, o 'contain' si quieres verla completa */
  opacity: 0.7; /* Un poco oscura para que el texto resalte */
}

/* Texto sobre el carrusel */
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)); /* Degradado oscuro */
  z-index: 2;
}
.hero-overlay h1 { margin: 0; font-size: 28px; letter-spacing: 1px; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
.hero-overlay h2 { margin: 5px 0 0 0; font-size: 18px; font-weight: normal; text-shadow: 1px 1px 3px rgba(0,0,0,0.8); }

/* --- 3. CONTENIDO PRINCIPAL --- */
.main-container {
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  gap: 20px;
  width: 100%;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  height: fit-content;
}
.menu-group { margin-bottom: 20px; }
.menu-title { font-size: 16px; color: #333; margin-bottom: 10px; border-bottom: 2px solid #009a44; padding-bottom: 5px; }
.sidebar ul { list-style: none; padding: 0; margin: 0; }
.sidebar li { padding: 6px 0; color: #555; font-size: 13px; cursor: pointer; transition: color 0.3s; }
.sidebar li:hover { color: #009a44; }

/* Área de Contenido */
.content-area { flex-grow: 1; }
.section { margin-bottom: 30px; }
.section-title { font-size: 20px; color: #333; margin-bottom: 15px; font-weight: 600; }

/* Grid de Tarjetas (Sitios de Interés) */
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

/* Grid Actualizaciones Recientes */
.grid-updates {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}
.update-item {
  background: white;
  padding: 12px;
  text-align: center;
  font-size: 13px;
  color: #444;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}
.update-item:hover { background: #f0fdf4; border-color: #009a44; color: #009a44; }

/* --- 4. FOOTER --- */
/* --- 4. FOOTER --- */
.footer {
  background-color: #e2c044; /* Amarillo CFE */
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centra verticalmente los textos */
  color: #333;
  font-size: 13px;
  margin-top: auto;
}

/* Estilos para la dirección en el centro */
.footer-center {
  text-align: center;
  font-size: 12px; /* Un poco más pequeño para que quepa bien */
  line-height: 1.4;
}

.footer-center p {
  margin: 0; /* Quita el margen por defecto de los párrafos */
}

.footer-right { 
  display: flex; 
  gap: 20px; 
}

.footer-right span { 
  cursor: pointer; 
}

.footer-right span:hover { 
  text-decoration: underline; 
}
.footer-right { display: flex; gap: 20px; }
.footer-right span { cursor: pointer; }
.footer-right span:hover { text-decoration: underline; }
</style>