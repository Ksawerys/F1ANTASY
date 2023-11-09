import {Persona} from "./Clases.js"
import { granPremiosF1 } from "./GranPremiosList.js";
import { pilotosF1 } from "./PilotosList.js";


let proxCarreraLabel = document.getElementById("labelProxCarrera")
let descProxCarreraLabel = document.getElementById("descLabel")
const imagen = document.getElementById("imagenCircuit");
let proximoGranPremioNoDisputado = null


document.addEventListener('DOMContentLoaded', function (){
    let listGP = JSON.parse(localStorage.getItem("carreras"))
    let listPilots = JSON.parse(localStorage.getItem("pilotos"))
    let usuario = JSON.parse(localStorage.getItem("user"))
    let bot1 = JSON.parse(localStorage.getItem("bot1"))
    let bot2 = JSON.parse(localStorage.getItem("bot2"))
    
    
    if(listGP == null){
        listGP = granPremiosF1.slice()        
    }
    if(listPilots == null){
        listPilots = pilotosF1.slice()
                     
    }   
    if(bot1 == null){
        bot1 = new Persona("Marta","Sanchez","martitaGamer","marta@gmail.com","marta1234",[listPilots[2],listPilots[3]],0)
        listPilots[2].rol = "Titular"
        listPilots[3].rol = "Suplente"
        listPilots[2].propiedadJugador = "Marta"
        listPilots[3].propiedadJugador = "Marta"
        bot2 = new Persona("Laura","Diaz","lauritaGamer","laura@gmail.com","laura1234",[listPilots[0],listPilots[1]],0) 
        listPilots[0].rol = "Titular"
        listPilots[1].rol = "Suplente"
        listPilots[0].propiedadJugador = "Laura"
        listPilots[1].propiedadJugador = "Laura"  
    }
    if (usuario && Array.isArray(usuario.pilotos) && usuario.pilotos.length === 0) {
        usuario = new Persona(usuario.nombre,usuario.apellidos,usuario.nick,usuario.correo,usuario.password,[listPilots[8],listPilots[6]],0)
        listPilots[8].rol = "Titular"
        listPilots[6].rol = "Suplente" 
        listPilots[8].propiedadJugador = usuario.nombre
        listPilots[6].propiedadJugador = usuario.nombre 
        
    }
    

    
    for (const granPremio of listGP) {
        if (granPremio.disputado == false) {
        proximoGranPremioNoDisputado = granPremio; 
        break
        }
    }    
    proxCarreraLabel.textContent = proximoGranPremioNoDisputado.nombre
    descProxCarreraLabel.innerHTML = `CIRCUITO: ${proximoGranPremioNoDisputado.desc}<br>
    LONGITUD: ${proximoGranPremioNoDisputado.longitud} metros<br>`;  
    imagen.src = `../imgCircuits/${proximoGranPremioNoDisputado.desc}.jpg`    
       
    

    localStorage.setItem("proximoGranPremioNoDisputado",JSON.stringify(proximoGranPremioNoDisputado))
    localStorage.setItem("user",JSON.stringify(usuario))
    localStorage.setItem("bot1",JSON.stringify(bot1))
    localStorage.setItem("bot2",JSON.stringify(bot2))
    localStorage.setItem("carreras",JSON.stringify(listGP))
    localStorage.setItem("pilotos",JSON.stringify(listPilots))
})