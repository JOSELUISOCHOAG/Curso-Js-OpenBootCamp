const myObject = { a: 1, b: 2, c: 3, d: 4, nombre: "jose", apellido: "ochoa" };
let myArray = [3, 1, 6, "r", 34, "rt"];
console.log("hola mundo :>> ", "hola mundo");
let myvarNumber = 34;
console.log("myvarNumber es :>> ", myvarNumber);
console.log("object :>> ", myObject);
console.log("object :>> ", myObject.a);

function recorrer() {
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log("element is:>> ", element);
  }
}

recorrer();
