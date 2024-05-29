<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $joueurs = [
        ['nom' => 'Mehwish', 'score' => 150],
        ['nom' => 'Laurent', 'score' => 120],
        ['nom' => 'Ines', 'score' => 98],
        ['nom' => 'Sondes', 'score' => 153],
        ['nom' => 'Davide', 'score' => 118]
    ];

    function bestPlayer($j)
    {
        $best = 0;
        $name = "";
        foreach ($j as $player) {
            if ($player['score'] > $best) {
                $name = $player['nom'];
                $best = $player['score'];
            }
        }
        return "Le meilleur joueur est " . $name . " avec un score de " . $best;
    }

    echo bestPlayer($joueurs);

    ?>
</body>

</html>