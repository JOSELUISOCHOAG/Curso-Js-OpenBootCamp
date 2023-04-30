// Ejercicio propuesto numero 6

const listaCompra = ["Mantequilla","Arroz","Leche","Azucar","Pan"];

listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

const listaPeliculas = [
    {
    nombre : "Jhon Wick 2",
    director: "Chad Stahelski",
    fecha: new Date(2017, 1, 9)
    },
    {
    nombre : "Piratas del Caribe, El cofre de la muerte",
    director: "Gore Verbinski",
    fecha: new Date(2006, 6, 21),
    },
    {
    nombre : "Constantine",
    director: "Francis Lawrence",
    fecha: new Date(2005, 1, 17)
    }    
]

const copiaPeliculas = listaPeliculas.filter( obj => obj.fecha > new Date(2010,0,1));
console.log(copiaPeliculas);

const directorPelicula = listaPeliculas.map( obj => obj.director);
console.log(directorPelicula);

const tituloPelicula = listaPeliculas.map( obj => obj.nombre);
console.log(tituloPelicula);

const directoryPelicula = directorPelicula.concat(tituloPelicula);
console.log(directoryPelicula);

const datosPeliculaPropa = [...directorPelicula,...tituloPelicula];
console.log(datosPeliculaPropa);