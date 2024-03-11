let a = parseInt(prompt("valeur a"))
let b = parseInt(prompt("valeur b"))
let c = parseInt(prompt("valeur c"))
let delta = (b*b) - 4 * a * c

if (delta < 0){
    alert("pas de solution")
}

if (delta == 0){
    alert("solution 1")
}

if (delta > 0){
    alert("solution 2 ou 3")
}