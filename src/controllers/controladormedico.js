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

let medicos = [
  {
      id: 1,
      nombre: "Dr. Juan Pérez",
      especialidad: "Cardiología",
      telefono: "3001234567",
      correo: "juan.perez@gmail.com",
      hospital: "Hospital San Ignacio"
  },
  {
      id: 2,
      nombre: "Dra. María López",
      especialidad: "Pediatría",
      telefono: "3007654321",
      correo: "maria.lopez@gmail.com",
      hospital: "Hospital Santa Clara"
  },
  {
      id: 3,
      nombre: "Dr. Carlos Ruiz",
      especialidad: "Dermatología",
      telefono: "3108765432",
      correo: "carlos.ruiz@gmail.com",
      hospital: "Clínica del Valle"
  },
  {
      id: 4,
      nombre: "Dra. Ana Gómez",
      especialidad: "Neurología",
      telefono: "3112345678",
      correo: "ana.gomez@gmail.com",
      hospital: "Clínica del Caribe"
  }
];

// Crear referencia a la fila donde se renderizarán las tarjetas
let filaMedicos = document.getElementById("fila");

// Recorrer el array de médicos y generar las tarjetas
medicos.forEach(function(medico) {
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

  let hospital = document.createElement("p");
  hospital.textContent = `Hospital: ${medico.hospital}`;

  tarjeta.appendChild(nombre);
  tarjeta.appendChild(especialidad);
  tarjeta.appendChild(telefono);
  tarjeta.appendChild(correo);
  tarjeta.appendChild(hospital);
  columna.appendChild(tarjeta);
  filaMedicos.appendChild(columna);
});
