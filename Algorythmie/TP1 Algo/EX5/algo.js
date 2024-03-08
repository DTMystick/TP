let nb1 =parseInt (prompt("Valeur 1"))
let oper = prompt("Quelle operation ?")
let nb2 =parseInt (prompt("Valeur 2"))

if (oper == "+"){
    prompt(" Resultat : " + (nb1 + nb2))
} else {
    if (oper == "-"){
        prompt(" Resultat : " + (nb1 - nb2))
    } else {
        if (oper == "*"){
            prompt(" Resultat : " + (nb1 * nb2))
        } else {
            if (oper == "/"){
                prompt(" Resultat : " + (nb1 / nb2))
            } else {
                prompt("Pas de bon operateur...")
            }    
        }  
    }  
}




