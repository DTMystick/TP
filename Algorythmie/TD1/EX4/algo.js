

// Ex1

// let prenom = ['j', 'e', 'a', 'n', 'n', 'o', 't', "-1"]
// let nom = ['d', 'e', 'f', 'r', 'e', 's', 'n', 'e', "-1"]
// let fai = ['f', 'r', 'e', 'e', '.', 'f', 'r', "-1"]
// let email = []

// for (cpt1 = 0 ; cpt1 < prenom.length - 1 ; cpt1++){
//         if(cpt1 < prenom.length - 2){
//             email[cpt1] = prenom[cpt1]
//     } else {
//         email[cpt1] = prenom[cpt1] + "."
//     } 
// }

// for (cpt2 = 0 ; cpt2 < nom.length - 1 ; cpt2++){
//     if(cpt2 < nom.length - 2){
//         email[cpt1] = nom[cpt2]
// } else {
//     email[cpt1] = nom[cpt2] + "@"
// } 
// cpt1++
// }

// for (cpt3 = 0 ; cpt3 < fai.length - 1 ; cpt3++){
//     if(cpt3 < fai.length - 2){
//         email[cpt1] = fai[cpt3]
// } else {
//     email[cpt1] = fai[cpt3]
// } 
// cpt1++
// }

// for (cpt4 = 0 ; cpt4 < email.length ; cpt4++){
//     document.write(email[cpt4])
// }
// email[cpt4++] = -1


// Ex2

let prenom = []
let nom = []
let fai = []
let email = []

let cpt1 = 0
prenom[0] = prompt("Entre la lettre 1")


while (prenom[cpt1] != "-1"){
    cpt1++
    prenom[cpt1] = prompt("Entre la lettre suivante")

}

let cpt2 = 0
nom[0] = prompt("Entre la lettre 1")


while (nom[cpt2] != "-1"){
    cpt2++
    nom[cpt2] = prompt("Entre la lettre suivante")

}

let cpt3 = 0
fai[0] = prompt("Entre la lettre 1")


while (fai[cpt3] != "-1"){
    cpt3++
    fai[cpt3] = prompt("Entre la lettre suivante")

}

 let cpt4 = 0

if (prenom[0] == "-1" && nom[0] == "-1"){
    alert("On ne peut pas avoir le nom et le prenom vide en meme temps !")
} else if (prenom[0] == "-1" && nom[0] != "-1") {
    for(cptN = 0 ; cptN < nom.length - 1; cptN++){
        if (cptN < nom.length - 2){
            email[cpt4] = nom[cptN]
        } else {
            email[cpt4] = nom[cptN] + "@"
        }
        cpt4++
    }
} else if (prenom[0] != "-1" && nom[0] == "-1"){
    for(cptP = 0 ; cptP < prenom.length - 1; cptP++){
        if (cptP < prenom.length - 2){
            email[cpt4] = prenom[cptP]
        } else {
            email[cpt4] = prenom[cptP] + "@"
        }
        cpt4++
    }
} else if (prenom[cpt1] == "-1" || nom[cpt2] == "-1"){
    for(cptP = 0 ; cptP < prenom.length - 1; cptP++){
        if (cptP < prenom.length - 2){
            email[cpt4] = prenom[cptP]
        } else {
            email[cpt4] = prenom[cptP] + "."
        }
        cpt4++
    }

    for(cptN = 0 ; cptN < nom.length - 1; cptN++){
        if (cptN < nom.length - 2){
            email[cpt4] = nom[cptN]
        } else {
            email[cpt4] = nom[cptN] + "@"
        }
        cpt4++
    }
}

if (fai[0] == "-1"){
    alert("Il faut un fai")
} else {
    for(cptF = 0 ; cptF < fai.length - 1; cptF++){
        email[cpt4] = (fai[cptF])
        cpt4++
    }
}

cpt4++
email[cpt4] = "-1"



for (cptE = 0 ; cptE < cpt4 ; cptE++){
    document.write(email[cptE])
}

document.write(".fr")

// for (cpt1 = 0 ; cpt1 < prenom.length - 1 ; cpt1++){
//     if(cpt1 < prenom.length - 2){
//         email[cpt1] = prenom[cpt1]
// } else {
//     email[cpt1] = prenom[cpt1] + "."
// } 
// }

// for (cpt2 = 0 ; cpt2 < nom.length - 1 ; cpt2++){
// if(cpt2 < nom.length - 2){
//     email[cpt1] = nom[cpt2]
// } else {
// email[cpt1] = nom[cpt2] + "@"
// } 
// cpt1++
// }

// for (cpt3 = 0 ; cpt3 < fai.length - 1 ; cpt3++){
// if(cpt3 < fai.length - 2){
//     email[cpt1] = fai[cpt3]
// } else {
// email[cpt1] = fai[cpt3] + " -1"
// } 
// cpt1++
// }

// for (cpt4 = 0 ; cpt4 < email.length ; cpt4++){
// document.write(email[cpt4])
// }

// Ex3


