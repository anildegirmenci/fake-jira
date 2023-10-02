import { useState, useContext } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";

function TaskShow({task}) {
    const {deleteTaskById, editTaskById} = useContext(TasksContext)
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteTask = () => {
        deleteTaskById(task.id);
    }

    const handleUpdateTask = () => {
        setShowEdit(!showEdit);
    }
    
    const handleSubmit = (id, updatedTitle, updatedDesc) => {
        setShowEdit(false);
        editTaskById(id, updatedTitle, updatedDesc);
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