let num = 6;

function Fibonacci(cuantos) {
    if (cuantos===1) {
        return [1];
     }
     if (cuantos===2) {
        return [1,1];
     }

    let listaFibonacci=[1,1];
    for (let i = 1; i < cuantos-1; i++) {
        listaFibonacci.push( listaFibonacci[i] + listaFibonacci[i-1]  );
    }
    return listaFibonacci;
}

console.log( Fibonacci(num) );



