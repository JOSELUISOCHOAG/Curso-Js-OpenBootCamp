// modulo de funciones

function sumar( a , b ){
    return a + b;
}

function multiplicar( a ,b ) {
    return a * b;
}

function elevar( a , b ) {
    return a ** b; // ** eleva a pontencia b
}

function factorial(a) {
    let factorial=1
    for (let i = 2; i <= a; i++) {
        factorial *= a;
    }
    return factorial;
}

module.exports = {
    multiplicar,
    sumar,
    elevar,
    factorial
}