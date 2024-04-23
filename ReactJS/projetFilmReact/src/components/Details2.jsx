import React from 'react'
import { useNavigate } from 'react-router-dom'
import Joker from '../assets/images/Joker.jpg'
import { Link } from 'react-router-dom'



const Details2 = () => {
  

  return (
    <>
      <nav className="navbar bg-secondary fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand bg-light btn">Ciné Troybouche</Link>
          <Link to="./favoris" className='btn bg-light'>Favoris</Link>
        </div>
      </nav>

      <div className='row'>
        <div className="card col-4">
          <img src={Joker} class="card-img-top" alt="..." />
        </div>
        <div className='col-8  d-flex align-items-start flex-column'>
          <h1>Joker</h1>
          <div className='row w-100'>
            <div className='col-5 text-start'>Date de sortie : XX/XX/XXXX</div>
            <div className='col-3 text-start'>Durée : 120 min</div>
            <div className='col-3 text-start'>Note : XX/XX</div>
          </div>
          <div className='row w-100'>

            <div className='col-4 text-start'>Genre : Lorem ipsum</div>
            <div className='col-4 text-start'>Status : Lorem ipsum</div>
          </div>

          <div className='text-start'>Resumé : Lorem ipsum</div>
          <div className='row'>
            <div className='col-2 text-start'>Synopsis :</div>
            <div className='col-10 text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Aliquam eius minima similique, doloribus soluta architecto
              expedita sapiente iure quia molestias tempora, quas ullam unde, saepe
              fugit cumque? Odit assumenda minus, error quibusdam nesciunt ex
              reiciendis! Non, maiores? Odio, nemo omnis!</div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-outline-success" type="submit">Retour</button>
      </Link>
    </>
  )
}

export default Details2