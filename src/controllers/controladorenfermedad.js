import{buscarEnfermedad}from"../services/serviciosenfermedad.js"

// let nombreEnfermedad = document.getElementById("nombreenfermedad")
// let sintomasEnfermedad = document.getElementById("sintomasenfermedad")
// let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad")
// let probabilidadVida = document.getElementById("proabilidadvida")
// let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad")

// botonRegistroEnfermedad.addEventListener("click", function(evento){
//     evento.preventDefault()

//     let datosEnfermedad = {
//     nombreEnfermedadValue:  nombreEnfermedad.value,
//     sintomasEnfermedadValue:  sintomasEnfermedad.value,
//     clasificacionEnfermedadValue:  clasificacionEnfermedad.value,
//     probabilidadVidaValue:  probabilidadVida.value,
//     }
//     console.log(datosEnfermedad)

    
//     Swal.fire({
//     title: "se enviaron sus enfermedades",
//     text: "Registro exitoso!",
//     icon: "success"
//   });
// })
buscarEnfermedad()
.then(function(respuestaBack){
  console.log(respuestaBack)

// Crear referencia a la fila donde se renderizarán las tarjetas
let filaEnfermedades = document.getElementById("fila");

// Recorrer el array de enfermedades y generar las tarjetas
respuestaBack.forEach(function(enfermedad) {
  let columna = document.createElement("div");
  columna.classList.add("col");

  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "p-5", "h-100", "shadow");

  let nombre = document.createElement("h2");
  nombre.textContent = enfermedad.nombre;

  let sintomas = document.createElement("p");
  sintomas.textContent = `Síntomas: ${enfermedad.sintomas}`;

  let tratamiento = document.createElement("p");
  tratamiento.textContent = `Tratamiento: ${enfermedad.tratamiento}`;

  let duracion = document.createElement("p");
  duracion.textContent = `Duración: ${enfermedad.duracion}`;

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(sintomas);
  tarjeta.appendChild(tratamiento);
  tarjeta.appendChild(duracion);
  columna.appendChild(tarjeta);
  filaEnfermedades.appendChild(columna);
});
})





