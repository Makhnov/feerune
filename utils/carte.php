<?php
require_once 'utils/config.php';

$stmt = $db->prepare("SELECT * FROM region WHERE id BETWEEN 2 AND 52");
$stmt->execute();
$regions = $stmt->fetchAll(PDO::FETCH_ASSOC);

$stmt = $db->prepare("SELECT * FROM position WHERE id_region BETWEEN 2 AND 52");
$stmt->execute();
$positions = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Indexer les régions et les positions par id pour faciliter l'accès
$regionsById = array_column($regions, null, 'id');
$positionsById = array_column($positions, null, 'id_region');

// Préparer un tableau pour stocker les enfants de chaque région et les informations pour JavaScript
$children = [];
$regionsForJs = [];

foreach ($regions as $region) {
    $children[$region['id']] = [];

    // Remplir le tableau avec les informations pour JavaScript
    $regionsForJs[] = [
        'id' => $region['id'],
        'nom' => $region['nom'],
        'fr' => $region['fr'],
        'description' => $region['description'],
        'coutumes' => $region['coutumes'],
        'id_region_mere' => $region['region_mere_id'],
    ];
}

// Répartir les régions en fonction de leur région mère
foreach ($regions as $region) {
    if ($region['region_mere_id'] != 1000) {
        $children[$region['region_mere_id']][] = $region;
    }
}

// Convertir le tableau en JSON
$regionsJson = json_encode($regionsForJs);
// Écrire le script JavaScript pour définir une variable avec les informations des régions
echo "<script>const regions = $regionsJson;</script>";

// Fonction pour afficher une région et ses enfants
function displayRegion($region, $positionsById, $children) {
    $position = $positionsById[$region['id']];
    $scaling = json_decode($position['scaling']);
    $zIndex = json_decode($position['zIndex']);
    $image = json_decode($position['image']);

    echo '<g id="' . $region['nom'] . '" data-nom="' . $region['fr'] . '" data-capitale="' . $region['capitale'] . '" data-population="' . $region['population'] . '" data-description="' . $region['description'] . '">';
    for ($i = 0; $i < count($scaling); $i++) {
        echo '<path id="' . $scaling[$i] . '" class="' . $zIndex[$i] . '" d="' . $image[$i] . '"></path>';
    }
    
    foreach ($children[$region['id']] as $child) {
        displayRegion($child, $positionsById, $children);
    }
    
    echo '</g>';
}

foreach ($regions as $region) {
    if ($region['region_mere_id'] == 1000) {
        displayRegion($region, $positionsById, $children);
    }
}