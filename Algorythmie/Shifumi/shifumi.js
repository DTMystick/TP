let scoreJoueur = 0;
let scoreBot = 0;
let choix 

let shifumi = ["pierre", "feuille", "ciseaux"];

choix = prompt("Fais ton choix");

while (scoreJoueur < 2 && scoreBot < 2) {
  let bot = shifumi[Math.floor(Math.random() * shifumi.length)];

  if (choix != shifumi[0] && choix != shifumi[1] && choix != shifumi[2]) {
    alert("Ca marche pas, refais !");
  } else {
    if (choix == bot) {
      alert("egalité " + scoreJoueur + "-" + scoreBot);

    } else if (choix == shifumi[0] && bot == shifumi[2] || choix == shifumi[1] && bot == shifumi[0] || choix == shifumi[2] && bot == shifumi[1]) {
      scoreJoueur++;
      alert("+1 Joueur " + scoreJoueur + "-" + scoreBot);
      
    } else {
      scoreBot++;
      alert("+1 Bot " + scoreJoueur + "-" + scoreBot);
     
    } 
  }

  if(scoreJoueur < 2 && scoreBot < 2){
    choix = prompt("Manche suivante")
  }
}

if (scoreJoueur == 2) {
    alert("Joueur win !")
} else if (scoreBot == 2){
    alert("Bot win !")
}
