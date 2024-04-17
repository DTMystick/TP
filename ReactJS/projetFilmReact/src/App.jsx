import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from './components/Accueil'
import Details from './components/Details'
import Details2 from './components/Details2'
import Details3 from './components/Details3'
import Favoris from './components/Favoris'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Details.jsx" element={<Details />} />
          <Route path="/Details2.jsx" element={<Details2 />} />
          <Route path="/Details3.jsx" element={<Details3 />} />
          <Route path="/Favoris.jsx" element={<Favoris />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
