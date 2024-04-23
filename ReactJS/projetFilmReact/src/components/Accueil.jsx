import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import noFav from '../assets/images/noFav.png'
import Fav from '../assets/images/fav.png'
import { listeFilm } from './ListeFilm.jsx'
import { Link } from 'react-router-dom'
import BaseFilm from './BaseFilm.jsx'

const Accueil = () => {

  function favClick() {
    alert(listeFilm.fav)
    if (listeFilm.fav == false) {
      listeFilm.fav = true;
      document.getElementById("fav").src = Fav;
    } else if (listeFilm.fav == true) {
      listeFilm.fav = false
      document.getElementById("fav").src = noFav;

    }
  }

  function compareFilm(titre, ch) {
    let tch = ch.length;
    titre = titre.substr(0, tch);
    return (titre == ch)
  }

  function searchFilm() {
    let tch = document.getElementById("film").value;

    { document.getElementById("currentCard").innerHTML = '' }

    listeFilm.map((item, index) => {
      let x = "/details" + (index + 1);
      let f = "{favClick}";
      if (compareFilm(item.titre, tch)) {

        {
          document.getElementById("currentCard").innerHTML +=
            '<div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2">' +
            '<button onClick="' + f +'"><img src=' + noFav + ' class="star d-block" id="fav"></button>' +
            '<a href="' + x + '">' +
            '<img src=' + item.image + ' class="card-img" alt="..." />' +
            '</a>' +
            '</div>'
        }
      }
    })
  }



  return (
    <>
      <nav className="navbar bg-secondary fixed-top">
        <div className="container-fluid">
      <Link to="/" className="navbar-brand bg-light btn">Ciné Troybouche</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" id='film' onChange={searchFilm} />
            <Link to="./favoris" className='btn bg-light'>Favoris</Link>
          </form>
        </div>
      </nav>

      <BaseFilm />
    </>
  )
}

export default Accueil