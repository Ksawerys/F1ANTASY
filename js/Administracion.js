
let botonLanzarCarrera = document.getElementById("lanzarCarreraButton")


botonLanzarCarrera.addEventListener('click',function(){
    let listGP = JSON.parse(localStorage.getItem("carreras"))
    let listPilots = JSON.parse(localStorage.getItem("pilotos"))
    let usuario = JSON.parse(localStorage.getItem("user"))
    let bot1 = JSON.parse(localStorage.getItem("bot1"))
    let bot2 = JSON.parse(localStorage.getItem("bot2"))
    let proximoGranPremioNoDisputado = JSON.parse(localStorage.getItem("proximoGranPremioNoDisputado"))
    let jugadores = [usuario,bot1,bot2]

    const puntosASumar = [25,18,15,12,10,8,6,4,2,1,0,0,0,0,0,0,0,0,0,0]

    let posicionesCarrera = listPilots.slice()
    posicionesCarrera.sort(() => Math.random() - 0.5)
    proximoGranPremioNoDisputado.disputado = true

    const carrera = listGP.find(carrera => carrera.id == proximoGranPremioNoDisputado.id)
    if(carrera){
        carrera.disputado = true
        carrera.posiciones = posicionesCarrera.slice() 
    }



    let encontrado = false;

    for (const granPremio of listGP) {
        if (granPremio.disputado == false) {
            proximoGranPremioNoDisputado = granPremio;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("no quedan carreras por disputar.");
    }

    posicionesCarrera.forEach((piloto, index) => {
        piloto.puntos += puntosASumar[index] 
        if(piloto.rol == "Titular"){
            const propietario = jugadores.find(jugador => jugador.nombre == piloto.propiedadJugador)
            if(propietario){
                propietario.puntos += puntosASumar[index]                
            }
        }           
    })
    
    
    

    localStorage.setItem("proximoGranPremioNoDisputado",JSON.stringify(proximoGranPremioNoDisputado))
    localStorage.setItem("user",JSON.stringify(jugadores[0]))
    localStorage.setItem("bot1",JSON.stringify(jugadores[1]))
    localStorage.setItem("bot2",JSON.stringify(jugadores[2]))
    localStorage.setItem("carreras",JSON.stringify(listGP))
    localStorage.setItem("pilotos",JSON.stringify(listPilots))

})