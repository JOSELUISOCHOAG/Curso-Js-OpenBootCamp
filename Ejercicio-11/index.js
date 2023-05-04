// Ejercicio propuesto nro 11

class Estudiante {
    #nombre;
    asignaturas = new Array(3);
    constructor(nombre) {
        this.#nombre = nombre;
        this.asignaturas = ["JavaScritp","HTML","CSS"];
        }
    
    obtenDatos() {
        return {
            nombre: this.#nombre,
            asignatura: this.asignaturas
        }
    }
}

const estudiante1 = new Estudiante("Jose Luis")

// console.log(estudiante1);
console.log(estudiante1.obtenDatos());