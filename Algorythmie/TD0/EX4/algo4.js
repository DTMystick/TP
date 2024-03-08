let i = prompt("Choix valeur depart")
let min = 10
let max = 20

while(i < min || i > max){
    if (i < min){
        alert("Plus grand !")
    }
    if (i > max){
        alert("Plus petit !")
    }
    i = prompt("Choix valeur depart")
}