import{buscarMedicamento} from "../services/serviciosmedicamento.js"


buscarMedicamento()
.then(function(respuestaBack){
    console.log(respuestaBack)
    // Crear referencia a la fila donde se renderizarán las tarjetas
let filaMedicamentos = document.getElementById("fila");

// Recorrer el array de medicamentos y generar las tarjetas
respuestaBack.forEach(function(medicamento) {
    let columna = document.createElement("div");
    columna.classList.add("col");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "p-5", "h-100", "shadow");

    let nombre = document.createElement("h2");
    nombre.textContent = medicamento.nombre;

    let presentacion = document.createElement("p");
    presentacion.textContent = `presentacion: ${medicamento.presentacion}`;

    let dosis = document.createElement("p");
    dosis.textContent = `dosis: ${medicamento.dosis}`;

    let fechaCaducidad = document.createElement("p");
    fechaCaducidad.textContent = `fecha de caducidad: ${medicamento.fechaCaducidad}`;

    let contraIndicaciones = document.createElement("p");
    contraIndicaciones.textContent = `Indicaciones: ${medicamento.contraIndicaciones}`;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(presentacion);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(fechaCaducidad);
    tarjeta.appendChild(contraIndicaciones);
    columna.appendChild(tarjeta);
    filaMedicamentos.appendChild(columna);
});

})

