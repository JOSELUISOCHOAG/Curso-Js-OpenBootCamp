let a = 0.2;
let b = 0.1;
let c = (a + b); // no presenta presicion decinal, 0.3000000000000004
console.log( c );
c = Math.round( (a + b) * 100) / 100 ;  // hay que trucarlo, esta es una manera
console.log( c );


/// 

// metodos de redondeo

let d = 1123.3454
let d_string = d.toString();

console.log(d_string)
console.log('typeof d_string :>> ', typeof d_string);

console.log(d.toFixed(2));  // redondea y limita a 2 decimales // devuelve un string

console.log(d.toPrecision(5)); // devuelve un string con el numero decifras significativas del numero

console.log(d.valueOf()); // es lo mismo que console.log(d); pero devolviendo el valor primitivo de la variable

// como convertir string a numeros, number(), parseInt(), parseFloat().

let numString = '14.56';
let numNumber = 5;

// de esta manera los esta concatenando
console.log(numString + numNumber); 

// convierte el str a num, y los suma
console.log(Number(numString) + numNumber); 

// parseInt convierte un str a un numero, pero entero perdiendo su parte decimal
console.log(parseInt(numString) + numNumber); 

// parseInt convierte un str a un numero, pero esta vez con su parte decimal
console.log(parseFloat(numString) + numNumber); 

// numero Hexadecimales
let numHexa = '0x245b12'
console.log(parseInt(numHexa,16));

// determinar maximo o minimo de valores de numeros que ponermos trabajar en JS

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


