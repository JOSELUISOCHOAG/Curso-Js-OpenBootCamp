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

console.log("altura cm : ",alturaCm);
console.log("altura mt : ", alturaMt);
console.log("peso en kg: ", pesoKg);
console.log("altura rdn hacia arriba : ", alturaRnd);

console.log("peso rdn hacia abajo    : ", pesoRnd1);
console.log("peso rdn hacia abajo    : ", pesoRnd2);

console.log("Maximo : ",lMax)
