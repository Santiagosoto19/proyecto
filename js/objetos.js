/**
 * En esta archivo se mantedran los arrays de todos los objetos creados.
 * Ademas existen funciones para agregar objetos al array
 */

function adicionarEmpleado() {

  var empleados = JSON.parse(localStorage.getItem("empleados") || "[]");;

  cedulaInput = document.getElementById("cedulaEmpleado");
  nombreInput = document.getElementById("nombreEmpleado");

  empleado = new Empleado(cedulaInput.value, nombreInput.value);
  empleados.push(empleado);
  localStorage.setItem("empleados", JSON.stringify(empleados));

  cedulaInput.value = "";
  nombreInput.value = "";

  cedulaInput.focus();

}

function adicionarCliente() {

  var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

  usuarioInput = document.getElementById("nombreCliente");
  contraseñaInput = document.getElementById("contraseñaCliente");

  cliente = new Cliente(usuarioInput.value, contraseñaInput.value);
  cliente.rol = "cliente";
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  usuarioInput.value = "";
  contraseñaInput.value = "";
 
  usuarioInput.focus();

}

function adicionarTiquetesOnline() {

  var tiquetesonline = JSON.parse(localStorage.getItem("tiquetesonline") || "[]");;

  salaInput = document.getElementById("sala");
  horarioInput = document.getElementById("horario");
  numTiquetesInput = document.getElementById("numTiquetes");
  formaPagoInput = document.getElementById("formaPago");
  fechaVentaInput = document.getElementById("fechaVenta");

  tiquetesonli = new TiquetesOnli(salaInput.value, horarioInput.value, numTiquetesInput.value, formaPagoInput.value, fechaVentaInput.value);
  tiquetesonline.push(tiquetesonli);
  localStorage.setItem("tiquetesonline", JSON.stringify(tiquetesonline));

  sala.value = "";
  horario.value = "";
  numTiquetesInput.value = "";
  formaPago.value = "";
  fechaVentaInput.value = "";

  salaInput.focus();

}

function adicionarTiquetes() {

  var tiquetes = JSON.parse(localStorage.getItem("tiquetes") || "[]");;

  salaInput = document.getElementById("sala");
  horarioInput = document.getElementById("horario");
  numTiquetesInput = document.getElementById("numTiquetes");
  formaPagoInput = document.getElementById("formaPago");
  clienteInput = document.getElementById("cliente");
  fechaVentaInput = document.getElementById("fechaVenta");
  vendedorInput = document.getElementById("vendedor");

  tiqueteP = new TiqueteP(salaInput.value, horarioInput.value, numTiquetesInput.value, formaPagoInput.value, clienteInput.value, fechaVentaInput.value, vendedorInput.value);
  tiquetes.push(tiqueteP);
  localStorage.setItem("tiquetes", JSON.stringify(tiquetes));

  sala.value = "";
  horario.value = "";
  numTiquetesInput.value = "";
  formaPago.value = "";
  //cliente.value = "";
  fechaVentaInput.value = "";
  //vendedor.value = "";

  salaInput.focus();

}

function gestionarPelicula() {

  var peliculas = JSON.parse(localStorage.getItem("peliculas") || "[]");;

  codigoInput = document.getElementById("codigo");
  nombreOriInput = document.getElementById("nombreOriginal");
  nombreAsiInput = document.getElementById("nombreAsignado");
  generoInput = document.getElementById("genero");
  idiomaOriInput = document.getElementById("idiomaOriginal");
  IdiomasDisInput = document.getElementById("idiomasDisponibles");
  subtitulosDisInput = document.getElementById("subtitulosDisponibles");
  horasInput = document.getElementById("horas");
  minutosInput = document.getElementById("minutos");
  segundosInput = document.getElementById("segundos");
  actoresPriInput = document.getElementById("actoresPrincipales");
  actoresSecInput = document.getElementById("actoresSecundarios");
  numeroAfiInput = document.getElementById("numeroAfiches");
  numeroCopInput = document.getElementById("numeroCopias");
  productoraInput = document.getElementById("productora");

  gestionpeli = new GestionPeli(codigoInput.value, nombreOriInput.value, nombreAsiInput.value, generoInput.value, idiomaOriInput.value, IdiomasDisInput.value, subtitulosDisInput.value, horasInput.value, minutosInput.value, segundosInput.value, actoresPriInput.value,actoresSecInput.value, numeroAfiInput.value, numeroCopInput.value, productoraInput.value);
  peliculas.push(gestionpeli);
  localStorage.setItem("peliculas", JSON.stringify(peliculas));

  codigoInput.value = "";
  nombreOriInput.value = "";
  nombreAsiInput.value = "";
  generoInput.value = "";
  idiomaOriInput.value = "";
  IdiomasDisInput.value = "";
  subtitulosDisInput.value = "";
  horasInput.value = "";
  minutosInput.value = "";
  segundosInput.value = "";
  actoresPriInput.value = "";
  actoresSecInput.vale = "";
  numeroAfiInput.value = "";
  numeroCopInput.value = "";
  productoraInput.value = "";

  codigoInput.focus();

}

