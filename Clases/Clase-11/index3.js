// Ámbito de las clases, métodos y atributos públicos, privados y protegidos

class persona {
    // atributos o propiedades privadas -> privated, solo se pueden acceder desde dentro de la clase.
    #nombre;
    #apellido;
    #edad;
    // atributos o metodos Protegidos -> Protected
    // se podran acceder a los Protected desde la clase padre y de las clases descendientes
    _isDeveloper;

    constructor( nomb, anno ) {
        this.#nombre = nomb;
        this.#edad = anno;
        this._isDeveloper = true;
        }

    // moetodos publicos
    saludar() {
        console.log("Hola, Soy ",this.#nombre,"mi edad es ",this.getEdad(),);
        }
    
        // metodos Privados     
    #getApellido() {
        return this.#apellido;
        }
    #getIsdev() {
        return this._isDeveloper;
        }
    
    // Getters (obtener) en objetos deben ser publicos

    getEdad() {
        return this.#edad;
        } 
    getNombre() {
        return this.#nombre;
        }

    // Setters (asignar) en objetos deben ser publicos
    setEdad(anno) {
        this.#edad = anno;
        }
    setApellido(apellido) {
        this.#apellido = apellido;
        }
}

const myPersona = new persona("Luis",70)

console.log(myPersona.getNombre());
console.log(myPersona._isDeveloper);
myPersona.saludar();
console.log(myPersona);