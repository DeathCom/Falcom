//condicionales:
/*if (condition) {
  
}else{

}*/
var nombre="Carlos",
    edad = 16;

/**if (nombre == "Carlos") {
  document.write("Bienvenido "+nombre);
}else if(nombre=="Arturo"){
  document.write("Bienvenido "+nombre);
}else{
  document.write("Bienvenido Anonimo");
} */

/**
 > mayor
 < menor
 >= mayor o igual
 <= menor o igual
 == igual
 != diferente
 === tiene el mismo valor y es del mismo tipo
 */

/**
 if (edad >= 18 || nombre == "Carlos") {
  document.write("Bienvenido ");
}else if(nombre=="Arturo" && edad == 16){
  document.write("Bienvenido "+nombre);
}else{
  document.write("No tienes edad ");
}
 */

if (edad === "16") {
  document.write("Bienvenido ");
}else{
  document.write("Ups! ");
}
//cambiar el === por == para entender el operador ===