import React from 'react'




const SearchFilm = () => {
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

export  default SearchFilm