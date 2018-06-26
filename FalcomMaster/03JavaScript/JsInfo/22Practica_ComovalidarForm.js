//var formulario = document.getElementsByName("formulario");
//aqui se esta trayendo todos los elementos por nombre
//para traer un elemento especifico se debe usar de la sig manera

(function () {//funcion auto-invocada

  //declaracion de variables
  var formulario = document.getElementsByName("formulario")[0],
      elementos = formulario.elements,
      boton = document.getElementById("btn");
  
  //validacion de caja de texto
  var validarNombre = function (e){
    if (formulario.nombre.value == 0) {
      alert("Complete el campo nombre");
      e.preventDefault();
    } else {
      
    }
  }

  //validacion de Radiobuttoms
  var validarRadio = function(e){
    if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
      
    }else{
      alert("Complete el campo Sexo");
      e.preventDefault(e);
    }
  }

  //validacion de checkbox
  var validarCheckbox = function(e){
    if(formulario.terminos.checked ==false){
      alert("Debe aceptar los terminos");
      e.preventDefault(e);
    }
  }

  //funcion que llama a las demas funciones
  var validar = function (e) {
    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
  }

  formulario.addEventListener("submit", validar);
}())