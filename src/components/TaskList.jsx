import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete }) {
    return (<div className="task-list">
        {tasks.map((task) => {
            return <TaskShow key={task.id} task={task} onDelete={onDelete} />
        })}
    </div>);
}

export default TaskList;