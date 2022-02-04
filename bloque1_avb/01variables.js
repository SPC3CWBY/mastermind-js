//  JavaScript - Mastermind
//  Alexis Vaquero

//  Variables 

//? Variables
var cajaA = 3;
    cajaA = 5;
var cajaB = 5;
var cajaC = cajaA + cajaB;

//! Imprime en pantalla los resultados.
console.log(cajaA, cajaB, cajaC);


var x = 2;
var y = 3;

// intercambiar los valores de x e y
// x: 2, y: 3
// resultado: x: 3, y: 2
// funcion de swap

// Funcion de swap 01
    var z = x
    x = y
    y = z

//  Funcion de swap 02 PRO
//! Deestructuring 
    [x, y] = [y, x]

//! Imprimir con texto y variables
console.log('Resultado funcion swap: x:',x,'y:',y)
