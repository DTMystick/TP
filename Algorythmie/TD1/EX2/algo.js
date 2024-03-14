let tab = []
let nb = parseInt(prompt("Donne nombre de nombre dans tableau"))
for (let cpt1 = 0 ; cpt1 < nb ; cpt1++){
    // tab[cpt1] = parseInt(Math.random() * 20)
    tab[cpt1] = parseInt(prompt("valeur" + (cpt1 + 1)))

}

for(let cpt2 = 0 ; cpt2 < tab.length ; cpt2++){
    document.write(tab[cpt2] + "-")
}
// Ex1

// let add = 0
// let cpt3 = 0
// while (cpt3 < tab.length){
//     add = add + tab[cpt3]
//     cpt3++
// }
// alert("total : " + add)


// Ex2

// let add = 0
// let cpt3 = 0
// while (cpt3 < tab.length){
//     add = add + tab[cpt3]
//     cpt3++
// }

// let moye = add / nb
// alert("Moyenne : " + moye)

// Ex3

let debut = parseInt(prompt("Choisis debut"))
let fin = debut
let nb2 = 0

while(tab[fin] != 0 && fin < tab.length) {
    fin++
    nb2++
}



let add = 0
while (debut < fin){
    add = add + tab[debut]
    debut++
}

let moye = add / nb2
alert("Addition : " + add + " ; Moyenne : " + moye)