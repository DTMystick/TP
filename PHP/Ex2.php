<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table>
    <?php for($cpt = 1 ; $cpt <= 10 ; $cpt++) { ?>
        
        <tr>
            <td>7</td>
            <td> x </td>
            <td><?php echo $cpt ?></td>
            <td> = </td>
            <td><?php echo $cpt * 7 ?></td>
        </tr>

<?php } ?>
</table>

<ul>
<?php for($cpt = 1 ; $cpt <= 10 ; $cpt++) { ?>

    <li>7 x <?php echo $cpt ?> = <?php echo $cpt * 7 ?></li>
    
    <?php } ?>
</ul>
</body>
</html>