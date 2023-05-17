// Métodos avanzados, obtención de listas a partir de listas

const ciudades = ["maracay","barquisimeto","caracas","barcelona","maracaibo"];

ciudades.forEach( c =>  {
    console.log(c);
});

const otroArray = ciudades.map((elemento , indice) => {
    console.log(elemento,indice);
    return `${indice+1} - ${elemento}`
});

console.log(otroArray);

// filtros 

const myObject = [
     {nombre: "maria", edad: 25, cargo: "secretaria" },
     {nombre: "juan",  edad: 45, cargo: "maestro" },
     {nombre: "Pedro", edad: 35, cargo: "conserje" },
     {nombre: "Luis",  edad: 15, cargo: "estudiante" },
     {nombre: "Jose",  edad: 35, cargo: "conserje" },
     {nombre: "Ana" ,  edad: 15, cargo: "estudiante" }  
    ];

let filtro = myObject.filter( obj => {
    if (obj.edad === 35){
        return true;
    }
    else {
        return false;
    }
});

console.log(filtro);

filtro = myObject.filter( elemento => (elemento.edad === 15));

console.log(filtro);

// funcion reduce 

let arreglo = [2,4,6,8,10];

let suma = arreglo.reduce( (AcumSuma, elemento, i, arrayArreglo) => {
   // test para ver que hace, no va en la operacion
   console.log(AcumSuma); // valor resultante de la operacion en cada iteracion
   console.log(elemento); // item evaluado del array
   console.log(i);        // iteracion o contador del bucle
   console.log(arrayArreglo);
   return AcumSuma + elemento
} )
console.log(suma);