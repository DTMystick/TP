let nb1 = prompt(" Donne un chiffre")
let nb2 = prompt(" Donne un autre")

while (nb1 < 0 && nb2 < 0 || nb1 > 0 && nb2 > 0){
    nb1 = prompt("Tu t'es trompé, refais.")
    nb2 = prompt("Celui là aussi.")
} 
    // if (nb1 > 0 && nb2 < 0){
    //     alert("C'est " + nb1)
    // } else {
    //     if (nb1 < 0 && nb2 > 0){
    //         alert("C'est " + nb2)
    //     }
    // }

    if (nb1 > 0){
        alert("C'est " + nb1)
    } else {
            alert("C'est " + nb2)
        }
    


