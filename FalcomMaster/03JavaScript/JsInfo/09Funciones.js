//Estructura de las funciones
/**
 function name(params) {
  
}
 */
//No es necesario que el paso de parametros especifique el tipo del parametro
function saludo(nombre) {
  document.write("Hola "+nombre+" que tengas un buen dia.");
}

//Asi se llama a una funcion.
saludo("Arturo");

////////////////////////////////////
function Suma(num1, num2) {
  var numero1 = num1;
  var numero2 = num2;

  //no es recomandable, es mejor usar return para retornar valores
 //document.write(numero1+numero2);
 return numero1+numero2;
}

document.write(Suma(10,12));
////////////////////////////////////
//Se pueden guardar las funciones en variables como en este ejemplo:
var suma = function(num1, num2) {
  var numero1 = num1;
  var numero2 = num2;

  return numero1+numero2;
}
//Lo recomandable es que una funcion solo debe ejecutar una cosa

document.write(suma(10,12)+"<br>");
document.write(suma(43,65)+"<br>");

/////////////////////////////////////////////////////////////
var maximo = function (num1, num2) {
  var numero1 = num1;
  var numero2 = num2;

  if(num1>num2){
    return num1;
  }else{
    return num2
  }

  /**
   if(num1>num2){
    return num1;
  }
  return num2
   */
}
document.write("El valor mas alto es: "+maximo(50,29)+"<br>");