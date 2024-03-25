function verifGen(){
    let regex = "/^[a-zA-Z]{2,15}$/";
    let prenom = document.getElementById("prenom").value;
    if (regex.test(prenom.value)){
        document.getElementById("prenom").style.backgroundColor = "green";

    } else {
        document.getElementById("prenom").style.backgroundColor = "red";

    }
}





function verifPrenom(){
    if (document.getElementById("prenom").value.length == 0 || document.getElementById("prenom").value.length < 3){
        document.getElementById("prenom").style.backgroundColor = "red";
    } else {
        document.getElementById("prenom").style.backgroundColor = "green";
    }
}

function verifNom(){
    if (document.getElementById("nom").value.length == 0){
        document.getElementById("nom").style.backgroundColor = "red";
    } else {
        document.getElementById("nom").style.backgroundColor = "green";
    }
}

function verifAge(){
    if (document.getElementById("age").value < 18 || document.getElementById("age").value > 30){
        document.getElementById("age").style.backgroundColor = "red";
    } else {
        document.getElementById("age").style.backgroundColor = "green";
    }
}

function verifPhone(){
    if (document.getElementById("phone").value.length < 10 || document.getElementById("phone").value.length > 10 || 
        isNaN(document.getElementById("phone").value)){
        document.getElementById("phone").style.backgroundColor = "red";
    } else {
        document.getElementById("phone").style.backgroundColor = "green";
    }
}

function verifEmail(){
    if (document.getElementById("email").value.length == 0 || document.getElementById("prenom").value.length < 3){
        document.getElementById("email").style.backgroundColor = "red";
    } else {
        document.getElementById("email").style.backgroundColor = "green";
    }
}

function verifPseudo(){
    if (document.getElementById("pseudo").value.length == 0 || document.getElementById("prenom").value.length < 3){
        document.getElementById("prenom").style.backgroundColor = "red";
    } else {
        document.getElementById("prenom").style.backgroundColor = "green";
    }
}

function verifPrenom(){
    if (document.getElementById("prenom").value.length == 0 || document.getElementById("prenom").value.length < 3){
        document.getElementById("prenom").style.backgroundColor = "red";
    } else {
        document.getElementById("prenom").style.backgroundColor = "green";
    }
}

function verifPrenom(){
    if (document.getElementById("prenom").value.length == 0 || document.getElementById("prenom").value.length < 3){
        document.getElementById("prenom").style.backgroundColor = "red";
    } else {
        document.getElementById("prenom").style.backgroundColor = "green";
    }
}

function verifPrenom(){
    if (document.getElementById("prenom").value.length == 0 || document.getElementById("prenom").value.length < 3){
        document.getElementById("prenom").style.backgroundColor = "red";
    } else {
        document.getElementById("prenom").style.backgroundColor = "green";
    }
}