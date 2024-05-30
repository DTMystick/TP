<?php 
require_once('configConnect.php');
$myConnect = openConnect();

$ct = "CREATE TABLE IF NOT EXISTS mage(
    id INT AUTO_INCREMENT,
    baton VARCHAR(50),
    tome VARCHAR(50),
    PRIMARY KEY(id)
)";
$myConnect->exec($ct);

// $ct = "INSERT INTO mage (baton, tome) VALUES
//     ('bois', 'seisme'),
//     ('acier', 'enflammer'),
//     ('diamant', 'geler')
// ";
// $myConnect->exec($ct);

$baton = $_GET["baton"];
$tome = $_GET["tome"];

$ct = "INSERT INTO mage (baton, tome) VALUES
        ('" . $baton . "', ' ". $tome . "')";
$myConnect->exec($ct);


?>