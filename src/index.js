import toDoFactory from "./toDo.js";
import projectFactory from "./project.js";
import {initializeDom , initializeModals , printToDo} from "./domRender.js";
import './style.css';


initializeDom();
initializeModals();

const toDoList = [];


const title = document.querySelector('#title');
const notes = document.querySelector('#notes');
const date = document.querySelector('#date');
const buttonSubmit = document.querySelector("[data-close-modal = 'addToDo']")

buttonSubmit.addEventListener('click' , ()=> {

    const newToDo = toDoFactory();
    newToDo.initializeToDo(title.value,notes.value,date.value, "","","defaultProject");
    toDoList.push(newToDo);
    printToDo(toDoList[0]);
    
    clearInputs();
   
})

function clearInputs () {
    title.value = "";
    notes.value = "";
    date.value = "";
}