import { registrarEnfermedad } from "../services/serviciosenfermedad.js"

let nombreEnfermedad = document.getElementById("nombreenfermedad")
let sintomasEnfermedad = document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad")
let gradoEnfermedad = document.getElementById("gradoenfermedad")
let probabilidadVida = document.getElementById("proabilidadvida")
let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosEnfermedad = {
    nombre:  nombreEnfermedad.value,
    sintomas:  sintomasEnfermedad.value,
    clasificacion:  clasificacionEnfermedad.value,
    grado: gradoEnfermedad.value,
    probabilidadVida:  probabilidadVida = true,
    }
    console.log(datosEnfermedad)

    registrarEnfermedad(datosEnfermedad)
    .then((respuestaback)=>{
      console.log(respuestaback)
      Swal.fire({
      title: "se enviaron sus enfermedades",
      text: "Registro exitoso!",
      icon: "success"
    });
    })
    
})
