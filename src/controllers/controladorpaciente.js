//OBJETIVO: Capturar los datos de un formulario

//1. por cada input, select, textarea del formulario 
//se crea un variable

//2. Por cada variable debo utilizar DOM para
//asociarl el html con js
/*
let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("ingresospaciente")
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
        correo: correoPaciente.value,
        telefono:  telefonoPaciente.value,
        fechaNacimiento: fechaNacimientoPaciente.value,
        ciudad: ciudadPaciente.value,
        poliza:  polizaPaciente.value,
        ips: ipsPaciente.value,
        grupoIngreso: grupoIngresoPaciente.value,
        fechaAfiliacion: fechaAfiliacionPaciente.value
    }
    
    console.log(datosPaciente)

    Swal.fire({
        title: "Ahora haces parte de sura :D",
        text: "Registro exitoso!",
        icon: "success"
      });
      
})  
*/


//OBJETIVO: Recibir datos del back y hacerles render 
//1. Quemar o simular los datos
let pacientes = [
    {
        id: 4213,
        nombre:"McLovin Magayo Mayello",
        correo: "algo@gmail.com",
        telefono: "3849403922",
        fechaNacimiento: "1990-07-20",
        ciudad: "Medellin",
        poliza: true ,
        ips: "San Ignacio",
        grupoIngreso: "C",
        fechaAfiliacion: "2010-9-29"
    },
    {
        "id": 4214,
        "nombre": "Ana Lucia Torres",
        "correo": "ana.torres@gmail.com",
        "telefono": "3001234567",
        "fechaNacimiento": "1985-05-15",
        "ciudad": "Bogotá",
        "poliza": true,
        "ips": "Hospital Santa Clara",
        "grupoIngreso": "A",
        "fechaAfiliacion": "2012-03-10"
    },
    {
        "id": 4215,
        "nombre": "Carlos Alberto Pérez",
        "correo": "carlos.perez@gmail.com",
        "telefono": "3217654321",
        "fechaNacimiento": "1978-11-02",
        "ciudad": "Cali",
        "poliza": false,
        "ips": "Clínica del Valle",
        "grupoIngreso": "B",
        "fechaAfiliacion": "2015-01-15"
    },
    {
        "id": 4216,
        "nombre": "Sofía Martínez",
        "correo": "sofia.martinez@gmail.com",
        "telefono": "3009876543",
        "fechaNacimiento": "1992-09-30",
        "ciudad": "Barranquilla",
        "poliza": true,
        "ips": "Clínica del Caribe",
        "grupoIngreso": "C",
        "fechaAfiliacion": "2018-07-25"
    }
    
    
    
]

//2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila = document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada
pacientes.forEach(function(paciente){
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
