const h1Texto = document.getElementById("myh1");

console.log(h1Texto);

// de esta manera hacemos llamado a un evento personalizado
h1Texto.addEventListener("miEvento", evento => {
  console.log(evento.detail);
  h1Texto.innerText = evento.detail.texto;
  h1Texto.style.color = evento.detail.colorTexto;
});

// de esta mamera usamos un evento preestablecido en el DOM
h1Texto.addEventListener("click", function () {
  h1Texto.innerText = "hoola de nuevo";
  h1Texto.style.color = "red";
}
);

h1Texto.addEventListener("mouseover", function () {
  cambiarTexto();
}
);

// aqui creamos el evento personalizado
function cambiarTexto (nuevoTexto, colorTexto) {
  const nuevoEvento = new CustomEvent("miEvento", {
    detail: {
      texto: nuevoTexto,
      colorTexto
    }
  });
  h1Texto.dispatchEvent(nuevoEvento);
}
