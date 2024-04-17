import React from 'react'
import { useNavigate } from 'react-router-dom'


const Details2 = () => {
    const navigate = useNavigate();

    const toAccueil = () => {
        navigate("/")
      }

  return (
    <>
    <div>Details2</div>
    <button className="btn btn-outline-success" type="submit" onClick={toAccueil}>Rechercher</button>

    </>
  )
}

export default Details2