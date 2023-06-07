class TiquetesOnli {

    constructor(sala, horario, ntiquetes, fpago, fventa) {

        this.sala = sala;
        this.horario = horario;
        this.ntiquetes = ntiquetes;
        this.fpago = fpago;
        this.fventa = fventa;

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

    setFventa(fventa) {

        this.fventa = fventa;
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

    getFventa() {

        return this.fventa;

    }
}