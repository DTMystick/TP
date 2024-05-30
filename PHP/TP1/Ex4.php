<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $tabE1 = [ 'Frédérique' => 12, 'Silvia' => 3, 'Julien' => 19, 'Lionel' => 12, 'Mario' => 12,
    'Andrea' => 9, 'Gérard' => 3 ];?>

<ol>
<?php foreach($tabE1 as $nom => $note) {?>
    
<li><?php echo $nom ?></li>

    <?php } ?>
    </ol>

    <table>
<?php foreach($tabE1 as $nom => $note) {?>
    <tr>
<td><?php echo $nom ?> : <?php echo $note ?>/20</td>
</tr>
    <?php } ?>
    </table>
    
    <?php 
    $tabE2 = [12 => ['Frédérique', 'Lionel', 'Mario'], 3 => ['Silvia', 'Gérard'], 19 => ['Julien'],
    9 => ['Andrea']];?>

<ol>
<?php foreach($tabE2 as $note => $noms) {
    foreach($noms as $nom){?>
    
<li><?php echo $nom ?></li>
    <?php } ?>

    <?php } ?>
    </ol>

    <table>
<?php foreach($tabE2 as $note => $noms) {
    foreach($noms as $nom){?>
    <tr>
<td><?php echo $nom ?> : <?php echo $note ?>/20</td>
</tr>
    <?php } ?>
    <?php } ?>

    </table>

</body>
</html>