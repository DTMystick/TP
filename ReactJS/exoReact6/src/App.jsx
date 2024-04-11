import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import ShowProd from './components/ShowProd'
import Liste from './components/Liste'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-body-tertiary p-2'>
    <Navbar/>
    <ShowProd/>
    <Liste/>
    </div>
  )
}

export default App
