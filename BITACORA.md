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
Llenar la página Escenario Tecnológico con la información de la presentación "Escenario Tecnológico ZOT Puebla - Tlaxcala" (PDF de 5 láminas).

**Estado:** en revisión (pull request abierto). Depende del PR #10: primero se une #10 y después este.

**Archivos**

| Archivo | Cambio |
|---|---|
| `src/data/escenarioTecnologico.js` | **Nuevo.** Las cifras de la presentación, organizadas en 4 bloques. |
| `src/views/EscenarioTecnologicoView.vue` | La página ahora muestra un resumen y una tabla por bloque. |

**Datos (tal cual la presentación)**

| Bloque | Desglose | Total |
|---|---|---|
| Subestaciones | RST 99 · RNT 16 · RT 115 | 230 |
| Líneas de transmisión | 400 kV: 6 líneas, 139 km · 230 kV: 9, 272 km · 115 kV: 118, 2,238 km · 69 kV: 2, 77 km | 135 líneas, 2,726 km |
| Interruptores instalados | 400 kV 63 · 230 kV 57 · 115 kV 382 · 69 kV 2 | 504 |
| Capacidad instalada (MVA) | 400 kV 3,261 · 230 kV 1,198 · 115 kV 3,087 · 69 kV 26 | 7,572 |

Los totales no venían en la presentación: la página los calcula sumando las filas.

**Cómo funciona**

1. **Los datos están separados del diseño**, igual que en Sitios de interés. `escenarioTecnologico.js` tiene una lista `bloques`; cada bloque tiene `titulo`, `icono`, `columnas` (encabezados de los números) y `filas` (una por red o nivel de tensión, con sus `valores` en el mismo orden que `columnas`). Para actualizar una cifra se cambia solo el número; los totales y las barras se recalculan solos.

2. **Resumen arriba.** Un recuadro por bloque con su total (`totalDeColumna`), para leer la zona de un vistazo. En Líneas se muestran los km y, debajo, el número de líneas.

3. **Una tabla por bloque.** Es una `<table>` real (con `<thead>`, `<tbody>` y `<tfoot>` para el total), así que también se lee bien con lectores de pantalla y se puede copiar a Excel.

4. **Barras de proporción.** Cada fila tiene una barra verde que compara su valor con el más alto del bloque: `porcentaje()` divide el valor entre el máximo y lo convierte en el ancho de la barra (el máximo ocupa el 100 %). Así se ve de inmediato, por ejemplo, que 115 kV concentra la mayoría de las líneas y los interruptores. En Líneas, la barra representa los **kilómetros** (lo indica `barra: 1`). Al pasar el mouse sobre una barra aparece su valor.

5. **Formato de números.** `formato()` usa `toLocaleString('es-MX')`, que convierte `2238` en `2,238`.

6. **Se adapta a la pantalla.** El resumen y las tablas usan `grid` con `auto-fit`: en computadora quedan dos tablas por fila y en celular una debajo de otra.
