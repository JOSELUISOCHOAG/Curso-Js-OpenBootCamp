console.log('Ejercicio 3 Uso de sentencias repetitivas BUCLE WHILE USANDO LA SENTENCIA BREAK' );
let factorial=1;
let contador=1;
while (true) {
    if (contador>10){
        break;
    }
    factorial = factorial*contador;
    contador++;
}
console.log('factorial es :>> ', factorial);