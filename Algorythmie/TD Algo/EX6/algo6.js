let cote1 = parseInt (prompt("Longueur coté triangle 1"))
let cote2 = parseInt (prompt("Longueur coté triangle 2"))
let cote3 = parseInt (prompt("Longueur coté triangle 3"))
let max = cote1
let add = cote2 + cote3

// if (cote1 + cote2 > cote3 || cote2 + cote3 > cote1 || cote3 + cote1 > cote2){
//     alert("TRIAAAAAAAANGLE !!!")
// } else {
//     alert("Pas triangle...")
// }

if (cote2 > max) {
    max = cote2
    add = cote1 + cote3
}

if (cote3 > max) {
    max = cote3
    add = cote1 + cote2
}

if (add >= max) {
    alert("TRIAAAAAAAANGLE !!!")
} else {
    alert("Pas triangle...")
}