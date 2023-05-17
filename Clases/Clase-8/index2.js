// Funciones de tipo Flecha =>

let myArray1 = [1,3,5,7,9];
let myArray2 = myArray1.map( function(elemento) {
    return elemento*2;
} 
)    
console.log(myArray2);

// otra forma 
myArray2 = myArray1.map( (valor) => valor*3); // aqui se ejecuta una funcion anonima
console.log(myArray2);

// Definiendo una funcion Flecha, Se declara como Constante, const nombrefuncion=

const duplicaValor1 = elemento => {return elemento*2};
const duplicaValor2 = elemento => elemento*2;
console.log( myArray1.map( duplicaValor1 ) );

const sumatoria = (x,y,z) => x+y+z;
console.log("la suma es ",sumatoria(4,2,3));




