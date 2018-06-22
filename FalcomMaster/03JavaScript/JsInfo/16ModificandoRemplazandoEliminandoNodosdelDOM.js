var elemento = document.createElement("li"),
    nodotexto = document.createTextNode("nuevo texto <i>agregado<i>");

elemento.appendChild(nodotexto);

var pimerElemento = document.getElementsByTagName("li")[0];
var pimerElemento = document.getElementById("primero");

pimerElemento.innerHTML = "nuevo texto <i class='foo'>Agregado<i>"; 
//modifica el elemento de forma directa, con innetHtml se puede acceder a 
//todo el codigo html, tambien reconoce las etiquetas html

pimerElemento.textContent = "nuevo texto <i class='foo'>Agregado<i>";
//ejecuta el contenido en modo texto o sea ejecuta texto plano.
//.textContent es mucho mas seguro a la hora de trabajar con formularios

//Modificar elementos del DOM
var padre = document.getElementsByTagName("li")[0].parentNode,
    referencia = document.getElementsByTagName("li")[0];
padre.replaceChild(elemento, referencia);
//recibe dos parametros, el primero el que quiero agregar y el segundo el que se quiere eliminar

//Eliminar elementos del DOM
var padre = document.getElementsByTagName("li")[0].parentNode,
    referencia = document.getElementsByTagName("li")[1];
padre.removeChild(referencia);