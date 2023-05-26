window.onload = main;

function main() {
  const parrafos = document.querySelectorAll(".parrafo");
  const secciones = document.querySelectorAll(".seccion");
  const laPapelera = document.getElementById("papelera");
  // crea evento en las etiquetas obtenidas por queryselector
  parrafos.forEach( losParrafos => {
    losParrafos.addEventListener("dragstart", evento => {
      console.log("Arrastrando ",losParrafos.innerHTML);
      evento.dataTransfer.setData("id",losParrafos.id);
      const elemento_fantasma = document.querySelector(".imagen-fantasma");
      event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    });
    losParrafos.addEventListener("dragend",() => {
      console.log("fin de arrastre");
    });
  });
  //
  secciones.forEach( lasSecciones => {
    lasSecciones.addEventListener("dragover", evento =>{
      evento.preventDefault();
    });
    lasSecciones.addEventListener("drop", evento =>{
      const id_parrafo = evento.dataTransfer.getData("id");
      lasSecciones.appendChild( document.getElementById(id_parrafo));
    });
  });
  //
  laPapelera.addEventListener("dragover",evento => {
    // console.log("localizado donde soltar");
    evento.preventDefault();
    evento.dataTransfer.dropEffect = "copy";
    
  });
  laPapelera.addEventListener("drop", evento => {
    const id_parrafo = evento.dataTransfer.getData("id");
    document.getElementById(id_parrafo).remove();
    laPapelera.style.opacity = 1;
    // console.log("se solto");
  });
}