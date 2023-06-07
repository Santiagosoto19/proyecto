class Usuarios {

    constructor(usuario, contraseña, rol){

        this.usuario = usuario;
        this.contraseña = contraseña;
        this.rol = rol;

    }

    setUsuario (){

        this.usuario = usuario;

    }

    setContraseña (){

        this.contraseña = contraseña;

    }

    setRol (){

        this.rol = rol;

    }

    getUsuario (){

        return this.usuario;

    }

    getContraseña (){

        return this.contraseña;

    }

    getRol (){

        return this.rol;

    }
}