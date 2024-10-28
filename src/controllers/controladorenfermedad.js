let nombreEnfermedad = document.getElementById("nombreenfermedad")
let sintomasEnfermedad = document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad = document.getElementById("clasificacionenfermedad")
let probabilidadVida = document.getElementById("proabilidadvida")
let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosEnfermedad = {
    nombreEnfermedadValue:  nombreEnfermedad.value,
    sintomasEnfermedadValue:  sintomasEnfermedad.value,
    clasificacionEnfermedadValue:  clasificacionEnfermedad.value,
    probabilidadVidaValue:  probabilidadVida.value,
    }
    console.log(datosEnfermedad)

    
    Swal.fire({
    title: "se enviaron sus enfermedades",
    text: "Registro exitoso!",
    icon: "success"
  });
})






