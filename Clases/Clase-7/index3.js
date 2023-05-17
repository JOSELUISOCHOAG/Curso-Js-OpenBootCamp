// Trabajando con Fechas

// declarar fechas

let fechaActual = new Date(); 

let fechaManual = new Date( 1976, 2, 5); // anno, mes (mes 0-11), dia, hora, minutos, segundos, milisegundos

let fechaMiliseg = new Date(1000); // la fecha 1000 miliseg despues de 01/01/1970. tambien puede ser negativo

let fechastring = new Date("March 5, 1976");

console.log(fechastring);
 
// comparar fechas, usar operador > 0 <
console.log(fechaActual < fechaManual);

// para comparar igualdad de fecha se deben llevar a milisegundos con el metodo .getTime()
console.log(fechaManual,fechastring);
console.log(fechaManual.getTime() === fechastring.getTime());

// obtener dia, mes y anno de una fecha
console.log("Dia ",fechaActual.getDate());
console.log("Mes ",fechaActual.getMonth());
console.log("anno",fechaActual.getFullYear())
console.log(fechaActual.toLocaleDateString());