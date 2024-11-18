
let signosVitales = [
  {
      id: 1,
      tipo: "Presión arterial",
      valor: "120/80",
      unidad: "mmHg",
      fecha: "2024-11-17",
      paciente: "Juan Pérez"
  },
  {
      id: 2,
      tipo: "Frecuencia cardíaca",
      valor: "72",
      unidad: "bpm",
      fecha: "2024-11-18",
      paciente: "María López"
  },
  {
      id: 3,
      tipo: "Temperatura corporal",
      valor: "37.5",
      unidad: "°C",
      fecha: "2024-11-19",
      paciente: "Carlos Ruiz"
  },
  {
      id: 4,
      tipo: "Nivel de glucosa",
      valor: "110",
      unidad: "mg/dL",
      fecha: "2024-11-20",
      paciente: "Ana Gómez"
  }
];

// Crear referencia a la fila donde se renderizarán las tarjetas
let fila = document.getElementById("fila");

// Recorrer el array de signos vitales y generar las tarjetas
signosVitales.forEach(function(signo) {
  // Crear columna
  let columna = document.createElement("div");
  columna.classList.add("col");

  // Crear tarjeta
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "p-5", "h-100", "shadow");

  // Título: Tipo de signo vital
  let tipo = document.createElement("h2");
  tipo.textContent = signo.tipo;

  // Detalle: Valor y unidad
  let detalle = document.createElement("p");
  detalle.textContent = `Valor: ${signo.valor} ${signo.unidad}`;

  // Fecha
  let fecha = document.createElement("p");
  fecha.textContent = `Fecha: ${signo.fecha}`;

  // Paciente asociado
  let paciente = document.createElement("p");
  paciente.textContent = `Paciente: ${signo.paciente}`;

  // Agregar elementos a la tarjeta
  tarjeta.appendChild(tipo);
  tarjeta.appendChild(detalle);
  tarjeta.appendChild(fecha);
  tarjeta.appendChild(paciente);

  // Agregar tarjeta a la columna
  columna.appendChild(tarjeta);

  // Agregar columna a la fila
  fila.appendChild(columna);
});
