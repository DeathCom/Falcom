/**
 * tipos de Datos en JavaScript:
 * numerico (int -float)
 * String = cadena de texto
 * Array = arreglo
 * Object = objeto
 * Boolean - boleano
 * Undefined : es cuando nunca fue inicializada lavariable
 * Null : se usa para establecer la variable a ningun valor
 * NaN : es un valor invalido
 */

 //Numero:
 var numero = 19.34;
 var numero2 = 34;
 document.write(numero + "<br>"+ numero2+"<br>");

 //String:
 var nombre = "Julio";
 var apellido = "Esparza";
 var texto = "los mejores videos estan en \"Mi pagina\"";
 document.write(nombre + " "+ apellido +texto+"<br>");

 //Array:
var amigos = ["Carlos", "Alejandro", "Cesar", 34, true];
document.write(amigos+"<br>");
document.write(amigos[0]+"<br>"+amigos[1]+"<br>"+amigos[2]+"<br>");
document.write(amigos[0]+" "+amigos[1]+" "+amigos[2]+"<br>");

//Objetos:
var objeto = {
  color: "black",
  size:12
}

//Boolean:
var v = true;
var f = false;

//Undefined 
var falcoM;

//null
var num=10;
num = null;

//NaN
var text = "hola, hola";
document.write(text *2+"<br>");