import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import noFav from '../assets/images/noFav.png'
import Fav from '../assets/images/fav.png'
import {listeFilm} from './ListeFilm.jsx'
import { Link } from 'react-router-dom'

const Accueil = () => {

function favClick(){
  alert(listeFilm.fav)
  if (listeFilm.fav == false){
    listeFilm.fav = true;
    document.getElementById("fav").src = Fav;
  } else if (listeFilm.fav == true){
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
      let f = {favClick};
      if (compareFilm(item.titre, tch)) {

        {
          document.getElementById("currentCard").innerHTML +=
          '<div class="card col-4">' +
          '<button onClick="' + f +'"><img src=' + noFav + ' class="w-25" id="fav"></button>' +
          '<a href="' + x + '">' +
          '<img src=' + item.image + ' class="card-img-top" alt="..." />' +
          '</a>' +
          '</div>'
        }
      }
    })
  }



  return (
    <>
      <button onClick={searchFilm}>test</button>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Ciné Troybouche</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Search" id='film' onChange={searchFilm} />
            <Link to="./favoris">Favoris</Link>
          </form>
        </div>
      </nav>

      <div id='currentCard' className='row'>

      </div>
    </>
  )
}

export default Accueil