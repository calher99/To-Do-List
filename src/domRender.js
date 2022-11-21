import flag from './svgs/flag.svg'
import {resetSelectedProject , filterToDo , retrieveStoredProject, updateProjectStorage, updateToDoStorage} from './index.js';
import { projectList , toDoList } from './index.js';
//functions to append

const createDivClass = (className) =>{
    const div = document.createElement('div')
    div.classList.add(className);
    return div;
}
const createDivText = (text) =>{
    const div = document.createElement('div')
    div.textContent=text
    return div;
}

const appendElements = (parent, ...children) =>{
    children.forEach(child => {
        parent.appendChild(child);
    })
}

//Print structure of page

const initializeDom = () => {

    const sideBar = createDivClass("sidebar");
    document.body.appendChild(sideBar);
        const sideBarField = createDivClass("sidebarField");
            const sidebarIcon = createDivClass("icon");
            const usernameDiv = createDivText("Username");
        appendElements(sideBarField,sidebarIcon,usernameDiv);
    sideBar.appendChild(sideBarField);
        const nav = document.createElement('nav');
        nav.setAttribute('id','projectList')
    sideBar.appendChild(nav)
    const divAddProject = document.createElement('div');
        const divAdd2 = createDivClass("add");
                divAdd2.dataset.openModal = "#addProject"
                divAdd2.textContent = "+"
        divAddProject.appendChild(divAdd2);
    nav.appendChild(divAddProject);
    // <div><div class="add">+</div></div>
    const content = createDivClass("content");
    content.setAttribute('id', 'content');
        const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            // divAdd.setAttribute('id' , 'addToDo');
            divAdd.dataset.openModal = "#addToDo"
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
        content.appendChild(divAddContainer);
    document.body.appendChild(content);
    const overlay = createDivClass("overlay");
    overlay.setAttribute('id' , "overlay");
    document.body.appendChild(overlay);
    const modal = createDivClass("modal");
    modal.setAttribute('id' , "addToDo");
        const form = document.createElement('form');
        form.setAttribute('id' , 'newToDo');
            const field1 = createDivClass("field");
                const labelTitle = document.createElement('label');
                labelTitle.setAttribute('for','title');
                labelTitle.textContent = "Title: *";
                const inputTitle = document.createElement("input");
                inputTitle.setAttribute('type' , 'text');
                inputTitle.setAttribute('id' , 'title');
                inputTitle.setAttribute('name' , 'title');
            appendElements(field1,labelTitle,inputTitle);
            const field2 = createDivClass("field");
                const labelNotes = document.createElement('label');
                labelNotes.textContent = "Notes:"
                labelNotes.setAttribute('for','notes');
                const inputNotes = document.createElement("textarea");
                inputNotes.setAttribute('id' , 'notes');
                inputNotes.setAttribute('name' , 'notes');
                inputNotes.setAttribute('rows' , '4');
                inputNotes.setAttribute('cols' , '50');
            appendElements(field2,labelNotes,inputNotes);
            const field3 = createDivClass("field");
                const labelDate = document.createElement('label');
                labelDate.setAttribute('for','date');
                labelDate.textContent = "Date:";
                const inputDate = document.createElement("input");
                inputDate.setAttribute('type' , 'date');
                inputDate.setAttribute('id' , 'date');
                inputDate.setAttribute('name' , 'date');
            appendElements(field3,labelDate,inputDate);
            const field4= createDivClass("field");
                const labelPriority = document.createElement('label');
                labelPriority.setAttribute('for','priority');
                labelPriority.textContent = "Select a priority level:";
                const selectPriority = document.createElement("select");
                selectPriority.setAttribute('name' , 'priority');
                selectPriority.setAttribute('id' , 'priority');
                    const option1 = document.createElement('option');
                    option1.setAttribute('value', '');
                    option1.textContent = "none";
                    const option2 = document.createElement('option');
                    option2.setAttribute('value', 'High');
                    option2.textContent = "High";
                    const option3 = document.createElement('option');
                    option3.setAttribute('value', 'Medium');
                    option3.textContent = "Medium";
                    const option4 = document.createElement('option');
                    option4.setAttribute('value', 'Low');
                    option4.textContent = "Low";
                appendElements(selectPriority,option1,option2,option3,option4);
            appendElements(field4,labelPriority,selectPriority);
            
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('addToDo');
            button.dataset.closeModal="addToDo";
            button.textContent = "Add Note";
        appendElements(form,field1,field2,field3,field4,button);

        modal.appendChild(form);
    document.body.appendChild(modal);
///////////////////////////////MODAL 2
        const modalProject = createDivClass("modal");
        modalProject.setAttribute('id' , "addProject");
        const form2 = document.createElement('form');
        form2.setAttribute('id' , 'newProject');
            const field5 = createDivClass("field");
                const labelName = document.createElement('label');
                labelName.setAttribute('for','name');
                labelName.textContent = "Name: *";
                const inputName = document.createElement("input");
                inputName.setAttribute('type' , 'name');
                inputName.setAttribute('id' , 'name');
                inputName.setAttribute('name' , 'name');
            appendElements(field5,labelName,inputName);
            const field6 = createDivClass("field");
                const labelDescription = document.createElement('label');
                labelDescription.textContent = "Description:"
                labelDescription.setAttribute('for','description');
                const inputDescription = document.createElement("textarea");
                inputDescription.setAttribute('id' , 'description');
                inputDescription.setAttribute('name' , 'description');
                inputDescription.setAttribute('rows' , '4');
                inputDescription.setAttribute('cols' , '50');
            appendElements(field6,labelDescription,inputDescription);
            
            const buttonProject = document.createElement('button');
            buttonProject.setAttribute('type', 'button');
            buttonProject.classList.add('addProject');
            buttonProject.dataset.closeModal="addProject";
            buttonProject.textContent = "Add Project";
        appendElements(form2,field5,field6,buttonProject);

        modalProject.appendChild(form2);
    document.body.appendChild(modalProject);

// CALL LOCAL STORAGE

    //  const projectListStored = retrieveStoredProject()
    //  console.log(projectListStored)
    //  printProjectList(projectListStored)
// if (storageAvailable('localStorage')) {
//     let StoredProjects = JSON.parse(localStorage.getItem('ProjectsStored'));
//     console.log(StoredProjects);
//   }
//   else {
//     console.log("NO LOCAL STORAGEEEEE")
//   }
    

}

