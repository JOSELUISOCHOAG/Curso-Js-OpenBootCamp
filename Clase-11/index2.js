// Creación y uso de clases en JavaScript
// Creación y uso de clases en JavaScript

class persona {
    nombre;
    apellido;
    edad;
    isDeveloper;

    constructor(nombre,apellido,edad,isDeveloper){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.isDeveloper=isDeveloper;
    }

    saludar() {
        console.log("Hola, Soy ",this.nombre);
    }
    getNombre() {

    }
    putNombre() {

    }

}

const myPersona = new persona("Jose","Ochoa",45,true);

console.log(myPersona.nombre);
myPersona.saludar();