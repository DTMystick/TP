<?php 
$value = $_GET["value"];

    if (is_numeric($value)){
        echo "C'est un nombre";
    } else {
        echo "Ce n'est pas un nombre";
    }

// http://localhost/nombre.php?value=25
?>