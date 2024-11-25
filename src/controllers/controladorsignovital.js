import{buscarSignoVital} from "../services/serviciosSignovital.js"
buscarSignoVital()
.then(function(respuestaBack){
  console.log(respuestaBack)
  // Crear referencia a la fila donde se renderizarán las tarjetas
let fila = document.getElementById("fila");

// Recorrer el array de signos vitales y generar las tarjetas
respuestaBack.forEach(function(signo) {
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

})
