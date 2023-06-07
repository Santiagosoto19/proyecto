class Carteleras {

    constructor(sala, horario, pelicula, fechaDeInicio, fechaDeFinalizacion) {

        this.sala = sala;
        this.horario = horario;
        this.pelicula = pelicula;
        this.fechaDeInicio = fechaDeInicio;
        this.fechaDeFinalizacion = fechaDeFinalizacion;

    }

    setSala(){

        this.sala = sala;

    }

    setHorario(){

        this.horario = horario;

    }

    setPelicula(){

        this.pelicula = pelicula;
        
    }

    setFechaDeInicio(){

        this.fechaDeInicio = fechaDeInicio;

    }

    setFechaDeFinalizacion(){

        this.fechaDeFinalizacion = fechaDeFinalizacion;

    }

    getSala() {

        return this.sala;

    }

    getHorario() {

        return this.horario;

    }
    
    getPelicula() {

        return this.pelicula;

    }

    getFechaDeInicio() {

        return this.fechaDeInicio;

    }

    getSala() {

        return this.fechaDeFinalizacion;

    }
}