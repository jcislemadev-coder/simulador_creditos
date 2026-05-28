
  let clientes = [
    {
      cedula:1712345678,
      nombre:"Juan",
      apellido:"Pérez",
      ingresos:1200 ,
      egresos:500,
    },
    {cedula:1723456789,
      nombre:"María",
      apellido:"Gómez",
      ingresos:1500,
      egresos:600
    },
    {
      cedula:1734567890,
      nombre:"Carlos",
      apellido:"Ramírez",
      ingresos:900,
      egresos:350,
    },
   ];
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
    let ingresos = parseFloat(cmpIngresos.value);

    let cmpegresos = document.getElementById("idEgresos");
    let egresos = parseFloat(cmpegresos.value);

    clienteSeleccionado = buscarCliente();

    if(clienteSeleccionado != null){

        clienteSeleccionado.nombre = nombretxt;
        clienteSeleccionado.apellido = apellidotxt;
        clienteSeleccionado.ingresos = ingresos;
        clienteSeleccionado.egresos = egresos;

        alert("Cliente actualizado");

    }else{

        let cliente = {

            cedula: cedulatxt,
            nombre: nombretxt,
            apellido: apellidotxt,
            ingresos: ingresos,
            egresos: egresos

        };

        clientes.push(cliente);

        alert("Cliente creado");
    }

    pintarClientes();
}

  function pintarClientes(){
    let cmptabla = document.getElementById("tablaClientes");
    let tabla = "";
      for(i=0; i < clientes.length; i++){
        tabla += "<tr><td>"+clientes[i].cedula+"</td>"+"<td>"+clientes[i].nombre+"</td>"+"<td>"+clientes[i].apellido+"</td>"+
"<td>"+clientes[i].ingresos+"</td>"+"<td>"+clientes[i].egresos+"</td><td><button onclick='seleccionarCliente()'>Actualizar<button>Eliminar"+"</tr>";
      }
      tabla +="</table>"
      cmptabla.innerHTML = tabla;
  }

   function buscarCliente(){
    let cmpcedulaBuscada = document.getElementById("idCedula");
    let cedulaBTxt = cmpcedulaBuscada.value;
    for(let i=0; i < clientes.length; i++){
      if(cedulaBTxt == clientes[i].cedula){
        clienteSeleccionado = clientes[i];
        return clienteSeleccionado;
      }
    } 
    return null;
  } 

  function buscarClienteBoton(){

    clienteSeleccionado = buscarCliente();

    if(clienteSeleccionado != null){

        alert("Cliente encontrado");

    }else{

        alert("Cliente no encontrado");

    }
}

  function limpiar(){
    let cmpcedula = document.getElementById("idCedula");
    cmpcedula.value ="";
    let cmpnombre = document.getElementById("idNombre");
    cmpnombre.value ="";
    let cmpapellido = document.getElementById("idApellido");
    cmpapellido.value ="";
    let cmpIngresos = document.getElementById("idIngresos");
    cmpIngresos.value ="";
    let cmpegresos = document.getElementById("idEgresos");
    cmpegresos.value="";
  }

  function seleccionarCliente(){
    let cmpcedulaBuscada = document.getElementById("idCedula");
    let cedulaBTxt = cmpcedulaBuscada.value;
    let encontrado = false;

    let cmpnombre = document.getElementById("idNombre");
    let cmpapellido = document.getElementById("idApellido");
    let cmpIngresos = document.getElementById("idIngresos");
    let cmpegresos = document.getElementById("idEgresos");
    
    for(let i=0; i < clientes.length; i++){
      if(cedulaBTxt == clientes[i].cedula){
        encontrado = true;
        clienteSeleccionado = clientes[i];
        break
      }
    } if (encontrado == true){
        cmpnombre.value = clienteSeleccionado.nombre;
        cmpapellido.value = clienteSeleccionado.apellido;
        cmpIngresos.value = clienteSeleccionado.ingresos;
        cmpegresos.value = clienteSeleccionado.egresos;
        alert("cliente encontrado");
      } else{
        alert ("cliente no encontrado");
      }
  }

  function ocultarSecciones(){
    let componente = document.getElementById("parametros");
    let parametrosr = componente.classList;
    parametrosr.remove("activa");

    let componenten = document.getElementById("clientes").classList.remove("activa");
    
    let componentec = document.getElementById("creditos").classList.remove("activa");
  }

  function mostrarSeccion (id){
    ocultarSecciones();
    let componentem = document.getElementById(id).classList.add("activa");
    pintarClientes();
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


let capacidad = 0;

  function buscarClienteCredito(){
    let cmpcedulas = document.getElementById("buscarCedulaCredito");
    let cedulac = cmpcedulas.value;

    clienteSeleccionado = null;
    
    for (let i=0 ; i<clientes.length ; i++){
      if((cedulac == clientes[i].cedula)){
        clienteSeleccionado = clientes[i];
        break;
      }
    }
       
    if(clienteSeleccionado != null){
        alert("Cliente encontrado");
        datosClienteCredito.innerHTML = "<h3>Datos del Cliente </h3><p><strong>Cédula: </strong>"+clienteSeleccionado.cedula+"</p>"+
        "<p><strong>Nombre: </strong>"+clienteSeleccionado.nombre+"</p>"+
        "<p><strong>Apellido: </strong>"+clienteSeleccionado.apellido+"</p>"+
        "<p><strong>Ingresos: </strong>"+clienteSeleccionado.ingresos+"</p>"+
        "<p><strong>Egresos: </strong>"+clienteSeleccionado.egresos+"</p>";
        let ingresos = parseFloat(clienteSeleccionado.ingresos);
        let egresos = parseFloat(clienteSeleccionado.egresos);
        capacidad = ((ingresos - egresos)*0.50);
      }else{

        alert("Cliente no encontrado");

    }
  }

      function calcularCredito(){
      let cmpmonto = parseFloat(document.getElementById("montoCredito").value);
      let cmpplazo = parseFloat(document.getElementById("plazoCredito").value);
      let cmpinteres = parseFloat(document.getElementById("interes").value);
      let totalp = ((cmpmonto * cmpplazo * cmpinteres)/100)+cmpmonto;
      let cuotamensual = totalp/(cmpplazo*12);
      
      resultadoc = "";
     
      if(capacidad>=cuotamensual){
        resultadoc = "Aprobado";
        resultadoCredito.className = "aprobado";
      }else{
        resultadoc = "Rechazado";
        resultadoCredito.className = "rechazado";
      }


      resultadoCredito.innerHTML="<p><strong>Capacidad de pago: "+capacidad+"</strong></p>"+
      "<p><strong>Total a pagar: "+totalp+"</strong></p>"+
      "<p><strong>Cuota mensual: "+cuotamensual+"</strong></p>"+
      "<p><strong>Resultado: "+ resultadoc+"</strong></p>";

      }

//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios