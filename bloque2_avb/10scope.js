//?  JavaScript - Mastermind
//?  Alexis Vaquero

//!  SCOPE

/* Variables locales y globales

El scope es el contexto donde una variable es visible
existen 2 scopes principales: global y local

Scope global: Toda variable que está fuera de una funcion
*/

var variableGlobal = 1;
function global() {
    console.log(variableGlobal);
}
global();
console.log(variableGlobal);


// Scope local: solo visible dentro de una funcion
function local() {
    var variableLocal = 2;
    console.log(variableLocal);
}

local();
//console.log(variableLocal); // No funciona

// En javascript moderno (>2015) existe let
// let define scope de bloque (Variables) // Let toma en cuenta que es local
// un bloque es todo lo que se encuentra entre { y }
//! USAR SIEMPRE LET

//! CONST
// Const PI = 3.1416 


