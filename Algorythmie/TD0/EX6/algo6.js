let i = prompt("donne un chiffre")
let depart = 1
let calcul = 1;

while (depart <= i){
    calcul = calcul * depart
    depart++
}

alert("Voila la fac : " + calcul)