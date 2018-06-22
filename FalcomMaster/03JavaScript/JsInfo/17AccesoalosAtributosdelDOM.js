//crear elemento
var elemento = document.createElement("div");

//creamos e identificamos el padre de los elementos
var padre = document.getElementById("contenedor");

//creamos la referencia para poder usar el .insertBefore();
var ref = document.getElementsByTagName("div")[1];

//modificamos el css del elemento con la propiedad .setAttribute();
elemento.setAttribute("class", "azul");

//mostramos y6 agregamos el elemento
//document.body.appendChild(elemento);

//agregamos el elemento dentro de los demas elementos con 
//.insertBefore(); no obstante este se va a colocar en la
//posicion indicada
padre.insertBefore(elemento, ref);

elemento.setAttribute("class", "rojo");
//.setAttribute(); sirve tanto para clases, ids
//nombre de atributos como size, entre otros

//se puede acceder directamente a los atributos de la siguente forma:
elemento.id = "verde";
elemento.className = "azul";

var enlace = document.getElementById("enlace");
/*
document.getElementById("enlace")
<a href=​"#" id=​"enlace">​Enlace con id​</a>​
document.getElementById("enlace").id
"enlace"
document.getElementById("enlace").href
"http://127.0.0.1:5500/FalcomMaster/03JavaScript/index.html#"
document.getElementById("enlace").href = "holaMundo.com"
"holaMundo.com"
document.getElementById("enlace").href
"http://127.0.0.1:5500/FalcomMaster/03JavaScript/holaMundo.com"
*/