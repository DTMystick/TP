<?php
require_once('configConnect.php');
$myConnect = openConnect();

// $ct = "CREATE TABLE IF NOT EXISTS client(
//     idClient INT AUTO_INCREMENT,
//     nom VARCHAR(50),
//     prenom VARCHAR(50),
//     adresse VARCHAR(50),
//     dateNaissance DATE,
//     email VARCHAR(50),
//     tel VARCHAR(50),
//     PRIMARY KEY(idClient)
// )";
// $myConnect->exec($ct);

// $ct = "CREATE TABLE IF NOT EXISTS compte(
//     idCompte INT AUTO_INCREMENT,
//     pseudo VARCHAR(50),
//     mdp VARCHAR(50),
//     idClient INT,
//     PRIMARY KEY(idCompte),
//     FOREIGN KEY(idClient) REFERENCES client(idClient)
// )";
// $myConnect->exec($ct);

// $ct = "INSERT INTO mage (baton, tome) VALUES
//     ('bois', 'seisme'),
//     ('acier', 'enflammer'),
//     ('diamant', 'geler')
// ";
// $myConnect->exec($ct);

if (
    isset($_GET["prenom"]) && isset($_GET["nom"])
    && isset($_GET["adresse"]) && isset($_GET["dateNaissance"])
    && isset($_GET["email"]) && isset($_GET["tel"])
    && isset($_GET["pseudo"]) && isset($_GET["mdp"])
) {

    $prenom = $_GET["prenom"];
    $nom = $_GET["nom"];
    $adresse = $_GET["adresse"];
    $dateNaissance = $_GET["dateNaissance"];
    $email = $_GET["email"];
    $tel = $_GET["tel"];
    $pseudo = $_GET["pseudo"];
    $mdp = $_GET["mdp"];

    $ct = "INSERT INTO client(prenom, nom, adresse, dateNaissance, email, tel) VALUES
                ('" . $prenom . "', 
                 ' " . $nom . "',
                 '" . $adresse . "',
                 '" . $dateNaissance . "',
                 '" . $email . "',
                 '" . $tel . "')";

    $myConnect->exec($ct);

$ct = "SELECT MAX(idClient) FROM client;";

$req = $myConnect->prepare($ct) ;
$req->execute();

while ($data = $req->fetch()){
    $maxIdClient = $data[0];
}

    $ct = "INSERT INTO compte(pseudo, mdp, idClient) VALUES
        (
            '" . $pseudo . "',
            '" . $mdp . "',
            '" . $maxIdClient . "'
        )";
    $myConnect->exec($ct);
}
