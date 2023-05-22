$(() => {
  // podemos asignar el selector a una variable
  const elem = $("#div4");
  $("#btn-baja").click(() => {
    // aqui usamos la variable en lugar del selector
    elem.slideDown(1000);
    $("#div5").slideDown(1000);
    $("#div6").slideDown(1000);
  });
  $("#btn-sube").click(() => {
    $("#div4").slideUp(1000);
    $("#div5").slideUp(1000);
    $("#div6").slideUp(1000);
  });
  $("#btn-opcion").click(() => {
    $("#div4").slideToggle(1000);
    $("#div5").slideToggle(1000);
    $("#div6").slideToggle(1000);
  });
});
