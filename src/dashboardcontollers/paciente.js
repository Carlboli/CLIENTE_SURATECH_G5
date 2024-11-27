import{registrarPaciente} from "../services/serviciospaciente.js"
//1. por cada input, select, textarea del formulario 
//se crea un variable

//2. Por cada variable debo utilizar DOM para
//asociarl el html con js

let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")
//3. crear una variable para asociarla al id del boton

let botonRegistroPaciente = document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventos en el boton

botonRegistroPaciente.addEventListener("click", function(evento){
    evento.preventDefault()
    //5. se crea un json que capture todos los datos del formulario
    let  datosPaciente = {
        nombre: nombrePaciente.value,
        anioNacimiento: fechaNacimientoPaciente.value,
        ciudad: ciudadPaciente.value,
        correo: correoPaciente.value,
        telefono:  telefonoPaciente.value,
        ips: ipsPaciente.value,
        poliza: polizaPaciente.value = true,
        grupoIngresos: grupoIngresoPaciente.value,
        fechaAfiliacion: fechaAfiliacionPaciente.value
    }
    
    console.log(datosPaciente)
    registrarPaciente(datosPaciente)
    .then((respuestaBack)=>{
        console.log(respuestaBack)
        Swal.fire({
        title: "Ahora haces parte de sura :D",
        text: "Registro exitoso!",
        icon: "success"
      });
    })

    
      
})  

