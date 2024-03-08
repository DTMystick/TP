let nbnote = parseInt(prompt("Combien de note ?"))
let moye = 0
let total = 0
let note = 0
let bass = 20
let haut = 0
let cpt = 0

while (cpt != nbnote){
    note = parseInt(prompt("Entre une note"))
    total = total + note
    moye = total / (cpt + 1)
    if (note < bass){
        bass = note
    }
    if (note > haut){
        haut = note
    }
    cpt++
}

alert("Plus basse : " + bass + " ; Plus haute : " + haut + " ; Moyenne : " + moye)
