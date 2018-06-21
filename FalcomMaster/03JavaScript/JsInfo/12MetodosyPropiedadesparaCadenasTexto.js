var texto = "Carlos Arturo";
var nuevoTexto = texto.length;
//cuenta los caracteres incluye espacios en blanco

var nuevoTexto = texto.substring(7);
//permite cortar una cadena de texto

var nuevoTexto = texto.substr(0,6);
//con substr podemos cortar el texto pero esta recibe dos parametros
// en los cuales se indica el indice de inicio y cuantos caracteres substraer

var nuevoTexto = texto.indexOf("o");
//nos devuelve una letra en especifico

var nuevoTexto = texto.indexOf("o", 7);
//si se le pasa un segundo parametro este indica desde donde se desea que empiece a buscar

//tambien se puede pasar variables como indices ej:
/ar texto2= texto.indexOf("o")+1;
var nuevoTexto = texto.indexOf("o", texto2);

var nuevoTexto = texto.lastIndexOf("a");
//.lastIndexOf(); inicia la busqueda de atras hacia adelante

var nuevoTexto = texto.replace(texto, "Hola Mundo");
//.replace(); permite remplazar texto de la cadena 
//este metodo recibe dos parametros texto a modificar y texto a rremplazar

var nuevoTexto = texto.replace("Carlos", "Hola Mundo");
//este metodo recibe dos parametros texto a modificar y texto a rremplazar
//tambien se puede especificar un texto exacto.
//aqui remplazamos carlos por hola mundo

var nuevoTexto = texto.toUpperCase();
//convierte todo el texto a mayusculas

var nuevoTexto = texto.toLowerCase();
//convierte todo el texto a minusculas

document.write(nuevoTexto);