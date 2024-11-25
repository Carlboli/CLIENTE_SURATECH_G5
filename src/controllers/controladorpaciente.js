import{buscarPacientes} from "../services/serviciospaciente.js"

//OBJETIVO: Recibir datos del back y hacerles render 
//1. llamar al api
buscarPacientes()
.then(function(respuestaBack){
    console.log(respuestaBack)
    //2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada
    respuestaBack.forEach(function(paciente){
    console.log(paciente)
    //4. Se crean columnas
    let columna = document.createElement("div")
    columna.classList.add("col")

    //5. Se crea tarjetas
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //6. Se crea una etiqueta para poner el nombre del paciente
    let nombre = document.createElement("h2")
    nombre.textContent=paciente.nombre

    //PASO FINAL ordenando las cartas
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})

})



