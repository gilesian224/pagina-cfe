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

### Orden de los directorios y "Ubicación"

**Qué se pidió**
Reordenar los directorios del menú de Inicio (primero ZOTPT, luego ZOTVER y al final ZOTGM) y cambiar "Nuestro Centro de Trabajo" por "Ubicación".

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/menus.js` | Nuevo orden de los directorios; la opción "Nuestro Centro de Trabajo" ahora dice "Ubicación". |
| `src/views/UbicacionView.vue` | El título de la página también dice "Ubicación", para que coincida con el menú. |

**Cómo funciona**

1. **El orden del menú es el orden de las líneas** en `opciones` de `menus.js`. Para reordenar, solo se mueven las líneas; las rutas y las páginas no cambian. En VS Code se hace con `Alt + ↑ / ↓`.
2. **El texto del menú y el título de la página son independientes.** `texto` en `menus.js` es lo que se ve en la barra lateral, y el `<h2>` de `UbicacionView.vue` es el título dentro de la página. Se cambiaron los dos. La dirección sigue siendo `#/ubicacion`, así que los enlaces existentes no se rompen.

**Nuevo orden del menú de Inicio**
Ubicación · Escenario Tecnológico · Misión, Visión y Ambición · Organigrama · Directorio ZOTPT · Directorio ZOTVER · Directorio ZOTGM · GRTC

---

## 2026-11-04

### Barra superior: logos parejos, letra más grande y "Sitios de interés"

**Qué se pidió**
Emparejar el tamaño del logo de CFE con el de ZOTPTX, agrandar el texto de las pestañas para que sea proporcional a los logos y cambiar "Enlaces" por "Sitios de interés".

**Estado:** en revisión (pull request abierto). Depende del PR #5: primero se une #5 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/components/NavBar.vue` | Logos a la misma altura, pestañas más grandes y ajustes para pantallas medianas. |
| `src/data/menus.js` | La pestaña y el título del menú lateral dicen "Sitios de interés". |
| `src/views/EnlacesView.vue` | El título de la página dice "Sitios de interés". |

**Cómo funciona**

1. **Logos a la misma altura.** Los dos usan `height` con el mismo valor y `width: auto`, así cada uno conserva su proporción: el de CFE es más ancho y el de ZOTPTX es cuadrado, pero miden lo mismo de alto.

2. **Tamaños según la pantalla.** Con `@media`, el CSS cambia según el ancho de la ventana:

   | Ancho de pantalla | Logos | Letra de pestañas |
   |---|---|---|
   | Más de 1150 px (computadora) | 55 px | 17 px |
   | 961 a 1150 px (laptop chica) | 48 px | 15 px |
   | 769 a 960 px (tablet horizontal) | 40 px | 13 px |
   | 768 px o menos (celular) | 42 px | 15 px, en el menú ☰ |

   Sin esos escalones, en pantallas medianas "Programación y Equipos" y "Sitios de interés" se partían en dos renglones. `white-space: nowrap` evita que una pestaña se divida.

3. **"Sitios de interés" solo cambia el texto.** La dirección sigue siendo `#/enlaces` y los archivos conservan sus nombres (`EnlacesView.vue`, `enlaces.js`). Así no se rompe ningún enlace guardado y no hay que tocar el router.

### Logo ZOTPTX más grande

