<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $tab = [2 => 'test', 0 => 'nombre'];
    if (array_search("test", $tab)){
        echo '<p> in_array : 2 est dans le tableau </p>';

    }
    if (array_search('nombre', $tab)){
        echo '<p> in_array : nombre est dans le tableau </p>';

    }
    ?>
</body>

</html>