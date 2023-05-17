// Comparar Array metodo array.every()

let arrayNumber1 = [10,11,9,3,1,6,4,8,5,14,2,7];
let arrayNumber2 = [10,11,9,3,1,6,4,8,5,14,2,7];


const compararArray = (ar1, ar2) => {
    if (ar1.length !== ar1.length ) return false;
    let resultado = ar1.every( (elemto, i ) => elemto === ar2[i]) 
    return resultado
}

console.log(compararArray( arrayNumber1,arrayNumber2));