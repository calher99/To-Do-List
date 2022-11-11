import toDoFactory from "./toDo.js";
import projectFactory from "./project.js";
import initializeDom from "./domRender.js";
import './style.css';

initializeDom();

const toDo1 = toDoFactory();
toDo1.setTitle("Compra");
console.log(toDo1.getTitle());

const addToDo = document.querySelector("#addToDo")
addToDo.addEventListener('click' , () => {
    const modalToDo = document.querySelector("#modal");
    modalToDo.classList.add('active');
    const overlay = document.querySelector("#overlay");
    overlay.classList.add('active');
})


