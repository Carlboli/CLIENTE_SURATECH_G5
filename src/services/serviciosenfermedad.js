export async function buscarEnfermedad() {
    const url = "http://localhost:8080/api/enfermedad"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let enfermedad = await respuestaServidor.json()
    return enfermedad
}

export async function registrarEnfermedad(datosEnfermedad) {
    const URL = "http://localhost:8080/api/enfermedad"
    let peticion = {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(datosEnfermedad)
    }
    let respuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}