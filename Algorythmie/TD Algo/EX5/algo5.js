let nb1 = prompt("Valeur 1")
let nb2 = prompt("Valeur 2")
let nb3 = prompt("Valeur 3")
let min = nb1
let max = nb1

// if (nb1 < nb2 && nb1 < nb3){
//     min = nb1 
// } else {
//     if (nb2 < nb3 && nb2 < nb1){
//         min = nb2
//     } else {
//         if (nb3 < nb2 && nb3 < nb1){
//             min = nb3
//         }
//     }
// }

if (nb2 < min) {
    min = nb2
}

if (nb3 < min) {
    min = nb3
}

if (nb2 > max) {
    max = nb2
}

if (nb3 > max) {
    max = nb3
}

alert("Min : " + min + " ; Max : " + max)

// alert("Petit : " + nb1 + "Grand : " + nb3)


// 1 2 3

// 1 3 2

// 2 1 3

// 2 3 1

// 3 1 2

// 3 2 1