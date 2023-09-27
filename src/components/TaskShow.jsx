import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteTask = () => {
        onDelete(task.id);

    }
    const handleUpdateTask = () => {
        setShowEdit(!showEdit);
    }
    const handleSubmit = (id, updatedTitle, updatedDesc) => {
        setShowEdit(false);
        onUpdate(id, updatedTitle, updatedDesc);
    }
    return (
        <div className="task-show">
            {showEdit ? (
                <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />) :
                (
                    <div>
                        <h3 className="task-title">Your Task</h3>
                        <p>{task.title}</p>
                        <h3 className="task-title">Description of Task</h3>
                        <p>{task.taskDesc}</p>
                        <div>
                            <button className="task-edit" onClick={handleUpdateTask} >Update Task</button>
                            <button className="task-delete" onClick={handleDeleteTask}>Delete Task</button>
                        </div>
                    </div>)}
        </div>
    );
}

export default TaskShow;