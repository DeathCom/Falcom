
var variablep = document.getElementsByTagName("p");
//para trabajar con el nombre de las etiquetas

var segundoParrrafo = document.getElementById("segundo");
//para trabajar con el nid de las etiquetas


/**
 * En consola:
 * 
 variablep
HTMLCollection [ <p>, <p#segundo>, <p> ]
variablep[1]
<p id="segundo">
variablep[1].inner
undefined
variablep[1].innerHTML
"
    2.-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nemo quidem harum voluptas ipsa? Illum delectus cupiditate animi ducimus eum nam aliquid laborum maiores cumque, soluta ab quam aut vitae!

 segundoParrrafo
<p id="segundo">
segundoParrrafo.innerHTML
"
    2.-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nemo quidem harum voluptas ipsa? Illum delectus cupiditate animi ducimus eum nam aliquid laborum maiores cumque, soluta ab quam aut vitae!
  "   
 */

 /**
  HTMLCollection [ <p>, <p#segundo>, <p> ] = esto indica que es una colecionhtml
  variablep[1]  aqui accedemos en este caso al parrafo deseado 
  variablep[1].innerHTML = aqui accedemos al el contenido dentor del elemento seleccionado

  variablep[1].innerHTML = " Colocamos lo que querramos y se modificara"
 
  */