const misDatos = {
    nombre: "Jose Luis",
    apellido: "Ochoa",
    edad: 45,
    altura: 1.76,
    eresDesarrollador: true
};

let myEdad = misDatos.edad;

const listaDatos = [
    {...misDatos},
    {
        nombre: "Jose Luis",
        apellido: "Guevara",
        edad: 46,
        altura: 1.67,
        eresDesarrollador: false
    },
    {
        nombre: "Michael",
        apellido: "Gimenez",
        edad: 44,
        altura: 1.78,
        eresDesarrollador: true
    }   
];

const listaOrdenada = listaDatos.sort((i,j) => j.edad-i.edad );

console.log(listaOrdenada);
