<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="listeClients.php" method="get">
<input type="submit" name="liste" value="afficher liste">
</form>
    <form method="get" action="transaction.php">
        <label for="prenom">Prenom</label><br>
        <input type="text" name="prenom"><br>

        <label for="nom">Nom</label><br>
        <input type="text" name="nom"><br>

        <label for="adresse">Adresse</label><br>
        <input type="text" name="adresse"><br>

        <label for="dateNaissance">Date de naissance</label><br>
        <input type="date" name="dateNaissance"><br>

        <label for="email">E-mail</label><br>
        <input type="email" name="email"><br>

        <label for="tel">Telephone</label><br>
        <input type="text" name="tel"><br>

        <label for="pseudo">Pseudo</label><br>
        <input type="text" name="pseudo"><br>

        <label for="mdp">Mot de passe</label><br>
        <input type="text" name="mdp"><br>

        <label for="confMdp">Confirmer le mot de passe</label><br>
        <input type="text" name="confMdp"><br>

        <input type="submit">
    </form>



</body>

</html>