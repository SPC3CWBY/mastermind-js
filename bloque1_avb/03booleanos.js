//  JavaScript - Mastermind
//  Alexis Vaquero

//! Booleanos

var booleano = true;
booleano = false;   

var a = '10';
var b = 10;

// Operadores 
//? > , < , >= , <= , == , === , != , !==
var aMayorQue = a > b

// si se compara un texto con un numero, se hace un cast al texto por entero 
console.log('Comparativa texto a =',typeof(a),'Resultado:',a == b);
// Si se usa triple igual compara el tipo y valor de dato
console.log('Triple igual',a === b);

// rangos
var rango_inicio = 0;
var rangoFinal = 100;
var numero_a_comparar = 101;

var mayor_que_inicio = numero_a_comparar > rango_inicio;
var menor_que_final = numero_a_comparar < rangoFinal;

//? && = AND , || = OR , ! = NOT

var dentro_de_rango = mayor_que_inicio && menor_que_final;
console.log('Numero:',numero_a_comparar,'Esta dentro del rango? ',dentro_de_rango);

var ha_hecho_trabajo = true;
var nota_examen_final = 6;
var falta_tecnica = true;
console.clear();

//! (Si ha hecho el trabajo o aprueba el examen) y NO tiene una falta tecnica
// ? !falta tecnica es lo mismo que falta tecnica == false
if ((ha_hecho_trabajo == true || nota_examen_final > 5) && !falta_tecnica) {
    console.log('Ha aprobado el curso');
} else {
    console.log('Ha reprobado el curso');
}
console.log('');

//! Ejercicio 
/*
El ejercicio consiste en, dadas dos rectas en una línea unidimensional
determinar si existe solape entre las dos rectas utilizando operaciones 
de comparación.

Por ejemplo, si definimos las rectas (a, b) y (c, d) con los siguientes valores:
------a-------------b--------------
--------------c-------------------d

------c-------------d--------------
--------------a-------------------b

*/

var a = 5;
var b = 20;
var c = 21;
var d = 25;
var solape = true;

if ((c > a) && (c < b) || (d > a) && (d < b)) {
    solape = true;
    console.log("Hay solape?:",solape);
} else {
    solape = false;
    console.log("Hay solape?:",solape);
}

// (c > a) && (c < b) || (d > a) && (d < b)