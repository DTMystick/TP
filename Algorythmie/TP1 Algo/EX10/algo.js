// let nb1 = parseInt(prompt("donne un nombre"))
let max = parseInt(prompt("donne un max"))
let cptP = 2
let resul
let cpt = 0

while (cpt != max){
    resul = cpt%cptP
    if (resul == 0){
        document.write(resul)
    }
    cpt++
}



// while(cptP != nb1 && resul != 0){
//     resul = nb1%cptP
//     cptP++
// }

// if (resul == 0){
//     alert("Nombre pas premier")
// } else {
//     alert("Nombre premier")
// }
