function TaskShow({ task , onDelete }) {
    const handleDeleteTask = () => {
        onDelete(task.id);

    }
    return (<div className="task-show">
        <h3 className="task-title">Your Task</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Description of Task</h3>
        <p>{task.taskDesc}</p>
        <div>
            <button className="task-update" >Update Task</button>
            <button className="task-delete" onClick={handleDeleteTask}>Delete Task</button>
        </div>
    </div>);
}

export default TaskShow;