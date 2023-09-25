import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) =>{
    const createdTasks = [
      ...tasks,{
        id: Math.round(Math.random()*999999),
        title: title,
        taskDesc
      }
    ];
    setTasks(createdTasks);
  }

  const deleteTaskById = (id) => {
   const afterDelete = tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDelete);
  }

  return (
    <>
      <div className='app'>
        <TaskCreate onCreate={createTask} />
        <h3>Your Tasks</h3>
        <TaskList tasks={tasks} onDelete={deleteTaskById}/>
      </div >
    </>
  )
}

export default App
