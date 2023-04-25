// Bucles for

// for (let index = 0; index < 10; index +=2) {
// for (let index = 0; index < 10; index = index + 3) {

for (let index = 0; index < 10; index +=2) {
    const element = index;
    console.log('elemento index :>> ', element);
}

// recorriendo una lista o array
let lista = [1,20,400,5000,60000,700000,9000000,10000000,200000000];
for (let x of lista) {
    console.log('lista[i] :>> ', x);
}

lista.forEach(valor => {
    console.log('valor es :>> ', valor);
}
)

// objetos
let myObject = {
    nombre: "jose",
    apellido: "ochoa",
    edad: 45
} 

let prop = "edad";
console.log('la edad es :>> ', myObject[prop]);

for (let lapropiedad in myObject){
    console.log('la propiedad es :>> ', lapropiedad);
    console.log('su valor es :>> ', myObject[lapropiedad]);
}

