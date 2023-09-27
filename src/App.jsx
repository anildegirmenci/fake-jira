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
  
  const editTaskById = (id, updatedTitle, updatedDesc) => {
    const updatedTasks = tasks.map((task) =>{
      if(task.id === id){
        return {id, title: updatedTitle, taskDesc: updatedDesc}
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
