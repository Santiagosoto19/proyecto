

class Productoras{

    constructor(codigo,nombre,pais,lista_telefonos,lista_celulares){

        this.codigo = codigo;
        this.pais = pais;
        this.nombre = nombre;
        this.lista_celulares = lista_celulares;
        this.lista_telefonos = lista_telefonos;

    }

    setCodigo(codigo){

        this.codigo = codigo;
    }

    setPais(pais){

        this.pais = pais;
    }

    setNombre(nombre){

        this.nombre = nombre;
    }

    setLista_celulares(lista_celulares){

        this.lista_celulares = lista_celulares;
    }

    setLista_telefonos(lista_telefono){

        this.lista_telefonos = lista_telefono;
    }

    getCodigo(){

        return this.codigo;
    }

    getPais(){

        return this.pais;
    }

    getNombre(){

        return this.nombre;
    }

    getLista_celulares(){

        return this.lista_celulares;
    }

    getLista_telefonos(){

        return this.lista_telefonos;
    }


}