export class Persona{
    constructor(nombre,apellidos,nick,correo,password){
        this.nombre = nombre
        this.apellidos = apellidos,
        this.nick = nick
        this.correo = correo
        this.password = password
    }
}

export class GranPermio{
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