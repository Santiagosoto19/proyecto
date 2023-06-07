function adicionarCartelera() {

  var carteleras = JSON.parse(localStorage.getItem("carteleras") || "[]");;

  salaInput = document.getElementById("salaCartelera");
  horarioInput = document.getElementById("horarioCartelera");
  peliculaInput = document.getElementById("peliculaCartelera");
  fechaDeInicioInput = document.getElementById("fdiCartelera");
  fechaDeFinalizacionInput = document.getElementById("fdfCartelera");

  cartelera = new Carteleras(salaInput.value, horarioInput.value,peliculaInput.value,fechaDeInicioInput.value,fechaDeFinalizacionInput.value);
  carteleras.push(cartelera);
  localStorage.setItem("carteleras", JSON.stringify(carteleras));

  salaInput.value = "";
  horarioInput.value = "";
  peliculaInput.value = "";
  fechaDeInicioInput.value = "";
  fechaDeFinalizacionInput.value = "";  

}

function adicionarClientes(){

  var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

  idInput = document.getElementById("id");
  nombreInput = document.getElementById("nombre");
  apellidosInput = document.getElementById("apellidos");
  celularInput = document.getElementById("celular");
  emailInput = document.getElementById("email");
  fechaNacimientoInput = document.getElementById("fdn");

  cliente = new Clientes (idInput.value, nombreInput.value, apellidosInput.value, celularInput.value, emailInput.value, fechaNacimientoInput.value );
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  idInput.value = "";
  nombreInput.value = "";
  apellidosInput.value = "";
  celularInput.value = "";
  emailInput.value = "";
  fechaNacimientoInput.value = "";

}

function adicionarUsuario (){

  var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  usuarioInput = document.getElementById("usuario");
  contraseñaInput = document.getElementById("contraseña");
  rolInput = document.getElementById("rol");

  usuario = new Usuarios (usuarioInput.value, contraseñaInput.value, rolInput.value);
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  usuarioInput = "";
  contraseñaInput = "";
  rolInput.value = "";

}

function adicionarCompra (){

  var compras = JSON.parse(localStorage.getItem("compras") || "[]");

  numeroInput = document.getElementById("numero");
  sucursalInput = document.getElementById("sucursal");
  peliculasInput = document.getElementById("peliculas");
  cantidadesInput = document.getElementById("cantidades");
  subtotalInput = document.getElementById("subtotal");
  totalInput = document.getElementById("total");
  fechaInput = document.getElementById("fecha");
  precioInput = document.getElementById("precio");

  compra = new Compras (numeroInput.value, sucursalInput.value, peliculasInput.value, cantidadesInput.value, subtotalInput.value, totalInput.value, fechaInput.value, precioInput.value);
  compras.push(compra);
  localStorage.setItem("compras", JSON.stringify(compras));

  numeroInput = "";
  sucursalInput = "";
  peliculasInput = "";
  cantidadesInput = "";
  subtotalInput = "";
  totalInput = "";
  fechaInput = "";
  precioInput = "";

}

function agregarPeliculas(){

  nombrep = document.getElementById("nombrep").value
  preciop = document.getElementById("preciop").value

  table = document.getElementById("tabla");
  newRow = table.insertRow();
  cell1 = newRow.insertCell(0);
  cell2 = newRow.insertCell(1);

  cell1.innerHTML = nombrep;
  cell2.innerHTML = preciop;

  document.getElementById("nombrep").value = "";
  document.getElementById("preciop").value = "";

}