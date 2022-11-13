import toDoFactory from "./toDo.js";
import projectFactory from "./project.js";
import initializeDom from "./domRender.js";
import './style.css';

initializeDom();

const toDo1 = toDoFactory();
toDo1.setTitle("Compra");
console.log(toDo1.getTitle());

const openModalButtons = document.querySelectorAll("[data-open-modal]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]")
const overlay = document.querySelector('#overlay');

openModalButtons.forEach( button =>{
    button.addEventListener('click' , (e) => {
        const idOpen = e.target.dataset.openModal;
        const modalToOpen = document.querySelector(idOpen);
        openModal(modalToOpen);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const modalToClose= button.closest('.modal');
        closeModal(modalToClose);
    });

});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })
  

function openModal (modal) {
    modal.classList.add('active');
    // Overlay is already declared global function
    overlay.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
