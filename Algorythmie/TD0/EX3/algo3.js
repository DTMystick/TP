let age = prompt("Quel age as tu mon enfant ?")

if ((age == 6) || (age == 7)){
    alert("Tu es un poussin. Piou piou !")
} else {
    if ((age == 8) || (age == 9)){
        alert("Tu es une pupille. Wink wink !")
    } else {
        if ((age == 10) || (age == 11)){
            alert("Tu es minime. Tout pitit !") 
        } else {
            if (age >= 12){
                alert("Tu es cadet. Pas celui de mes soucis en tout cas !")
            }
        }
    }
}