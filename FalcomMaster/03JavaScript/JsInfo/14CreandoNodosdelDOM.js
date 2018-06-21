/**
 Para agregar un elemento o un nodo al DOM se debe seguir lo siguente:
 1 - crear el elemento 
 2 - crear un nodo de texto
 3 - anadir el nodo de teto al elemento
 4 - agregar atributos al elemento
 5 -  agregar el elemento al documento
 */

var variablep = document.getElementsByTagName("p");
var segundoParrrafo = document.getElementById("segundo");

//1 - crear el elemento 
var elemento = document.createElement("h2");
//2 - crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular");
//3 - anadir el nodo de teto al elemento
elemento.appendChild(contenido);
//4 - agregar atributos al elemento
elemento.setAttribute("align", "center");
//5 -  agregar el elemento al documento
//document.getElementById("subtitulo").appendChild(elemento);
document.getElementsByTagName("div")[0].appendChild(elemento);

//para agregarlo al final del doc se puede hacer de la siguente forma
//document.body.appendChild(elemento);