import { GranPremio, Persona, Piloto } from "./Clases.js";

let proxCarreraLabel = document.getElementById("labelProxCarrera")
let descProxCarreraLabel = document.getElementById("descLabel")
const imagen = document.getElementById("imagenCircuit");
let proximoGranPremioNoDisputado = null

const pilotosF1 = [
    new Piloto(1, "Lewis", "Hamilton",0, "Reino Unido", 0, "ocupado"),
    new Piloto(2, "Max", "Verstappen",0, "Países Bajos", 0, "reserva"),
    new Piloto(3, "Valtteri", "Bottas",0, "Finlandia", 0, "ocupado"),
    new Piloto(4, "Sergio", "Pérez",0, "México", 0, "reserva"),
    new Piloto(5, "Lando", "Norris",0, "Reino Unido", 0, "libre"),
    new Piloto(6, "Nico", "Hulkenberg",0, "Alemania", 0, "libre"),
    new Piloto(7, "Carlos", "Sainz",0, "España", 0, "reserva"),
    new Piloto(8, "Charles", "Leclerc",0, "Mónaco", 0, "libre"),
    new Piloto(9, "Fernando", "Alonso",0, "España", 0, "ocupado"),
    new Piloto(10, "Esteban", "Ocon",0, "Francia", 0, "libre"),
    new Piloto(11, "Nyck", "De Vries",0, "Paises Bajos", 0, "libre"),
    new Piloto(12, "Lance", "Stroll",0, "Canadá", 0, "libre"),
    new Piloto(13, "Yuki", "Tsunoda",0, "Japón", 0, "libre"),
    new Piloto(14, "Kevin", "Magnussen",0, "Dinamarca", 0, "libre"),
    new Piloto(15, "Alexander", "Albon",0, "Tailandia", 0, "libre"),
    new Piloto(16, "Oscar", "Piastri",0, "Australia", 0, "libre"),
    new Piloto(17, "Guanyu", "Zhou",0, "China", 0, "libre"),
    new Piloto(18, "Logan", "Sargeant",0, "Estados Unidos", 0, "libre"),
    new Piloto(19, "George", "Russell",0, "Reino Unido", 0, "libre"),
    new Piloto(20, "Pierre", "Gasly",0, "Francia", 0, "libre")
];

const granPremiosF1 = [
    new GranPremio(1, 'Gran Premio de Baherim','Shakir',6299, [], false),
    new GranPremio(2, 'Gran Premio de Arabia Saudi', 'Jeddah',6174, [], false),
    new GranPremio(3, 'Gran Premio de Australia', 'Melbourne',5303, [], false),
    new GranPremio(4, 'Gran Premio de Azerbaijan', 'Bakú',6003, [], false),
    new GranPremio(5, 'Gran Premio de Miami', 'Miami',5410, [], false),
    new GranPremio(6, 'Gran Premio de la Emilia Romagna', 'Imola',4909, [], false),
    new GranPremio(7, 'Gran Premio de Monaco', 'Monaco',3333, [], false),
    new GranPremio(8, 'Gran Premio de España', 'Montmeló',4675, [], false),
    new GranPremio(9, 'Gran Premio de Canada', 'Montreal',4361, [], false),
    new GranPremio(10, 'Gran Premio de Austria', 'Spielberg',4000, [], false),
    new GranPremio(11, 'Gran Premio de Gran Bretaña', 'Silverstone',5881, [], false),
    new GranPremio(12, 'Gran Premio de Hungria', 'Budapest',4381, [], false),
    new GranPremio(13, 'Gran Premio de Belgica', 'Francorchamps',7004, [], false),
    new GranPremio(14, 'Gran Premio de Paises Bajos', 'Zandvoort',4259, [], false),
    new GranPremio(15, 'Gran Premio de Italia', 'Monza',5793, [], false),
    new GranPremio(16, 'Gran Premio de Singapur', 'Marina Bay',5065, [], false),
    new GranPremio(17, 'Gran Premio de Japón', 'Suzuka',5807, [], false),
    new GranPremio(18, 'Gran Premio de Qatar', 'Doha',5400, [], false),
    new GranPremio(19, 'Gran Premio de Estados Unidos', 'Texas',5510, [], false),
    new GranPremio(20, 'Gran Premio de Mexico', 'Ciudad de Mexico',4304, [], false),
    new GranPremio(21, 'Gran Premio de Brasil', 'Sao Paulo',4309, [], false),
    new GranPremio(22, 'Gran Premio de Las Vegas', 'Las Vegas',6201, [], false),
    new GranPremio(23, 'Gran Premio de Abu Dhabi', 'Yas Marina',5554, [], false),
];

localStorage.setItem('PilotosF1',JSON.stringify(pilotosF1))
localStorage.setItem('GranPremiosF1',JSON.stringify(granPremiosF1))




window.addEventListener('DOMContentLoaded', function (){
    let listGP = JSON.parse(localStorage.getItem("GranPremiosF1"))
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
    
    

    let usuario = JSON.parse(localStorage.getItem("user"))
    let bot1 = new Persona("Marta","Sanchez","martitaGamer","marta@gmail.com","marta1234",[pilotosF1[2],pilotosF1[3]],0)
    let bot2 = new Persona("Laura","Diaz","lauritaGamer","laura@gmail.com","laura1234",[pilotosF1[0],pilotosF1[1]],0)
    if (!Array.isArray(usuario.pilotos)) {
        usuario.pilotos = [];
    }
    usuario.pilotos = [pilotosF1[8],pilotosF1[6]]

    localStorage.setItem("proximoGranPremioNoDisputado",JSON.stringify(proximoGranPremioNoDisputado))
    localStorage.setItem("user",JSON.stringify(usuario))
    localStorage.setItem("bot1",JSON.stringify(bot1))
    localStorage.setItem("bot2",JSON.stringify(bot2))
})