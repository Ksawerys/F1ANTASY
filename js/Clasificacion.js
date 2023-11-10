window.addEventListener('DOMContentLoaded', function (){
    let usuario = JSON.parse(localStorage.getItem("user"))
    let bot1 = JSON.parse(localStorage.getItem("bot1"))
    let bot2 = JSON.parse(localStorage.getItem("bot2"))
    

    const personas = [usuario,bot1,bot2]

    personas.sort((a, b) => b.puntos - a.puntos)

    
    const rankingList = document.getElementById("rankingList")

    
    personas.forEach((persona, index) => {
        const listItem = document.createElement("li")
        listItem.textContent = `${persona.nombre} - Puntos: ${persona.puntos}`
        rankingList.appendChild(listItem);
    });

})