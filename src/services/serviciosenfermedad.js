export async function buscarEnfermedad() {
    const url = "http://localhost:8080/api/enfermedad"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let enfermedad = await respuestaServidor.json()
    return enfermedad
}