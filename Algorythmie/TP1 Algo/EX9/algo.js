let nb1 = parseInt(prompt("donne un nombre"))
let cpt = 2
let resul

while(cpt != nb1 && resul != 0){
    resul = nb1%cpt
    cpt++
}

if (resul == 0){
    alert("Nombre pas premier")
} else {
    alert("Nombre premier")
}
