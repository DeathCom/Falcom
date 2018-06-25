var encabezado = document.getElementById("encabezado");

encabezado.className = "titulo tituloGrande";
//de esta forma se agregan dos clases mediante javaScript

//encabezado.style.color = "navy";
//encabezado.style.backgroundColor = "#ffc";
//encabezado.style.fontFamily = "Helvetica";
//con .style. se accede a los estilos de css para los elementos

//metodo para quirar la clase si es que se encuentra:
encabezado.className = encabezado.className.replace("tituloGrande", "");
//replace*(param1, param2), replace recibe dos parametros
//el primero es el valor a encontrar y el segundo es por cual m
//hay que remplazar.