**Qué se pidió**
Que el logo de ZOTPTX se vea más grande en la barra superior.

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/components/NavBar.vue` | Más altura para `.logo-zona` en cada tamaño de pantalla. |

**Cómo funciona**
Solo cambia la altura (`height`) de `.logo-zona`. El ancho se ajusta solo (`width: auto`) porque el logo es cuadrado. El logo de CFE y el texto de las pestañas no cambian. La barra se hace un poco más alta para dar espacio al logo.

| Ancho de pantalla | Logo ZOTPTX (antes → ahora) |
|---|---|
| Más de 1150 px | 55 → 110 px |
| 961 a 1150 px | 48 → 90 px |
| 769 a 960 px | 40 → 70 px |
| Celular | 42 → 64 px |

Para que la barra no crezca de más, el margen de arriba y abajo de la barra bajó de 10 a 6 px. La imagen mide 240 px, así que a 110 px se sigue viendo nítida.

*Se agrandó en dos pasos (primero a 80 px y luego a 110 px) a petición del usuario; la tabla muestra el tamaño final.*

### Más opciones en el menú de Superintendencia

**Qué se pidió**
Agregar al menú de Superintendencia: FODA, Compromisos GRTC, Ciclo, Siget y Capacitación, esta última con el submenú Programa de capacitación.

**Estado:** en revisión (pull request abierto). Depende del PR #7: primero se une #7 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/FodaView.vue` | **Nuevo.** Página "FODA" (solo título). |
| `src/views/CompromisosGrtcView.vue` | **Nuevo.** Página "Compromisos GRTC" (solo título). |
| `src/views/CicloView.vue` | **Nuevo.** Página "Ciclo" (solo título). |
| `src/views/SigetView.vue` | **Nuevo.** Página "Siget" (solo título). |
| `src/views/ProgramaCapacitacionView.vue` | **Nuevo.** Página "Programa de capacitación" (solo título). |
| `src/router/index.js` | Cinco rutas nuevas. |
| `src/data/menus.js` | Cinco opciones nuevas en el menú de Superintendencia. |

**Cómo funciona**
No hizo falta tocar ningún componente. Desde que existe `MenuOpcion.vue`, agregar opciones o submenús es solo cuestión de datos en `menus.js`:
- **FODA, Compromisos GRTC, Ciclo y Siget** llevan `ruta`, así que son enlaces directos a su página.
- **Capacitación** lleva `ruta: null` y `subopciones`, así que se dibuja como desplegable (▸) y al hacer clic muestra **Programa de capacitación**.

**Menú de Superintendencia completo**
```
▸ Procedimientos
    ▸ Formato de registro
        › Lista de asistencia      #/superintendencia/procedimientos/lista-asistencia
        › Formato de asistencia    #/superintendencia/procedimientos/formato-asistencia
› FODA                             #/superintendencia/foda
› Compromisos GRTC                 #/superintendencia/compromisos-grtc
› Ciclo                            #/superintendencia/ciclo
› Siget                            #/superintendencia/siget
▸ Capacitación
    › Programa de capacitación     #/superintendencia/capacitacion/programa
```

### Menú de Operación

**Qué se pidió**
Darle a la pestaña Operación su menú lateral con FODA y CENACE. CENACE lleva cuatro submenús: Consulta de solicitudes y licencias, Sistema web de salidas forzadas, Calendario SIASAM y Formato de carga masiva.

**Estado:** en revisión (pull request abierto). Depende de los PRs #7 y #8: se unen en orden #7, #8 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/OperacionView.vue` | **Nuevo.** Página principal de la pestaña (solo título). |
| `src/views/FodaOperacionView.vue` | **Nuevo.** Página "FODA" de Operación (solo título). |
| `src/views/SolicitudesLicenciasView.vue` | **Nuevo.** "Consulta de solicitudes y licencias" (solo título). |
| `src/views/SalidasForzadasView.vue` | **Nuevo.** "Sistema web de salidas forzadas" (solo título). |
| `src/views/CalendarioSiasamView.vue` | **Nuevo.** "Calendario SIASAM" (solo título). |
| `src/views/CargaMasivaView.vue` | **Nuevo.** "Formato de carga masiva" (solo título). |
| `src/router/index.js` | Seis rutas nuevas con `seccion: 'operacion'`. |
| `src/data/menus.js` | La pestaña Operación ya lleva a `/operacion`, y se agrega el bloque `operacion` del menú. |

**Cómo funciona**

