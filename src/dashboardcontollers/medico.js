import{registrarMedicos} from "../services/serviciosmedico.js"
let nombreMedico = document.getElementById("nombremedico")
let matriculaProfesional = document.getElementById("matriculamedico")
let especialidad = document.getElementById("especialidadmedico")
let salarioMedico = document.getElementById("salariomedico")
let ipsMedico = document.getElementById("ipsmedico")
let correoMedico = document.getElementById("correomedico")
let telefonoMedico = document.getElementById("telefonomedico")
let  direccionMedico = document.getElementById("direccionmedico")
let disponibleFinSemana = document.getElementById("disponibilidadMedico")
let botonRegistroMedico = document.getElementById("botonregistromedico")



botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault()

     let datosMedico = {
     nombre: nombreMedico.value,
     matricula: matriculaProfesional.value,
     especialidad: especialidad.value,
     salario: salarioMedico.value,
     ips: ipsMedico.value,
     correo: correoMedico.value,
     telefono: telefonoMedico.value,
     direccion: direccionMedico.value,
     disponibleFinSemana: disponibleFinSemana.value
     
    }
    console.log(datosMedico)
    registrarMedicos(datosMedico)
    .then((respuestaBack)=>{
      console.log(respuestaBack)
      Swal.fire({
        title: "Ahora haces parte de sura :D",
        text: "Registro exitoso!",
        icon: "success"
      });
    })
    

    
})
