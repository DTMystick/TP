let i = prompt("donne un chiffre")
let depart = 1
let calcul = 0;

while (depart <= i){
    calcul = calcul + depart
    depart++;
}

alert("Voila l'addition : " + calcul)