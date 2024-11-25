export async function buscarSignoVital() {
    const url = "http://localhost:8080/api/signoVital"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let signoVital = await respuestaServidor.json()
    return signoVital
}