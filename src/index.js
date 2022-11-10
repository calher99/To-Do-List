function createToDo (title,description,dueDate,priority,notes,checklist) {


    return{

        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
    }
}



function createProject (title , description) {

    let toDoList = [];

    const addToDo = (toDo)  => {
        toDoList.push(toDo);
    }

    return{
        title,
        description,
        toDoList,
        addToDo
    }
}


const todo_1= createToDo("Groceries","","monday","High","buy the amiantum for Clau","Groceries");
const todo_2= createToDo("asdsd","","mondasdy","Hisdfgh","bdsuy the amiantum for Clau","Grosdceries");


const project = createProject("Hola" , "Nada");

project.addToDo(todo_1);
project.addToDo(todo_2);


