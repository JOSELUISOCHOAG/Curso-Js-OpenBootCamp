const myArray = [1,2,3,4,5,2,3,1,6];
const mySet = new Set(myArray);

console.log(myArray);
console.log(mySet);

// Agragar un elemento nuevo al Set, .add()
mySet.add(14);
mySet.add("hola");
console.log(mySet);

// Eliminar un elemento del Set, .delete()
mySet.delete(4);
console.log(mySet);

// Saber si el set contiene un valor
console.log(mySet.has(14));

// Saber la longitud o cantidad de elementos de un Set
console.log(mySet.size)

// Hacer una Iteracion de los valores del Set
mySet.forEach(elemento => console.log(elemento))

// obtener un objeter iterator
console.log(mySet.values());

// obtener un array de un Set
const myArray2 = [...mySet]
console.log(myArray2);

// Eliminar todos los elementos del Set .clear()
mySet.clear();
console.log(mySet);

