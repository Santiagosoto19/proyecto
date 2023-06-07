
function adicionarSucursal(){

    var sucursales = JSON.parse(localStorage.getItem("sucursales") || "[]");;

    codigoInput = document.getElementById("codigoSucursal");
    direccionInput = document.getElementById("direccionSucursal");
    paisCombo = document.getElementById("paisSucursal").value;
    departamentoCombo = document.getElementById("departementoSucursal").value;
    gerenteInput = document.getElementById("gerenteSucursal");
    salasInput = document.getElementById("salasSucursal");
    trabajadoresInput = document.getElementById("trabajadoresSucursal");
    cafeteriaCombo = document.getElementById("cafeteria").value;

    sucursal = new Sucursales(codigoInput.value,direccionInput.value,paisCombo,departamentoCombo,gerenteInput.value,salasInput.value,trabajadoresInput.value,cafeteriaCombo);
    sucursales.push(sucursal);
    localStorage.setItem("sucursales", JSON.stringify(sucursales));

    codigoInput.value = "";
    direccionInput.value = "";
    paisCombo = "";
    departamentoCombo = "";
    gerenteInput.value = "";
    salasInput.value = "";
    trabajadoresInput = "";
    cafeteriaCombo = "";


}

function agregar_lista_celulares(){

    var celulares = document.getElementById("celularesProductora").value;

    var li_celular = document.createElement("li");
    var texto_celular = document.createTextNode(celulares)
    li_celular.appendChild(texto_celular);

    var lista_celulares = document.getElementById("lista_celulares");
    lista_celulares.appendChild(li_celular);


}

function agregar_lista_telefonos(){

    var telefonos = document.getElementById("telefonosProductora").value;

    var li_telefono = document.createElement("li");
    var texto_telefono = document.createTextNode(telefonos)
    li_telefono.appendChild(texto_telefono);

    var lista_telefono = document.getElementById("lista_telefono");
    lista_telefono.appendChild(li_telefono);

}

function adicionarProductora(){

    var productoras = JSON.parse(localStorage.getItem("productoras") || "[]");;

    codigoInput = document.getElementById("codigoProductoras");
    nombreInput = document.getElementById("nombreProductora");
    paisCombo = document.getElementById("paisProductora").value;
    lista_celulares = document.getElementById("lista_celulares");
    lista_telefono = document.getElementById("lista_telefono");

    productora = new Productoras(codigoInput.value,nombreInput.value,paisCombo,lista_celulares.value,lista_telefono.value);
    productoras.push(productora);
    localStorage.setItem("productoras", JSON.stringify(productoras));

    codigoInput.value = "";
    nombreInput = "";
    paisCombo = "";
    lista_celulares = "";
    lista_telefono = "";


}

function acceder(){

    usuarioInput = document.getElementById("usuario");
    contrasenaInput = document.getElementById("contrasena");

    valorUsuario = usuarioInput.value;
    valorCotrasenia = contrasenaInput.value;

    var clientes_registrados = JSON.parse(localStorage.getItem("clientes") || "[]");
    var usuarios_registrados = JSON.parse(localStorage.getItem("usuarios") || "[]");

    for(const elemento of clientes_registrados){

        if(elemento.usuario == valorUsuario && elemento.contraseña == valorCotrasenia){

            window.location.href = "gestion_tiquetesonline.html";
            break;
        
        }
    
    }
        
            

            for(const elemento_usuario of usuarios_registrados){

                if(elemento_usuario.usuario == valorUsuario && elemento_usuario.contraseña == valorCotrasenia){
                    
                    if(elemento_usuario.rol == "cliente")
                        window.location.href = "gestion_tiquetesonline.html";
                     else
                        if(elemento_usuario.rol == "gerente")
                            window.location.href = "pagina_gerente.html";

                     else
                        if(elemento_usuario.rol == "vendedor")
                            window.location.href = "pagina_vendedor.html";
                     else

                        if(elemento_usuario.rol == "administrador")
                            window.location.href = "pagina_administrador.html";
                    
                
            
        
                 }
            }

        
    
}
