(function () {
  //var formulario = document.forms[0]; 
  //para acceder a los formularios
  //var formulario = document.forms[0].elements;
  //para acceder a los elementos del form

  //var formulario = document.formulario;
  //aqui se esta accediendo directamente al formulario por el atributo name
  //var form = document.formulario.nombre;
  //aqui esta accediendo directamente al elemento nombre del formulario por su atributo nombre

  document.formulario.nombre; //accede al elemneto nombre del form
  document.formulario.name; //accede pero al nombre del form
  document.formulario.type; //muestra el tipo de elemento que es

  document.formulario.nombre.type;
  document.formulario.nombre.value; 
  document.formulario.nombre.focus();
}())