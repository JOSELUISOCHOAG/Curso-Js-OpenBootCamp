/*
Sintaxis de JQuery
$(Selector) =  Etiqueta de HTML, .Clase, #ID
Accion() = metodo que actuara sobre el selector
$("h1").hide();
agregar el apartado jquery en .eslintrc.json
*/

// tambien puede ser $(document).ready( function() {})
$(function () {
  console.log("jQuery is working perfectly.");
  $("p").hide(); // ocultando todos los elementos p del bloque html
  $("p:first").hide(); // ocultando el primer p del bloque html
  $(".parrafo").hide(); // ocultando selector con .class del bloque html
  $("#segundo").hide(); // ocultando selector con #id del bloque html

  // otros ejemplos
  $("ol li:nth-child(2)").hide();
});
