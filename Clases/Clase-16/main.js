window.onload = main;

function main() {
  const parrafos = document.querySelectorAll(".parafos");
  const secciones = document.querySelectorAll(".seccion");
  console.log(parrafos);
  console.log(secciones);
  //
  parrafos.forEach( losParrafos => {
    losParrafos.addEventListener("click", () => {
      console.log("un click en parrafo ",losParrafos.innerText);
    });
    losParrafos.addEventListener("dragstart", event => {
      console.log("estoy arrastrando el ",losParrafos.innerText);
      losParrafos.classList.add("arrastrando");
      event.dataTransfer.setData("id",losParrafos.id); // aqui asigno que parrafo se va a transferir al arrastrar
    });
    losParrafos.addEventListener("dragend", () => {
      console.log("termine de arrastrar el ",losParrafos.innerText);
      losParrafos.classList.remove("arrastrando");
    });
  });
  //
  secciones.forEach( lasSecciones => {
    lasSecciones.addEventListener("dragover", event => {
      // terminar de arrastrar
      console.log("dragover ",lasSecciones.innerText);
      lasSecciones.classList.remove("arrastrandodiv");  // simular el arrastre del color, quito la clase si la tiene donde quedo 
      event.preventDefault();
    });
    lasSecciones.addEventListener("drop", event => {
      // soltar
      const id_parrafo = event.dataTransfer.getData("id");
      const parrafo = document.getElementById(id_parrafo); 
      console.log("drop ",lasSecciones.innerText); 
      lasSecciones.classList.add("arrastrandodiv"); // Simular el arraste del color, agregando la clase donde suelto
      lasSecciones.appendChild(parrafo); 
    });
  });
}

