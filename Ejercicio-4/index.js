console.log("Ejercicio propuesto nro 4");

let strNombre = "   Jose Luis";
let strApellido = "Ochoa Gonzalez   ";
let estudiante = `${strNombre} ${strApellido}`;
let estudianteMayus = estudiante.toUpperCase().trim();
let estudianteMinus = estudiante.toLowerCase().trim();
let longEstudiante = estudiante.length;
let primeraLetra = strNombre.trimStart()[0];
let ultimaLetra = strApellido[(strApellido.trimEnd().length)-1];
let sinEspacios = estudiante.trim();
let tieneNombre = estudiante.includes(strNombre);

console.log("Nombre       : ", strNombre );
console.log("Apellidos    : ", strApellido );
console.log("Estudiante   : ", estudiante );
console.log("Mayusculas   : ", estudianteMayus) ;
console.log("Minusculas   : ", estudianteMinus) ;
console.log("Longitud     : ", longEstudiante) ;
console.log("1ra Letra    : ", primeraLetra) ;
console.log("2da Letra    : ", ultimaLetra) ;
console.log("Sin espacios : ",sinEspacios );

if (tieneNombre){
    console.log("Nombre si esta Contenido en estudiante!");}
else{
    console.log("Nombre no esta Contenido en estudiante!");}
