import{registrarSignoVital} from "../services/serviciosSignovital.js"
let FechaDeToma = document.getElementById("fechatoma")
let descripcionSigno = document.getElementById("descripcion")
let seleccionaSigno = document.getElementById("signovital")
let botonRegistroSignoVital = document.getElementById("botonregistrosignovital")


botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()

    let datosSignoVital = {
      nombre: seleccionaSigno.value,
      valor: descripcionSigno.value,
      fechaMedida: FechaDeToma.value
    }
    console.log(datosSignoVital)

    registrarSignoVital(datosSignoVital)
    .then((respuestaBack)=>{
      console.log(respuestaBack)
      Swal.fire({
        title: "Ahora haces parte de sura :D",
        text: "Registro exitoso!",
        icon: "success"
      });
    })
    


})