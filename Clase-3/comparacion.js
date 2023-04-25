// comparaciones 

let a=5;
let b="5";
let c=5;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

if (a == b) {
    console.log('probando comparaciones debiles :>solo son iguales en valor> ', a,b);
}

if (a === b) {
    console.log('probando comparaciones debiles :>son iguales en valor> ', a,b);
}
else {
    console.log('probando comparaciones debiles :>no son iguales en tipo de var> ', a,b);
}

if (a === c) {
    console.log('probando comparaciones fuertes :>son iguales en valor y tipo> ', a,c);
}
// la desigualdad es igual a esto
// != debil
// !== fuerte

