let nb1 = 18
let nb2 = 24
let nb3 = 32
let nb4 = prompt("Choisir nb4")

if (nb4 < nb1){
    alert("Ordre : " + nb4 + " - " + nb1 + " - " + nb2)
} else{
    if (nb4 < nb2){
        alert("Ordre : " + nb1 + " - " + nb4 + " - " + nb2)
    } else {
        if (nb4 < nb3){
            alert("Ordre : " + nb1 + " - " + nb2 + " - " + nb4)
        } else {
            if (nb4 > nb3){
                alert("Ordre : " + nb1 + " - " + nb2 + " - " + nb3)
            }
        }
    }
}