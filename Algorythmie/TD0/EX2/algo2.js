let nb1 = prompt("tape un nombre");
let nb2 = prompt("tape un autre");

if ((nb1 < 0 && nb2 < 0) || (nb1 > 0 && nb2 > 0)){
    alert("Le produit est positif");
} else {
    if ((nb1 < 0 && nb2 > 0) || (nb1 > 0 && nb2 < 0)){
        alert("Le produit est negatif");
    }
}