//?  JavaScript - Mastermind
//?  Alexis Vaquero

//!  Ejercicio Funciones

// En éste ejercicio se debe escribir una función que reciba dos parámetros.
// Por un lado, debe recibir un primer parámetro que debe ser un vector de números. 
// El segundo parámetro ha de ser un número.

// La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, 
// haciendo que el array resultante sea un array como el original pero por cada número multiplicado.

function mul_arrays(array, num) {
    array_res = [];
    for (var i in array) {
        array_res[i] = array[i]*num;
    }
    return console.log('Array Resultante: ', array_res);
}

array_exm = [1,2,4,4,5,2];
mul_arrays(array_exm, 5);
