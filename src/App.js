import React from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
const App = () => {

  return (
    <div className='App'>
   
     <div className="container">
        <h1>Todo List App</h1>
        <CreateTask/>
      </div>
    </div>
  )
}

export default App