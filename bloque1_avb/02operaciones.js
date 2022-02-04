//  JavaScript - Mastermind
//  Alexis Vaquero

//  Operaciones

// asignación
var a = 1;
var b = 2;

// Suma
var suma = a + b;
// Resta
var resta = a - b;
// Multiplicación
var mul = a * b;
// Division
var div = a / b;
// Modulo - Resto
var mod = a % b;
// Exponente
var exp = a ** b;

a += 3;
a++;

console.log("Resultado de a",a);

// texto

var nombre = "Alexis";
var apellido = 'Vaquero';

// Forma de agregar espacio
var nombreCompleto = nombre +' '+ apellido;
console.log('Primer forma:',nombreCompleto);

// Segunda forma
nombre += ' ';
nombre += apellido;
nombreCompleto_02 = nombre;
console.log('Segunda forma',nombreCompleto_02);

// Combinar operaciones con diferentes tipos !Warning 

var numero = 2;
var texto = 'hola';
var sumaCombinada = numero + texto;
// numero lo convierte en string 
console.log(sumaCombinada);

//? Ejercicio: Programa que nos diga los buenos días
// Resultado: Buenos días {name}
console.clear(); 
console.log('\nBuenos días',nombreCompleto_02);
console.log('\n');      
