// Fechas que se marcan en el calendario del menú lateral.
// "mes" va del 1 (enero) al 12 (diciembre).

// Días de descanso obligatorios LFT / CFE para 2026 (ya incluyen los inhábiles)
export const festivos = {
  2026: [
    { mes: 1, dia: 1, nombre: 'Año Nuevo' },
    { mes: 2, dia: 2, nombre: 'Día de la Constitución' },
    { mes: 3, dia: 16, nombre: 'Natalicio de Benito Juárez' },
    { mes: 5, dia: 1, nombre: 'Día del Trabajo' },
    { mes: 9, dia: 16, nombre: 'Día de la Independencia' },
    { mes: 11, dia: 16, nombre: 'Revolución Mexicana' },
    { mes: 12, dia: 25, nombre: 'Navidad' }
  ]
};

// Días puente o no laborables extra, por año. Ejemplo:
// 2026: [{ mes: 12, dia: 24, nombre: 'Nochebuena' }]
export const noLaborables = {
  2026: []
};

// Cumpleaños del personal; se repiten cada año. Ejemplo:
// { mes: 10, dia: 21, nombre: 'Juan Pérez' }
export const cumpleanos = [
];
