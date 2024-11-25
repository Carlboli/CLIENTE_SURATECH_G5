//PASOS PARA CONSUMIR API CON JS
export async  function buscarPacientes() {
    // 1. se configura la url del servicio: QUE DESEA CONSUMIR(PA ONDE VA)

        const url="http://localhost:8080/api/paciente"

    // 2. se configura la peticion del servicio a consumir: (Y A QUE ALLÁ?)

        let peticion = {
        method: 'GET',
        }

    // 3. consumir el api: ARRANQUE MI PAPÁ}
       let respuestaServidor = await fetch(url, peticion)
       let pacientes = await respuestaServidor.json()
       return pacientes
}

