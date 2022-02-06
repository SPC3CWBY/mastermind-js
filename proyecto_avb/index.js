//?  JavaScript - Mastermind
//?  Alexis Vaquero

//!  Proyecto JavaScript

/*  Estructura de la tarea
    Tarea: 
    [boolean] Description
*/

//! Library
function init_readline(){
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
}
//? Funciones

function add_task(task_list, task) {
    task_list.push(task);
    return console.log('Tarea agredada exitosamente. ');
}

function create_task(task,task_list){
    const rl = init_readline();
    rl.question('¿Cual es el nombre de la tarea ', function(name_task) {
        task.task_des = name_task; 
        task.check = false; 
        rl.close(); 
    });
    add_task(task,task_list);
}

function show_tasks(task_list) {
    for (const task of tasklist) {
        console.log(task_list[task]);
    }
}

function print_menu(){
    //! MENU FORMAT
    console.clear();
    console.log('💥 Administrador de Tareas 💥\n');
    console.log('1. Agregar tarea. ');
    console.log('2. Anotar tarea hecha.');
    console.log('3. EXIT');
}

function option_menu(){
    const rl = init_readline();
    let option = '';
    //! Switch-Case option
    rl.question('¿Que opcion eliges? --: ', function(opc_menu) {
        option = opc_menu;
        rl.close();
    });
    return option
}

//! funcion principal
function main(){
    //! Variables
    let task = {
        check:      false,
        task_des:   ''
    }
    let task_list = [];
    let end_program = false;
    let opc = undefined;

    //? DO-WHILE 
    do {
        //! PRINT MENU
        print_menu();
        //! OPTION MENU
        opc = option_menu();
        switch (opc) {
            case 1:
                //! Primer modo: Lectura de las tareas necesarias.
                create_task(task,task_list);
                show_tasks(task_list);
                break;
            
            case 2:
                //? Segundo modo: Marcar las tareas realizadas.
                break;

            case 3:
                    end_program = true;
                break;

            default:
                console.log('Opcion incorrecta. Intenta de nuevo');
                break;
        }
    } while (end_program == false);
}

main();