1. **Pestaña conectada.** En `pestanas`, Operación pasó de `ruta: null, seccion: null` a `ruta: '/operacion', seccion: 'operacion'`. Al hacer clic, la pestaña se marca en verde y la barra lateral muestra el bloque `operacion`.
2. **Dos FODA distintos.** Superintendencia y Operación tienen cada uno su propio FODA. Para que no se confundan, el de Operación usa otro archivo (`FodaOperacionView.vue`), otra dirección (`/operacion/foda`) y otro nombre de ruta (`foda-operacion`). Cada `name` del router debe ser único.
3. **CENACE es desplegable.** Lleva `ruta: null` y `subopciones`, igual que Procedimientos y Capacitación. `MenuOpcion.vue` lo dibuja con ▸ y lo abre al hacer clic.

**Menú de Operación**
```
› FODA                                     #/operacion/foda
▸ CENACE
    › Consulta de solicitudes y licencias  #/operacion/cenace/solicitudes-licencias
    › Sistema web de salidas forzadas      #/operacion/cenace/salidas-forzadas
    › Calendario SIASAM                    #/operacion/cenace/calendario-siasam
    › Formato de carga masiva              #/operacion/cenace/formato-carga-masiva
```

### SICLO y SIGET, y enlaces externos en el menú

**Qué se pidió**
Cambiar "Ciclo" y "Siget" por "SICLO" y "SIGET", y que al hacer clic lleven a otra página web.

**Estado:** en revisión (pull request abierto). SICLO y SIGET ya abren su sistema; falta la dirección de Compromisos GRTC.

**Qué pasó antes**
El cambio de nombres se hizo en la laptop y se subió a la rama del PR #8 **después** de que ese PR ya se había unido, así que nunca llegó a `main`. Ese commit además regresaba por accidente la pestaña "Sitios de interés" a "Enlaces" (venía de una versión vieja de `menus.js`). Este PR aplica solo los nombres nuevos, sobre `main`.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/components/MenuOpcion.vue` | Nuevo tipo de opción: enlace externo con `url`. |
| `src/data/menus.js` | "SICLO" y "SIGET", más un comentario que explica `ruta`, `url` y `subopciones`. |
| `src/views/CicloView.vue` y `src/views/SigetView.vue` | Títulos "SICLO" y "SIGET". |

**Cómo funciona**
`MenuOpcion.vue` revisa cada opción en este orden:
1. ¿Tiene **`url`**? Entonces dibuja un enlace normal `<a href>` que abre el otro sitio en una pestaña nueva (`target="_blank"`), con una flechita **↗** para avisar que sale de la página.
2. ¿Tiene **`ruta`**? Entonces es un `<router-link>` a una página de este sitio.
3. ¿Tiene **`subopciones`**? Entonces es desplegable.
4. Si no, es texto simple.

Se usa `v-if` / `v-else-if` / `v-else` para que solo se dibuje una de las cuatro formas. `<router-link>` solo sirve para páginas internas; para otro sitio se necesita `<a href>`.

**Para poner un enlace externo**, en `menus.js` se cambia `ruta` por `url`:
```js
{ texto: 'SIGET', url: 'https://direccion-de-siget' },
```

**Enlaces conectados**

| Opción | Dirección | Notas |
|---|---|---|
| SICLO | `http://siclo.cfemex.com/Intranet/Index.aspx` | 🔒 Solo red CFE |
| SIGET | `http://10.21.1.138/indices/index/login.aspx` | 🔒 Solo red CFE |
| Compromisos GRTC | *pendiente* | |

Las páginas internas `CicloView.vue` y `SigetView.vue`, y sus rutas, siguen en el proyecto pero ya no se usan desde el menú. Se pueden borrar más adelante (primero el `import` y la ruta en `router/index.js`, después el archivo).

---

## 2026-11-05

### Contenido de "Escenario Tecnológico"

