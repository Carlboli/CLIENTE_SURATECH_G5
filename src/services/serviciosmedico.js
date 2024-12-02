export async function buscarMedicos() {
    const url = "http://localhost:8080/api/medico"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let medicos = await respuestaServidor.json()
    return medicos
}
export async function registrarMedicos(datosMedico) {
    const URL = "http://localhost:8080/api/medico"
    let peticion = {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(datosMedico)
    }
    let respuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}