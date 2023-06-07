class Compras {

    constructor(numero, sucursal, peliculas, cantidades, subtotal, total, fecha, precio){

        this.numero = numero;
        this.sucursal = sucursal;
        this.peliculas = peliculas;
        this.cantidades = cantidades;
        this.subtotal = subtotal; 
        this.total = total;
        this.fecha = fecha;
        this.precio = precio;

    }

    setNumero(){

        this.numero = numero;

    }

    setSucursal(){

        this.sucursal = sucursal;

    }

    setPeliculas(){

        this.peliculas = peliculas;

    }

    setCantidades(){

        this.cantidades = cantidades;

    }

    setSubtotal(){

        this.subtotal = subtotal;

    }

    setTotal(){

        this.total = total;

    }

    setFecha(){

        this.fecha = fecha;

    }

    setPrecio(){

        this.precio = precio;

    }

    getNumero(){

        return this.numero;

    }

    getSucursal(){

        return this.sucursal;
    
    }
    
    getPeliculas(){
    
        return this.peliculas;
    
    }
    
    getCantidades(){
    
        return this.cantidades;
    
    }
    
    getSubtotal(){
    
        return this.subtotal;
    
    }
    
    getTotal(){
    
        return this.total;
    
    }
    
    getFecha(){
    
        return this.fecha;
    
    }
    
    getPrecio(){
    
        return this.precio;
    
    }

}