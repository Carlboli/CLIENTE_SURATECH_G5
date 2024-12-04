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
  let nombre = document.createElement("h2");
  nombre.textContent = `Signo Vital: ${signo.nombre}`;

  // Detalle: Valor y unidad
  let valor = document.createElement("p");
  valor.textContent = `paciente: ${signo.valor} `;

  // Fecha
  let fechaMedida = document.createElement("p");
  fechaMedida.textContent = `Fecha: ${signo.fechaMedida}`;


 
  // Agregar elementos a la tarjeta
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(valor);
  tarjeta.appendChild(fechaMedida);


  // Agregar tarjeta a la columna
  
 columna.appendChild(tarjeta);
  fila.appendChild(columna);
  // Agregar columna a la fila
  
});

})
