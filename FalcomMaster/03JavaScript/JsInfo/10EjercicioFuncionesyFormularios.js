
var suma = function () {
  /*
  Con: document.getElementById(numero1).nodeValue();
  obtennemos desde el dom el valor del elemento con el nombre del 
  id relacionado al doc html.
  */
  var n1 = parseFloat(document.getElementById("numero1").value);
  var n2 = parseFloat(document.getElementById("numero2").value);
  //para convertir de string a entero se usa parse
  //parseFloat();
  //parseInt();
  
  var resultado = n1 + n2;
  return resultado;
}