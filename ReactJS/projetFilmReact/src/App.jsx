import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from './components/Accueil'
import Details from './components/Details'
import Details2 from './components/Details2'
import Details3 from './components/Details3'
import Favoris from './components/Favoris'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/details1" element={<Details />} />
          <Route path="/details2" element={<Details2 />} />
          <Route path="/details3" element={<Details3 />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
