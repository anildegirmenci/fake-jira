import { useState } from "react";

function TaskCreate({onCreate}) {
    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, taskDesc);
        setTitle('');
        setTaskDesc('');
    }
    return (<>
        <div className="task-create">
            <h2>Please enter a Task</h2>
            <form className="task-form">
                <label className="task-label">Headline</label>
                <input value={title} onChange={handleChange} className="task-input"/>
                <label className="task-label">Enter a task</label>
                <textarea value={taskDesc} onChange={handleTaskChange} rows={5} className="task-input"/>
                <button onClick={handleSubmit} className="task-button">Add Task</button>
            </form>
        </div>
    </>);
}

export default TaskCreate;