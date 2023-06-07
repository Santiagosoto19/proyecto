/**
 * Para organizar mejor el proyecto coloque en archivos diferentes
 * cada clase. Si desea puede colocar en un solo archivo todas las
 * clases.
 */


class Cliente {

    constructor(usuario, contraseña) {

        this.usuario = usuario;
        this.contraseña = contraseña;
        this.rol = "cliente";

    }

    setUsuario(usuario) {

        this.usuario = usuario;
    }

    setContraseña(contraseña) {

        this.contraseña = contraseña;
    }

    setRol(rol) {

        this.rol = rol;
    }

    getContraseña() {

        return this.contraseña;

    }

    getUsuario() {

        return this.usuario;
        
    }

    getRol() {

        return this.rol;
        
    }
}   