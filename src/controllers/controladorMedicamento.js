
let medicamentos = [
    {
        id: 1,
        nombre: "Paracetamol",
        dosis: "500mg",
        viaAdministracion: "Oral",
        frecuencia: "Cada 8 horas",
        indicaciones: "Alivio de fiebre y dolor leve."
    },
    {
        id: 2,
        nombre: "Ibuprofeno",
        dosis: "200mg",
        viaAdministracion: "Oral",
        frecuencia: "Cada 6 horas",
        indicaciones: "Alivio de dolor y antiinflamatorio."
    },
    {
        id: 3,
        nombre: "Amoxicilina",
        dosis: "500mg",
        viaAdministracion: "Oral",
        frecuencia: "Cada 12 horas",
        indicaciones: "Tratamiento de infecciones bacterianas."
    },
    {
        id: 4,
        nombre: "Loratadina",
        dosis: "10mg",
        viaAdministracion: "Oral",
        frecuencia: "Una vez al día",
        indicaciones: "Tratamiento de alergias."
    }
];

// Crear referencia a la fila donde se renderizarán las tarjetas
let filaMedicamentos = document.getElementById("fila");

// Recorrer el array de medicamentos y generar las tarjetas
medicamentos.forEach(function(medicamento) {
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
