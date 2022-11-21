import ToDo from "./toDo.js";
import Project from "./project.js";
import {initializeDom , initializeModals , printToDoList, printProjectList} from "./domRender.js";
import './style.css';


initializeDom();
initializeModals();

const toDoList = [];
if (localStorage.getItem('ToDoStored')) {
    retrieveStoredToDo(toDoList);
} 
//print project list

const title = document.querySelector('#title');
const notes = document.querySelector('#notes');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');

export const projectList = [];
// const defaultProject = projectFactory();
//     //NEEDS IMPROVEMENT
// defaultProject.setTitle("Default Project");
// defaultProject.setDescription("Default");
// defaultProject.setSelected(1);

if (!localStorage.getItem('ProjectsStored')) {
    const defaultProject = new Project("Default Project", "Default",1);
    projectList.push(defaultProject);
  } else {
    retrieveStoredProject(projectList);
  }
console.log(projectList);
printProjectList(projectList);



let buttonSubmit = document.querySelector("[data-close-modal = 'addToDo']")
buttonSubmit.addEventListener('click' , submitForm)



function submitForm () {
    
    
    //Filter projectList to see which one has getSelected === 1 y le metemos esa property
    const projectSelected = getSelected(projectList);
    const NewToDo = new ToDo(title.value,date.value,priority.value,notes.value,projectSelected);
    toDoList.push(NewToDo);
    
    const listWithProject = filterToDo(projectSelected);

    // STORE THE LIST 
    
    let ToDoList_serialized = JSON.stringify(toDoList);
    localStorage.setItem("ToDoStored" , ToDoList_serialized);
    
    printToDoList(listWithProject);
    
    clearInputs();
  
}




let buttonProject = document.querySelector("[data-close-modal = 'addProject']")
buttonProject.addEventListener('click' , submitProject)


const name = document.querySelector('#name');
const description = document.querySelector('#description');
let projectList_serialized= [];
function submitProject () {
    

    const NewProject = new Project(name.value,description.value,0)

    projectList.push(NewProject);
    
    // STORE THE LIST 
    
    
    updateProjectStorage(projectList);
    
    printProjectList(projectList);
    
    
    clearInputs();
  
}

export function updateProjectStorage (list) {
    projectList_serialized = JSON.stringify(list);
    localStorage.setItem("ProjectsStored" , projectList_serialized);
}

function getSelected (projects) {
    
    // const projectSelected = projects.filter(project => project.getSelected() ===1);
    for (let i= 0 ; i<projects.length ; i++){
        // if (projects[i].getSelected() ===1){
        //     return projects[i].getTitle();
        // }
        if (projects[i].selected ===1){
            return projects[i].title;
        }
    }
}

function resetSelectedProject () {
    projectList.forEach( project => {
        project.selected =0;
    })
}

function clearInputs () {
    title.value = "";
    notes.value = "";
    date.value = "";
    name.value= "";
    description.value= "";
}

function filterToDo (projectName) {
    const newList = [];
    console.log(projectName);
    console.log("This are the toDos that match")
    for (let i= 0 ; i<toDoList.length ; i++){
        if (toDoList[i].project === projectName){
            newList.push(toDoList[i])
        }
    }
    return newList;
}
 
function retrieveStoredProject(list) {
    
    const normalObject = JSON.parse(localStorage.getItem('ProjectsStored'));
    for (let i=0; i<normalObject.length;i++){
        const newProject = new Project(normalObject[i].title,normalObject[i].description,normalObject[i].selected);
        list.push(newProject);
    
    }
}

function retrieveStoredToDo(list){
    
    const normalObject = JSON.parse(localStorage.getItem('ToDoStored'));

    for (let i=0; i<normalObject.length;i++){
        const newToDo = new ToDo(normalObject[i].title, normalObject[i].dueDate, normalObject[i].priority, normalObject[i].description, normalObject[i].project);
        list.push(newToDo);
    
    }
}

export {resetSelectedProject , filterToDo, retrieveStoredProject};