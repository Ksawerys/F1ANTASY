export class Persona{    
    constructor(nombre,apellidos,nick,correo,password,pilotos,puntos){        
        this.nombre = nombre
        this.apellidos = apellidos
        this.nick = nick
        this.correo = correo
        this.password = password
        this.pilotos = pilotos
        this.puntos = puntos
    }
    
}

export class GranPremio{
    nombre
    constructor(id,nombre,desc,longitud,posiciones,disputado){
        this.id = id,
        this.desc = desc,
        this.nombre = nombre,
        this.longitud = longitud
        this.posiciones = posiciones 
        this.disputado = disputado
    }
}

export class Piloto{
    constructor(id,nombre,apellidos,puntos,nacionalidad,propiedadJugador,rol){
        this.id = id,
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.puntos = puntos,
        this.nacionalidad = nacionalidad,
        this.propiedadJugador = propiedadJugador,
        this.rol = rol 
    }
}