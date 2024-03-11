let a = parseFloat(prompt("donne nombre virgule"))
let b = parseInt(prompt("donne nombre"))
let cpt = 0
let resul = 1

while(cpt != b){ 
    resul = resul * a
    cpt = cpt + 1
}

alert("Resultat : " + resul)