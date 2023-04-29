// Ordenar listas y comparación entre dos listas

let arrayNumber1 = [1,1,9,3,1,6,4,8,5,2,7];
console.log(arrayNumber1.sort((i,j) => -1 )   );

arrayNumber1 = [9,3,1,6,4,8,5,2,7];
console.log(arrayNumber1.sort((i,j) => +1 )   );

// modo explicado
arrayNumber1 = [10,11,9,3,1,6,4,8,5,14,2,7];
let arrayNumber2 = arrayNumber1.sort( (i,j) => {
    if (i<j) {
        return 1;
    }
    else if (i>j){
        return -1; }
    else{
        return 0
    }
})
console.log(arrayNumber2);

// modo resumido de ordenar un array numerico
arrayNumber1 = [10,11,9,3,1,6,4,8,5,14,2,7];
console.log(arrayNumber1.sort((i,j) => i - j) );

arrayNumber1 = [9,3,1,43,46,4,12,8,5,2,7];
console.log(arrayNumber1.sort((i,j) => j - i) );

// JavaScript ordena los numero como si fuesen String
//
arrayNumber1 = [9,11,23,1,54,6,14,8,5,52,7];
console.log(arrayNumber1.sort());

// la Propiedad Reverse ordena inversamente el array
arrayNumber1 = [9,31,12,1,6,14,8,5,2,7];
console.log(arrayNumber1.reverse());

///////////////////////////////////////////////////////////////////////////////


const myObject = [
    {nombre: "maria", edad: 25, cargo: "secretaria" },
    {nombre: "juan",  edad: 45, cargo: "maestro" },
    {nombre: "Pedro", edad: 35, cargo: "conserje" },
    {nombre: "Luis",  edad: 15, cargo: "estudiante" },
    {nombre: "Jose",  edad: 35, cargo: "conserje" },
    {nombre: "Ana" ,  edad: 15, cargo: "estudiante" }  
   ];

let ordenado = myObject.sort( (objA, objB) => {
    if ( objA.edad < objB.edad ) {
        return -1;
    }
    else if (objA.edad > objB.edad) {
        return 1;
    }
    else {
        return 0;
    }
})

console.log(ordenado);

ordenado = myObject.sort( (objA, objB) => objA.edad - objB.edad);

console.log(ordenado);

