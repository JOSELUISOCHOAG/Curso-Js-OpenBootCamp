// Introducción a las funciones en JavaScript

// Declaracion o definicion de una funcion palabra reservada Function nombrefuncion(nParametros)

saludar("Usuario");

function saludar(nombre) {
    console.log(`Hola, ${nombre}`,"estoy en la funcion");
}

// factor de propagacion como parametro
function suma(...parametros){
    return parametros.reduce((a,b)=> a + b);    
}
console.log(suma(1,2,3,4,5)) ;

// crear un valor  por defecto en el o los parametros

function resta(x = 10, y=5 ){
    return (x-y);
}
console.log(resta());
console.log(resta(14,6));

// nota importante, los objetos pasados como parametros pueden resultar modificados al origen, dependiendo la operacion
