let carac = prompt("Tape un caractere")
let min = "abcdefghijklmnopqrstuvwxyz"
let max = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let nb = "0123456789"
let spe = "!#$%&'()*+,-.\/:;?@[]_`{|}~"

if (min.includes(carac)){
    alert("Minuscule")
} 

if (max.includes(carac)){
    alert("Majuscule")
}

if (nb.includes(carac)){
    alert("Chiffre")
}

if (spe.includes(carac)){
    alert("Special")
}