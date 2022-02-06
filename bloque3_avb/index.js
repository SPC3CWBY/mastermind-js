//?  JavaScript - Mastermind
//?  Alexis Vaquero

//Usar siempre Const para no modificar valores de la libreria
//! Libreria de Node
const readline = require('readline'); 
//? Libreria de Terceros.
const moment = require('moment');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuantas iteraciones quieres? ', function(iterations) { 
    rl.question('¿Cuale es tu nombre? ', function(answer_name){
        for (let i = 0; i < iterations; i++) {
            console.log(i);
        }
        rl.close()
    });
});