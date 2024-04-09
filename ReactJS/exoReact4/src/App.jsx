import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [isLogged, setIsLogged] = useState(true)

const switcher = () => {
  isLogged ? setIsLogged(false) : setIsLogged(true);
}

  if (isLogged) {
    return (
        <Login onClick={switcher}/>  
    )
  } else {
    return (
        <Logout onClick={switcher}/>
    )
  }
}

export default App
