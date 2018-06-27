(function() {
  var fecha = new Date(); //se obtiene la fecha actual del sistema
  //obteniendo la fecha actual del cliente 
  document.write(fecha+"<br>");

  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  var diaSemana = fecha.getDay()+1; //tra el dia de la semana empieza en cero con el domingo
  var dia = fecha.getDate();
  var mes = fecha.getMonth()+1;
  var agno = fecha.getFullYear();

  document.write(hora+" : "+minutos+" :"+segundos+"<br>");
  document.write(dia+" : "+mes+" :"+agno+"<br>");
  document.write("el dia de la semana es: "+diaSemana+"<br>");

}())