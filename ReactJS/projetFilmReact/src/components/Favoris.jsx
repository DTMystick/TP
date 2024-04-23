import React from 'react'
import { Link } from 'react-router-dom'

const Favoris = () => {

  { document.getElementById("currentCard").innerHTML = '' }

  return (
    <>
    <nav className="navbar bg-secondary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand bg-light btn">Ciné Troybouche</Link>
          <Link to="./favoris" className='btn bg-light'>Favoris</Link>
        </div>
      </nav>

    <h1>Vos films favoris</h1>
    </>
  )
}

export default Favoris