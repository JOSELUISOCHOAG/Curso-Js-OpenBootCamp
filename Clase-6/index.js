/* - Listas y métodos de mutacion de listas

Como Trabajar con listas (Array, Arreglo, Vectores)
 
 Declaracion de un Array */

let myVar1 = 12
let myArray1 = new Array(1,1,2,2,3,3,4,4,5,5);
let myArray2 = new Array("z","a","e","w","f","p");
let myArray3 = [1,2,3,4,5,6,"a","b","c",true,{id:"45"},myVar1,false,null];
/*
console.log(myArray1);
console.log(myArray2);
console.log(myArray3);
*/

// accediendo al contenido de un Array

console.log(myArray3[10].id); // accede al valor de la propiedad id, que esta en la posicion 10 del array
console.log(myArray3[8]);

for (let i = 0; i < myArray3.length; i++) {
    myVar1 = typeof myArray3[i]; 
//    console.log(myArray3[i]," es ",myVar1);
//    if ( i <myArray2.length){
//        myArray2[i]=myArray1[i];
//    }
//    else{
//       myArray2.push(i);    
//   }
    
}

// insertando valores a un array

myArray2.push("jose","ultimo"); // agrega los valores al final
myArray2.unshift("inicio","luis"); // agrega los valores al inicio

console.log("agrege al inicio y al final ",myArray2);

// Manipulando array, eliminar.

myArray2.pop();  // elimina el ultimo item del array

console.log(myArray2);

myArray2.shift(); // elimina el primer item del array

console.log("asi quedo el arra2 ",myArray2," con ",myArray2.length);

// manipulando un array , incluir, eliminar y modificar

myArray2.splice(0,3);  // elimina los elementos desde la posision "0" y los 2 siguienes total eliminados "3"
console.log("elimine tres item 0 1 2, quedan ",myArray2.length);

myArray2.splice(1,0,"cambio por la w") // modifica el elemento que este en la posision 1

myArray2.splice(2,1,"este se incluye entre 'w y f' y rueda los demas"); // inserta un nuevo valor en la posicion 2, moviendo las demas posiciones

console.log(myArray2);
