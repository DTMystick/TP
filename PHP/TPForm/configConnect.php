<?php 
function openConnect(){
    try{
        $connect = new PDO('mysql:host=localhost;dbname=formulaire;charset=utf8', 'root', '');
        echo "Connexion reussie";
    } catch(Exception $e) {
        die('Erreur, verifiez votre chaine de connexion' . $e->getMessage());
    }
    return $connect;
}
?>