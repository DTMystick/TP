<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $t = ['a'=>'z', 10=>20, 'toto'=>'titi', 'php']; 
    var_dump($t);
    ?>
<br>
<br>
    <?php 
    $tab1 = [2 => 3.14];
    var_dump($tab1);
    echo '<br>';

    $tab2 = [2 => true];
    var_dump($tab2);
    echo '<br>';

    $tab3 = [2 =>'pwal'];
    var_dump($tab3);
    echo '<br>';

    $tab4 = [3.14 => true];
    var_dump($tab4);
    echo '<br>';

    $tab5 = [3.14 => 'pwal'];
    var_dump($tab5);
    echo '<br>';

    $tab6 = [3.14 => 2];
    var_dump($tab6);
    echo '<br>';

    $tab7 = [true => 'pwal'];
    var_dump($tab7);
    echo '<br>';

    $tab8 = [true => 2];
    var_dump($tab8);
    echo '<br>';

    $tab9 = [true => 3.14];
    var_dump($tab9);
    echo '<br>';

    $tab10 = ['pwal' => 2];
    var_dump($tab10);
    echo '<br>';

    $tab11 = ['pwal' => 3.14];
    var_dump($tab11);
    echo '<br>';

    $tab12 = ['pwal' => true];
    var_dump($tab12);
    echo '<br>';
    ?>
<br>
<?php 
    $t = ['a'=>'z', 10=>20, 'toto'=>'titi', 'php', 'bon' => 'jour', 'nuit']; 
    var_dump($t);
    ?>
</body>
</html>