**Qué se pidió**
Llenar la página Escenario Tecnológico con la información de la presentación "Escenario Tecnológico ZOT Puebla - Tlaxcala" (PDF de 5 láminas). Después se pidió un diseño más sencillo y formal.

**Estado:** en revisión (pull request abierto). Depende del PR #10: primero se une #10 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/EscenarioTecnologicoView.vue` | La página muestra cuatro tablas con la información de la presentación. |

**Datos (tal cual la presentación)**

| Tabla | Desglose | Total |
|---|---|---|
| 1. Subestaciones | RST 99 · RNT 16 · RT 115 | 230 |
| 2. Líneas de transmisión | 400 kV: 6 líneas, 139 km · 230 kV: 9, 272 km · 115 kV: 118, 2,238 km · 69 kV: 2, 77 km | 135 líneas, 2,726 km |
| 3. Interruptores instalados | 400 kV 63 · 230 kV 57 · 115 kV 382 · 69 kV 2 | 504 |
| 4. Capacidad instalada (MVA) | 400 kV 3,261 · 230 kV 1,198 · 115 kV 3,087 · 69 kV 26 | 7,572 |

Los totales no venían en la presentación: la página los calcula sumando las filas.

**Cómo funciona**

1. **Los datos están dentro de la página**, en `data()`, igual que en otras vistas del proyecto. Hay una lista `tablas`; cada tabla tiene `titulo`, `encabezado` (la primera columna), `columnas` (los encabezados de los números) y `filas` (cada una con `nombre` y sus `valores`, en el mismo orden que `columnas`). Para actualizar una cifra solo se cambia el número.

2. **Las tablas se dibujan con `v-for`.** El primer `v-for` recorre las cuatro tablas y les pone número (`i + 1`); dentro, otro `v-for` recorre las filas y otro los valores. Así, una sola plantilla dibuja las cuatro tablas.

3. **El total se calcula solo.** El método `total(tabla, j)` recorre las filas con un `for` y suma la columna `j`. Va en el `<tfoot>`, la parte de la tabla para totales.

4. **Formato de números.** `formato()` usa `toLocaleString('es-MX')`, que convierte `2238` en `2,238`.

5. **Estilo formal.** Tablas con bordes grises delgados, encabezado verde CFE con texto blanco, filas alternadas en gris muy claro y la fila de total en negritas. Los números van alineados a la derecha, como en un informe. Al final se cita la fuente.

**Primera versión descartada**
La primera versión tenía tarjetas de resumen con íconos y barras de colores en cada fila. Se reemplazó porque se veía informal; también se eliminó el archivo `src/data/escenarioTecnologico.js`, que ya no hace falta.

---

## 2026-11-09

### Más submenús en Operación

**Qué se pidió**
Agregar al menú de Operación, además de FODA y CENACE, los grupos Operación, SIASAM y Análisis, con sus submenús.

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/PaginaSeccionView.vue` | **Nuevo.** Página genérica que muestra el título que le indica la ruta. |
| `src/router/index.js` | 12 rutas nuevas que usan la página genérica. |
| `src/data/menus.js` | Tres grupos desplegables nuevos en el menú de Operación. |

**Menú de Operación completo**
```
› FODA
▸ CENACE
    (4 opciones, sin cambios)
▸ Operación
    › Acciones de control       #/operacion/operacion/acciones-control
    › Código de red 1 y 2       #/operacion/operacion/codigo-red
    › Guías                     #/operacion/operacion/guias
    › Procedimientos            #/operacion/operacion/procedimientos
    › Directorios               #/operacion/operacion/directorios
    › Cemodat web               #/operacion/operacion/cemodat-web
▸ SIASAM
    › Relieve                   #/operacion/siasam/relieve
    › Sonorel                   #/operacion/siasam/sonorel
    › SIVAP                     #/operacion/siasam/sivap
