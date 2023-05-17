// bucles while


let inicio = 0;
let fin = 10;

while (inicio < fin) {
    console.log(inicio,"-");
    inicio++;
}

// do while 

console.log(inicio);

// a diferencia del while, Do While se ejecuta al menos una vez sin importar la condicion
// ese caso inicio vale 10 resultado del while, entra al do while ejecuta , evalua la condicion
// y se sale  del dowhile

do {
    console.log(inicio*2);
    inicio++;
} while (inicio < fin);

