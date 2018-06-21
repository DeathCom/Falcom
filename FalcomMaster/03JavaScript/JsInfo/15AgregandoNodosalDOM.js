
var elemento = document.createElement("li"),
    nodotexto = document.createTextNode("nuevo texto");

elemento.appendChild(nodotexto);

//una vez creado el elemento y este lleno con la cadena de texto procedemos a:
//elementoPadre..appendChild(elementoHijo);

//var padre = document.getElementById("lista");
//padre.appendChild(elemento);

var padre = document.getElementsByTagName("li")[0].parentNode,
    hijo = document.getElementsByTagName("li")[0];
//aqui estamos trayendo todos los elementos li, en este caso el elemento 0 del arreglo
//luego de ello le decimos que quereos saber cual es el padre de este con .parentNode;
//entonces .parentNode; nos devuelve el elemento padre del elemento li
padre.appendChild(elemento);

/*
Esta ultima forma es bien utilizada cuando no conocemos o no podemos agregar un id al elemento 
padre entonces podemos utilizar esta forma para interactuar con el padre y poder agregar el nodo
al dom.
*/

//lo anterior para agregar el nodo al final 
//a continuacion el metodo para agregar el nodo al inicio

padre.insertBefore(elemento, hijo);
//Este recibe dos parametros: 1. el nuevo elemento y 2. el nodo de referencia
//en este caso sera el primer elemento.