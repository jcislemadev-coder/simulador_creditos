
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;


  function guardarCliente(){
    let cmpcedula = document.getElementById("idCedula");
    let cedulatxt = cmpcedula.value;
    let cmpnombre = document.getElementById("idNombre");
    let nombretxt = cmpnombre.value;
    let cmpapellido = document.getElementById("idApellido");
    let apellidotxt = cmpapellido.value;
    let cmpIngresos = document.getElementById("idIngresos");
    let ingresostxt = cmpIngresos.value;
    let ingresos = parseFloat(ingresostxt);
    let cmpegresos = document.getElementById("idEgresos");
    let egresostxt = cmpegresos.value;
    let egresos = parseFloat(egresostxt);

    let cliente = {
        cedula: cedulatxt,
        nombre: nombretxt,
        apellido: apellidotxt,
        ingresos: ingresos,
        egresos: egresos,
      };
    clientes.push(cliente);
    pintarClientes();
    }


  function pintarClientes(){
    let cmptabla = document.getElementById("tablaClientes");
    let tabla = cmptabla.innerHTML;
      for(i=0; i < clientes.length; i++){
        tabla += "<tr><td>"+clientes[i].cedula+"</td>"+"<td>"+clientes[i].nombre+"</td>"+"<td>"+clientes[i].apellido+"</td>"+
"<td>"+clientes[i].ingresos+"</td>"+"<td>"+clientes[i].egresos+"</td><td><button>Actualizar<button>Eliminar"+"</tr>";
      }
      tabla +="</table>"
      cmptabla.innerHTML = tabla;
  }
  
  function ocultarSecciones(){
    let componente = document.getElementById("parametros");
    let parametrosr = componente.classList;
    parametrosr.remove("activa");

    let componenten = document.getElementById("clientes").classList.remove("activa");
  }

  function mostrarSeccion (id){
    ocultarSecciones();
    let componentem = document.getElementById(id).classList.add("activa");
  }

  function guardarTasa(){
    let cmptasa = document.getElementById("tasaInteres");
    let tasatxt = cmptasa.value;
    let tasa = parseInt(tasatxt);
    let cmpmsj = document.getElementById("mensajeTasa");
    if (tasa >= 10 && tasa<=20){
      cmpmsj.innerText ="Tasa configurada correctamente: "+ tasa +"%";
    } else{
      cmpmsj.innerText = "La tasa debe estar entre 10% y el 20%";
    }    
  }
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios