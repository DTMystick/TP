// // let nb1 = parseInt(prompt("donne un nombre"))
// let max = parseInt(prompt("donne un max"))
// let nb1 = 3
// let nb2 = 2
// let resul
// let cpt = 1

// // document.write("0 " + "1 " + "2 " + "3 " +)
// while (cpt != max){
//     while (nb2 != nb1 && resul != 0){
//         resul = nb1%nb2
//         if (resul != 0){
//             document.write(nb1)
//         }
//         nb1++
//     }
//     cpt++
// }


// while(cpt != nb1 && resul != 0){
//     resul = nb1%cpt
//     cpt++
// }

// if (resul == 0){
//     alert("Nombre pas premier")
// } else {
//     alert("Nombre premier")
// }

let max = parseInt(prompt("donne un max"))
let nb1 = 1
let cpt = 2


while (nb1 <= max){
    cpt = 2
    while(cpt <= (nb1 / 2) && nb1%cpt != 0){
        
        cpt++
    }
    if (cpt > (nb1 / 2)){
        document.write(nb1)
    }
    nb1++
}

