
///////////////////////////////////////// localStorage /////////////////////////////////////////////////////

localStorage.setItem("nombre","joseluis");
localStorage.setItem("usuario",{nombre:'jose',edad:45}); // se puede pero lo conveniente es usar un formato JSON
localStorage.setItem("persona",JSON.stringify({nombre:"joseluisochoa",usuario:"jlog",edad:45}));

console.log(localStorage.getItem("nombre")); // devuelve um string
console.log(localStorage.getItem("persona")); // devuelve un string

console.log(JSON.parse( localStorage.getItem("persona") )); // devuelve un objeto

/////////////////////////////////////////// sesionStorage ////////////////////////////////////////////////////

sessionStorage.setItem("nombre2","joseluis");
sessionStorage.setItem("usuario2",{nombre:'jose',edad:45}); // se puede pero lo conveniente es usar un formato JSON
sessionStorage.setItem("persona2",JSON.stringify({nombre:"joseluisochoa",usuario:"jlog",edad:45}));

console.log(sessionStorage.getItem("nombre2")); // devuelve um string
console.log(sessionStorage.getItem("persona2")); // devuelve un string

console.log(JSON.parse( sessionStorage.getItem("persona2") )); // devuelve un objeto

/////////////////////////////////////////// Cookies //////////////////////////////////////////////////////////

document.cookie = "nombrecookie=valorcookie"
document.cookie = "nombrecookie=valorcookie;expires=" + new Date(2023, 6, 1).toUTCString() // implementa fecha de caducidad
                                                                                           // .toUTCString() retorna una cadena     

