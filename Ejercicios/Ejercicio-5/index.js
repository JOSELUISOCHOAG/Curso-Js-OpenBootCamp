console.log('Ejercicio propuesto numero 5');
// altura cm
let alturaCm = 176;

// altura mt
let alturaMt = alturaCm / 100;

// peso en kg
let pesoKg = 94.36;

// altura redondeada
let alturaRnd = alturaMt.toFixed(1);

// peso redondeado
let pesoRnd1 = pesoKg.toFixed( 0 );
let pesoRnd2 =  Math.round( pesoKg);

let numMax = Number.MAX_VALUE;
let lMax = false;
if ((numMax+1)===numMax){
    lMax=true;
}

/* resolucion planteada por el profesor, lo pude haber usado, pero en funcion de que en clase no se hablo de eso no 
   crei conveniente usarlos, ya veo que debo investigar mas alla de la clase y usar lo que crea conveniente */

const altura_red = Math.ceil(altura_m)
const peso_red = Math.floor(peso_kg)

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log("altura cm : ",alturaCm);
console.log("altura mt : ", alturaMt);
console.log("peso en kg: ", pesoKg);
console.log("altura rdn hacia arriba : ", alturaRnd);

console.log("peso rdn hacia abajo    : ", pesoRnd1);
console.log("peso rdn hacia abajo    : ", pesoRnd2);

console.log("Maximo : ",lMax)
