import { createContext, useState } from "react";
import axios from 'axios'

const TasksContext = createContext();

function Provider({ children }) {
    const [tasks, setTasks] = useState([]);
    const createTask = async (title, taskDesc) => {
        const response = await axios.post('http://localhost:3000/tasks', {
            title: title,
            taskDesc: taskDesc
        });
        const createdTasks = [
            ...tasks,
            response.data
        ];
        setTasks(createdTasks);
    };
    const fetchTask = async () => {
        const response = await axios.get('http://localhost:3000/tasks');
        setTasks(response.data);
    };
    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        const afterDelete = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(afterDelete);
    }

    const editTaskById = async (id, updatedTitle, updatedDesc) => {
        await axios.put(`http://localhost:3000/tasks/${id}`);
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { id, title: updatedTitle, taskDesc: updatedDesc }
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    const sharedValuesAndMethods = {
        tasks,
        fetchTask,
        createTask,
        deleteTaskById,
        editTaskById
    };
    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}


export { Provider };
export default TasksContext;