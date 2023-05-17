// Errores, gestion.

const miFunction = valor => {
    if (typeof valor === "number") {
        valor * 2;
    }
    throw new Error("Error.!, no a enviado un numero")
}

////////////////////////////////////

function duplicar(numero) {
    return numero*2;
}

let numero = "3";
try {
    console.log("correcto");
    let doble = miFunction(numero);
    console.log(doble);
} 
catch(e) {
    console.log(e) 
    console.log("a fallado, error");
}
finally{
    console.log("proceso terminado");
}