<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $anneeScolaire = [
        "Rentrée" => [5, 9, 2016],
        "Vacances Toussaint" => [
            "début" => [22, 10, 2016],
            "fin" => [30, 10, 2016]
        ],
        "Vacances Noël" => [
            "début" => [17, 12, 2016],
            "fin" => [2, 1, 2017]
        ],
        "Vacances d'hiver" => [
            "début" => [11, 2, 2017],
            "fin" => [19, 2, 2017]
        ],
        "Vacances de printemps" => [
            "début" => [1, 4, 2017],
            "fin" => [9, 4, 2017]
        ],
        "Fin des cours" => [8, 7, 2017]
    ];
    ?>

    <ul>
        <?php
        foreach ($anneeScolaire as $key => $dates) {
            if (count($dates) == 3) {
                echo "<li> $key : " . implode("/", $dates) . "</li>";
            } else {
                echo "<li> $key : " . "du " . implode("/", $dates['début']) . " au " . implode("/", $dates['fin']) . "</li>";
            }
        }
        ?>
    </ul>
</body>

</html>