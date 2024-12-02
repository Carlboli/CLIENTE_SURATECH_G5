export async function buscarSignoVital() {
    const url = "http://localhost:8080/api/signoVital"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let signoVital = await respuestaServidor.json()
    return signoVital
}


export async function registrarSignoVital(datosSignovital) {
    const URL = "http://localhost:8080/api/signoVital"
    let peticion = {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(datosSignovital)
    }
    let respuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}