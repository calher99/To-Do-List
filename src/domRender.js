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
        const divAddContainer = document.createElement('div');
            const divAdd = createDivClass("add");
            divAdd.setAttribute('id' , 'addToDo');
            divAdd.textContent = "+"
            divAddContainer.appendChild(divAdd);
        content.appendChild(divAddContainer);
    document.body.appendChild(content);
    const overlay = createDivClass("overlay");
    overlay.setAttribute('id' , "overlay");
    document.body.appendChild(overlay);
    const modal = createDivClass("modal");
    modal.setAttribute('id' , "modal");
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

            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('addToDo');
            button.setAttribute('id', 'addToDo');
            button.textContent = "Submit";
        appendElements(form,field1,field2,field3,button);

        modal.appendChild(form);
    document.body.appendChild(modal);

}

export default initializeDom

/* <div class="sidebar">
        <nav>
            <div class="project">Project1</div>
            <hr>
            <div class="project">Project2</div>
            <hr>
            <div><div class="add">+</div></div>
        </nav>
    </div>
    <div class="content">
        <div class="todo">
            <div>
                <!-- <input type="radio"> -->
                <div class="checkBox"></div>
            </div>
            <div>Text of To Do</div>
            <div>15/10/22</div>
            <div>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
                </svg>
            </div>
        </div>
        <div class="todo">To Do 2</div>
        <div class="todo">To Do 3</div>
        <div><div class="add">+</div></div>
    </div>

    <div class="overlay" id="overlay"></div>

    <div class="modal" id="modal">
        <form id="newToDo" name="newToDo" action="">
            <div class="field">
                <label for="title">Title: *</label>
                <input  type="text" 
                    id="title" 
                    name="title" 
                    required 
                    placeholder=" "
                    maxlength="245">
            </div>
            <div class="field">
                <label for="notes">Notes:</label>
                <textarea  id="notes" name="notes" rows="4" cols="50"></textarea> 
            </div>
            <div class="field">
                <label for="date">Date:</label>
                <input  type="date" 
                    id="date" 
                    name="date" 
                    >   
            </div>
            
            <button type="button" class="addToDo" id="addToDo">Submit</button>
        </form>

    </div> */

// Print To Do
