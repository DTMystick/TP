let tab = []
let nb = parseInt(prompt("Donne nombre de nombre dans tableau"))
let min
for (let cpt1 = 0 ; cpt1 < nb ; cpt1++){
    // tab[cpt1] = parseInt(Math.random() * 20)
    tab[cpt1] = parseInt(prompt("valeur" + (cpt1 + 1)))

}

for(let cpt3 = 0 ; cpt3 < tab.length ; cpt3++){
    document.write(tab[cpt3] + "-")
}
// Ex1

// min = tab[0]
// let cpt2 = 1

// while(cpt2 < tab.length){
//    if (tab[cpt2] < min){
//        min = tab[cpt2]
//    }
//    cpt2++
// }

// alert("Minimum " + min)

// Ex2

// min = tab[0]
// let cpt2 = 1
// let ind = 0

// while(cpt2 < tab.length){
//    if (tab[cpt2] <= min){
//        min = tab[cpt2]
//        ind = cpt2
//    }
//    cpt2++
// }

// alert("Minimum " + min + " ; Son indice : " + ind)

// Ex3

let cpt2 = 1
let ind = 0
let debut = parseInt(prompt("Choisis debut"))
let fin = parseInt(prompt("Choisis fin"))
min = tab[debut]

if (fin > tab.length){
    fin = tab.length
}

while(debut < fin){
   if (tab[debut] <= min){
       min = tab[debut]
       ind = debut
   }
   debut++
}

alert("Minimum " + min + " ; Son indice : " + ind)
