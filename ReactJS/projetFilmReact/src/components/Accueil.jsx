import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rebelle from '../assets/images/Rebelle.jpg'
import Joker from '../assets/images/Joker.jpg'
import Tenet from '../assets/images/Tenet.jpg'
import { Link } from 'react-router-dom'

const Accueil = () => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate("./Details.jsx")
  }

  const toDetails2 = () => {
    navigate("./Details2.jsx")
  }

  const toDetails3 = () => {
    navigate("./Details3.jsx")
  }

  const listeFilm = [
    {titre:"Rebelle", image:Rebelle},
    {titre:"Joker", image:Joker},
    {titre:"Tenet", image:Tenet},
  ]

  function filtreFilm() {
    let t = document.getElementById("film").value.length;
    let ch
    listeFilm.map((item) => {
      ch = item.titre.substr(0, t);
      filtre = item.titre.filter(elem => document.getElementById("film").value != ch)
      
  })
    
    return(filtre)
  }

  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">Ciné Troybouche</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" id='film' onChange={filtreFilm}/>
      <Link to="./Favoris.jsx">Favoris</Link>
    </form>
  </div>
</nav>

<div className='row'>
{listeFilm.map((item) => (
<div className="card col-4">
  <img src={item.image} className="card-img-top" alt="..." onClick={toDetails}/>
</div>
))}
</div>
{/* <div className='row'> */}


{/* <div className="card col-4">
  <img src={Rebelle} className="card-img-top" alt="..." onClick={toDetails2}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card col-4">
  <img src={Rebelle} className="card-img-top" alt="..." onClick={toDetails3}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */}
</>
  )
}

export default Accueil