$(document).ready(function () {
  $("ol li:nth-child(2)").click(function () {
    alert("evento click, sobre el 2do li de la ol");
  });
  $("#btn-ocultar").click(function () {
    $("ol").hide(2000);
  });
  $("#btn-mostrar").click(function () {
    $("ol").show(3000);
  });
  $("#btn-onoff1").click(function () {
    $("p").toggle(2000);
  });
  $("p").mouseenter(function () {
    $(this).css({ color: "red" });
  });
  $("p").mouseleave(function () {
    $(this).css({ color: "black" });
  });
  $("h2").on("dblclick", function () {
    alert("estoru en el footer");
  });
  $("#btn-onoff2").click(() => {
    $("#div-eventos").fadeToggle();
  });
  $("#btn-on").click(() => {
    $("#div-eventos").fadeTo(2000, 0.55); // fadeTo 2do parametro = opacar
  });
  $("#btn-off").click(() => {
    $("#div-eventos").fadeOut();
  });
});
