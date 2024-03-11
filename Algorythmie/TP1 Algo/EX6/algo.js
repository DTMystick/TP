// let carac = prompt("Tape un caractere")
// let min = "abcdefghijklmnopqrstuvwxyz"
// let max = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let nb = "0123456789"
// let spe = "!#$%&'()*+,-.\/:;?@[]_`{|}~"

// if (min.includes(carac)){
//     alert("Minuscule")
// } 

// if (max.includes(carac)){
//     alert("Majuscule")
// }

// if (nb.includes(carac)){
//     alert("Chiffre")
// }

// if (spe.includes(carac)){
//     alert("Special")
// }

let touche = prompt("Appuie sur une touche")

if(touche === touche.toUpperCase()){
    alert("Majuscule")
}
if(touche === touche.toLowerCase()){
    alert("Minuscule")
}
if(touche === touche.isNaN()){
    alert("chiffre")
} else {
    alert("Caractere special")
}