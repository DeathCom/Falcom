var encabezado = document.getElementById("encabezado");

var zoom = function() {
    var thumb = document.getElementById("thumb");
    //thumb.setAttribute("class", "thumb grande");
    //.setAttribute() recibe dos parametros uno es el tipo de elemento
    //el otro lo quese le desea setear, en este caso clases
    //por lo tanto se pudo haber usado className = 

    if (thumb.className == "thumb") {
        thumb.setAttribute("class", "thumb grande");
    }else{
        thumb.setAttribute("class", "thumb");
    }
}