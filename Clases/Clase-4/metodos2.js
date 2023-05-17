// otros metodos

let myString = "Esto Es Una Oracion En Minusculas en una";
//              012345

myString = myString.toLowerCase();  // transforma todos los caracteres en minusculas

console.log('myString :>> ', myString);

myString = myString.replace("minusculas","mayusculas");
myString = myString.toUpperCase(); // transforma todos los caracteres en mayusculas


console.log('myString :>> ', myString);

// concatenar cadenas o variables string

let myString1 = "esto es una oracion";
let myString2 = "y esta es otra oracion";

console.log(myString1+" "+myString2);
console.log(myString1.concat(" ",myString2));
console.log(`${myString1} ${myString2}`);

// eliminado espacios al inicio y al final

myString = myString.trim(); // elimina al inicio y al final
myString = myString.trimStart(); // elimina espacios en blanco al inicio
myString = myString.trimEnd(); // elimina espacios en blanco al final

// extraer un caracter de un string // otra forma es tratarlo como un array o lista

let caracter1 = myString.charAt(5);
let caracter2 = myString[5];

console.log('caracter1 :>> ', caracter1);
console.log('caracter2 :>> ', caracter2);

// encontrando una palabra en el texto 0 string.

console.log(myString.indexOf("UNA")); //  Devuelbe la posicion de la primera letra de la palabra, si no -1.
console.log(myString.lastIndexOf("UNA"));

// Contar palaras o string coincidentes dentro de un string largo

let texto = "Su archivo principal debe estar en la carpeta raíz y por lo general debería tener el nombre de index.html, ya que, es la página que por defecto es cargada por los servidores web cuando se solicita un dominio y no se especifica el nombre del archivo; es decir, index sería la página principal o el home de nuestra web."

let result = texto.match(/la/g,); // busca todas kas veces que aparece "la" en el texto. usando expresion regular /la/g

console.log('result :>> ', result);

// buscando si existe o no una palabra dentro del texto.

console.log(texto.includes("defecto")) // devuelve true si esta, false si no.

// saber si una palabra esta al inicio o al final de un texto.

console.log(texto.startsWith("principal"));
console.log(texto.endsWith("nuestra"));

console.log(texto.startsWith("Su"));
console.log(texto.endsWith("web."));

