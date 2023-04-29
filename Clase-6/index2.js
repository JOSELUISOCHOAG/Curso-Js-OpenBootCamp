// - Concatenación y obtención de fragmentos de listas

// con el metodo concat
let arra1 = [1,2,3,4];
let arra2 = [5,6,7,8];
let arra3 = arra1.concat(arra2); // concatenacion (unir) 2 o mas listas

console.log(arra3, "este es el arra3, su longitud es ",arra3.length);

// factor de propagacion
let arra4 = [...arra1,...arra2]; // forma correcta
let arra5 = [arra1,arra2];       // no es factor de propagacion, al contrario genera un array de 2 dimensiones,
                                 // siendo un array dentro de otro array

console.log("este es el arr4 : ",arra4);
console.log("este es el arr5 : ",arra5);
console.log("contenido de arra5 posicion 1, es un array y su posicion 2 ",arra5[1][2]);