let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);

xhr.onload = function(){
    if (xhr.status >= 200 && xhr.status <= 300){
        let resultat = JSON.parse(xhr.responseText);
        const resultatDiv = document.getElementById('resultat');
        resultatDiv.innerHTML = '<h2>Données recuperées :</h2>' + 
                                '<p>Nom : ' + resultat.nom + '</p>' +  
                                '<p>Email : ' + resultat.email + '</p>';
    } else {
        console.error('Erreur de requete : ' + xhr.status);
    }
}

xhr.onerror = function(){
    console.error('Erreur reseau');
}

xhr.send();