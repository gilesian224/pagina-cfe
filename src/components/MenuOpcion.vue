<template>
  <li>
    <!-- 1. Opción con página: es un enlace -->
    <router-link v-if="opcion.ruta" :to="opcion.ruta">› {{ opcion.texto }}</router-link>

    <!-- 2. Opción con submenú: un botón que abre y cierra su lista -->
    <template v-else-if="opcion.subopciones">
      <button
        type="button"
        class="desplegable"
        :aria-expanded="abierto"
        @click="abierto = !abierto"
      >
        <span class="flecha">{{ abierto ? '▾' : '▸' }}</span>
        {{ opcion.texto }}
      </button>

      <!-- Cada subopción se dibuja con este mismo componente,
           así un submenú puede tener otro submenú adentro -->
      <ul v-show="abierto" class="subopciones">
        <MenuOpcion
          v-for="sub in opcion.subopciones"
          :key="sub.texto"
          :opcion="sub"
        />
      </ul>
    </template>

    <!-- 3. Opción sin página ni submenú: solo texto -->
    <span v-else>› {{ opcion.texto }}</span>
  </li>
</template>

<script>
export default {
  name: 'MenuOpcion',
  props: {
    // Un elemento de menus.js: { texto, ruta, subopciones? }
    opcion: { type: Object, required: true }
  },
  data() {
    return {
      abierto: false
    };
  },
  created() {
    // Si la página actual está dentro de este submenú, aparece ya abierto
    this.abierto = this.contieneRutaActual(this.opcion);
  },
  watch: {
    // Al navegar a una página de este submenú (por ejemplo desde el menú ☰), se abre
    $route() {
      if (this.contieneRutaActual(this.opcion)) {
        this.abierto = true;
      }
    }
  },
  methods: {
    // ¿Alguna subopción (o sub-subopción) lleva a la página actual?
    contieneRutaActual(opcion) {
      return (opcion.subopciones || []).some(
        sub => sub.ruta === this.$route.path || this.contieneRutaActual(sub)
      );
    }
  }
}
</script>

<style scoped>
/* Enlaces y botones heredan letra y color del menú que los contiene
   (barra lateral o menú ☰ del celular) */
a,
.desplegable {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}
a:hover,
.desplegable:hover { color: #009a44; }
a.router-link-active { color: #009a44; font-weight: bold; }

.desplegable {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
}
.flecha {
  display: inline-block;
  width: 12px;
  color: #009a44;
}

/* Lista interna: con sangría y una línea verde a la izquierda */
.subopciones {
  list-style: none;
  margin: 4px 0 0 0;
  padding: 0 0 0 14px;
  border-left: 2px solid #e0f2e9;
}
.subopciones li { padding: 4px 0; }
</style>
