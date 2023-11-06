export class Persona{
    constructor(nombre,apellidos,nick,correo,password,pilotos){        
        this.nombre = nombre
        this.apellidos = apellidos
        this.nick = nick
        this.correo = correo
        this.password = password
        this.pilotos = pilotos
    }
    
}

export class GranPremio{
    constructor(id,nombre,posiciones){
        this.id = id,
        this.nombre = nombre,
        this.posiciones = posiciones 
    }
}

export class Piloto{
    constructor(id,nombre,apellidos,nacionalidad,propiedadJugador,rol){
        this.id = id,
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.nacionalidad = nacionalidad,
        this.propiedadJugador = propiedadJugador,
        this.rol = rol 
    }
}