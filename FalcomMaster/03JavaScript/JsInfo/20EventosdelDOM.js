//funcion auto invocada
/**
 hay tres tipos de modelos de eventos:
 basico  standard   IE
 */
(function () {

  var saludo = function () {
    alert("Hola como va todo");
  }

  var text = function () {
    console.log("Focus !");
  }

  var boton = document.getElementById("boton");
  
  //agregando evento al boton
  boton.addEventListener("click", saludo);
  //.addEventListener recibe dos parametros.
  //uno es el tipo de evento que queremos pasar y 
  //el Listener que se puede agregar lo que se desea ejecutar ejemplo funciones.
  //puede ser una funcion anonima o el nombre de una funcion
  //la funcion anonima no es recomandable, es mejor llamar una funcion
  //al pasarle el nombre de la funcion no se usan ()

  //https://www.w3schools.com/jsref/dom_obj_event.asp

  var input = document.getElementById("input");
  input.addEventListener("focus", text);
  //blur es lo contrario a focus o sea cuando salimos 
  //change se ejecuta al ocurrir algun cambio en el elemento y se sale de el 


  //para remover un evento se utiliza .removeEventListener(): que recibe los mismos parametros que 
  //.addEventListener();
  boton.removeEventListener("click", saludo);

  //para conocer el tipo de evento que se esta ejecutando
  var texttipo = function (e) {
    console.log("Este evento es de tipo " + e.type);
  }
  input.addEventListener("focus", texttipo);

  //para conocer el objetivo que se esta accediendo 
  var texttipo = function (e) {
    console.log("Este objetivo es de tipo " + e.target);
  }
  input.addEventListener("focus", texttipo);

  //para prevenir el comportamiento por default de los elementos:
  var falcon = function(e) {
    alert("Hola como va todo en FALCON");
    e.preventDefault();
  }

  var boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", falcon);

}())