▸ Análisis
    ▸ SIMOCE
        › DDCOR                 #/operacion/analisis/simoce/ddcor
        › DDSE                  #/operacion/analisis/simoce/ddse
    › SISNOV                    #/operacion/analisis/sisnov
```

**Cómo funciona**

1. **Una sola página para las 12 opciones.** En lugar de crear 12 archivos casi iguales que solo cambian el título, todas las rutas nuevas usan `PaginaSeccionView.vue`. Cada ruta le pasa su título en `meta`:
   ```js
   { path: '/operacion/siasam/sivap', name: 'op-sivap', component: PaginaSeccionView,
     meta: { seccion: 'operacion', titulo: 'SIVAP' } },
   ```
   y la página lo muestra con `{{ $route.meta.titulo }}`. `$route` es la ruta actual; `meta` es la información extra que le pusimos.

2. **Cuando una opción necesite contenido propio**, se le crea su archivo (por ejemplo `SivapView.vue`) y en su ruta se cambia `component: PaginaSeccionView` por `component: SivapView`, más su `import`. Las demás siguen usando la genérica.

3. **Si una opción es otro sistema** (como SICLO y SIGET), en `menus.js` se cambia `ruta` por `url` con su dirección, y su ruta ya no hace falta.

4. **Nombres de ruta con prefijo `op-`.** Ya existía `procedimientos` en Superintendencia y podría haber más coincidencias, así que todas las rutas nuevas de Operación empiezan con `op-` (`op-procedimientos`, `op-guias`…). Cada `name` del router debe ser único.

5. **Análisis tiene un submenú dentro de otro** (Análisis → SIMOCE → DDCOR/DDSE), igual que Procedimientos en Superintendencia. `MenuOpcion.vue` lo maneja solo, sin cambios.

### Menú de Programación y Equipos

**Qué se pidió**
Conectar la pestaña Programación y Equipos y darle su menú: FODA, Comunicaciones, Control (SCADA, SENTOCs, Sabad), Control de gestión (SITIC, SIECOM, Mesa de servicio), AM (inventario) y PM.

**Estado:** en revisión (pull request abierto). Depende del PR #12, porque usa su página genérica: primero se une #12 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/router/index.js` | 11 rutas nuevas (la página de la pestaña y sus 10 opciones), todas con la página genérica. |
| `src/data/menus.js` | La pestaña ya lleva a `/programacion-equipos`, y se agrega el bloque `'programacion-equipos'` del menú. |

**Menú de Programación y Equipos**
```
› FODA                     #/programacion-equipos/foda
› Comunicaciones           #/programacion-equipos/comunicaciones
▸ Control
    › SCADA                #/programacion-equipos/control/scada
    › SENTOCs              #/programacion-equipos/control/sentocs
    › Sabad                #/programacion-equipos/control/sabad
▸ Control de gestión
    › SITIC                #/programacion-equipos/control-gestion/sitic
    › SIECOM               #/programacion-equipos/control-gestion/siecom
    › Mesa de servicio     #/programacion-equipos/control-gestion/mesa-servicio
› AM (inventario)          #/programacion-equipos/am
› PM                       #/programacion-equipos/pm
```

**Cómo funciona**

1. **Pestaña conectada.** En `pestanas`, Programación y Equipos pasó de `ruta: null, seccion: null` a `ruta: '/programacion-equipos', seccion: 'programacion-equipos'`.
2. **Nombre de sección con guion.** En `menus`, el bloque se escribe entre comillas, `'programacion-equipos': { ... }`, porque en JavaScript un nombre con guion necesita comillas. El valor debe coincidir en la pestaña, en el bloque y en el `meta.seccion` de cada ruta.
3. **Sin archivos nuevos.** Todas las páginas, incluida la principal de la pestaña, usan `PaginaSeccionView.vue` con su `meta.titulo`, igual que las nuevas de Operación.
4. **Nombres de ruta con prefijo `pe-`.** Ya existen `foda` (Superintendencia) y `foda-operacion`, así que el de esta sección es `pe-foda`, y lo mismo con las demás.

