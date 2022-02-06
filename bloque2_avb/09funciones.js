//?  JavaScript - Mastermind
//?  Alexis Vaquero

//!  Funciones

//! Sin Parametros
function proceso1() {
    console.log('Hola');
}
proceso1();

//! Con Parametros.
function proceso2(nombre, apellido) {
    console.log(nombre + ' ' + apellido);
}
proceso2('Alexis','Vaquero');
proceso2('Alexis','Perez');

//! Con parametros + return
function proceso3(num1, num2) {
    return (num1+num2)/2;
}
var first_number = 2;
var second_number = 4;
var mid_point = proceso3(first_number,second_number);
console.log('La media de '+ first_number + ' y ' + second_number + ' es: ' + mid_point);


//TODO Funciones avanzadas.
//! Asginar funciones a variables.
var logica_saludar = function(nombre) {console.log("Hola mi nombre es: "+ nombre);}

//! Pasar funciones como parametro
function saludarSuperEducadamente(funcion_pasada_por_parametro, nombre) {
    console.log('Disculpe, perdone que le moleste, pero ');
    //? Ejecuta la función que hemos recibido y su parametro necesario
    funcion_pasada_por_parametro(nombre);
    console.log('Nice');
}

//! Ejecución completa
saludarSuperEducadamente(logica_saludar,'Alexis');