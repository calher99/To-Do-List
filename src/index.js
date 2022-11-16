import toDoFactory from "./toDo.js";
import projectFactory from "./project.js";
import {initializeDom , initializeModals , printToDoList, printProjectList} from "./domRender.js";
import './style.css';


initializeDom();
initializeModals();

const toDoList = [];

const title = document.querySelector('#title');
const notes = document.querySelector('#notes');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
console.log(title)


let buttonSubmit = document.querySelector("[data-close-modal = 'addToDo']")
buttonSubmit.addEventListener('click' , submitForm)


function submitForm () {
    
    const newToDo = toDoFactory();
    newToDo.initializeToDo(title.value,notes.value,date.value,priority.value,"defaultProject");
    toDoList.push(newToDo);

    printToDoList(toDoList);
    
    clearInputs();
  
}
const projectList = [];
let buttonProject = document.querySelector("[data-close-modal = 'addProject']")
buttonProject.addEventListener('click' , submitProject)

const name = document.querySelector('#name');
const description = document.querySelector('#description');

function submitProject () {
    const newProject = projectFactory();
    //NEEDS IMPROVEMENT
    newProject.setTitle(name.value);
    newProject.setDescription(description.value);
    projectList.push(newProject);

    printProjectList(projectList);
    
    clearInputs();
  
}




function clearInputs () {
    title.value = "";
    notes.value = "";
    date.value = "";
    name.value= "";
    description.value= "";
}