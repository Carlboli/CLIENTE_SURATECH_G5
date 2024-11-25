export async function buscarMedicos() {
    const url = "http://localhost:8080/api/medico"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let medicos = await respuestaServidor.json()
    return medicos
}