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



let enfermedades = [
  {
      id: 1,
      nombre: "Diabetes tipo 2",
      sintomas: "Sed excesiva, fatiga, visión borrosa, heridas que no cicatrizan.",
      tratamiento: "Medicamentos orales, cambios en el estilo de vida.",
      duracion: "Crónica"
  },
  {
      id: 2,
      nombre: "Hipertensión",
      sintomas: "Dolores de cabeza, dificultad para respirar, visión borrosa.",
      tratamiento: "Medicamentos antihipertensivos, reducción de sal en la dieta.",
      duracion: "Crónica"
  },
  {
      id: 3,
      nombre: "Asma",
      sintomas: "Dificultad para respirar, tos, sibilancias.",
      tratamiento: "Inhaladores, medicamentos broncodilatadores.",
      duracion: "Crónica"
  },
  {
      id: 4,
      nombre: "Neumonía",
      sintomas: "Fiebre, tos con flema, dificultad para respirar.",
      tratamiento: "Antibióticos, reposo, líquidos.",
      duracion: "Dependiendo de la gravedad, puede ser aguda o crónica."
  }
];

// Crear referencia a la fila donde se renderizarán las tarjetas
let filaEnfermedades = document.getElementById("fila");

// Recorrer el array de enfermedades y generar las tarjetas
enfermedades.forEach(function(enfermedad) {
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



