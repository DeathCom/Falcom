
//Global
/**Son las que se pueden acceder desde cualquier parte del codigo*/
//Local
/**Variables locales solo pueden ser accedidas desde su propia funcion o desde funciones anidadas */

var varGlobal = "Esta es Global";


var myfuncion = function () {

  var varLocal = "Esta es Local";
  //si se e quita el var automaticamente se convierte en Global
  alert(varGlobal);
  varGlobal = "Esta es global, Modificada";
  alert(varLocal);

  var funcionLocal = function () {
     var varLocal = "Local dentro de funcion local";
     alert(varLocal);
  }
  funcionLocal();

  alert(varGlobal);
}

/**
 * las variables se pueden buscar desde adentro hacia afuera pero
 * no desde afuera hacia adentro
 */

myfuncion();

////////////////////////////////////////////////////////////////////////////////////
//Creando funcion auto-invocada
//  (function(){}())

(function(){
  var varGlobal = "Esta es Global";
  var myfuncion = function () {

    var varLocal = "Esta es Local";

    alert(varGlobal);
    varGlobal = "Esta es global, Modificada";
    alert(varLocal);

    var funcionLocal = function () {
      var varLocal = "Local dentro de funcion local";
      alert(varLocal);
    }
    funcionLocal();

    alert(varGlobal);
  }
  myfuncion();
}())
/**
Todo o que este dentro de este codigo va a estar protegido
o sea todo lo que este fuera no va a poder acceder a lo que este dentro de este codigo.
*/