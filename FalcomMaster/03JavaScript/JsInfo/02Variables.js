//declaracion e iniciacion de variable
var nombre = "Carlos";
alert(nombre);


//declaracion de variables
var nombre;
var edad;


nombre = prompt("Ingresa tu nombre");
edad = prompt("Ingresa tu edad");
//nombre = prompt("Ingresa tu nombre", "valor");
/*funcion prompt permite almacer un texto y un valor  */
alert("Hola "+nombre+" como estas?\nTu edad es:"+edad);
/*
Otro metodo de escribir es:
document.write();
Pero este metodo escribe directamente en el documento y no en una ventana de alerta.
*/
document.write("Hola "+nombre+" como estas?<br>Tu edad es: "+edad);

/*Console.log permite escribir en la consola del archivo web 
este unicamente se ve inspeccionando el elemento en la pestana conole*/
console.log("Hola "+nombre+" como estas?\nTu edad es:"+edad);