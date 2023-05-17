// Introducción a la Programación Orientada a Objetos

const persona =  {
    nombre: "Jose",
    apellido: "Ochoa",
    edad: 45,
    saludo : function() {
        console.log("Hola");
        }
}

// funcion factory. para crear un objeto nuevo

const crearPersona = (nombre,apellido,edad) => {
    return {
        nombre,       // es igual a nombre : nombre
        apellido,     //          apellido : apellidos,
        edad,         //              edad : edad,
        saludo: function() {
        console.log("Hola, ");
        }
    }
}

// creamos un nuevo objeto
const nuevaPersona = crearPersona("Luis","Alvarado",45);
console.log(nuevaPersona);

console.log(nuevaPersona.nombre);
console.log(persona.nombre);
