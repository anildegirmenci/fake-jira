import { useEffect, useContext } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import TasksContext from './context/task';

function App() {

  const {fetchTask} = useContext(TasksContext)
  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <div className='app'>
        <TaskCreate />
        <h3>Your Tasks</h3>
        <TaskList />
      </div >
    </>
  )
}

export default App
