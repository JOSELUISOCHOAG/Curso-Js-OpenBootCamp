// Funciones Generadoras

function* generarId() {
    let id = 0;
    while (true){
        id++;
        if (id === 10) {
            return id;
            }
        yield id; // instruccion congela y retorna el id. hasta un nuevo llamado para generar el siguiente 
    }
}

const generar = generarId();

console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);

