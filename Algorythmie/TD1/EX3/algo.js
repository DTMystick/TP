let tab = ['a', 'e', 'f', 'i', 'y', 'r', 'o', 's', 'g', 'v']




// Ex1

// for (cpt1 = 0 ; cpt1 < tab.length ; cpt1++){
//     if(cpt1 < tab.length - 1){
//         document.write(tab[cpt1] + "_")
//     } else {
//         document.write(tab[cpt1])

//     }
// }

// Ex2

for (cpt1 = 0 ; cpt1 < tab.length ; cpt1++){
    if(cpt1 == 0){
        document.write(tab[cpt1])
    } else {
        document.write("_" + tab[cpt1])

    }
}

// Ex3

// Avec ce que j'ai fait, ou avec des fonctions javascript
