import React from 'react'
import { listeFilm } from './ListeFilm';
import noFav from '../assets/images/noFav.png'
import Fav from '../assets/images/fav.png'


const BaseFilm = () => {
    function favClick(){

        if (listeFilm.fav == false){
          listeFilm.fav = true;
          document.getElementById("fav").src = Fav;
        } else if (listeFilm.fav == true){
          listeFilm.fav = false
          document.getElementById("fav").src = noFav;
      
        }
      }
    
        { document.getElementById("currentCard").innerHTML = '' }
        
        listeFilm.map((item, index) => {
            let x = "/details" + (index + 1);
            let f = favClick();

              {
                document.getElementById("currentCard").innerHTML +=
                '<div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2">' +
                '<button onClick="' + f +'"><img src=' + noFav + ' class="star d-block" id="fav"></button>' +
                '<a href="' + x + '">' +
                '<img src=' + item.image + ' class="card-img" alt="..." />' +
                '</a>' +
                '</div>'
              }

        })

}

export default BaseFilm