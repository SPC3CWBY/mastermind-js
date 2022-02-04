//  JavaScript - Mastermind
//  Alexis Vaquero

//  Vectores y Objetos

//  Arrays
var array = ["as","a", 3, 2, [1, 2], {nombre: 'Alexis'}]; //! String , num, array , objecto


var objeto_or_dictionary = {
    //! Atributos internos
    nombre: 'Alexis',
    apellido: 'Vaquero',
    edad: 25,
    coches: ['Ferrari', 'Lambo'],
    direccion: {
        calle: 'texto de la calle',
        numero: 4
    }
}

//? Arreglos 
var item0 = array[0];
var item1 = array[1];
var item2 = array[2];

var indice = 3;
var item3 = array[indice]
var item5_object = array[5].nombre;
var longitud = array.length; // tam

//! Objetos
var nombreObject = objeto_or_dictionary.nombre;
var textoCalle = objeto_or_dictionary.direccion.calle;
var coches = objeto_or_dictionary.coches[0];


//* Si se accede a algo que no se encuentra o no esta asignado js devuelve Undefined
// array
var item10 = array[10]
console.log(item10);    //! Undefined
// object
var piso = objeto_or_dictionary.direccion.piso;
console.log(piso);      //! Undefined

//! Error cuando hay un objecto no definido y se accede a un atributo 
var piso = objeto_or_dictionary.piso.numeroPiso;
console.log(piso);      //! TypeError: Cannot read properties of undefined (reading 'numeroPiso')
//! .piso. no esta definido


