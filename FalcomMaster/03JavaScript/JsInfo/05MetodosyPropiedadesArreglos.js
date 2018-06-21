var amigos = ["Carlos", "Alejandro", "Cesar"];
var amigos2 = ["Julio", "Josue", "Gorge"];

//para saber la longitud de un arreglo
var longitud = amigos.length;
document.write("La longitud del arreglo amigos "+longitud+"<br>");

//para acceder al ultimo elemento se debe usar la forma:
//amigos[amigos.length]
amigos[amigos.length] = "Marco";
document.write("La longitud del arreglo amigos "+amigos.length+"<br>");

//se puede hacer de otra forma mas util, se utiliza push para agregar
//elementos al final de un arreglo
amigos.push("Luis", "Fernando", "Oscar");
document.write("La longitud del arreglo amigos "+amigos.length+"<br>");
document.write(amigos+"<br>");

/**para eliminar el ultimo elemento de un array se utiliza: */
amigos.pop();
document.write("La longitud del arreglo amigos "+amigos.length+"<br>");
document.write(amigos+"<br>");

//para unir los arreglos se debe hacer de la siguente forma:
var amigos3 = amigos.concat(amigos2);
document.write("La longitud del arreglo amigos 3 es igual a "+amigos3.length+"<br>");
document.write(amigos3+"<br>");

//amigos.join(" : "); se utiliza para crear un separador en el array
document.write(amigos3.join(" : ")+"<br>");

//para ordenar un array se utiliza .sort();
var ordenado = amigos3.sort();
document.write(ordenado+"<br>");

//para ordenar un array al inverseo se utiliza reverse();
var reves = amigos3.reverse();
document.write(reves+"<br>");