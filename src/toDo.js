
function toDoFactory () {
    
    let _title = '';
    let _dueDate = '';
    let _priority = '';
    let _notes = '';
    let _checklist = '';
    let _project = '';

    const initializeToDo = (word,note,date,level,project) => {
        _title = word;
        _notes = note;
        _dueDate = date;
        _priority = level;
        _project = project;
    }
    const setTitle = (word) => _title = word;
    const setDueDate = (date) => _dueDate = date;
    const setPriority = (level) => _priority = level;
    const setNotes = (note) => _notes = note;
    const setChecklist = (check) => _checklist = check;

    const getTitle = () => _title;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getNotes = () => _notes;
    const getChecklist = () => _checklist;
    const getProject = () => _project;
    

    return{

        initializeToDo,
        setTitle,
        setDueDate,
        setPriority,
        setNotes,
        setChecklist,
        getTitle,
        getDueDate,
        getPriority,
        getNotes,
        getChecklist,
        getProject
    }
}

export default toDoFactory