import React from 'react'
import { useState } from 'react'
import Task from './Task';

const TaskList = () => {

const [task, setTask] = useState([
    {desc: 'Tache 1', id: '1' },
    {desc: 'Tache 2', id: '2' },
    {desc: 'Tache 3', id: '3' }

]);

function addTask(){
    setTask([...task, {desc: 'Tache ' + (task.length + 1), id: task.length }]);  
} 

function removeTask(taskId){
    const remove = task.filter(elem => elem.id != taskId)
    setTask(remove)
}


  return (
    <div>
        <h1>Liste des taches</h1>
        <button onClick={addTask}>ajouter</button>
        <ul>
        {task.map((item) => (
           <Task id={item.id} desc={item.desc} removeTask={removeTask}/> 
        ))}
        </ul>
    </div>
  )
}

export default TaskList