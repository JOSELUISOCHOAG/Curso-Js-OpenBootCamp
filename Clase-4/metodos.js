// aplicando los metodos mas comunes en variables tipo string

let stringVar = "esto es un texto de prueba para validar el uso de los metodos";
let largo = stringVar.length;
let extraer1 = stringVar.slice( 5, 16); // de incio hasta el fin
let extraer2 = stringVar.substring( 5, 16); //de inicio hasta fin
let extraer3 = stringVar.substr(5,16); // desde inicio, trae los 16 siguientes

console.log("su longitud es : ",largo)
console.log(extraer1);
console.log(extraer2);
console.log(extraer3);

// reemplazando partes de un string por otro

let oracion = "mi nombre es antonio luis";
let nuevaOracion = oracion.replace("antonio","Jose")

console.log('nuevaoracion :>> ', nuevaOracion);

// reemplazando todas las coincidencias de un string buscado en otro string, usando  expresiones regulares: /texto/g

nuevaOracion = stringVar.replace(/de/g,"DE");

console.log('nuevaOracion es :>> ', nuevaOracion);

