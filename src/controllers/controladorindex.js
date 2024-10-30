let nombreUsuario = document.getElementById("nombreusuario")
let contraseñaUsuario = document.getElementById("contraseñausuario")
let botonRegistroPrincipal = document.getElementById("botonregistroprincipal")

botonRegistroPrincipal.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosUsuario = {
        nombreUsuario: nombreUsuario.value,
        contraseñaUsuario: contraseñaUsuario.value
    }
    console.log(datosUsuario)

    Swal.fire({
        title: "Registro exitoso",
        text: "Se ha registrado con éxito",
        icon: "success"
      });

})