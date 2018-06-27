(function() {
  var actualizarHora = function(){
    //agregando el metodo fecha a variables seccionadas
    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();
        diaSemena = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();

    //creando variables para trabajar con el html
    var pHoras = document.getElementById("horas"),
        pAMPM = document.getElementById("ampm"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pYear = document.getElementById("year");
    
    //para obtener el dia de la semana
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pDiaSemana.textContent = semana[diaSemena];

    //para obtener el dia del mes
    pDia.textContent = dia;

    //para obtener el mes del agno se debe crear otra vez otro arreglo
    var meses = ['Enero', 'Febrero', 'Mazo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.textContent = meses[mes];

    //para obtener el agno
    pYear.textContent = year;

    //para obtener la hora
    if (horas >= 12) { //transforma el relog de 24 a 12 horas
      horas = horas-12;
      ampm = "PM";
    }else{
      ampm = "AM";
    }

    if (horas ==0 ) { //transformar las 0 horas en las 12 de la manana
      horas = 12;
    }

    if(minutos < 10){minutos = "0"+minutos;} //agregamos el 0 a los minutos
    if(segundos < 10){segundos = "0"+segundos;} //agregamos el 0 a los minutos

    pHoras.textContent = horas;
    pAMPM.textContent = ampm;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;

  }

  actualizarHora();
  var intervalo = setInterval(actualizarHora, 1000);
}())