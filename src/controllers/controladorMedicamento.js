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

    let dosis = document.createElement("p");
    dosis.textContent = `Dosis: ${medicamento.dosis}`;

    let viaAdministracion = document.createElement("p");
    viaAdministracion.textContent = `Vía de administración: ${medicamento.viaAdministracion}`;

    let frecuencia = document.createElement("p");
    frecuencia.textContent = `Frecuencia: ${medicamento.frecuencia}`;

    let indicaciones = document.createElement("p");
    indicaciones.textContent = `Indicaciones: ${medicamento.indicaciones}`;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(dosis);
    tarjeta.appendChild(viaAdministracion);
    tarjeta.appendChild(frecuencia);
    tarjeta.appendChild(indicaciones);
    columna.appendChild(tarjeta);
    filaMedicamentos.appendChild(columna);
});

})

