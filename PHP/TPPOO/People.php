<?php
class People
{
    // Atributs
    protected $nom;
    protected $prenom;
    protected $age;
    protected $function;
    protected $money;

    // Construct
    public function __construct($n, $p, $a, $f, $m)
    {
        $this->nom = $n;
        $this->prenom = $p;
        $this->age = $a;
        $this->function = $f;
        $this->money = $m;
    }

    // Getters
    public function getNom()
    {
        return $this->nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }

    public function getAge()
    {
        return $this->age;
    }

    public function getFunction()
    {
        return $this->function;
    }

    public function getMoney()
    {
        return $this->money;
    }

    // Setters
    public function setMoney()
    {
        return $this->nom;
    }

    public function setAge()
    {
        return $this->nom;
    }

    // Fonction sanction
    public function sanction(People $passidu, $malus)
    {
        $this->money -= $this->money * $malus / 100;

        return $this->money;
    }
}

$o1 = new People("Tisné", "Damien", 26, "Developer", 2222);
$o2 = new People("Bleh", "Nassim", 24, "Swimmer", 1850);
$o3 = new People("Boruto", "Sidy", 22, "Speaker", 1234);
$o4 = new Female("Tisné", "Laurine", 21, "Artist", 3002, 3);

echo $o1->getPrenom() . " gagnait " . $o1->getMoney() . "<br>";
$o1->sanction($o1, -100);
echo "Maintenant " . $o1->getPrenom() . " gagne " . $o1->getMoney() . "<br>";

echo $o2->getPrenom() . " gagnait " . $o2->getMoney() . "<br>";
$o2->sanction($o2, 25);
echo "Maintenant " . $o2->getPrenom() . " gagne " . $o2->getMoney() . "<br>";

echo $o3->getPrenom() . " gagnait " . $o3->getMoney() . "<br>";
$o3->sanction($o3, 66);
echo "Maintenant " . $o3->getPrenom() . " gagne " . $o3->getMoney();

class Male extends People{
    private $bagarre = 0;

    public function __construct($n, $p, $a, $f, $m, $b)
    {
        parent::__construct($n, $p, $a, $f, $m);
        $this->bagarre = $b;
    }

    public function getBagarre()
    {
        return $this->bagarre;
    }

    public function setBagarre()
    {
        return $this->bagarre;
    }

}

class Female extends People{
    private $baby = 0;

    public function __construct($n, $p, $a, $f, $m, $b)
    {
        parent::__construct($n, $p, $a, $f, $m);
        $this->baby = $b;
    }

    public function getBaby()
    {
        return $this->baby;
    }

    public function setBaby()
    {
        return $this->baby;
    }

    #[\Override]
    public function sanction(People $passidu, $malus)
    {
        $this->money +=  $this->money * $malus / 100;

    }
}

echo $o4->getPrenom() . " gagnait " . $o4->getMoney() . "<br>";
$o4->sanction($o4, 777);
echo "Maintenant " . $o4->getPrenom() . " gagne " . $o4->getMoney();