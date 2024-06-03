<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    require_once('configConnect.php');
    $myConnect = openConnect();
    
    $ch = "SELECT * FROM client;";
    $req = $myConnect->prepare($ch);
    $req->execute();

    echo "<table>";
    while ($data = $req->fetch()){
        echo "<tr><td>" . $data[0] . "</td><td>" . $data[1] . "</td><td>" .$data[2] 
        . "</td><td>" .$data[3] . "</td><td>" .$data[4] . "</td><td>" .$data[5] . "</td></tr>";
    }
    echo "</table>";
    ?>
</body>
</html>