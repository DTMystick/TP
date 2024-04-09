import { useState, useEffect } from 'react'
import './App.css'
// import List1 from './components/List1'
// import List2 from './components/List2'


function App() {
  // return (
  //   <div>
  //     <List1/>
  //     <List2/>

  //   </div>
  // )

const [count, setCount] = useState(0);

useEffect(() => {
  console.log("exe de useeffect")
}, [count])

return (
  <div>
    <h1>Compteur : {count}</h1>
    <button onClick={() => setCount(count + 1)}>Incr</button>
  </div>
)

}

export default App
