

function projectFactory () {

    let _title = '';
    let _description = '';
    let _selected = 0;
    let _toDoList = [];
    
    const setTitle = (word) => _title = word;
    const setDescription = (text) => _description = text;
    const setSelected = (boolean) => _selected = boolean;
    const getTitle = () => _title;
    const getDescription = () => _description;
    const getSelected = () => _selected;
    const addToDo = (toDo)  => {
        _toDoList.push(toDo);
    }

    return{

        setTitle,
        setDescription,
        setSelected,
        getTitle,
        getDescription,
        getSelected,
        addToDo
    }
}

export default projectFactory