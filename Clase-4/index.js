let stringDoble = "esto es una manera de declaracio";
let stringSimple = 'esta es otra forma de declarar';

let stringOtro1 = "esta es otra forma si se quiere usar las \"comillas dobles dentro de la oracion\"";
let stringOtro2 = 'de esta forma tambien es valido, "usar las comillas dobles dentro de la oracion"';
let stringOtro3 = "de esta forma tambien es valido, 'usar las comillas simples dentro de la oracion'";

console.log('stringDoble :>> ', stringDoble);
console.log('stringSimple :>> ', stringSimple);
console.log('stringOtro1 :>> ', stringOtro1);
console.log('stringOtro2 :>> ', stringOtro2);
console.log('stringOtro3 :>> ', stringOtro3);


////////////////////////////////// comillas invertidas (backticks)

let nombre = "jose luis"
let saludo = `hola, ${nombre} bienvenido`;
console.log('saludo :>> ', saludo);

let plantilla = `<html>
                    <h1> Pagina web de ${nombre}</h1>
                    <p> esto es un parrafo</p>
                </html>`;

console.log('plantilla :>> ', plantilla);
