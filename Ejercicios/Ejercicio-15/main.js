let fechaActual = new Date();
// alert(fechaActual);
fechaActual = new Date(fechaActual.getTime() + 2 * 60000);
// alert(fechaActual);
const nombre = "JoseLuis";
const apellido = "Ochoa";
const misDatos = {
  nombre,
  apellido
  };

// alert(misDatos.apellido)
sessionStorage.setItem("dataUsuario",JSON.stringify(misDatos));
localStorage.setItem("dataUsuario",JSON.stringify(misDatos));
document.cookie = "dataUser="+JSON.stringify(misDatos)+";expires="+fechaActual.toUTCString();
