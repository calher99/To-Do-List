

function projectFactory () {

    const _title = '';
    const _description = '';
    let _toDoList = [];
    
    const setTitle = (word) => _title = word;
    const setDescription = (text) => _description = text;
    const getTitle = () => _title;
    const getDescription = () => _description;
    const addToDo = (toDo)  => {
        _toDoList.push(toDo);
    }

    return{

        setTitle,
        setDescription,
        getTitle,
        getDescription,
        addToDo
    }
}

export default projectFactory