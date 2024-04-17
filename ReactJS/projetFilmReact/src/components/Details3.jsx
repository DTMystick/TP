import React from 'react'
import { useNavigate } from 'react-router-dom'


const Details3 = () => {
    const navigate = useNavigate();

    const toAccueil = () => {
        navigate("/")
      }

  return (
    <>
    <div>Details3</div>
    <button className="btn btn-outline-success" type="submit" onClick={toAccueil}>Rechercher</button>

    </>
  )
}

export default Details3