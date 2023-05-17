// Ejercicio propuesto numero 8.

function sinParametros(){
    return (true);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

const miFunction = (mensaje) => new Promise( (resolver,fallar) => 
    {
    if (typeof mensaje === "string") {
        resolver(mensaje);
        }
    else if (typeof mensaje === "number") {
        resolver("soy un numero");
        }
    else {
        fallar("no hay parametros");
    }
    }
    )

miFunction("Hola Soy una promesa")
    .then( mensaje => setTimeout(() => console.log(mensaje),5000) )
    .catch(mensaje => console.log(mensaje))

////////////////////////////////////////////////////////////////////////////////////////////////////

function* indicePar() {
    let indice = 0
    while(true){
        yield indice +=2;
    }
} 

let numPar = indicePar();

console.log(numPar.next().value);
console.log(numPar.next().value);