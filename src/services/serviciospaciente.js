//PASOS PARA CONSUMIR API CON JS
export async  function buscarPacientes() {
    // 1. se configura la url del servicio: QUE DESEA CONSUMIR(PA ONDE VA)

        const URL="http://localhost:8080/api/paciente"

    // 2. se configura la peticion del servicio a consumir: (Y A QUE ALLÁ?)

        let peticion = {
        method: 'GET'
        }

    // 3. consumir el api: ARRANQUE MI PAPÁ}
       let respuestaServidor = await fetch(URL, peticion)
       let pacientes = await respuestaServidor.json()
       return pacientes
}

export async function registrarPaciente(datosPaciente) {
    const URL = "http://localhost:8080/api/paciente"
    let peticion = {
        method : "POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(datosPaciente)
    }
    let respuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}
