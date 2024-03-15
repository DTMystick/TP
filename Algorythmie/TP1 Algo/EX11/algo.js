let nb1 = parseInt(prompt("donne chiffre 1"))
let nb2 = parseInt(prompt("donne chiffre 2"))
let pgcd

while(nb1 != nb2){
    if (nb1 == nb2){
        pgcd(nb1, nb2) = nb1
    } else if (nb1 > nb2){
        pgcd(nb1, nb2) = pgcd(nb1 - nb2, nb2)
    } else if (nb2 > nb1){
        pgcd(nb1, nb2) = pgcd(nb1, nb2 - nb1)
    }
}

alert("Resultat : " + pgcd)