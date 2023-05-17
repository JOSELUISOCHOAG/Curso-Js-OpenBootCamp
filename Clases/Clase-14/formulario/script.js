
const elFormulario = document.getElementById("formulario");

console.log(elFormulario);

elFormulario.addEventListener("submit", evento => {
  console.log(evento);
  evento.preventDefault();
});
