
class Sucursales{

    constructor(codigo,direccion,pais,departamento,gerente,salas,trabajadores,cafeteria){

        this.codigo = codigo;
        this.direccion = direccion;
        this.pais = pais;
        this.departamento = departamento;
        this.gerente = gerente;
        this.salas = salas;
        this.trabajadores = trabajadores;
        this.cafeteria = cafeteria;
    }


    setCodigo(codigo){
        this.codigo = codigo;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    setPais(pais){
        this.pais = pais;
    }

    setDepartamento(departamento){
        this.departamento = departamento;
    }

    setGerente(gerente){
        this.gerente = gerente;
    }

    setSalas(salas){
        this.salas = salas;
    }

    setTrabajadores(trabajadores){
        this.trabajadores = trabajadores;
    }

    setCafeteria(trabajadores){
        this.cafeteria = this.cafeteria;
    }



    getCodigo(){

        return this.codigo;
    }

    getDireccion(){

        return this.direccion;
    }

    getPais(){

        return this.pais;
    }

    getDepartamento(){

        return this.departamento;
    }

    getGerente(){

        return this.gerente;
    }

    getSalas(){

        return this.salas;
    }

    getTrabajadores(){

        return this.trabajadores;
    }

    getCafeteria(){

        return this.cafeteria;
    }
}
