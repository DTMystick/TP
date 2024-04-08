import { useState } from 'react'
import './App.css'
import Counter from './components/counter'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Counter/>
//   )
// }

// const App = () => {
//   const isAdmin = true;

//   if (isAdmin) {
//     return (
//       <div>
//         <h3>My App</h3>
//         <Counter/>
//         <p>Je suis un admin</p>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <h3>My App</h3>
//         <Counter/>
//         <p>Je ne suis pas admin</p>
//       </div>
//     )
//   }
// }

// const App = () => {
//   const isAdmin = false;

//     return (
//       <div>
//         <h3>My App</h3>
//         <Counter/>
//         {isAdmin ? (
//           <p>Je suis un admin</p>
//         ) : (
//           <p>Je ne suis pas admin</p>
//         )
//       }
//       </div>
//     )
// }

// const App = () => {
//   const isAdmin = true;

//     return (
//       <div>
//         <h3>My App</h3>
//         <Counter/>
//         {isAdmin && <p>Vous etes admin</p>}
//       </div>
//     )
// }

function App() {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h3>My App</h3>
      <Counter count={count} incrCount={incr}/>
    </div>
  )
}

export default App

