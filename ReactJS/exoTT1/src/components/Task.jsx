import React from 'react'

const Task = ({id, desc, removeTask}) => {
  return (
    <li>{desc} <button onClick={ () =>{removeTask(id)}}>Suppr</button></li>
  )
}

export default Task