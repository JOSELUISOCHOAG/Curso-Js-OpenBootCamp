// Carga y sobrecarga de funciones

/* carga de funciones
main()
saludar(), main()
hola(), saludar(), main()
saludar(), main()
main()
*/

function saludar(){
    hola();
}

function hola(){
    console.log("buenas tardes, soy la funcion hola()");
}

saludar();



// Sobrecarga son llamados infinitos de las funciones, generando overflow
// maximun call stack size exceeded

/*
main()
saludar1(), main()
hola1(), saludar1(), main()
saludar1(),hola1(), saludar1(), main()
hola1(),saludar1(),hola1(), saludar1(), main()
hola1(),saludar1(),hola1(), saludar1(),hola1(),saludar1(),hola1(), main(),
..
..
maximun call stack size exceeded
*/

function saludar1(){
    hola1();
}

function hola1(){
    console.log("buenas tardes, soy la funcion hola()");
    saludar1();
}

saludar1();