// modulo de funciones

export function sumar( a , b ){
    return a + b;
}

export function multiplicar( a ,b ) {
    return a * b;
}

export function elevar( a , b ) {
    return a ** b; // ** eleva a pontencia b
}

export function factorial(a) {
    let factorial=1
    for (let i = 2; i <= a; i++) {
        factorial *= a;
    }
    return factorial;
}
