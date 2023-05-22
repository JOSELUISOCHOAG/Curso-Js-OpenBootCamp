$(() => {
  $("#btn-dom").click(function () {
    alert($("#enlace").text());
    alert($("#enlace").html());
    $("#otrop").text("aqui se cambia el contenido");
    $("#enlace").attr(
      {
        href: "www.youtube.com"
        // id: "nuevo" cosas que se pueden cambiar desde el codigo
      });
    $("#enlace").text("yotube");
    $("ol").append("<li id='li4'>nuevo elemento 4</li>");
    $("footer").append("<p>soy un p nuevo1</p>");
    $("footer").append("<p>soy un p nuevo2</p>");
    $("#otrop").append(", se anexo mas texto al final");
    $("ol").prepend("<li id='li5'>nuevo elemento 5</li>");
    $("ol").after("<li id='li5'>nuevo elemento 5</li>");
    $("#otrop").after(", se anexo mas texto con after");
    $("#div1").css("background", "grey");
    $("#div2").css({
      background: "green",
      color: "black"
    });
  });
});
