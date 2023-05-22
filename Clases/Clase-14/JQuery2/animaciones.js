$(() => {
  $("#btn-animar1").click(function () {
    $("#div7").animate({ width: "200px" });
  });
  $("#btn-animar2").click(function () {
    $("#div7").animate({ width: "toggle" });
  });
  $("#btn-animar3").click(function () {
    $("#div7").animate({
      width: "300px",
      letf: "300px",
      background: "grey"
    });
  });
});
