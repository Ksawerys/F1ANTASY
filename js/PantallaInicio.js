import { GranPremio, Persona, Piloto } from "./Clases.js";

const pilotosF1 = [
    new Piloto(1, "Lewis", "Hamilton", "Reino Unido", 0, "ocupado"),
    new Piloto(2, "Max", "Verstappen", "Países Bajos", 0, "reserva"),
    new Piloto(3, "Valtteri", "Bottas", "Finlandia", 0, "ocupado"),
    new Piloto(4, "Sergio", "Pérez", "México", 0, "reserva"),
    new Piloto(5, "Lando", "Norris", "Reino Unido", 0, "libre"),
    new Piloto(6, "Nico", "Hulkenberg", "Alemania", 0, "libre"),
    new Piloto(7, "Carlos", "Sainz", "España", 0, "reserva"),
    new Piloto(8, "Charles", "Leclerc", "Mónaco", 0, "libre"),
    new Piloto(9, "Fernando", "Alonso", "España", 0, "ocupado"),
    new Piloto(10, "Esteban", "Ocon", "Francia", 0, "libre"),
    new Piloto(11, "Nyck", "De Vries", "Paises Bajos", 0, "libre"),
    new Piloto(12, "Lance", "Stroll", "Canadá", 0, "libre"),
    new Piloto(13, "Yuki", "Tsunoda", "Japón", 0, "libre"),
    new Piloto(14, "Kevin", "Magnussen", "Dinamarca", 0, "libre"),
    new Piloto(15, "Alexander", "Albon", "Tailandia", 0, "libre"),
    new Piloto(16, "Oscar", "Piastri", "Australia", 0, "libre"),
    new Piloto(17, "Guanyu", "Zhou", "China", 0, "libre"),
    new Piloto(18, "Logan", "Sargeant", "Estados Unidos", 0, "libre"),
    new Piloto(19, "George", "Russell", "Reino Unido", 0, "libre"),
    new Piloto(20, "Pierre", "Gasly", "Francia", 0, "libre")
];

const granPremiosF1 = [
    new GranPremio(1, 'Gran Premio de Baherim','Shakir', []),
    new GranPremio(2, 'Gran Premio de Arabia Saudi', 'Jeddah', []),
    new GranPremio(3, 'Gran Premio de Australia', 'Melbourne', []),
    new GranPremio(4, 'Gran Premio de Azerbaijan', 'Bakú', []),
    new GranPremio(5, 'Gran Premio de Miami', 'Miami', []),
    new GranPremio(6, 'Gran Premio de la Emilia Romagna', 'Imola', []),
    new GranPremio(7, 'Gran Premio de Monaco', 'Monaco', []),
    new GranPremio(8, 'Gran Premio de España', 'Montmeló', []),
    new GranPremio(9, 'Gran Premio de Canada', 'Montreal', []),
    new GranPremio(10, 'Gran Premio de Austria', 'Spielberg', []),
    new GranPremio(11, 'Gran Premio de Gran Bretaña', 'Silverstone', []),
    new GranPremio(12, 'Gran Premio de Hungria', 'Budapest', []),
    new GranPremio(13, 'Gran Premio de Belgica', 'Francorchamps', []),
    new GranPremio(14, 'Gran Premio de Paises Bajos', 'Zandvoort', []),
    new GranPremio(15, 'Gran Premio de Italia', 'Monza', []),
    new GranPremio(16, 'Gran Premio de Singapur', 'Marina Bay', []),
    new GranPremio(17, 'Gran Premio de Japón', 'Suzuka', []),
    new GranPremio(18, 'Gran Premio de Qatar', 'Doha', []),
    new GranPremio(19, 'Gran Premio de Estados Unidos', 'Texas', []),
    new GranPremio(20, 'Gran Premio de Mexico', 'Ciudad de Mexico', []),
    new GranPremio(21, 'Gran Premio de Brasil', 'Sao Paulo', []),
    new GranPremio(22, 'Gran Premio de Las Vegas', 'Las Vegas', []),
    new GranPremio(23, 'Gran Premio de Abu Dhabi', 'Yas Marina', []),
];

localStorage.setItem('PilotosF1',JSON.stringify(pilotosF1))
localStorage.setItem('GranPremiosF1',JSON.stringify(granPremiosF1))


var usuario = localStorage.getItem("user")
var bot1 = new Persona("Marta","Sanchez","martitaGamer","marta@gmail.com","marta1234",[pilotosF1[2],pilotosF1[3]])
var bot2 = new Persona("Laura","Diaz","lauritaGamer","laura@gmail.com","laura1234",[pilotosF1[0],pilotosF1[1]])
usuario.pilotos = [pilotosF1[8],pilotosF1[6]]
localStorage.setItem("user",JSON.stringify(usuario))