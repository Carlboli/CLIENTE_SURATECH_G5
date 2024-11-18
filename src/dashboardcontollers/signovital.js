let FechaDeToma = document.getElementById("fechatoma")
let descripcionSigno = document.getElementById("descripcion")
let seleccionaSigno = document.getElementById("signovital")
let botonRegistroSignoVital = document.getElementById("botonregistrosignovital")


botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()

    let datosSignoVital = {
    fechaDeToma: FechaDeToma.value,
    descripcion: descripcionSigno.value,
    signoVital: seleccionaSigno.value
    }
    console.log(datosSignoVital)


    Swal.fire({
        title: "Ahora haces parte de sura :D",
        text: "Registro exitoso!",
        icon: "success"
      });


})