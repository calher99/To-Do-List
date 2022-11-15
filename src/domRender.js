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
                labelTitle.textContent = "Notes";
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
                    option1.setAttribute('value', 'High');
                    option1.textContent = "High";
                    const option2 = document.createElement('option');
                    option2.setAttribute('value', 'Medium');
                    option2.textContent = "Medium";
                    const option3 = document.createElement('option');
                    option3.setAttribute('value', 'Low');
                    option3.textContent = "Low";
                appendElements(selectPriority,option1,option2,option3);
            appendElements(field4,labelPriority,selectPriority);
            
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('addToDo');
            button.dataset.closeModal="addToDo";
            button.textContent = "Add Note";
        appendElements(form,field1,field2,field3,field4,button);

        modal.appendChild(form);
    document.body.appendChild(modal);

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
        divCheck.appendChild(check);

        const title = document.createElement('div');
        title.textContent = toDo.getTitle();

        const date = document.createElement('div');
        date.textContent = toDo.getDueDate();

        const svgContainer = createDivClass("priority");
        svgContainer.textContent = toDo.getPriority();
            if(toDo.getPriority() === ""){
                svgContainer.setAttribute('style' , 'background-color: red;');
            }else if (toDo.getPriority() === "High"){
                svgContainer.setAttribute("style", "background-color: red;");
            }else if (toDo.getPriority() === "Medium"){
                svgContainer.setAttribute("style", "background-color: blue;");
            }else{
                svgContainer.setAttribute("style", "background-color: green;");
            }

        if(toDo.getChecklist()===true){

            const crossOut1 = document.createElement('s');
            crossOut1.appendChild(title);
    
            const crossOut2 = document.createElement('s');
            crossOut2.appendChild(date);
    
            const crossOut3 = document.createElement('s');
            crossOut3.appendChild(svgContainer);

            appendElements(toDoContainer,divCheck,crossOut1,crossOut2,crossOut3);

        }else{
            appendElements(toDoContainer,divCheck,title,date,svgContainer);
        }
    
    
    content.appendChild(toDoContainer);
}





export {initializeDom , initializeModals , printToDoList}
