<template>
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
  display: flex;
  justify-content: space-between;
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

/* Móviles y tablets: apilar los textos */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 20px;
  }
  .footer-right {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
