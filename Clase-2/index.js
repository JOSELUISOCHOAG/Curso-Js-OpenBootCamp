/* Tipos de Variables */
var varNumber = 12;                 // Numero, entero o decimal
var varString1 = "hola mundo.";     // String/cadena
var varString2 = 'Hola Mundo!';     // String/cadena 
var varLogico = false;              // Booleano, si no, falso, verdadero
var varNull = null;                 // nulo, espacio vacio en memoria
var varIndefi = undefined;          // no definido
//
var varArray = ["1","2","3"];
const varObject = {
    nombre: "jose",
    apellido: "Ochoa",
    edad: 14
}

console.log('Variable numero :>> ', varNumber);

// con la sentencia var la variable es de entorno global
// diferencia entre let y var
var prueba = "esta es la var";
for (let index = 0; index < varArray.length; index++) {
    var prueba = varArray[index];
    console.log('prueba :>> ',prueba);
    
}

// con la sentencia let la variable pertenece al ambito donde se crea o inicia
let prueba2 = "esta es la var";
for (let index = 0; index < varArray.length; index++) {
    let prueba2 = varArray[index];
    console.log('prueba2 :>> ',prueba2);
    
}
console.log('prueba2 :>> ', prueba2);

// con el operador typeof podemos saber que tipo de variable es la variable.

console.log('el tipo de variable es la variable myArray  :>> ', typeof varArray);
console.log('el tipo de variable es la variable prueba2  :>> ', typeof prueba2);

/* notacion
 ; el punto y coma define el final de la linea
 . se utliza para acceder a las propiedades de un objeto o function predefinida.
   la propiedad log en console -> console.log  
   la propiedad nombre en varObject  ->  varObject.nombre   
 [] para declarar Array o Listas, o indicar/acceder a la posicion especifica de un array o lista 
    let myArray = [1,1,2,3,4,5,6]  ->  let valor=myArray[2]
 {} son utilizados para delimitar funciones o bloques de procedimiento, Objetos, Estructuras de control
    for (let i=1;i<10;i++) {
        console.log( i );
    }
    const varObject = {
    nombre: "jose",
    apellido: "Ochoa",
    edad: 14
    }
 () para definir funciones 
    function buscar() {
        return true;
    }
 */

// listas

let myArray1 = [1,2,"carro",true];
let myArray2 = new Array(4);
let myArray3 = new Array(1,2,"carro",true);
console.log('myArray1 :>> ', myArray1);
console.log('myArray2 :>> ', myArray2);
console.log('myArray3 :>> ', myArray3);
console.log('la posicion 2 en myArray3 es :>> ', myArray3[2]);

// Objetos

let varObject1 = {
    nombre: "jose",
    apellido: "Ochoa",
    edad: 14,
    materias: ["matematicas","logica"]
}

// let varObject2 = new varObject1;
// varObject2.apellido="perez";

// console.log('apellido en varObject2 :>> ', varObject2.apellido);

// Fechas
let dias = ["dom","lun","mar","mie","jue","vie","sab"]
let fecha = new Date();
console.log('fecha :>> ', fecha);
let diam = dias[fecha.getDay()];  // devuelve el numero de dia de la semana siendo domingo el 0
let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let ano = fecha.getFullYear();

console.log('la fecha es :>> ',diam, dia ,mes ,ano );