const initializeModals = () => {

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
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

}


const printToDoList = (list) =>{

    const content = document.querySelector('#content');
    while (content.firstChild) {
            content.removeChild(content.lastChild);
    }
    list.forEach( (toDo) =>{
        printToDo(toDo)
    })

    const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            // divAdd.setAttribute('id' , 'addToDo');
            divAdd.dataset.openModal = "#addToDo"
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
    content.appendChild(divAddContainer);

    initializeModals();


}
const printToDo = (toDo) =>{
    const content = document.querySelector('#content');
    const toDoContainer = createDivClass("todo");
        const divCheck = document.createElement('div');
            const check = createDivClass("checkBox");
            check.addEventListener('click', ()=>{
                toDo.clickCheck();

                while (toDoContainer.firstChild) {
                    toDoContainer.removeChild(toDoContainer.lastChild); 
                }
                setCheck();
                updateToDoStorage(toDoList);

            });
        divCheck.appendChild(check);

        const title = document.createElement('div');
        title.textContent = toDo.title;

        const date = document.createElement('div');
        date.textContent = toDo.dueDate;
           
        const svgContainer = createDivClass("priority");
        svgContainer.textContent = toDo.priority;
        setColorPriority(svgContainer,toDo);
        // const svgImage = document.createElement('img');
        // svgImage.src = flag;
        // svgContainer.appendChild(svgImage);
        setCheck();
        
    
    
    content.appendChild(toDoContainer);

    function setCheck() {
        
        if(toDo.checklist===1){
            toDoContainer.classList.add("crossed")
            const crossOut1 = document.createElement('s');
            crossOut1.appendChild(title);
    
            const crossOut2 = document.createElement('s');
            crossOut2.appendChild(date);
    
            const crossOut3 = document.createElement('s');
            crossOut3.appendChild(svgContainer);

            appendElements(toDoContainer,divCheck,crossOut1,crossOut2,crossOut3);

        }else{
            toDoContainer.classList.remove("crossed")
            appendElements(toDoContainer,divCheck,title,date,svgContainer);
        }
    }
}


function setColorPriority(div , toDo){
    if(toDo.priority === ""){
        return;
    }else if (toDo.priority  === "High"){
        div.setAttribute("style", "color: red;");
    }else if (toDo.priority  === "Medium"){
        div.setAttribute("style", "color: blue;");
    }else{
        div.setAttribute("style", "color: green;");
    }
    return;
}

const printProjectList = (projects) => {
    
    const navPointer = document.querySelector('#projectList');
    while (navPointer.firstChild) {
        navPointer.removeChild(navPointer.lastChild);
    }

    projects.forEach( (project) =>{
        printProject(project)
    })

    const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            // divAdd.setAttribute('id' , 'addToDo');
            divAdd.dataset.openModal = "#addProject"
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
    navPointer.appendChild(divAddContainer);
    
    initializeModals();
    
}

const printProject = (project) => {
     
    const navPointer = document.querySelector('#projectList');
        const div = createDivClass("project");
        div.textContent = project.title;
        const hr = document.createElement('hr');
        const listToDo = filterToDo(project.title);

        if(project.selected === 1){
            div.classList.add('active');
            printToDoList(listToDo);
        }
      
        div.addEventListener('click', (e) => {
            //get dataset
            // console.log(e.target.dataset.projectName);
             //remove active from othes
            removeActiveClass(navPointer);
            //add active class
            e.target.classList.add('active')
            //actualProject to store the dataset and add it to new created toDo
            resetSelectedProject();
            project.selected =1;
            updateProjectStorage(projectList);
            //displayList: to display todos with that name
            const listToDo = filterToDo(project.title);
            printToDoList(listToDo);



        });
    appendElements(navPointer,div,hr);
    
}

function removeActiveClass (element) {
    const children = Array.from(element.childNodes);
    children.forEach(child => {
        child.classList.remove('active');
    })
}



export {initializeDom , initializeModals , printToDoList, printProjectList}
