import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios'

function App() {

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
  useEffect(() => {
    fetchTask();
  }, []);

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

  return (
    <>
      <div className='app'>
        <TaskCreate onCreate={createTask} />
        <h3>Your Tasks</h3>
        <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
      </div >
    </>
  )
}

export default App
