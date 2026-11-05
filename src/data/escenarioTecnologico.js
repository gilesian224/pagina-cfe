// Escenario Tecnológico de la Zona de Operación de Transmisión Puebla – Tlaxcala.
// Fuente: presentación "Escenario Tecnológico ZOT Puebla - Tlaxcala" (Red Nacional de Transmisión).
//
// Cada bloque es una tabla de la página:
// - "columnas": encabezados de las columnas con números.
// - "filas": una fila por red o nivel de tensión; "valores" va en el mismo orden que "columnas".
// - "barra": índice de la columna que se dibuja como barra (0 = la primera).
// - "unidad": se muestra junto al total en el resumen de arriba.
// Para actualizar una cifra, solo se cambia el número aquí; los totales se calculan solos.
export const bloques = [
  {
    id: 'subestaciones',
    titulo: 'Subestaciones',
    icono: '🏭',
    encabezadoFila: 'Red',
    columnas: ['Número de SE'],
    barra: 0,
    unidad: 'subestaciones',
    filas: [
      { etiqueta: 'RST', valores: [99] },
      { etiqueta: 'RNT', valores: [16] },
      { etiqueta: 'RT', valores: [115] }
    ]
  },
  {
    id: 'lineas',
    titulo: 'Líneas de transmisión',
    icono: '🗼',
    encabezadoFila: 'Tensión',
    columnas: ['No. de líneas', 'Kilómetros'],
    barra: 1,
    unidad: 'km',
    filas: [
      { etiqueta: '400 kV', valores: [6, 139] },
      { etiqueta: '230 kV', valores: [9, 272] },
      { etiqueta: '115 kV', valores: [118, 2238] },
      { etiqueta: '69 kV', valores: [2, 77] }
    ]
  },
  {
    id: 'interruptores',
    titulo: 'Interruptores instalados',
    icono: '🔌',
    encabezadoFila: 'Tensión',
    columnas: ['No. de interruptores'],
    barra: 0,
    unidad: 'interruptores',
    filas: [
      { etiqueta: '400 kV', valores: [63] },
      { etiqueta: '230 kV', valores: [57] },
      { etiqueta: '115 kV', valores: [382] },
      { etiqueta: '69 kV', valores: [2] }
    ]
  },
  {
    id: 'capacidad',
    titulo: 'Capacidad instalada',
    icono: '⚡',
    encabezadoFila: 'Tensión',
    columnas: ['MVA'],
    barra: 0,
    unidad: 'MVA',
    filas: [
      { etiqueta: '400 kV', valores: [3261] },
      { etiqueta: '230 kV', valores: [1198] },
      { etiqueta: '115 kV', valores: [3087] },
      { etiqueta: '69 kV', valores: [26] }
    ]
  }
];
