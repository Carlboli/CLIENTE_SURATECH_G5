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

  let clasificacion = document.createElement("p");
  clasificacion.textContent = `Tratamiento: ${enfermedad. clasificacion}`;

  let grado = document.createElement("p");
  grado.textContent = `Duración: ${enfermedad.grado}`;

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(sintomas);
  tarjeta.appendChild(clasificacion);
  tarjeta.appendChild(grado);
  columna.appendChild(tarjeta);
  filaEnfermedades.appendChild(columna);
});
})





