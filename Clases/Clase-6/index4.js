// - Métodos de iteración en listas

let myArray1 = [1,2,3,4,"a","b","c","d"]

for (let i = 0; i < myArray1.length; i++) {
    const element = myArray1[i];
    console.log(element);
}


let suma=0;
myArray1.forEach(element => {
    if (typeof element==='number'){
        suma += element;
    }
    console.log(element);
});
console.log(suma);

// realizar busquedas dentro de array

// manera obsoleta/Antigua
const lBuscar = myArray1.find(lBuscar => {
    if (lBuscar==="d"){
        return true;
    }
})
console.log(lBuscar);

// manera eficiente, usando una funcion flecha (CallBack)
const lEncuentra = myArray1.find( items => items==="d");
console.log(lEncuentra);

const myObject = [
    {nombre: "maria", 
     edad: 25,
     cargo:"secretaria" },
 
     {nombre: "juan", 
     edad: 45,
     cargo:"maestro" },
 
     {nombre: "Pedro", 
     edad: 35,
     cargo:"conserje" },
 
     {nombre: "Luis", 
     edad: 15,
     cargo:"estudiante" }  
];

let buscar = myObject.find( variable => { 
    if (variable.nombre==="Luis"){
        return true
    } 
})
console.log(buscar.cargo);

// otra forma 1
buscar = myObject.find( variable => { 
    return variable.nombre==="Pedro" 
})
console.log(buscar.cargo);

// otra forma 2
buscar = myObject.find( variable => variable.nombre==="maria" )
console.log(buscar.cargo);

// otra forma 3. llamando al objeto
const {edad} = myObject.find( o => o.nombre ==="juan")
console.log(edad);
