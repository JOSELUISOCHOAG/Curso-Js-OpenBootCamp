// Identificar si existe un valor en un array y objetos iterables

let arrayNumber1 = [10,11,9,3,1,6,4,8,5,14,2,7];
let buscado = arrayNumber1.some( elemento => elemento === 7);

console.log(buscado);
const myObject = [
    {nombre: "maria", edad: 25, cargo: "secretaria" },
    {nombre: "juan",  edad: 45, cargo: "maestro" },
    {nombre: "Pedro", edad: 35, cargo: "conserje" },
    {nombre: "Luis",  edad: 15, cargo: "estudiante" },
    {nombre: "Jose",  edad: 35, cargo: "conserje" },
    {nombre: "Ana" ,  edad: 15, cargo: "estudiante" }  
   ];

buscado = myObject.some( obj => obj.nombre==="maria");

console.log(buscado);

// convertir una string en un array

let oracion = "hola, mi nombre es jose luis";
let arrayOracion = Array.from(oracion);

console.log(arrayOracion);