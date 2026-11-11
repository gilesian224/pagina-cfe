<template>
  <footer class="footer">
    <div class="footer-left">CFE</div>

    <div class="footer-center">
      <p>Camino a la Resurrección No. 11045. Junta Auxiliar de la Resurrección. Puebla, Pue. C.P. 72307</p>
      <p>Tel. 01 (55) 53-38-13-00 EXT. 39370 Y 39300</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #e2c044;
  padding: 15px 40px;
  /* Tres columnas: "CFE" a la izquierda, la dirección al centro
     y una columna vacía a la derecha para que la dirección quede centrada */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  color: #333;
  font-size: 13px;
  margin-top: auto;
}

.footer-center {
  text-align: center;
  font-size: 12px;
  line-height: 1.4;
}
.footer-center p {
  margin: 0;
}

/* Móviles y tablets: apilar los textos */
@media (max-width: 768px) {
  .footer {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 10px;
    padding: 20px;
  }
}
</style>
