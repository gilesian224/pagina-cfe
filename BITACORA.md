# Bitácora de cambios: Página CFE

Registro de los cambios hechos a la página, con qué se pidió, qué archivos se tocaron y cómo funciona cada cambio.

---

## 2026-10-26

### Sección "Enlaces" (primera versión, con SIMOCE)

**Qué se pidió**
Crear la ventana de Enlaces de la página y probarla, por el momento, con un solo enlace: SIMOCE.

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/enlaces.js` | **Nuevo.** Lista de enlaces agrupados por categoría. |
| `src/views/EnlacesView.vue` | Página de Enlaces: muestra los enlaces en tarjetas. |
| `src/router/index.js` | La ruta `/enlaces` acepta una categoría opcional (`/enlaces/:categoria?`). |
| `src/data/menus.js` | Corrige la ruta de la pestaña Enlaces y genera el menú lateral a partir de las categorías. |

**Cómo funciona**

1. **Los datos están separados del diseño.** Todos los enlaces viven en `src/data/enlaces.js`, agrupados en categorías. Cada enlace tiene:
   - `icono`: el emoji de la tarjeta.
   - `titulo` y `descripcion`: los textos que se muestran.
   - `url`: la dirección a la que lleva.
   - `interno: true` (opcional): muestra el aviso **🔒 Solo red CFE**. Se usa para direcciones de intranet, como SIMOCE (`10.9.30.134`), que solo abren desde la red de CFE.

   Para agregar un enlace, solo se edita este archivo; no hace falta tocar el diseño.

2. **La página (`EnlacesView.vue`)** recorre las categorías con `v-for` y dibuja un título por categoría y una tarjeta por enlace. Toda la tarjeta es un enlace `<a>` con `target="_blank"`, así que se abre en una pestaña nueva. `rel="noopener noreferrer"` es la medida de seguridad estándar para eso.

3. **La ruta con categoría opcional.** En `router/index.js`, la ruta es `/enlaces/:categoria?`. El `?` hace que el parámetro sea opcional:
   - `#/enlaces` muestra **todas** las categorías.
   - `#/enlaces/sistemas-internos` muestra **solo esa** categoría.

   La página lee el parámetro con `this.$route.params.categoria` y filtra la lista en `categoriasVisibles`.

4. **El menú lateral se arma solo.** En `menus.js`, el menú de Enlaces se genera con `categorias.map(...)`: por cada categoría de `enlaces.js` crea una opción que lleva a `/enlaces/<id>`. Una categoría nueva aparece sola en el menú lateral y en el menú ☰ del celular.

**Corrección incluida**
En `main`, la pestaña tenía `ruta: /enlaces` sin comillas. Eso es un error de sintaxis (JavaScript lo interpreta como una expresión regular sin cerrar) e impedía compilar la página. Ahora es `ruta: '/enlaces'`.

**Enlaces registrados**

| Enlace | URL | Categoría | Notas |
|---|---|---|---|
| SIMOCE: Sistema de Monitoreo de Calidad de Energía | `http://10.9.30.134/calidad/` | Sistemas internos | 🔒 Solo red CFE |
