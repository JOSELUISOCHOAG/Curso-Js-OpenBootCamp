// Inheritance o Herencia

class Persona {
    _nombre;
    _edad;
    _isDeveloper=false;

    constructor(nombre, edad){
        this._nombre=nombre;
        this._edad=edad;
        }

    saludar() {
        console.log("Hola, mi nombre es ",this._nombre);
        }
}

class Desarrollador extends Persona {
    // Herencia
    constructor(nomb,anno,lengua){
        super(nomb,anno)
        this._isDeveloper=true;
        this.lenguaje=lengua;
    }
    saludar() {  // redefinir un metodo del padre en el hijo, se conoce como OVERRIDE. 
        // Polimorfismo
        super.saludar();
        console.log(`Soy desarrollador en ${this._lenguaje}`);
    }
}

const nuevaPer = new Persona("luis",35);
const nuevoDev = new Desarrollador("JoseLuis",45,"JavaScript");
//
console.log(nuevaPer);
console.log(nuevaPer._nombre);
//
console.log(nuevoDev);
console.log(nuevoDev.isDeveloper);
console.log(nuevoDev.lenguaje);

nuevaPer.saludar();
nuevoDev.saludar();