### Sitios de interés: diseño formal y nuevos sitios

**Qué se pidió**
Agregar a Sitios de interés: Gerencia Regional de Transmisión Central, GCRO, Mi CFE, SUTERM, Portal de Comprobantes Fiscales, CIJUBILA, Energía a Debate y FHSSTE, con una presentación más formal que la de tarjetas.

**Estado:** en revisión (pull request abierto). Depende del PR #13: se unen en orden #12, #13 y después este. Todos los sitios tienen su dirección.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/enlaces.js` | Nueva categoría "Sitios de consulta" con los 8 sitios; se quitan los íconos; `url` puede ser `null`. |
| `src/views/EnlacesView.vue` | Las tarjetas se reemplazan por una tabla formal por categoría. |

**Cómo funciona**

1. **Tabla formal**, con el mismo estilo que Escenario Tecnológico: encabezado verde CFE, bordes grises delgados y filas alternadas. Dos columnas: **Sitio** (nombre en negritas, descripción opcional y nota de red interna) y **Acceso**.
2. **Enlace o "Dirección pendiente".** En la columna Acceso, `v-if="enlace.url"` muestra "Abrir sitio ↗" (se abre en una pestaña nueva). Si `url` es `null`, `v-else` muestra "Dirección pendiente" en gris. Así un sitio puede aparecer en la lista aunque todavía no se tenga su dirección.
3. **Nota de red interna.** Los sitios con `interno: true` (como SIMOCE) muestran *"Disponible solo en la red interna de CFE."* en lugar del aviso amarillo anterior.
4. **Menú lateral.** Como las categorías generan el menú solas, ahora la barra lateral de Sitios de interés muestra "Sistemas internos" y "Sitios de consulta".

**Direcciones**

| Sitio | Dirección |
|---|---|
| SIMOCE | `http://10.9.30.134/calidad/` (red interna) |
| Gerencia Regional de Transmisión Central | `http://10.25.15.142:8080/central` (red interna) |
| GCROR | `http://10.25.117.65:8086/enlaces_cenace/enlaces_gcror.html` (red interna) |
| Mi CFE | `https://mi.cfe.mx/` |
| SUTERM | `https://www.suterm.mx/es/` |
| Portal de Comprobantes Fiscales | `https://verificacfdi.facturaelectronica.sat.gob.mx/` (verificación de CFDI del SAT) |
| CIJUBILA | `https://verificacfdi.facturaelectronica.sat.gob.mx/` |
| Energía a Debate | `https://energiaadebate.com/` |
| FHSSTE | `https://intranet.cfemex.com/fhsste/pages/default.aspx` (red interna) |

"GCRO" se corrigió a **"GCROR"**, como viene en su dirección. Las direcciones que llegaron sin la primera letra (`ttps://`) se corrigieron a `https://`. La dirección del SAT venía junto a CIJUBILA, pero corresponde a la verificación de comprobantes fiscales, así que se asignó al Portal de Comprobantes Fiscales. Después se confirmó que CIJUBILA también usa ese mismo enlace.

Para agregar una dirección, en `enlaces.js` se cambia `url: null` por `url: 'https://...'`. Si es de intranet, también se agrega `interno: true`.

### Enlaces de los menús de Superintendencia, Operación y Programación y Equipos

**Qué se pidió**
Vincular cada enlace con su opción del menú y hacer la lista de los enlaces que faltan.

**Estado:** en revisión (pull request abierto). Depende del PR #14: se unen en orden #12, #13, #14 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/menus.js` | 12 opciones cambian `ruta` por `url`; "SITIC" se corrige a "SIITIC". |

**Enlaces conectados**

