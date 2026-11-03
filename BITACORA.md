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

---

## 2026-10-27

### Páginas del menú lateral de Inicio (solo títulos)

**Qué se pidió**
Dar acceso a todas las opciones de la barra lateral izquierda, con solo el título de cada sección por ahora.

**Estado:** en revisión (pull request abierto). Depende del PR de Enlaces (#1): primero se une #1 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/EscenarioTecnologicoView.vue` | **Nuevo.** Página con el título "Escenario Tecnológico". |
| `src/views/OrganigramaView.vue` | **Nuevo.** Página con el título "Organigrama". |
| `src/views/DirectorioZotgmView.vue` | **Nuevo.** Página con el título "Directorio ZOTGM". |
| `src/views/DirectorioZotptView.vue` | **Nuevo.** Página con el título "Directorio ZOTPT". |
| `src/views/DirectorioZotverView.vue` | **Nuevo.** Página con el título "Directorio ZOTVER". |
| `src/views/GrtcView.vue` | **Nuevo.** Página con el título "GRTC". |
| `src/router/index.js` | Seis rutas nuevas, una por página. |
| `src/data/menus.js` | Las opciones que tenían `ruta: null` ahora apuntan a su página. |

**Cómo funciona**

1. **Cada página es un archivo `.vue` mínimo.** Solo tiene la sección con su título (`<h2 class="section-title">`), con el mismo estilo que el resto de la página, y un comentario que marca dónde irá el contenido.

2. **Las rutas** (`router/index.js`) conectan cada dirección con su página. Por ejemplo, `#/organigrama` muestra `OrganigramaView.vue`. Todas llevan `meta: { seccion: 'inicio' }`, así la pestaña **Inicio** sigue marcada en la barra superior y el menú lateral sigue siendo el de Inicio.

3. **El menú** (`menus.js`). En `SideMenu.vue` y `NavBar.vue`, una opción con `ruta: null` se dibuja como texto simple (`<span>`) y una con ruta se dibuja como enlace (`<router-link>`). Al cambiar `null` por la dirección, las opciones se vuelven clicables y la opción de la página actual se marca en verde, tanto en la barra lateral como en el menú ☰ del celular.

**Rutas nuevas**

| Opción del menú | Dirección |
|---|---|
| Escenario Tecnológico | `#/escenario-tecnologico` |
| Organigrama | `#/organigrama` |
| Directorio ZOTGM | `#/directorio-zotgm` |
| Directorio ZOTPT | `#/directorio-zotpt` |
| Directorio ZOTVER | `#/directorio-zotver` |
| GRTC | `#/grtc` |

---

## 2026-11-03

### Menú de Superintendencia con submenús desplegables

**Qué se pidió**
En la pestaña Superintendencia, un menú lateral con la opción **Procedimientos**. Al hacer clic, se despliega **Formato de registro**, y al hacer clic en este se despliegan dos páginas: **Lista de asistencia** y **Formato de asistencia**.

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/components/MenuOpcion.vue` | **Nuevo.** Dibuja una opción del menú: enlace, texto o submenú desplegable. |
| `src/components/SideMenu.vue` | La barra lateral usa `MenuOpcion` para cada opción. |
| `src/components/NavBar.vue` | El menú ☰ del celular también usa `MenuOpcion`, así los submenús funcionan igual ahí. |
| `src/data/menus.js` | Conecta la pestaña Superintendencia y agrega su menú con los submenús. |
| `src/router/index.js` | Tres rutas nuevas. |
| `src/views/SuperintendenciaView.vue` | **Nuevo.** Página principal de la pestaña (solo título). |
| `src/views/ListaAsistenciaView.vue` | **Nuevo.** Página "Lista de asistencia" (solo título). |
| `src/views/FormatoAsistenciaView.vue` | **Nuevo.** Página "Formato de asistencia" (solo título). |

**Cómo funciona**

1. **Los submenús se escriben en `menus.js`.** Una opción puede tener `subopciones`, una lista con la misma forma que `opciones`. Esa lista puede tener otras `subopciones` adentro, sin límite de niveles:
   ```
   Procedimientos            ← subopciones
     └ Formato de registro   ← subopciones
         ├ Lista de asistencia    → página
         └ Formato de asistencia  → página
   ```

2. **`MenuOpcion.vue` decide cómo dibujar cada opción:**
   - Si tiene `ruta`, es un **enlace** (`<router-link>`) a su página.
   - Si tiene `subopciones`, es un **botón** con flecha ▸. Al hacer clic, cambia `abierto` entre verdadero y falso, la flecha cambia a ▾ y la lista se muestra u oculta (`v-show="abierto"`).
   - Si no tiene ninguna de las dos, es **texto simple**.

3. **Es un componente recursivo.** Para dibujar las subopciones, `MenuOpcion` se usa a sí mismo (`<MenuOpcion :opcion="sub" />`). Así, un submenú dentro de otro funciona sin escribir código extra para cada nivel.

4. **Se abre solo cuando estás dentro.** Si la página actual está dentro de un submenú (por ejemplo, entras directo a Lista de asistencia), ese submenú y sus padres aparecen ya abiertos. Lo hace el método `contieneRutaActual`, que revisa todas las subopciones hacia abajo.

5. **Barra lateral y menú ☰ comparten el mismo componente.** Por eso los submenús se ven y funcionan igual en computadora y en celular, y un cambio en `MenuOpcion.vue` afecta a los dos.

**Rutas nuevas**

| Página | Dirección |
|---|---|
| Superintendencia | `#/superintendencia` |
| Lista de asistencia | `#/superintendencia/procedimientos/lista-asistencia` |
| Formato de asistencia | `#/superintendencia/procedimientos/formato-asistencia` |

### Logo ZOTPTX en lugar del botón "Iniciar sesión"

**Qué se pidió**
Quitar el botón "Iniciar sesión" de la barra superior y poner en su lugar el logo de la ZOTPTX.

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/assets/logo-zotptx.jpg` | **Nuevo.** Logo ZOTPTX reducido a 240×240 px (19 KB, el original pesaba 156 KB). |
| `src/components/NavBar.vue` | Se quita el botón y sus estilos; se agrega el logo a la derecha de la barra. |

**Cómo funciona**

1. **La imagen vive en `src/assets/`.** Al escribir `src="@/assets/logo-zotptx.jpg"`, Vue CLI la incluye en la compilación y le agrega un código al nombre (por ejemplo `logo-zotptx.a1b2c3.jpg`), para que el navegador descargue la nueva si algún día se cambia. `@` es un atajo a la carpeta `src`.

2. **Se redujo de tamaño.** En pantalla se ve a 55 px de alto. Una imagen de 240 px se sigue viendo nítida en pantallas de alta resolución, y la página carga más rápido que con la original de 1254 px.

3. **Posición en computadora.** El logo va al final de la `<nav>`, fuera del menú. La barra es un `flex`, así que queda pegado a la derecha: logo CFE, pestañas al centro y logo ZOTPTX a la derecha.

4. **Posición en celular.** Con la propiedad `order` de CSS, el logo se acomoda entre el logo de CFE y el botón ☰, siempre visible (42 px de alto). El menú desplegable (`order: 3`) baja debajo de los tres.
