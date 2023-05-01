// Funciones Asincronas y promesas

// ejecuciones posibles, conexion a una BD. llamados a fuentes Externas
// ejemplo de una funcion asincrona 

const miPromesa = new Promise( (resuelto, rechazado) => {
    const i = Math.floor(Math.random() * 2)
        console.log(i);
    if (i !== 0){
        resuelto();
    }
    else {
        rechazado();
    }
})

miPromesa
    .then( () => console.log("Se ha ejecutado Correctamente") )
    .catch( () => console.log("Fallo"))
    .finally( () => console.log("Siempre se va a ejecutar"));
    

 //////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 /* Implementación con promesas otro ejemplo*/
const doTask = (iterations) => new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        reject({
          error: true,
          message: "Se ha sacado un 6"
        });
      }
    }
    resolve({
      error: false,
      value: numbers
    });
  });

  doTask(2)
  .then(result => console.log("Tiradas correctas: ", result.value))
  .catch(err => console.error("Ha ocurrido algo: ", err.message));