| Menú | Opción | Dirección |
|---|---|---|
| Superintendencia › Procedimientos › Formato de registro | Lista de asistencia | `http://10.25.15.142:8080/asistenciaSettings/asistencia.do` |
| Superintendencia › Procedimientos › Formato de registro | Formato de asistencia | `http://sf.cfe.mx/web/login` |
| Superintendencia | Compromisos GRTC | `http://10.25.15.142:8080/compromisos/Welcome.do` |
| Superintendencia › Capacitación | Programa de capacitación | `http://10.25.15.142:8080/central/especialidad.do?page=5&tag=tem` |
| Operación › CENACE | Consulta de solicitudes y licencias | `http://10.72.111.102/ReportesRelieve/Home/LogIn` |
| Operación › CENACE | Sistema web de salidas forzadas | `https://servicios.cenace.gob.mx/SWSF/` |
| Operación › Operación | Cemodat web | `http://10.30.26.30/cemodatwebgrtce/` |
| Operación › SIASAM | Sonorel | `http://10.25.117.65/Relieve/SoNoRelGMO/login.aspx` |
| Operación › Análisis | SISNOV | `http://novedades-sdt.cfemex.com/novedades/sisnov_nacional.html` |
| Programación y Equipos › Control de gestión | SIITIC | `http://siitic.cfemex.com/shell/logon` |
| Programación y Equipos › Control de gestión | SIECOM | `http://10.25.15.142:8080/inventario/Welcome.do` |
| Programación y Equipos | AM (inventario) | `http://10.25.117.65/ControlInventarioWebSite/Inicio.aspx` |

Ya estaban conectados desde antes: SICLO y SIGET (Superintendencia).

**Cómo se interpretó la lista**
- **"Formatos"** se asignó a *Formato de asistencia*, y **"Listas de asistencia"** a *Lista de asistencia* (Superintendencia › Procedimientos › Formato de registro).
- **"Capacitación"** se asignó a *Programa de capacitación*, que es la única opción dentro de Capacitación.
- **"SITIC"** se renombró a **"SIITIC"**, como en la lista y en su dirección (`siitic.cfemex.com`).

**Cómo funciona**
En `menus.js`, a cada opción se le cambió `ruta: '/...'` por `url: 'http://...'`. `MenuOpcion.vue` revisa primero si hay `url`, así que la opción abre el sistema en una pestaña nueva con la flechita ↗. Las rutas y páginas internas de esas opciones siguen en el router, pero el menú ya no las usa.

**Opciones que siguen sin enlace (abren su página con título)**
- Superintendencia: FODA
- Operación: FODA · CENACE › Calendario SIASAM, Formato de carga masiva · Operación › Acciones de control, Código de red 1 y 2, Guías, Procedimientos, Directorios · SIASAM › Relieve, SIVAP · Análisis › SIMOCE › DDCOR, DDSE
- Programación y Equipos: FODA, Comunicaciones · Control › SCADA, SENTOCs, Sabad · Control de gestión › Mesa de servicio · PM

### Inicio: un solo "Directorios" en lugar de los tres directorios y GRTC

**Qué se pidió**
En el menú de Inicio, quitar Directorio ZOTPT, Directorio ZOTVER, Directorio ZOTGM y GRTC, y poner en su lugar una sola opción, "Directorios", con el enlace `http://10.25.110.2:8080/comnes/extensionesSE.do`.

**Estado:** en revisión (pull request abierto). Depende del PR #15: se unen en orden #12, #13, #14, #15 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/menus.js` | Cuatro opciones se reemplazan por "Directorios" con `url`. |
| `src/router/index.js` | Se quitan las 4 rutas y sus `import`. |
| `src/views/DirectorioZotgmView.vue`, `DirectorioZotptView.vue`, `DirectorioZotverView.vue`, `GrtcView.vue` | **Eliminados.** Ya no se usan. |

