// como obtener una lista a partir de otra, copiar una lista a una nueva. metodo slice()

//   indice     0 1 2 3 4 5
let myArray1 = [1,2,3,4,5,6]
let myArray2 = myArray1.slice(); // sin parametros copia todo el array1 
let myArray3 = myArray1.slice(2,3); // solo copia parte del arra1, a partir de la pos 2 hasta la 3, sin tomar la posicion 3
let myArray4 = myArray1.slice(3); // un solo parametro, solo copia parte del arra1, a partir de la pos 2 hasta la ultima.

console.log("ARRAY 1 ",myArray1);
console.log("ARRAY 2 ",myArray2);
console.log("ARRAY 2 ",myArray3);
console.log("ARRAY 2 ",myArray4);