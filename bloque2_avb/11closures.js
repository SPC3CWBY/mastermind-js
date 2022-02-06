//?  JavaScript - Mastermind
//?  Alexis Vaquero

//!  Closures  

// FUNCION EN SU CONTEXTO 
// Funcion que te devuelve otra función.

function create_function() {
    //! name es local por la funcion. SCOPE LOCAL
    var name = 'Alexis';
    //! Por eso puede agarrar name 
    function showName() {
        console.log(name);
    }
    //? Aquí esta la clausura, cuando devuelves la función
    return showName;
}

var myFunction = create_function();
myFunction();

// Example Closure

function createSum(x) {
    return function(y) {
        return x + y;
    };
}

    let sum4 = createSum(4);    // X = 4 como si fuera let x = 4 dentro de creatSum
    let sum10 = createSum(10);  // X = 10 como si fuera let x = 4 dentro de creatSum
    console.log(sum4(3), sum10(3))