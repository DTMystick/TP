// let p = "pierre";
// let f = "feuille";
// let c = "ciseaux";
let scoreJoueur = 0;
let scoreBot = 0;
let choix 

let shifumi = ["pierre", "feuille", "ciseaux"];

while (scoreJoueur < 2 || scoreBot < 2) {
    choix = prompt("Fais ton choix");
  let bot = shifumi[Math.floor(Math.random() * shifumi.length)];
console.log(bot)
  if (choix != shifumi[0] && choix != shifumi[1] && choix != shifumi[2]) {
    choix = prompt("Ca marche pas, refais !");
  } else {
    if (choix == shifumi[0] && bot == shifumi[0]) {
      alert("egalité " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[0] && bot == shifumi[1]) {
      scoreBot++;
      alert("+1 Bot " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[0] && bot == shifumi[2]) {
      scoreJoueur++;
      alert("+1 Joueur " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[1] && bot == shifumi[0]) {
      scoreJoueur++;
      alert("+1 Joueur " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[1] && bot == shifumi[1]) {
      alert("egalité " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[1] && bot == shifumi[2]) {
      scoreBot++;
      alert("+1 Bot " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[2] && bot == shifumi[0]) {
      scoreBot++;
      alert("+1 Bot " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[2] && bot == shifumi[1]) {
      scoreJoueur++;
      alert("+1 Joueur " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    } else if (choix == shifumi[2] && bot == shifumi[2]) {
        alert("egalité " + scoreJoueur + "-" + scoreBot);
      choix = prompt("Manche suivante")

    }
  }
}

if (scoreJoueur == 2) {
    prompt("Joueur win !")
} else {
    prompt("Bot win !")
}
