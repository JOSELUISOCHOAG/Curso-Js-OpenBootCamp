// trabajando con objetos

// declarar un objeto

const myObjeto = {
    id: 4,
    nombre: "juan",
    apellido: "gonzalez",
    isDev: false,
    "4-juegos": "1, 2, 3, 4"
}

// acceder a los valores de las propiedades

console.log(myObjeto.id);
console.log(myObjeto["4-juegos"]);

const propiedad = "isDev";
console.log(myObjeto[propiedad]);

// crear una copia del objeto
// myObj1=myObjeto -> no debe hacerse ya que crea o hace refencia al mismo objeto 
myObj1 = {...myObjeto} ; // metodo de propagacion
myObj1.nombre="JoseLuis";
myObj1.apellido="Ochoa";
console.log(myObj1);

// ordenar una lista de objetos en funcion del valor de una propiedad .sort()

const listaPeliculas = [
    {titulo: "el uno    ", anno: 1935},
    {titulo: "los dos   ", anno: 1920},
    {titulo: "las tres  ", anno: 2017},
    {titulo: "los cuatro", anno: 2006},
    {titulo: "el cinco  ", anno: 2001},
]

listaPeliculas.sort( (i,j) => i.anno-j.anno);
console.log(listaPeliculas);



