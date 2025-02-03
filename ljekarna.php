<?php
// Dohvati unesene podatke
$andol = isset($_POST['andol']) ? (int)$_POST['andol'] : 0;
$aspirin = isset($_POST['aspirin']) ? (int)$_POST['aspirin'] : 0;
$c = isset($_POST['c']) ? (int)$_POST['c'] : 0;
$thing = isset($_POST['thing']) ? htmlspecialchars($_POST['thing']) : 'Niste odabrali.';

// Definirane cijene lijekova
define("ANDOL_PRICE", 4);
define("ASPIRIN_PRICE", 3);
define("C_PRICE", 2);

// Izračuni
$sum = $andol + $aspirin + $c;
$sumPrice = ($andol * ANDOL_PRICE) + ($aspirin * ASPIRIN_PRICE) + ($c * C_PRICE);
$sumPricePDV = $sumPrice * 1.25;

// Generiraj fiskalni račun
echo "<h2>Fiskalni račun</h2>";
echo "<p><strong>Ukupan broj naručenih lijekova:</strong> $sum</p>";

echo "<h3>Detalji narudžbe:</h3>";
echo "<ul>";
if ($andol > 0) echo "<li>$andol x Andol (Cijena po komadu: " . ANDOL_PRICE . " €)</li>";
if ($aspirin > 0) echo "<li>$aspirin x Aspirin (Cijena po komadu: " . ASPIRIN_PRICE . " €)</li>";
if ($c > 0) echo "<li>$c x Vitamin C (Cijena po komadu: " . C_PRICE . " €)</li>";
echo "</ul>";

echo "<p><strong>Kako ste saznali za nas:</strong> $thing</p>";
echo "<p><strong>Ukupna cijena bez PDV-a:</strong> " . number_format($sumPrice, 2) . " €</p>";
echo "<p><strong>Ukupna cijena s PDV-om (25%):</strong> " . number_format($sumPricePDV, 2) . " €</p>";
if($thing=="Ja sam redovan kupac"){
    echo "<p><em>Hvala!</em></p>";
}
else{
    echo "<p><em>Dođite nam ponovo.</em></p>";
}
?>
