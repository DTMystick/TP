// Ex 1

// let nom = prompt("Donne ton nom")
// alert("Bvn " + nom)

// Ex 2

// let nb1 = parseInt(prompt(" tape nb1"))
// let nb2 = parseInt(prompt(" tape nb2"))
// alert(nb1 + nb2)

// Ex 3

// let fabri = parseInt(prompt("prix de fabrication ?"))
// let vente = parseInt(prompt("prix de vente ?"))

// if(fabri > vente){
//     alert("Perte de " + (vente - fabri))
// } else {
//     alert("Profit de " + (vente - fabri))
// }

// Ex 4

// let nb1 = parseInt(prompt("Donne nb1"))
// let nb2 = parseInt(prompt("Donne nb2"))
// let nb3 = parseInt(prompt("Donne nb3"))
// let max = nb1

// if(max < nb2){
//     max = nb2
// }

// if(max < nb3){
//     max = nb3
// }

// alert("Le max est " + max)

// Ex 5

// let tab = [2, 6, 10, 14, 18, 1, 5, -1, 13, 17]
// let tab = []
// let cpt2 = 0
// let nb1 = prompt("Donne une note")

// while(nb1 != "fin"){
//     tab[cpt2] = parseInt(nb1)
//     cpt2++
//     nb1 = prompt("Donne une note")
// }

// for(cpt1 = 0 ; cpt1 < tab.length ; cpt1++){
//     if(tab[cpt1] <= 4 && tab[cpt1] >= 0){
//         document.write(tab[cpt1] + " Nul" + "<br>")
//     } else if (tab[cpt1] <= 10 && tab[cpt1] >= 5){
//         document.write(tab[cpt1] + " Bof" + "<br>")
//     } else if (tab[cpt1] <= 14 && tab[cpt1] >= 11){
//         document.write(tab[cpt1] + " Moyen" + "<br>")
//     } else if (tab[cpt1] <= 17 && tab[cpt1] >= 15){
//         document.write(tab[cpt1] + " Bien" + "<br>")
//     } else if (tab[cpt1] <= 20 && tab[cpt1] >= 18){
//         document.write(tab[cpt1] + " Perfect" + "<br>")
//     } else {
//         document.write(tab[cpt1] + " La note n'est pas valide" + "<br>")
//     }
// }

// Ex 6

// let nb1 = parseInt(prompt("donne nb1"))
// let ope = prompt("donne operateur")
// let nb2 = parseInt(prompt("donne nb2"))

// if(ope == "+"){
//     alert(nb1 + nb2)
// } else if (ope == "-"){
//     alert(nb1 - nb2)
// } else if (ope == "*"){
//     alert(nb1 * nb2)
// } else if (ope == "/"){
//     alert(nb1 / nb2)
// } else {
//     alert("Pas bon operateur")
// }l

// Ex 7

// let nb1 = prompt("donne un chiffre")
// let depart = 1
// let calcul = 0;

// while (depart <= nb1){
//     calcul = calcul + depart
//     depart++;
// }

// alert("Voila l'addition : " + calcul)

// Ex 8

// let nbligne = prompt("donne un nombre de ligne")
// let etoile = "*"
// let total = "*"

// for(cpt1 = 0 ; cpt1 < nbligne ; cpt1++){
//     document.write(total + "<br>")
//     total = total + etoile
     
// }

// Ex 9

// let nbligne = prompt("donne un nombre de ligne")

// for(cpt1 = 1 ; cpt1 <= nbligne ; cpt1++){
//     for(cpt2 = 1 ; cpt2 <= cpt1 ; cpt2++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for(cpt3 = nbligne - 1 ; cpt3 >= 1 ; cpt3--){
//     for(cpt4 = 1 ; cpt4 <= cpt3 ; cpt4++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// Ex 10

// let nbligne = prompt("donne un nombre de ligne")
// let cpt4 = 1

// for(cpt1 = 1 ; cpt1 <= nbligne; cpt1++){
//     for(cpt2 = 1 ; cpt2 <= (nbligne-cpt1) ; cpt2++){
//         document.write("&nbsp;")
//     }
//     for(cpt3 = 1 ; cpt3 <= cpt4 ; cpt3++){
//         document.write("*")
//     }
//     document.write("<br>")
//     cpt4 += 2
// }

// Ex 11

