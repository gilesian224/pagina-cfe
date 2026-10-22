<template>
  <div>
    <SitiosInteres />
    <ActualizacionesRecientes />
  </div>
</template>

<script>
import SitiosInteres from '../components/SitiosInteres.vue';
import ActualizacionesRecientes from '../components/ActualizacionesRecientes.vue';

export default {
  name: 'InicioView',
  components: { SitiosInteres, ActualizacionesRecientes }
}
</script>
