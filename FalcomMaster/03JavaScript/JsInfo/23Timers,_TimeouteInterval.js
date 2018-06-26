(function () {

  var cont=0;
  var saludo = function () {
    cont++;
    console.log("Saludo !!! "+cont);
    
    if (cont ===5) {
      clearInterval(intervalo); //la variable es el id del intervalo
    }
  }

  //timeout
  //setTimeout(saludo, 1000);
  //esta funcion permite ejecutar codigo en un tiepo definido
  //recibe dos parametros, el primero es el nombre de la funcion
  //el segundo es el tiempo en milisegundos  que se va a ejecutar o delay

  //interval
  //setInterval(saludo, 1000);
  //el interval permite ejectar codigo cada determinado tiempo
  //recibe dos parametros, el primero es el nombre de la funcion
  //el segundo es el tiempo en milisegundos  que se va a ejecutar o delay
  
  //es recomendable agregar al intervalo a una variable para poder obtener usid y pararlo
  var intervalo = setInterval(saludo, 1000);


  //turco para hacer que la funcion se autoo llame una y otra vez
  var cont=0;
  var saludo = function () {
    cont++;
    console.log("Saludo !!! "+cont);
    setTimeout(saludo, 5000);
  }

  saludo();

  
}())