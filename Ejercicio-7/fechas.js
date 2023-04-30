const fechaHoy = new Date();
const fechaNac = new Date(1976, 2, 5);

const esMayor = (fechaHoy > fechaNac);

const diaNac = fechaNac.getDate();
const mesNac = fechaNac.getMonth()+1;
const annoNac = fechaNac.getFullYear();

console.log(esMayor);