let nb1 = parseInt (prompt("Valeur 1"))
let nb2 = parseInt (prompt("Valeur 2"))
let nb3 = parseInt (prompt("Valeur 3"))
let min = nb1
let max = nb1

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

let med = (nb1 + nb2 + nb3) - (max + min)

alert("Classement croissant : " + min + " - " + med + " - " + max)

// 10 100 1000
// 10 1000 100
// 100 1000 10 
// 100 10 1000 
// 1000 100 10
// 1000 10 100