
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

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