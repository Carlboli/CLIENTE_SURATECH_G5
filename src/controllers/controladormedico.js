import{buscarMedicos} from "../services/serviciosmedico.js"

// let nombreMedico = document.getElementById("nombremedico")
// let matriculaProfesional = document.getElementById("matriculamedico")
// let especialidad = document.getElementById("especialidadmedico")
// let salarioMedico = document.getElementById("salariomedico")
// let ipsMedico = document.getElementById("ipsmedico")
// let correoMedico = document.getElementById("correomedico")
// let telefonoMedico = document.getElementById("telefonomedico")
// let  direccionMedico = document.getElementById("direccionmedico")
// let disponibleFinSemana = document.getElementById("disponibilidadMedico")
// let botonRegistroMedico = document.getElementById("botonregistromedico")



// botonRegistroMedico.addEventListener("click",function(evento){
//     evento.preventDefault()

//      let datosMedico = {
//      nombre: nombreMedico.value,
//      matricula: matriculaProfesional.value,
//      especialidad: especialidad.value,
//      salario: salarioMedico.value,
//      ips: ipsMedico.value,
//      correo: correoMedico.value,
//      telefono: telefonoMedico.value,
//      direccion: direccionMedico.value,
//      disponibleFinSemana: disponibleFinSemana.value
     
//     }

//     console.log(datosMedico
//     )

//     Swal.fire({
//         title: "Ahora haces parte de sura :D",
//         text: "Registro exitoso!",
//         icon: "success"
//       });
// })



buscarMedicos()
.then(function(respuestaBack){
  console.log(respuestaBack)
// Crear referencia a la fila donde se renderizarán las tarjetas
let filaMedicos = document.getElementById("fila");

// Recorrer el array de médicos y generar las tarjetas
respuestaBack.forEach(function(medico) {
  let columna = document.createElement("div");
  columna.classList.add("col");

  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card", "p-5", "h-100", "shadow");

  let nombre = document.createElement("h2");
  nombre.textContent = medico.nombre;

  let especialidad = document.createElement("p");
  especialidad.textContent = `Especialidad: ${medico.especialidad}`;

  let telefono = document.createElement("p");
  telefono.textContent = `Teléfono: ${medico.telefono}`;

  let correo = document.createElement("p");
  correo.textContent = `Correo: ${medico.correo}`;

  

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(especialidad);
  tarjeta.appendChild(telefono);
  tarjeta.appendChild(correo);
  columna.appendChild(tarjeta);
  filaMedicos.appendChild(columna);
});
})


