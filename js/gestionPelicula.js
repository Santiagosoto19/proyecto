class GestionPeli {

    constructor(codigo, nombreO, nombreA, genero, idiomaO, idiomasD, suptitulosD, horas, minutos, segundos, actoresP, actoresS, nAfiches, nCopias, productora) {

        this.codigo = codigo;
        this.nombreO = nombreO;
        this.nombreA = nombreA;
        this.genero = genero;
        this.idiomaO = idiomaO;
        this.idiomasD = idiomasD;
        this.suptitulosD = suptitulosD;
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        this.actoresP = actoresP;
        this.actoresS = actoresS;
        this.nAfiches = nAfiches;
        this.nCopias = nCopias;
        this.productora = productora;

    }

    setCodigo(codigo) {

        this.codigo = codigo;
    }

    setNombreO(nombreO) {

        this.nombreO = nombreO;
    }

    setNombreA(nombreA) {

        this.nombreA = nombreA;
    }

    setGenero(genero) {

        this.genero = genero;
    }

    setIdiomaO(idiomaO) {

        this.idiomaO = idiomaO;
    }

    setFventa(idiomasD) {

        this.idiomasD = idiomasD;
    }

    setSuptituloD(suptitulosD) {

        this.suptitulosD = suptitulosD;
    }

    setHoras(horas) {

        this.horas = horas;
    }

    setMinutos(minutos) {

        this.minutos = minutos;
    }

    setSegundos(segundos) {

        this.segundos = segundos;
    }

    setActoresP(actoresP) {

        this.actoresP = actoresP;
    }

    setActoresS(actoresS) {

        this.actoresS = actoresS;
    }

    setNAfiches(nAfiches) {

        this.nAfiches = nAfiches;
    }

    setNCopias(nCopias) {

        this.nCopias = nCopias;
    }

    setProductora(productora) {

        this.productora = productora;
    }

    getCodigo() {

        return this.codigo;

    }

    getNombreO() {

        return this.nombreO;

    }

    getNombreA() {

        return this.nombreA;
        
    }

    getGenero() {

        return this.genero;

    }

    getIdiomaO() {

        return this.idiomaO;

    }

    getIdiomaD() {

        return this.idiomasD;

    }

    getSuptitulosD() {

        return this.suptitulosD;

    }

    getHoras() {

        return this.horas;

    }

    getMinutos() {

        return this.minutos;

    }

    getSegundos() {

        return this.segundos;

    }

    getActoresP() {

        return this.actoresP;

    }

    getActoresS() {

        return this.actoresS;

    }

    getNAfiches() {

        return this.nAfiches;

    }

    getNCopias() {

        return this.nCopias;

    }

    getProductora() {

        return this.productora;

    }
}