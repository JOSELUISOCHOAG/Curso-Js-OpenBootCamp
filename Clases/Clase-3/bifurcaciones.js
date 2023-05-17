function ejemplo() {
  let numero1 = 45;
  let numero2 = 60;
  if (numero1 > numero2) {
    console.log("numero1  es mayor que numero2:>> ", numero1);
  } else {
    console.log("numero2 es mayor que numero1 :>> ", numero2);
  }

  let nota = 14;
  switch (nota) {
    case 10:
      console.log("has logrado aprobar basico con :>> ", nota);
      break;
    case 15:
      console.log("has logrado aprobar bien con :>> ", nota);
      break;
    default:
      console.log("No has obtenido nota :>> ");
      break;
  }

  // switch con casos complejos
  nota = 16;
  switch (true) {
    case nota > 10 && nota < 15:
      console.log("has logrado aprobar basico con :>> ", nota);
      break;
    case nota > 15:
      console.log("has logrado aprobar bien con :>> ", nota);
      break;
    default:
      console.log("No has obtenido nota :>> ");
      break;
  }
}

// export {ejemplo};
ejemplo();