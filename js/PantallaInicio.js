import {Persona} from "./Clases.js"
import { granPremiosF1 } from "./GranPremiosList.js";
import { pilotosF1 } from "./PilotosList.js";

let proxCarreraLabel = document.getElementById("labelProxCarrera")
let descProxCarreraLabel = document.getElementById("descLabel")
const imagen = document.getElementById("imagenCircuit");
let proximoGranPremioNoDisputado = null


window.addEventListener('DOMContentLoaded', function (){
    
    for (const granPremio of granPremiosF1) {
        if (granPremio.disputado == false) {
        proximoGranPremioNoDisputado = granPremio; 
        break
        }
    }    
    proxCarreraLabel.textContent = proximoGranPremioNoDisputado.nombre
    descProxCarreraLabel.innerHTML = `CIRCUITO: ${proximoGranPremioNoDisputado.desc}<br>
    LONGITUD: ${proximoGranPremioNoDisputado.longitud} metros<br>`;  
    imagen.src = `../imgCircuits/${proximoGranPremioNoDisputado.desc}.jpg` 
    
    

    let usuario = JSON.parse(localStorage.getItem("user"))
    let bot1 = new Persona("Marta","Sanchez","martitaGamer","marta@gmail.com","marta1234",[pilotosF1[2],pilotosF1[3]],0)
    pilotosF1[2].rol = "Titular"
    pilotosF1[3].rol = "Suplente"
    let bot2 = new Persona("Laura","Diaz","lauritaGamer","laura@gmail.com","laura1234",[pilotosF1[0],pilotosF1[1]],0)
    pilotosF1[0].rol = "Titular"
    pilotosF1[1].rol = "Suplente"
    if (!Array.isArray(usuario.pilotos)) {
        usuario.pilotos = [];
    }
    usuario.pilotos = [pilotosF1[8],pilotosF1[6]]
    pilotosF1[8].rol = "Titular"
    pilotosF1[6].rol = "Suplente"

    localStorage.setItem("proximoGranPremioNoDisputado",JSON.stringify(proximoGranPremioNoDisputado))
    localStorage.setItem("user",JSON.stringify(usuario))
    localStorage.setItem("bot1",JSON.stringify(bot1))
    localStorage.setItem("bot2",JSON.stringify(bot2))
})