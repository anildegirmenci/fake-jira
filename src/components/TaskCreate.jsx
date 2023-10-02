import { useState, useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
    const {createTask} = useContext(TasksContext);
    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskformUpdate){
            onUpdate(task.id, title, taskDesc);
            // editTaskById(task.id, title, taskDesc);
        }
        else{
            // onCreate(title, taskDesc);
            createTask(title, taskDesc);
        }
        setTitle('');
        setTaskDesc('');
    }
    return (<div>{taskformUpdate ? (
        <div className="task-update">
            <h2>Please edit your task</h2>
            <form className="task-form">
                <label className="task-label">Change your task heading</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Re-enter your task</label>
                <textarea value={taskDesc} onChange={handleTaskChange} rows={5} className="task-input" />
                <button onClick={handleSubmit} className="task-button update-button">Edit Task</button>
            </form>
        </div>) : (<div className="task-create">
            <h2>Please enter a Task</h2>
            <form className="task-form">
                <label className="task-label">Headline</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Enter a task</label>
                <textarea value={taskDesc} onChange={handleTaskChange} rows={5} className="task-input" />
                <button onClick={handleSubmit} className="task-button">Add Task</button>
            </form>
        </div>)}

    </div>);
}

export default TaskCreate;