export async function buscarMedicamento() {
    const url = "http://localhost:8080/api/medicamento"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let medicamento = await respuestaServidor.json()
    return medicamento
}


export async function registrarMedicamentos(datosMedicamento) {
    const URL = "http://localhost:8080/api/medicamento"
    let peticion = {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(datosMedicamento)
    }
    let respuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}