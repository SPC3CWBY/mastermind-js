//?  JavaScript - Mastermind
//?  Alexis Vaquero

//!  Bucles.

//! While
var contador = 0;
var n = 50;
while (contador < n) {
    //console.log(contador);
    contador++;
}

contador = 0;
//! Do-While
do {
    contador ++;
    //! Primera iteracion
} while (contador < 10);

//! For 
//? Incremento de 1
for (var i = 0; i < n ; i++) {
    //console.log(i);
}
//? Incremento de 2 o puede ser n
for (var i = 0; i < n ; i += 2) {
    //console.log(i);
}

//? Bucles Avanzados.
//! Iterar sobre arrys y objetos
var array = [10,20,30];

//! Array de objetos
var estudiantes = [
        //? Primer estudiante
    {
        nombre  : 'Estudiante 1',
        nota    :  5
    }, 
        //? Segundo estudiante
    {
        nombre  : 'Estudiante 2',
        nota    :  8
    },
        //? Tercer estudiante
    {
        nombre  : 'Estudiante 3',
        nota    :  1
    }
]

//* Array for-of - aplica tambien para contenido // para objetos
for (var estudiante of estudiantes) {
    console.log(estudiante.nombre,estudiante.nota);
}

var estudiante_auxiliar = {
    nombre: 'Estudiante 1',
    nota:   5
}

//* Objetos - Diccionarios  For-in #Para ver atributos de un objecto KEYS // Tambien para for
for (var key in estudiante_auxiliar) {
    console.log(key, estudiante_auxiliar[key]);
}


//! Ejercicio Arbol.
//console.clear();

//! Impresion sin salto de linea
//! process.stdout.write(' ')    
var pisos = 3;

for(var piso = 1; piso <= pisos; piso++){
    switch (piso) {
        case 1:
            console.log('  *  ');
            break;
        case 2:
            console.log(' *** ');
            break;
        case 3:
            console.log('*****');
            console.log('  *  ');
            console.log('  *  ');
            break;
        default:
            console.log("Pisos fuera del limite");
            break;
        }
}

