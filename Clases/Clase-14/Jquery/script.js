// como trabajar o utilizar jQuery
// $(selector).accion()
jQuery(document).ready(function ($) {
  $("#btn-hide").click(() => {
    $("h1").fadeOut(); // fadeOut Oculta con efecto
  });
  $("#btn-show").click(() => {
    $("h1").fadeIn(); // fadeIn Muestra con efecto
  });
  $("#btn-azul").click(() => {
    $("h1").css("color", "blue");
  });
  $("#btn-negro").click(() => {
    $("h1").css({ color: "black" });
    $("#btn-negro").css({ background: "black" });
    $("#btn-negro").css({ color: "white" });
  });
  $("#li1").click(function () {
    $("#li1").css("transform", "scale(.5)");
  });
  $("#li2").click(function () {
    $("#li2").css("height", "200px");
  });
  $("#btn-agregar").click(() => {
    $("ul").append("<li id='nuevo'>nuevo</li>");
  });
  $("#btn-quitar").click(() => {
    $("li").remove("#nuevo");
  });
});
