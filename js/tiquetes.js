class TiqueteP {

    constructor(sala, horario, ntiquetes, fpago, cliente, fventa, vendedor) {

        this.sala = sala;
        this.horario = horario;
        this.ntiquetes = ntiquetes;
        this.fpago = fpago;
        this.cliente = cliente;
        this.fventa = fventa;
        this.vendedor = vendedor;

    }

    setSala(sala) {

        this.sala = sala;
    }

    setHorario(horario) {

        this.horario = horario;
    }

    setNtiquetes(ntiquetes) {

        this.ntiquetes = ntiquetes;
    }

    setFpago(fpago) {

        this.fpago = fpago;
    }

    setCliente(cliente) {

        this.cliente = cliente;
    }

    setFventa(fventa) {

        this.fventa = fventa;
    }

    setVendedor(vendedor) {

        this.vendedor = vendedor;
    }

    getSala() {

        return this.sala;

    }

    getHorario() {

        return this.horario;

    }

    getNtiquetes() {

        return this.ntiquetes;
        
    }

    getFpago() {

        return this.fpago;

    }

    getCliente() {

        return this.cliente;

    }

    getFventa() {

        return this.fventa;

    }

    getVendedor() {

        return this.vendedor;

    }
}