**Menú de Inicio**
```
› Ubicación
› Escenario Tecnológico
› Misión, Visión y Ambición
› Organigrama
› Directorios ↗     http://10.25.110.2:8080/comnes/extensionesSE.do
```

**Cómo funciona**
"Directorios" lleva `url` en lugar de `ruta`, así que abre el sistema de extensiones en una pestaña nueva, como los demás enlaces externos. Como las cuatro páginas anteriores ya no tenían forma de abrirse desde el menú, se borraron en este orden: primero sus rutas y `import` en el router, después los archivos. Así se evita el error *"Module not found"*.

### Inicio: se quitan "Sitios de Interés" y "Actualizaciones Recientes"

**Qué se pidió**
Quitar de la página de Inicio las tarjetas de "Sitios de Interés" (Normateca, Servicios Tecnológicos, SIRH Formatos, GIDD Capacitación, Género e Inclusión) y los botones de "Actualizaciones Recientes".

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/InicioView.vue` | Ya no usa ninguno de los dos componentes; queda lista para nuevo contenido. |
| `src/components/SitiosInteres.vue` | **Eliminado.** |
| `src/components/ActualizacionesRecientes.vue` | **Eliminado.** |

**Cómo funciona**
La página de Inicio solo mostraba esos dos componentes (`<SitiosInteres />` y `<ActualizacionesRecientes />`). Se quitaron sus etiquetas, sus `import` y su registro en `components`, y como no se usaban en ninguna otra parte, también se borraron sus archivos. La barra lateral, el carrusel y el calendario no cambian.

Con esto también desaparece la duplicidad de nombre que había entre la sección "Sitios de Interés" de Inicio y la pestaña "Sitios de interés".

---

## 2026-11-11

### Nuevo orden del menú de Inicio (cambio manual de Ian, PR #19)

**Qué se hizo**
Ian reordenó a mano el menú lateral de Inicio desde VS Code y lo subió con el PR #19.

**Estado:** aplicado (unido a `main`).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/menus.js` | Las líneas de "Ubicación" y "Escenario Tecnológico" se movieron debajo de "Organigrama". |

**Nuevo orden**
```
› Misión, Visión y Ambición
› Organigrama
› Ubicación
› Escenario Tecnológico
› Directorios ↗
```

**Cómo funciona**
El orden del menú es el orden de las líneas dentro de `opciones` en `menus.js`, así que basta con mover las líneas. Las rutas y las páginas no cambian. El cambio dejó dos renglones vacíos antes de "Directorios"; no afectan en nada, pero se pueden borrar para que el archivo quede más limpio.

### Página de Inicio: presentación de la zona y cifras

**Qué se pidió**
Llenar el área central de Inicio, que había quedado vacía, combinando una presentación de la zona (con el texto proporcionado por Ian) y las cifras principales del Escenario Tecnológico.

**Estado:** en revisión (pull request abierto).

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/views/InicioView.vue` | Título, presentación de la zona, recuadro "La zona en cifras" y enlace al Escenario Tecnológico. |

**Cómo funciona**

1. **Presentación.** Los dos párrafos del texto van dentro de un recuadro blanco con borde gris y una línea verde a la izquierda. El texto está justificado en computadora y alineado a la izquierda en celular, donde el justificado deja huecos entre palabras.
2. **La zona en cifras.** Las cuatro cifras están en `data()`, en la lista `cifras`, y se dibujan con `v-for`. Se muestran en una cuadrícula (`grid`) de 4 columnas que en celular pasa a 2 por fila.
3. **Enlace.** "Ver escenario tecnológico completo ›" es un `<router-link>` a `/escenario-tecnologico`, la página con el detalle por nivel de tensión.

**Importante:** las cifras son los totales de la página Escenario Tecnológico (230 subestaciones, 2,726 km de líneas, 504 interruptores, 7,572 MVA), pero están escritas por separado. Si se actualizan allá, hay que cambiarlas también en `InicioView.vue`.
