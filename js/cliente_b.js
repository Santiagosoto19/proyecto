class Clientes {

    constructor (id, nombre, apellidos, celular, email, fechaNacimiento){

    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.celular = celular;
    this.email = email;
    this.fechaNacimiento = fechaNacimiento;

}

    setId (){

        this.id = id;

    }

    setNombre (){

        this.nombre = nombre;

    }

    setapellidos (){

        this.apellidos = apellidos;

    }

    setCelular (){

        this.celular = celular;

    }

    setEmail (){

        this.email = email;

    }

    setfechaNacimiento (){

        this.fechaNacimiento = fechaNaciminento;

    }

    getId (){

        return this.id;
    }

    getNombre (){

        return this.nombre;

    }

    getCelular (){

        return this.celular;

    }

    getEmail (){

        return this.email;

    }

    getFechaNacimiento (){

        return this.fechaNacimiento;

    }

}