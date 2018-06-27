(function () {
  //variables
  var lista = document.getElementById("lista"),
      tareaInput = document.getElementById("tareaInput"),
      btnNuevaTarea = document.getElementById("btn-agregar");
  
  //Funciones
  var agregarTarea = function () {
    //alert("comprobacion de funcion AgregarTarea");
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if(tarea ===""){
          tareaInput.setAttribute("placeholder", "Agrega una Tarea");
          tareaInput.className = "error";
          return false;
        }

        enlace.appendChild(contenido); //agregamos el contenido al enlace
        enlace.setAttribute("href", "#"); //se establece un atributo href
        nuevaTarea.appendChild(enlace); //se agrega el enlace al elemento nuevaTarea
        lista.appendChild(nuevaTarea); //se agrega la nueva tarea a la lista para que sea visible
        tareaInput.value = ""; //para limpiar el campo de agregar tareas

        //para poder borrar los elementos despus de crearlos como nuevos
        for(var i = 0; i <= lista.children.length -1; i++){
          lista.children[i].addEventListener("click", function () {
            this.parentNode.removeChild(this);
          });
          //borrando elementos de la lista
        }
  };
  var comprobarInput = function () {
    //alert("comprobacion de funcion ComprobarInput");
    tareaInput.className = "";
    tareaInput.setAttribute("plaeholder","Agregar Tarea");
  };
  var eliminarTarea = function(){
    //alert("comprobacion de funcion eliminarTarea");
    this.parentNode.removeChild(this);
  }

  //Eventos
  btnNuevaTarea.addEventListener("click", agregarTarea);

  //Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  //recorrer todos los li y asiganrles un evento 
  //esto es accedemos a la lista que es un ul
  //luego accedemos a los li que son los hijos y por ultimo los contamos
  

  for(var i = 0; i <= lista.children.length -1; i++){
    lista.children[i].addEventListener("click", eliminarTarea);
    //borrando elementos de la lista
  }

 //se elimina este for ya que se incluyo uno similar en la funcion agregarTarea
}());