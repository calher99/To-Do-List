import toDoFactory from "./toDo.js";
import projectFactory from "./project.js";
import {initializeDom , initializeModals , printToDoList} from "./domRender.js";
import './style.css';


initializeDom();
initializeModals();

const toDoList = [];

const title = document.querySelector('#title');
const notes = document.querySelector('#notes');
const date = document.querySelector('#date');

let buttonSubmit = document.querySelector("[data-close-modal = 'addToDo']")
buttonSubmit.addEventListener('click' , submitForm)


function submitForm () {
    
    const newToDo = toDoFactory();
    newToDo.initializeToDo(title.value,notes.value,date.value, "","","defaultProject");
    toDoList.push(newToDo);

    printToDoList(toDoList);
    
    clearInputs();
  
}
    


function clearInputs () {
    title.value = "";
    notes.value = "";
    date.value = "";
}