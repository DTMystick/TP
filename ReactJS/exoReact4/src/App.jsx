import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [isLogged, setisLogged] = useState(false)
  if (isLogged) {
    return (
      <div>
        <h1>Connecte toi</h1>
        <Login/>  

      </div>
    )
  } else {
    return (
      <div>
        <h1>Deconnecte toi</h1>
        <Logout/>
      </div>
    )
  }
}

export default App
