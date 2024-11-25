export async function buscarMedicamento() {
    const url = "http://localhost:8080/api/medicamento"
    let peticion = {
        method: 'GET',
    }
    let respuestaServidor = await fetch(url, peticion)
    let medicamento = await respuestaServidor.json()
    return medicamento
}