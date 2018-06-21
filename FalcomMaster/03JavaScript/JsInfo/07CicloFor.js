//ciclo For
/**
 for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
 */

var user = 20; 
for ( i = 1; i <= user; i++) {
  document.write(i+"<br>");
}

 /**
 i++
 i+=2
 i--
 i-=2
 */
var user = 20; 
for ( i = 1; i <= user; i+= 2) {
  document.write(i+"<br>");
}

//Declarar un arreglo y mostrarlo
//recuerde el -1 para que no se salga del arreglo
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for ( i = 0; i <= dias.length -1; i++) {
  document.write(dias[i]+"<br>");
}