

function toDoFactory () {
    
    let _title = '';
    let _dueDate = '';
    let _priority = '';
    let _notes = '';
    let _checklist = '';

    const initializeToDo = (word,note,date,level,check) => {
        _title = word;
        _notes = note;
        _dueDate = date;
        _priority = level;
        _checklist = check;
    }
    const setTitle = (word) => _title = word;
    const setdueDate = (date) => _dueDate = date;
    const setPriority = (level) => _priority = level;
    const setNotes = (note) => _notes = note;
    const setChecklist = (check) => _checklist = check;

    const getTitle = () => _title;
    const getdueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getNotes = () => _notes;
    const getChecklist = () => _checklist;
    

    return{

        initializeToDo,
        setTitle,
        setdueDate,
        setPriority,
        setNotes,
        setChecklist,
        getTitle,
        getdueDate,
        getPriority,
        getNotes,
        getChecklist         
    }
}

export default toDoFactory