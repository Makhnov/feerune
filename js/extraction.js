// Classe Personnage
// Attributs : id, nom, titre, role, description, id_localite, id_emplacement
class Personnage {
    // CONSTRUCTEUR
    constructor(id, nom, titre, role, description, id_localite, id_emplacement) {
        this.id = id;
        this.nom = nom;
        this.titre = titre;
        this.role = role;
        this.description = description;
        this.id_localite = id_localite;
        this.id_emplacement = id_emplacement;
    }

    // GETTERS
    getIdPersonnage() {
        return this.id;
    }

    getNomPersonnage() {
        return this.nom;
    }

    getTitrePersonnage() {
        return this.titre;
    }

    getRolePersonnage() {
        return this.role;
    }

    getDescriptionPersonnage() {
        return this.description;
    }

    getIdLocalitePersonnage() {
        return this.id_localite;
    }

    getIdEmplacementPersonnage() {
        return this.id_emplacement;
    }

    getAllPersonnage() {
        return {
            id: this.id,
            nom: this.nom,
            titre: this.titre,
            role: this.role,
            description: this.description,
            id_localite: this.id_localite,
            id_emplacement: this.id_emplacement,
        };
    }

    // SETTERS
    setIdPersonnage(id) {
        this.id = id;
    }

    setNomPersonnage(nom) {
        this.nom = nom;
    }

    setTitrePersonnage(titre) {
        this.titre = titre;
    }

    setRolePersonnage(role) {
        this.role = role;
    }

    setDescriptionPersonnage(description) {
        this.description = description;
    }

    setIdLocalitePersonnage(id_localite) {
        this.id_localite = id_localite;
    }

    setIdEmplacementPersonnage(id_emplacement) {
        this.id_emplacement = id_emplacement;
    }
}

// Classe Position
// Attributs : id, top, left, height, width, scaling, zIndex, image, id_localite, id_personnage, id_region, id_emplacement
class Position {
    // CONSTRUCTEUR
    constructor(id, top, left, height, width, scaling, zIndex, image, id_localite, id_personnage, id_region, id_emplacement) {
        this.id = id;
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
        this.scaling = scaling;
        this.zIndex = zIndex;
        this.image = image;
        this.id_localite = id_localite;
        this.id_personnage = id_personnage;
        this.id_region = id_region;
        this.id_emplacement = id_emplacement;
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getTop() {
        return this.top;
    }

    getLeft() {
        return this.left;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getScaling() {
        return this.scaling;
    }

    getZIndex() {
        return this.zIndex;
    }

    getImage() {
        return this.image;
    }

    getIdLocalite() {
        return this.id_localite;
    }

    getIdPersonnage() {
        return this.id_personnage;
    }

    getIdRegion() {
        return this.id_region;
    }

    getIdEmplacement() {
        return this.id_emplacement;
    }

    getAll() {
        return {
            id: this.id,
            top: this.top,
            left: this.left,
            height: this.height,
            width: this.width,
            scaling: this.scaling,
            zIndex: this.zIndex,
            image: this.image,
            id_localite: this.id_localite,
            id_personnage: this.id_personnage,
            id_region: this.id_region,
            id_emplacement: this.id_emplacement,
        };
    }

    // SETTERS
    setId(id) {
        this.id = id;
    }

    setTop(top) {
        this.top = top;
    }

    setLeft(left) {
        this.left = left;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setScaling(scaling) {
        this.scaling = scaling;
    }

    setZIndex(zIndex) {
        this.zIndex = zIndex;
    }

    setImage(image) {
        this.image = image;
    }

    setIdLocalite(id_localite) {
        this.id_localite = id_localite;
    }

    setIdPersonnage(id_personnage) {
        this.id_personnage = id_personnage;
    }

    setIdRegion(id_region) {
        this.id_region = id_region;
    }

    setIdEmplacement(id_emplacement) {
        this.id_emplacement = id_emplacement;
    }
}

// Classe Emplacement
// Attributs : id, nom, nbMembres, description, idLocalite
class Emplacement {
    // CONSTRUCTEUR
    constructor(id, nom, nbMembres, description, idLocalite) {
        this.id = id;
        this.nom = nom;
        this.nbMembres = nbMembres;
        this.description = description;
        this.idLocalite = idLocalite;
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getNom() {
        return this.nom;
    }

    getNbMembres() {
        return this.nbMembres;
    }

    getDescription() {
        return this.description;
    }

    getIdLocalite() {
        return this.idLocalite;
    }

    // SETTERS
    setId(id) {
        this.id = id;
    }

    setNom(nom) {
        this.nom = nom;
    }

    setNbMembres(nbMembres) {
        this.nbMembres = nbMembres;
    }

    setDescription(description) {
        this.description = description;
    }

    setIdLocalite(idLocalite) {
        this.idLocalite = idLocalite;
    }
}

// Classe Localite
// Attributs : id, nom, population, description, idRegion, idPersonnage
class Localite {
    // CONSTRUCTEUR
    constructor(id, nom, population, description, idRegion, idPersonnage) {
        this.id = id;
        this.nom = nom;
        this.population = population;
        this.description = description;
        this.idRegion = idRegion;
        this.idPersonnage = idPersonnage;
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getNom() {
        return this.nom;
    }

    getPopulation() {
        return this.population;
    }

    getDescription() {
        return this.description;
    }

    getIdRegion() {
        return this.idRegion;
    }

    getIdPersonnage() {
        return this.idPersonnage;
    }

    // SETTERS
    setId(id) {
        this.id = id;
    }

    setNom(nom) {
        this.nom = nom;
    }

    setPopulation(population) {
        this.population = population;
    }

    setDescription(description) {
        this.description = description;
    }

    setIdRegion(idRegion) {
        this.idRegion = idRegion;
    }

    setIdPersonnage(idPersonnage) {
        this.idPersonnage = idPersonnage;
    }
}

// Classe Region
// Attributs : id, nom, population, description, idPersonnage, regionMereId
class Region {
    // CONSTRUCTEUR
    constructor(id, nom, population, description, idPersonnage, regionMereId) {
        this.id = id;
        this.nom = nom;
        this.population = population;
        this.description = description;
        this.idPersonnage = idPersonnage;
        this.regionMereId = regionMereId;
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getNom() {
        return this.nom;
    }

    getPopulation() {
        return this.population;
    }

    getDescription() {
        return this.description;
    }

    getIdPersonnage() {
        return this.idPersonnage;
    }

    getRegionMereId() {
        return this.regionMereId;
    }

    // SETTERS
    setId(id) {
        this.id = id;
    }

    setNom(nom) {
        this.nom = nom;
    }

    setPopulation(population) {
        this.population = population;
    }

    setDescription(description) {
        this.description = description;
    }

    setIdPersonnage(idPersonnage) {
        this.idPersonnage = idPersonnage;
    }

    setRegionMereId(regionMereId) {
        this.regionMereId = regionMereId;
    }
}

// Classe Administrer
// Attributs : id, idPersonnage
class Administrer {
    // CONSTRUCTEUR
    constructor(id, idPersonnage) {
        this.id = id;
        this.idPersonnage = idPersonnage;
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getIdPersonnage() {
        return this.idPersonnage;
    }

    // SETTERS
    setId(id) {
        this.id = id;
    }

    setIdPersonnage(idPersonnage) {
        this.idPersonnage = idPersonnage;
    }
}

// Classe Conseiller
// Attributs : id, idRegion
class Conseiller {
    // CONSTRUCTEUR
    constructor(id, idRegion) {
        this.id = id;
        this.idRegion = idRegion;
    }

    // GETTERS
    getId() {
        return this.id;
    }

    getIdRegion() {
        return this.idRegion;
    }

    // SETTERS
    setId(id) {
        this.id = id;
    }

    setIdRegion(idRegion) {
        this.idRegion = idRegion;
    }
}

/*

// Fonction pour extraire les informations des régions et des paths
function extractRegionAndPaths() {
    const regions = [];
    const svgs = document.getElementById('masque');
    const gElements = svgs.getElementsByTagName('g');

    for (let i = 0; i < gElements.length; i++) {
        const gElement = gElements[i];
        const regionName = gElement.getAttribute('id');
        const parentRegion = gElement.parentElement.getAttribute('id');
        const pathElements = Array.from(gElement.children).filter((child) => child.tagName === 'path');

        const paths = pathElements.map((pathElement) => {
            const pathId = pathElement.getAttribute('id');
            const pathD = pathElement.getAttribute('d');
            const pathClasses = pathElement.getAttribute('class');
            return { id: pathId, d: pathD, classes: pathClasses };
        });

        const region = new Region(regionName, parentRegion, paths);
        regions.push(region);
    }

    return regions;
}

// Appel de la fonction pour extraire les informations
const regionsData = extractRegionAndPaths();
console.log(regionsData);
console.log(regionsData[24]);
console.log(regionsData[24].population);


let regionId = 2; // initialisation de l'ID de région
let positionId = 13; // initialisation de l'ID de position
let regionNameIdMap = {}; // Pour stocker la correspondance entre le nom et l'ID de la région

let sqlScript = ""; // contiendra le script SQL final

regionsData.forEach(region => {
    let regionNom = region.id;
    let regionMereId = region.nom === "masque" ? 1000 : regionNameIdMap[region.nom];
    let regionSql = `INSERT INTO region (id, nom, region_mere_id) VALUES (${regionId}, "${regionNom}", "${regionMereId}");\n`;
    sqlScript += regionSql;

    regionNameIdMap[regionNom] = regionId; // Ajouter la correspondance entre le nom et l'ID de la région

    let scalingArray = [];
    let classesArray = [];
    let imageArray = [];

    region.population.forEach(population => {
        scalingArray.push(population.id);
        classesArray.push(population.classes);
        imageArray.push(population.d);
    });

    // Convertir les tableaux en chaînes de caractères JSON pour stockage SQL.
    let scaling = JSON.stringify(scalingArray);
    let classes = JSON.stringify(classesArray);
    let image = JSON.stringify(imageArray);

    let positionSql = `INSERT INTO position (id, scaling, zIndex, image, id_region) VALUES (${positionId}, '${scaling}', '${classes}', '${image}', ${regionId});\n`;
    sqlScript += positionSql;

    regionId++; // incrémenter l'ID de région
    positionId++; // incrémenter l'ID de position
});

// À ce stade, sqlScript contient votre script SQL.
console.log(sqlScript);


/*
<g id="purple_rocks">
<g id="utherall">
  <path id="utherall-2" data-name="utherall" class="region zone" d="[...]"
  <path id="utherall-3" data-name="utherall" class="region nom" d="[...]"
  <path id="vilkstead" class="localite" d="[...]"
</g>
<g id="trisk">
  <path id="trisk-2" data-name="trisk" class="region zone" d="[...]"
  <path id="trisk-3" data-name="trisk" class="region nom" d="[...]"
  <path id="ruins_of_ascarl" class="localite" d="[...]"
  <path id="ulf_of_thuger" class="localite" d="[...]"
</g>
<path id="purple_rocks-2" data-name="purple_rocks" class="region nom" d="[...]"
</g>

Je veux que tu m'aides à créer un script js qui va m'écrire un script SQL.Administrer
Voici les tables concernées :

#TABLE REGION :
INSERT INTO 
CREATE TABLE `region`(
    `id`              Int  Auto_increment  NOT NULL ,
    `nom`             Varchar (255) NOT NULL ,
    `population`      Int ,
    `description`     Text ,
    `id_personnage`   Int ,
    `region_mere_id`  Int
,CONSTRAINT `region_PK` PRIMARY KEY (`id`)
)ENGINE=InnoDB;

#TABLE POSITION :
CREATE TABLE `position`(
    `id`            Int  Auto_increment  NOT NULL ,
    `top`           Decimal (4,2) ,
    `left`	        Decimal (4,2) ,
    `height`        Decimal (3,2) ,
    `width`         Decimal (3,2) ,
    `scaling`       Varchar (255) ,
    `zIndex`	Varchar (255) ,
    `image`         TEXT ,
    `id_localite`   Int ,
    `id_personnage` Int ,
    `id_region`     Int ,
    `id_emplacement`int         
,CONSTRAINT `position_PK` PRIMARY KEY (`id`),
)ENGINE=InnoDB;

Et pour le data voici le tableau avec 51 objets (régions):
Array(51) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

voici un des objets :
{
    "id": "the_sword_coast_north",
    "nom": "masque",
    "population": [
      {
        "id": "the_sword_coast_north-2",
        "d": "[M4294,[...]",
        "classes": "region zone"
      },
      {
        "id": "mere_of_the_dead_men",
        "d": "M4189,1881c-0.37,2.0[...]",
        "classes": "region nom"
      }
    ]
  }


JE VEUX CECI :
1. Insert une region par objet dans la table region
2. l'id du premier objet est "2", ensuite on augmente de 1 par 1. ON STOCKE L'ID
3. Le nom de la colonne "nom" est égal à objet.id
4. la colonne "region_mere_id" est égal a objet.nom (sauf si objet.nom = "masque" dans ce cas "region_mere_id" = "Feerune".
5. on insert une position dans la table position
6. l'id de la premiere position est de 13, ensuite autoincrement
7. la colonne scaling de la position est égale à un tableau avec tous les objet.population.id [id1, id2, etc.] autant que d'éléments dans le tableau population.
8 le colonne scaling de la position est égale à une tableau avec tous les objet.population.classes ["classes1", "classes 2", etc.] autant que d'éléments dans le tableau population
9 la colonne image de la position est égale à un tableau avec tous les objet.population.d ["d1", "d2", etc.] autant que d'éléments dans la tableau population.
Attention pour 7 8 9 veiller à ce que les tableaux soit bien dans l'ordre.
10. enfin la colonne id_region de la table position va être reliée à la region en cours dans la boucle (ID récupéré step 2.).
*/

/*
let regionsData = [...]; // Votre tableau de régions

let regionId = 2; // initialisation de l'ID de région
let positionId = 13; // initialisation de l'ID de position
let regionNameIdMap = {}; // Pour stocker la correspondance entre le nom et l'ID de la région

let sqlScript = ""; // contiendra le script SQL final

regionsData.forEach(region => {
    let regionNom = region.id;
    let regionMereId = region.nom === "masque" ? 1000 : regionNameIdMap[region.nom];
    let regionSql = `INSERT INTO region (id, nom, region_mere_id) VALUES (${regionId}, "${regionNom}", "${regionMereId}");\n`;
    sqlScript += regionSql;
    
    regionNameIdMap[regionNom] = regionId; // Ajouter la correspondance entre le nom et l'ID de la région
    
    let scalingArray = [];
    let classesArray = [];
    let imageArray = [];
    
    region.population.forEach(population => {
        scalingArray.push(population.id);
        classesArray.push(population.classes);
        imageArray.push(population.d);
    });

    // Convertir les tableaux en chaînes de caractères JSON pour stockage SQL.
    let scaling = JSON.stringify(scalingArray);
    let classes = JSON.stringify(classesArray);
    let image = JSON.stringify(imageArray);
    
    let positionSql = `INSERT INTO position (id, scaling, zIndex, image, id_region) VALUES (${positionId}, '${scaling}', '${classes}', '${image}', ${regionId});\n`;
    sqlScript += positionSql;

    regionId++; // incrémenter l'ID de région
    positionId++; // incrémenter l'ID de position
});

// À ce stade, sqlScript contient votre script SQL.
console.log(sqlScript);
*/

/*
// Les tableaux en entrée (remplissez-les avec vos données)
const frTab =
    [
        "Les_Vaux",
        "Sembie",
        "Grand_marais",
        "Cormyr",
        "Nord_de_la_Mer_de_Lune",
        "Mer_de_Lune_(lac)",
        "Mer_de_Lune_(région)",
        "Contrées_du_Mitan_occidentales",
        "Côte_des_dragons",
        "Mare_aux_dragons",
        "Mer_des_Étoiles_déchues",
        "Plaines_étincelantes",
        "Montagnes_floconeigeuses",
        "Bief_de_Vilhon_(région)",
        "Forêt_de_Gulthmere",
        "Turmish",
        "Evereska",
        "Marches_d'argent",
        "Frontière_sauvage",
        "Anauroch",
        "Grand_glacier",
        "Haute-Forêt",
        "Épine_dorsale_du_monde",
        "Valbise",
        "Côte_des_Épées_septentrionale",
        "Côte_des_Épées",
        "Griffes_de_troll",
        "Eauprofonde",
        "Téthyr",
        "Amn",
        "Mer_inviolée",
        "Îles_Moonshae",
        "Gwynneth",
        "Alaron",
        "Moray",
        "Île_d'Oman",
        "Archipel_de_Korinn",
        "Norland",
        "Chuteneige",
        "Hoondarrh",
        "Mintarn",
        "Îles_Nélanthères",
        "Baleinos",
        "Ruathym_(île)",
        "Gundarlun",
        "Rochers_Pourpres",
        "Utherall",
        "Trisk",
        "Tuern",
        "Archipels_divers",
    ];
const capitaleTab =
    [
        "Valbalafre",
        "Ordulin",
        "Etendue d'eau",
        "Suzail",
        "Non unifié",
        "Etendue d'eau",
        "Non unifié",
        "Non unifié",
        "Non unifié",
        "Etendue d'eau",
        "Etendue d'eau",
        "Assam",
        "Montagnes",
        "Non unifié",
        "Forêt",
        "Alaghôn",
        "Cité-État",
        "Lunargent",
        "Non unifié",
        "Pénombre",
        "Glacier",
        "Forêt",
        "Montagnes",
        "Dix-Cités",
        "Non unifié",
        "Non unifié",
        "Montagnes",
        "Cité-État",
        "Darromar",
        "Athkatla",
        "Etendue d'eau",
        "Caer Callidyrr",
        "Caer Corwell",
        "Caer Callidyrr",
        "Tribus",
        "Géants",
        "Tribus",
        "Non unifié",
        "Caer Westphal",
        "Personnage",
        "Château Mintarn",
        "Pirates",
        "Tribus",
        "Ruathym",
        "Gundbarg",
        "Ulf of Thuger",
        "Vilkstead",
        "Ulf of Thuger",
        "Uttersea",
        "Tribus",
    ];
const populationTab =
    [
        602640,
        2462400,
        0,
        1360800,
        200000,
        0,
        1745280,
        1641600,
        820800,
        0,
        0,
        423000,
        0,
        5505840,
        7000,
        1693440,
        22000,
        1090800,
        564480,
        139048,
        0,
        29088,
        0,
        10000,
        660960,
        551000,
        0,
        1347840,
        3771360,
        2963520,
        0,
        680400,
        40000,
        60000,
        3000,
        3000,
        2000,
        3000,
        20000,
        1,
        5000,
        2822,
        100,
        8000,
        20000,
        22000,
        12000,
        10000,
        2500,
        500,
    ];
const descriptionTab =
    [
        "Les Vaux sont de grandes vallées forestières composées de terres cultivées et vallonnées qui sont reliées entre elles par des routes marchandes traversant des bois splendides. Dotés d'un sol fertile et d'un climat tempéré (à l'exception des hivers extrêmement rudes), les Vaux sont le grenier des Contrées du Mitan. L'esprit d'indépendance des Vaux et leur longue alliance avec les elfes de Cormanthor ont fait de cet endroit le lieu de naissance historique ou la résidence préférée de nombreux des plus grands héros de Faerûn, dont Elminster.",
        "La Sembie est une contrée jeune, dynamique et expansionniste de marchands expérimentés, de cabales et de sectes clandestines. La Sembie est située sur la côte nord de la Mer des Étoiles déchues. Elle est séparée du Cormyr par les Pics du tonnerre et le Grand marais à l'ouest, et a une frontière commune avec les Vaux au nord. C'est le Bief des dragons qui forme sa frontière orientale. ",
        "Le Grand marais représente la frontière sud entre le Cormyr et la Sembie. Il n'est revendiqué par aucun des deux pays du fait de sa dangerosité et les deux peuples n'ont aucune raison de s'y aventurer. Le Grand marais est bordé à l'ouest par le Cormyr et à l'est par la Sembie. Au nord s'étendent les Pics du tonnerre. La Voie de la manticore passe au sud du Grand marais.",
        "Le Cormyr est une terre prospère et civilisée fondée il y a plus de mille ans, qui se situe à l'extrémité ouest de la Mer des Étoiles déchues, au sud du désert d'Anauroch et des Vaux. C'est une monarchie dont la capitale est la ville portuaire de Suzail. L'identité nationale et le paysage sont marqués par de très vieilles forêts, et le dragon, le cerf et la licorne sont omniprésents dans les contes, chansons et armoiries du royaume.",
        "Le Nord de la Mer de Lune est le nom donné à la région de la Mer de Lune, le long de la côte nord de la mer qui lui a donné son nom, et aux terres sauvages et indomptées situées plus au nord. Au cours des premières années de l'Ère des bouleversements, cette région est devenue célèbre pour son association avec les Zhents, passant partiellement sous leur contrôle depuis le siège de leur pouvoir dans le Donjon de Zhentil.",
        "La Mer de Lune est un lac naturel profond rempli par des rivières froides et rapides. Ses eaux claires, froides et violacées sont réputées pour être connectées à une mer souterraine et au Plan élémentaire de l'Eau.",
        "La Mer de lune est à la fois un lac et la région qui entour ce lac. La région est possède de nombreux et riches gisements miniers, qui contrastent avec ses mornes paysages, ses durs hivers, ses dragons ravageurs, ses pirates et ses gouvernements locaux tyranniques. Les tombes, les ruines et les repaires de monstres abondent autant que les intrigues complexes.",
        "Les Contrées du Mitan occidentales couvrent une vaste région dangereuse et sont constellées de cités-états indépendantes. Ses plaines herbeuses battues par les vents longent d'infranchissables tourbières, terres stériles, collines à pertes de vue, hautes landes et forêts isolées grouillant de monstres.",
        "La Côte des dragons représente les terres et îles situées sur le rivage sud de la partie ouest de la Mer des Étoiles déchues. Elle est davantage l'appellation d'un style de vie que d'une région géographique aux yeux des trois puissantes cités-états, de ses guildes de voleurs, de ses dizaines de groupes de pirates, et des agents des sociétés secrètes les plus sombres de Faerûn qui y vivent et y travaillent.",
        "La Mare aux dragons est un étroit bras de mer à l'ouest de la Mer des Étoiles déchues utilisé par la Côte des dragons comme voie commerciale rapide en direction du Cormyr et de la Sembie. Au vu des innombrables dangers qui parcourent ses eaux (piraterie, dragons de mer, tempêtes, ...), les marins conseillent aux nouveaux venus de préparer leur voyage avec attention.",
        "La Mer des Étoiles déchues est la plus grande mer intérieure de Faerûn. Elle relie les parties orientales et occidentales du continent et fut la première route d'immigration qu'utilisèrent les humains de Chondath pour quitter le Bief de Vilhon puis coloniser le centre et le nord de Faerûn. Elle est le domaine privilégié des navires et compagnies marchandes de l'ensemble du nord et de l'est de Faerûn.",
        "Les Plaines étincelantes se situent dans le Bief de Vilhon. Ce sont de vastes prairies d'herbes sèches qui doivent leur nom à la chaleur qui fait ondoyer l'air qui s'élève du sol presque toute l'année.",
        "Les Montagnes floconeigeuses sont encadrées par la forêt de Shilmista à l'ouest, les Montagnes Omlaradins au sud, les Montagnes fourchues, le Bain profond et le Bois d'épine à l'est, et les Montagnes du pas de géant au nord.",
        "La région du Bief de Vilhon correspond à une bonne partie des terres situées sur le rivage sud de la Mer des Étoiles déchues et emprunte son nom au bras de mer qui s'étend en direction du sud-ouest des terres. Elle comprend les régions du Chondath, du Turmish, du Hlondeth, et du Sespech en plus de nombreuses cités-états.",
        "La Forêt de Gulthmere, connue pendant un temps comme le royaume de Gulthandor, est une vaste forêt de pins et de cèdres enchevêtrés juchée sur une étendue de plateaux élevés séparant la Côte des dragons du Bief de Vilhon.",
        "Le Turmish est une terre agricole riche et fertile du Bief de Vilhon, ponctuée de villages et quelques villes paisibles et bien gérées. C'est dans la région du Turmish que les premiers humains du Bief de Vilhon se sont établis.",
        "Evereska est la dernière agglomération d'importance regroupant des elfes de la lune et du soleil à Faerûn après la Retraite. On ne peut accéder à la cité que par les airs ou en passant par les cols étroitement surveillés des Shaeradim. Depuis la Magepeste, la frontière avec la Féerie s'est amoindrie autour d'Everska, au point que des elfes passent facilement d'un plan à l'autre.",
        "Les Marches d'argent, aussi appelées Luruar, forment un large territoire dans les terres septentrionales de Faerûn, au climat rude et à la nature hostile pour la civilisation. Les villes qui s'y trouvent sont sûres et accueillantes mais cernées de contrées sauvages aux nombreuses ruines et repaires monstrueux.",
        "La Frontière sauvage comprend les terres au nord du Fleuve Delimbiyr qui ne font ni partie de la Haute-Forêt, ni des Marches d'argent, ni de la Côte des Épées septentrionale ou d'Eauprofonde. La Frontière sauvage est constituée de montagnes abruptes et de forêts vierges.",
        "L'Anauroch est le désert qui domine la région nord de Faerûn. C'est une immensité rocheuse, sablonneuse et désolée qui s'étend presque jusqu'à la Mare aux dragons. Le Grand Désert n'a pas toujours été aussi vaste ; il a remarquablement progressé au cours du dernier millénaire, repoussant les sauvages, les gobelins et autres créatures maléfiques vers le sud et les communautés humaines. Il a avalé nombre de royaumes humains et elfiques, et a englouti leurs ruines dans son sable : Nétheril, Asram, Hlondath, Anaurie, la cité d'Orolin, et les grands royaumes gobelinoïdes gisent maintenant sous ses dunes changeantes.",
        "Créé par le collier de glace magique d'Ulutiu, le Grand glacier recule constamment depuis des siècles. Vers 1000 CV le Grand glacier recouvrait encore la Vaasie et la Damarie.",
        "La Haute-Forêt est un vestige des premiers jours du monde, d'une époque où les elfes, les géants et les dragons régnaient sur un continent couvert de végétation.",
        "L'Épine dorsale du monde est une longue chaîne montagneuse qui sépare les région polaires du nord de Faerûn de celles moins arides au sud. Elle est considérée comme un mur infranchissable et sans limite de hautes montagnes gelées.",
        "Valbise est la plus septentrionale des terres habitées par les humains habitant les Dix-Cités.[1] C'est une terre glacée et inhospitalière, uniquement réchauffée par quelques rares brises marines.",
        "La Côte des Épées septentrionale est une région de mille kilomètres de long et de cinq cent kilomètres de large constituée de montagnes côtières, de forêts et de villes couronnées de volutes de fumée. De nombreuses puissances cherchent à contrôler la région, que ce soit Eauprofonde au sud ou Luskan au nord, que ce soit l'Alliance des seigneurs, la Confrérie des arcanes ou l'Association des krakens.",
        "La Côte des Épées est une côte rocheuse qui tire son nom des falaises blanches et tranchantes qui s'élève le long de son rivage, séparant la mer à l'ouest, et la terre à l'est. Les falaises peuvent atteindre près de huit cents mètres de haut. Il n'y a presque aucun point d'ancrage praticable pour les navires le long de cette côte et les ports y sont rares et épars.",
        "Les Griffes de troll sont des collines défoncées et des champs de pierres où courent de petites rivières d'eau potable se jetant dans la Rivière Sinueuse.",
        "Eauprofonde est une immense ville du Nord et une puissance cosmopolite majeure de Faerûn. Elle bénéficie d'un excellent port, d'un régime sage et tolérant, et d'un solide tradition magique qui produit de puissants magiciens du Bien, et quelques magiciens maléfiques. Cette ville est comme une polisseuse de diamant, lissant les défauts des individus pour qu'ils puissent donner le meilleur d'eux-mêmes.",
        "Le Téthyr est un pays ancien féodal composé de seigneuries et de fiefs, souvent fragmenté, au climat chaud et sec et pourtant fertile de fiers chevaliers, de forêt et de fermes, de troupeaux et de richesses.",
        "L'Amn est une nation de marchands qui commercent par voie terrestre et maritime avec des contrées exotiques. Si cette nation est bien plus riche que des métropoles septentrionales comme la Porte de Baldur ou même Eauprofonde, son influence est freinée par la réticence de ses dirigeants à œuvrer pour l'intérêt national. En outre, le pays est gangréné par les Voleurs de l'ombre.",
        "La Mer inviolée est un vaste océan situé entre Faerûn à l'est, Maztica à l'ouest, séparant les deux continents par près de 4800 kilomètres d'étendue d'eau quasiment jamais explorée.",
        "Les îles Moonshae sont une poignée d'îles principales et une centaine d'îles plus petites aux paysages déchiquetés et à la météorologie difficile. Les îles du nord sont le fief de Nordiques tandis que les îles du sud sont habitées par le Ppeuple. Les Îles Moonshae sont régulièrement attaquées par des pirates des Îles Nélanthères.",
        "Gwynneth est la plus grande des îles méridionales des Îles Moonshae. Elle fut jadis colonisée par les Nordiques de l'Île d'Oman dans sa partie nord, par le Ppeuple dans sa partie sud. Depuis l'apparition de la rutilante Karador et de la reine Ordalf, l'île est devenue un site magique saisissant, dont les vallées, forêts et cours d'eau semblent irradier, et renommée Sarifal par ses habitants féeriques.",
        "Alaron est à la fois la plus grande île des Îles Moonshae et son plus puissant royaume. Le rapprochement des Nordiques et du Ppeuple sur cette île a petit à petit réduit les divisions séparant leurs traditions.",
        "Moray est la plus au sud-ouest des Îles Moonshae. Elle est bordée à l'est par Gwynneth, au nord-est par l'Île d'Oman et la Mer des Moonshae, au nord par la Norland, et à l'ouest par la Mer inviolée.",
        "L'Île d'Oman était autrefois sous l'autorité de la Forteresse inébranlable, le plus craint des royaumes des Nordiques. Mais l'île fut balayée par une invasion de géants, faisant d'Oman l'île la plus sauvage et dangereux des Moonshae.",
        "L'archipel de Korinn est un archipel de dizaines de petites îles situé dans le nord des Îles Moonshae. Il est bordé au sud par l'île d'Alaron la Mer des Moonshae, au sud-ouest par l'île de Norland, au sud-est par l'île de Mintarn, au nord-ouest par l'île du Ruathym, et à l'est par la Mer des Épées.",
        "Norland est l'île principale située la plus à l'ouest des Îles Moonshae.",
        "Chuteneige est l'île située la plus au sud-est des Îles Moonshae.",
        "Hoondarrh, surnommé la Furie Rouge de Mintarn, est un dragon rouge mâle d'âge vénérable. Il dort beaucoup mais attaque périodiquement la partie supérieure du Val Delimbiyr, les Montagnes Nétheres et le Vieux Delzoun lorsqu'il a faim.",
        "Mintarn est une île de la Mer des Épées. Elle est située à l'est des Îles Moonshae et à l'ouest de la Côte des Épées.",
        "Les Îles Nélanthères forment un archipel de milliers d'atolls disséminés dans la Mer inviolée. La centaine d'îles possédant une source d'eau potable grouille de pirates qui s'attaquent aux navires de l'Amn, du Calimshan, de la Côte des Épées et des Îles Moonshae.",
        "Les Baleinos sont un groupement d'île de la Mer des épées, situé à l'est du Ruathym, et au nord de l'Archipel de Korinn.",
        "Le Ruathym est un groupe d'île d'où sont originaires les Nordiques. Certains disent que les îles du Ruathym font partie des Îles Moonshae bien qu'elles se trouvent à plus de 300 kilomètres des îles principales.",
        "Gundarlun était une île de la mer sans Voie, au large de la côte nord de l'Épée.",
        "Les Roches Pourpres sont un archipel de la Mer Sans Voie situé à l'ouest de Gundarlin, au-delà des eaux chaudes de la Rivière. Ils se présentaient comme des affleurements rocheux, mais des vallées verdoyantes s'abritaient des tempêtes derrière leurs sommets couverts de forêts clairsemées.",
        "Avec des eaux de pêche plus riches que celles de sa voisine, la cité trône d'Utheraal avait suffisamment de prises pour satisfaire ses propres besoins et gagner sa vie en exportant de grandes quantités de poissons séchés, fumés, salés et marinés vers Gundarlun, qui les expédiait à son tour vers les villes de tout Faerûn. Elle produit également un fromage de chèvre piquant, salé et à base d'herbes appelé Vilksmaarg, très apprécié dans les tavernes de la Côte de l'Épée.",
        "Trisk était l'île la plus à l'ouest des Roches Pourpres.",
        "Tuern était une île du Frozenfar, dans la mer sans Voie, loin à l'ouest de Faerûn. C'était une île rocheuse aux plages noires et aux volcans fumants, mais elle était très fertile.",
        "Archipels",
    ];
const coutumesTab =
    [
        "Société Population 602 640 en 1372 CV Races humain 80%,  drow 6%, demi-elfe 5%, elfe 4%, halfelin 2%, gnome 1%, nain 1% Alignement CB, NB, N Religion Chauntéa, Lathandre, Mailikki, Silvanus, Tempus, Ilmater, Torm, Tyr Commerce Importations armes, armures, joyaux, livres, objets en métal, papier, textiles, verre Exportations bière, blé, bois, fromages, fruits, légumes, pain, peaux Politique Gouvernement différent selon le val ; le Conseil des Vaux unifie vaguement tous les vaux Annexes Culture des Vaux",
        "Société Population 2 462 400 en 1372 CV Races humain 96%,  halfelin 3% Alignement LN, NB, LM Religion Azouth, Déneïr, Lathandre, Loviatar, Mystra, Shar, Sunie, Tymora, Waukyne Commerce Importations tout ce qu'il est possible de vendre à autrui Exportations tout ce qu'il est possible d'acheter à autrui (armes, bétail, livres, nourriture, poteries, sauces épicées, soie, vin) Politique Gouvernement ploutocratie (conseil de marchands avec un maître élu à sa tête)",
        "Les créatures du Grand marais en sortent très rarement. On peut y rencontrer :   des gnolls, des hobgobelins, des hommes-lézards, et des trolls  de petits dragons noirs  un ou deux tyrannoeils ayant perdu la raison  des feux follets  d'autres créatures étranges",
        "Société Population 1 360 800 en 1372 CV Races humain 85% ;  demi-elfe 10% ; elfe 4% Alignement LB, LN, NB Religion Chauntéa, Déneïr, Heaum, Lathandre, Lliira, Oghma, Malar, Milil, Séluné, Silvanus, Tempus, Tymora, Waukyne Commerce Importations épices, ivoire, verre Exportations armures, bois, charbon, denrées alimentaires, épées, ivoire sculpté, tissu Politique Gouvernement monarchie Dirigeant la famille Obarskyr Annexes Personnages du Cormyr  Maisons nobles du Cormyr",
        "Races Nains, elfes, humains, goblinoïdes, orcs, ogres Religions Shaundakul",
        "Le lac du nom de Mer de lune est situé au cœur de la région de la Mer de Lune, entre la Forêt de Cormanthor et les Contreforts de la terre au sud, et le Thar et les Montagnes des galènes au nord. Affluents   Rivière Blanche  Rivière Duathampre  Rivière Stojanove  Rivière Tesh",
        "Société Population 1 745 280 en 1372 CV Races humain 69%,  orque 10%, demi-orque 6%, halfelin 5%, nain 5%, ogre 2%, gnome 2% Alignement N, LM, LN Religion Baine, Cyric, Loviatar, Mask, Talos, Talona, Umberlie Commerce Importations nourriture, textiles Exportations bois de construction, esclaves, fourrures, gemmes, métal forgé Politique Gouvernement cités-état indépendantes, généralement gouvernées par un oligarchie Sites importants   Arbrelfique  Bois d'Elm  Château des dents de fer  Cloche des profondeurs  Hulbourg  Melvonte  Montéloy  Mulmastre  Phlan  Teshvague  Thentia  Vounlar  Ylraphon  Yûlash",
        "Géographie Capitale aucune Société Population 1 641 600 en 1372 CV Races humain 78% ; elfe 7% ; demi-elfes 4% ; halfelin 4%, demi-orque 3% ; gnome 2% ; nain 1% Alignement tous Religion toutes Commerce Importations bière, fer, herbes médicinales, poisson, tapis Exportations argent, laine, or, poterie Politique Gouvernement cités-états, dotées chacune d'un gouvernement distinct",
        "Géographie Capitale aucune nation unifiée, aucune capitale Société Population 820 800 en 1372 CV Races humain 92% ;  halfelin 3% ; demi-elfe 2% ; gnome 2% Alignement N, NM, LM Religion Heaum, Sunie, Tempus, Tymora, Umberlie  (Lathandre, Shaundakul, Waukyne) Commerce Importations denrées alimentaires, métaux précieux, esclaves, produits destinés à l'exportation Exportations navires, produits d'autres nations Politique Gouvernement cités-états indépendantes et libres repaires de pirates",
        "Géographie La Mare aux dragons fait 160 km de long en son point le plus large (d'est en ouest) et 16 kilomètre de large en son point le plus étroit, entre Port-Ponant et Urmlaspyre. Elle est connectée à la Mer des Étoiles déchues à l'est. Elle est bordée au nord par les terres du Cormyr et les Cornes des tempêtes, et au sud par la Côte des dragons. Cités côtières  du Cormyr   Suzail   Marsembre  de la Côte des dragons   Ilipur   Pros   Teziir  de la Sembie   Urmlaspyre Affluents  le Fleuve wiverne  l'Étoilée  la Cuve",
        "Géographie Située en plein cœur de Faerûn, la Mer des Étoiles déchues est bordée de nombreuses nations et abrite quantités d'îles. Plusieurs bras de mer découpe le littoral de la Mer des Étoiles déchues ; parmi eux on compte :  La Mare aux dragons, à l'ouest, frontière entre le Cormyr, la Côte des dragons, et les Contrées du Mitan occidentales.  Le Bief des dragons, au nord, frontière entre la Sembie, les Vaux, et le Vaste.  Le Bief oriental, au nord-est, frontière entre l'Impiltur, le Grand Val, et le Thesk.  Le Bief des magiciens. Bras de mer s'étendant vers l'est, entre la portion sud de la péninsule aglarondienne appelée le Bief des magiciens également, la partie sud-ouest du Thay, le nord du Chessenta et du Threskel, jusqu'aux îles d'Alaor.  Le Bief de Vilhon, au sud, frontière entre le Turmish, le Hlondeth, le Chondath, et le Sespech.  La Mer d'Alambre, au sud-est, frontière entre le Thay, la Mulhorande, et l'Unther.  La Baie de Chessenta, au sud, qui s'enfonce dans les ruines du Chessenta et l'Akanûl. Îles et archipels De nombreuses îles émergent des eaux de la Mer intérieure. Parmi elles on retrouve :  Île de Prespur, en face de la côte Sembienne.  Les Îles pirates, en plein centre de la Mer des Étoiles déchues.  Les Yeux de Silvanus, à l'entrée du Bief de Vilhon  Alaor, située au sud du Thay Caractéristiques géographiques mineures  Le Cap de Croc-dragon  Île des Dents Pointues Rivières et fleuves se jetant directement dans la Mer des Étoiles déchues  Le Fleuve Lis. C'est grâce à ce fleuve que la Mer des Étoiles déchues est connectée à la Mer de lune.  La Rivière Cèdre Sites importants   Nhalloth  Muraille Briserequins  Myth Nantar. Principale cité des elfes des mers de la région  Olleth  Xxiphu",
        "Géographie  Les Plaines étincelantes sont bordées au nord par la Côte des dragons et le Lac du longbras, à l'ouest par les Montagnes du Pas de géant et la Plaine du géant, au sud par les Flancs hasardeux et le Bain profond, et à l'est par les Monts Osraunes et le Bois humide.  Les Plaines étincelantes sont traversées du sud au nord par la Rivière des pluies. Habitants  Des humains sont établis dans les villes d'Assam, Ormath, et Lheshayl.  Des tribus de centaures et de wemics sont également établies dans les Plaines étincelantes. La tribu de wemics la plus connue est la tribu Tenpaw",
        "Sites importants  Alisarhold, une enclave cachée des sorciers vachers d'Amn  La ville de Carradoon  La bibliothèque édificatrice  L'Envol de l'Esprit, temple des dieux Deneir et Oghma  Le château de la Trinité, siège d'une secte talonienne  La grotte de Frère Luiman, lieu saint pour les adeptes d'Eldath.",
        "Société Population 5 505 840 en 1372 CV Races humain 95%,  nain 2%,elfe 1%,homme-lézard 1% Alignement N, LN, NB Religion Eldath, Heaum, Lliira, Malar, Nobanion, Silvanus, Talos, Tempus, Tyr Commerce Importations métal Exportations chevaux, esclaves, pierre, poisson, vin Politique Gouvernement plusieurs royaumes et cités-états indépendantes",
        "Nom VO Gulthmere Forest Type royaume forestier Région Côte des dragons",
        "Société Population 1 693 440 en 1372 CV Races humains 78% ;  nains 9% ; halfelins 5% ; elfes 3% ; gnomes 2% ; demi-elfes 1% ; demi-orques 1% ; Alignement N, LN, LB Religion Chauntéa, Eldath, Heaum, Lliira, Loviatar, Nobanion, Silvanus, Séluné, Tempus, Tyr Commerce Importations métal, produits de luxe Exportations bois de construction, céréales, mercenaires, sel, verre Politique Gouvernement république",
        "Races elfe de la lune, elfe du soleil Politique Gouvernement Ainés des collines",
        "Société Population 1 090 800 en 1372 CV Races humain 40%,  nain 20%, elfe 20%, demi-elfe 10%, halfelin 5%, gnome 2%, demi-orque 2% Alignement LB, NB, CB Religion Corellon Larethian, Heaum, Lathandre, Lurue, Mailikki, Moradin, Mystra, Oghma, Séluné, Sunie, Tymora Commerce Importations armures, épices, livres, objets manufacturés, poteries, vin Exportations artisanat elfique et nain, aventuriers, fourrures, métaux précieux Politique Gouvernement confédération de seigneurs dirigée par Alustriel Maindargent",
        "Société Population 564 480 en 1372 CV Races humain 55%,  orque 20%, nain 5%, demi-elfe 5%, elfe 4%, demi-orque 4%, halfelin 4%, gnome 2% Alignement tous Religion presque toutes Commerce Importations épices, livres, mineurs, objets manufacturés, objets magiques, poteries Exportations bois, fourrures, gemmes, mercenaires, métaux précieux, objets en cuir Politique Gouvernement cités franches, tribus et clans",
        "Société Population 114 048 (sans prendre en compte la cité de Pénombre) en 1372 CV Races humains 77%,  asabis 17%, gnolls 5% Alignement NM, CM, CB Religion Beshaba, Elah (Séluné), Kozah (Talos), N'sar (Kelemvor), Shar, esprits locaux Commerce Importations bétail, objets en bois Exportations épices, sel Politique Gouvernement magocratie (cité de Pénombre),  structure tribale (bédouins)",
        "Géographie Le Grand glacier, immensité de neige et de glace, est situé à l'extrémité nord de Faerûn. Le Grand glacier est bordé au sud par la Vaasie, la Damarie et le Narfell, et à l'est par le Sossal.  Glacier de la piste gelée  Novularond Habitants Les Ulutiuns, des humains vivant en tribus, sont installés dans des zones isolées du glacier et voyagent parfois jusque dans les terres plus au sud pour y trouver de la viande et des armes en fer. Religion Les tribus barbares des contreforts du Grand glacier vénèrent Tempus.",
        "Société Population 29 088 en 1372 CV Races elfe 52%,  gnoll 12%, centaure 10%, orque 10%, humain 6%, demi-elfe 4%, demi-orque 3%, halfelin 2% Alignement tous neutres et chaotiques Religion Corellon Larethian, Eilistraée, Malar, Mailikki, Shiallia, Silvanus, Vhaeraun Commerce Importations armes, armures, aventuriers, nourriture Exportations artéfacts anciens Politique Gouvernement beaucoup de forces en compétition",
        "Géographie L'Épine dorsale du monde sépare au nord Gelointain, avec Valbise, Glacier Regh et la Mer de glace sans fin, de la Côte des Épées septentrionale, de la Frontière sauvage et des Marches d'argent au sud. Cours d'eau  Fleuve Mirar  Rivière Khedrun  Rivière du Corbeau noir Collines et montagnes  Collines du givre  Tholvarr Vallées  Val Klauthen Sites importants De nombreux domaines nains abandonnés peuvent être découverts dans les montagnes, menant sous l'Épine dorsale du monde.   Donjon de la Flèche sombre  Mille Flèches. Royaume orque.  Rocher du corbeau",
        "Géographie Valbise est située au nord de l'Épine dorsale du monde, coincée entre le Glacier Regh à l'est et la Mer des glaces flottantes au nord-ouest. Sites importants  Dix-Cités Habitants Les humains vivent majoritairement dans Dix-Cités tandis que les nains sont établis sous la glace. Rencontres Outre les habitants des Dix-Cités, dans Valbise on peut rencontrer :  des rennes, des ours polaires et des yétis, tous plus nombreux que les hommes.  quelques dragons blancs  des tribus de Reghéens",
        "Société Population 660 960 en 1372 CV Races humain 65% ;  nain 10% ; orque 8% ; demi-orque 5% ; halfelin 4% ; gnome 2% ; demi-elfe 1% Alignement tous Religion presque toutes Commerce Importations épices, livres, mineurs, objets magiques, objets manufacturés, poteries Exportations artisanat de Padhiver, bois, gemmes, mercenaires, métaux précieux, objets en cuir Politique Gouvernement diverses cités-états",
        "Caractéristiques géographiques importantes   Le Fleuve Delimbiyr coupe les falaises de Côte des Épées, juste au nord du Marécage du Lézard, peu après avoir traversé la ville de Gué de la dague.  Le Marécage du Lézard se trouve le long de la Côte des Épées.  La Forêt du Cri du troll et les Collines aux trolls se trouvent le long de la partie de la Côte des Épées.  La Rivière sinueuse se jette dans la Mer des Épées, au sud des Collines aux trolls.  La Mer des Épées borde la partie sud de la Côte des Épées.",
        "Géographie  Les Griffes de troll se trouvent dans les Contrées du Mitan occidental, à l'est de la Côte des Épées.  Les Griffes de troll sont au nord du Champs des morts, à l'est des Collines aux trolls, au sud de la Haute lande, et à l'ouest de la Forêt des dragons.  La Voie côtière longe la partie ouest des Griffes de troll. ",
        "Société Population 100 000 en 1273 CV dans la métropole,  132 661 en 1372 CV dans la métropole,1 347 840 en 1372 CV en comptant l'ensemble des territoires adjacents Races humain 64%,  nain 10%, elfe 10%, halfelin 5%, demi-elfe 5%, gnome 3%, demi-orque 2% Alignement tous Religion toutes et spécialement Déneïr, Mystra, Oghma Commerce Importations bétail, bois, céréales, cuir, minerai, produits exotiques de tous les pays Exportations ameublement, armes, bière, métaux fins, objets en cuir, poteries, tissus, toutes sortes d'objets manufacturés Politique Gouvernement oligarchie (les Seigneurs d'Eauprofonde, dirigeants anonymes et méritocratiques)",
        "Téthyr Type royaume Région Ouest de Faerûn, Terres de l'Intrigue Géographie Capitale Darromar Société Population 3 771 360 en 1372 CV Races humain 76%,  halfelin 20%, elfe 3% Alignement CB, N, LB Religion Heaum, Ilmater, Siamorphe, Torm, Tyr Commerce Importations armes, épices, mercenaires, objets magiques Exportations ambre gris, bétail, couvertures, fromage, fruits, herbes à pipe, huile de baleine, légumes, noisettes, perles, poisson, soie, tapis, thé, vêtements, vin Politique Gouvernement monarchie féodale (pas de serfs) Dirigeant reine Zaranda Étoile Rhindaun en 1372 CV Annexes Lieu du Téthyr,  Personnage du Téthyr, Culture du Téthyr",
        "Amn Nom VO Amn Type pays Région Ouest de Faerûn, Terres de l'Intrigue Géographie Capitale Athkatla Société Population 2 963 520 en 1372 CV Races humain 83%,  halfelin 15%, demi-orque 1% Alignement LN, LM, LB Religion Baine, Chauntéa, Cyric, Séluné, Sunie, Waukyne Commerce Importations armes de siège, mercenaires, objets magiques, perles, produits exotiques (en provenance de Maztica) Exportations ale, armes, armures, bière, céréales, chevaux, fer, gemmes, joyaux, matériel pour caravane (wagons, roues, etc.), or Politique Gouvernement ploutocratie Dirigeant Conseil des Cinq   Avant: Conseil des Six en 1372",
        "Un gigantesque courant chaud serpente au nord-ouest de la Mer inviolée, tournoyant dans le sens des aiguilles d'une montre entre Maztica et Faerûn, encerclant les Îles Moonshae. Il contourne la partie orientale d'Éternelle-rencontre avant de poursuivre sa course en direction du Pic de glace et de Valbise, puis de se diriger vers le sud, longeant la côte d'Eauprofonde et prenant ici le nom de Dérive Sud. C'est ce courant qui est principalement responsable du climat agréable de l'île des elfes.",
        "Les îles Moonshae sont un groupe d'îles rocheuses enveloppé par les brumes, recouvert par des bois touffus et composé de marécages et de montagnes élevées.   Alaron  Archipel de Korinn  Chuteneige  Gwynneth  Île d'Oman  Mer des Moonshae  Mintarn  Moray  Norland  Ruathym  Sites importantes  La majorité des îles Moonshae abrite un ou deux villages par île. Les plus grandes îles abritent des dizaines de villages qui sont souvent séparés par de vastes bandes de terres sauvages. Les grandes villes sont rares.   Caer Callidyrr  Caer Corwell  Forteresse inébranlable",
        "Caractéristiques géographiques principales  Gwynneth possède des côtes rocheuses et de hautes landes parfaites pour les individus qui aiment s'isoler.  Myrloch  Forêt du Valdhiver  Sarifal  Valmyrloch  Sites importants   Caer Corwell  Citadelle Ténébra  Karador",
        "Géographie Alaron est bordée au sud par Chuteneige, au sud-ouest par Gwynneth, à l'ouest par l'Île d'Oman et la Mer des Moonshae, au nord par l'Archipel de Korinn, et à l'est par Mintarn et la Mer des Épées. Caractéristiques géographiques principales  Forêt de Dernall  Montagnes de Belletaille Sites importants  Caer Callidyrr  Llewellyn Habitants Les Nordiques et le Ppeuple partagent un grand respect pour la mer et la forêt.",
        "Histoire  L'île de Moray fut le théâtre de conflits entre le peuple et les nordiques. Au XIVe siècle CV, elle devint un endroit sûr grâce à des campagnes d'extermination des monstres organisées par les Nordiques dans les montagnes. L'île attirait régulièrement de nouveaux côlons. XVe siècle CV  Aux alentours de 1479 CV, l'île servait de refuge à une tribu sanguinaire d'Adeptes du Sang noir. Certains se réunissaient à chaque nouvelle lune dans une grotte des Montagnes des crânes d'orques.",
        "Géographie  L'Île d'Oman est située au cœur de la la Mer des Moonshae, à l'ouest d'Alaron, au nord de Gwynneth, au nord-est de Moray, à l'est de Norland, et au sud de l'Archipel de Korinn. Sites importants   Forteresse inébranlable  Histoire  L'Île d'Oman fut longtemps le royaume le plus craint et le plus violent des Nordiques. C'est depuis l'Île d'Oman que les Nordiques colonisèrent l'île de Gwynneth. Mais suite à la paix avec le Ppeuple et la signature du traité d'Oman, les Nordiques de l'Île d'Oman se mirent à attaquer leurs compatriotes du Ruathym et d'ailleurs.",
        "Flotte de Sithisila Pirate orcs de la tribu Hak-kubra, affrontant la Flotte de Sithisila gobelins de l'île de Tetris. Vers -10500, l'archipel de Korinn prend forme. Vers 1128, l'archipel de Korinn a été découvert par des fermiers et des pêcheurs humains qui émigraient dans la région des îles Moonshae. Ces colons menaient une vie rude et anarchique, sans commerce ni autorité centrale. En l'espace d'un siècle, ils s'installèrent solidement sur les îles et leur population. Cette installation s'est accompagnée d'un accroissement du commerce et de l'attention des pirates. Entre 1188 et 1228, de puissantes bandes de pirates ont terrorisé les eaux de Korinn, exerçant une grande influence sur ses habitants. Vers cette dernière date, un chef nordique nommé Viledel conduisit une grande flotte de ses partisans humains et démihumains dans l'archipel depuis leur royaume méridional de Petathal. Ils cherchaient à coloniser les terres elles-mêmes, aspirant à créer un jour un puissant empire maritime. Ils établirent une base sur l'île la plus à l'ouest, qui prit son nom. Au cours des quatre décennies suivantes, grâce à une combinaison de tactiques intelligentes et de compétences en navigation qui les surpassaient, son peuple est parvenu à réduire la puissance et la présence des forces pirates autrefois suprêmes. Ils se dispersèrent au nord et au sud des îles Moonshae.",
        "Géographie Norland est bordée à l'est par l'Île d'Oman, au sud par l'île de Moray, au nord-est par l'Archipel de Korinn. À l'ouest s'étend la Mer inviolée. Sites importants  Fort de l'Orage  Rogarsheim Habitants Contrairement à ceux d'Alaron, les Nordiques de Norland entretiennent leurs distinctions culturelles avec leurs voisins du Ppeuple, envers qui ils se montrent méfiants et hostiles.",
        "Géographie Au nord se trouve l'île d'Alaron, à l'ouest l'île de Gwynneth, au sud les Îles Nélanthères, et à l'est la Mer des Épées. Sites importants  Caer Ouestphal Histoire Au début du XVe siècle CV, des mercenaires assujettirent le Ppeuple de Chuteneige, soumettant les habitants à la loi amnienne et à l'autorité du continent. Aux alentours de 1479 CV, Dame Erliza Daressin était la vice-reine de Caer Ouestphal. Elle gardait secrète sa nature vampirique. Les Amniens imposaient leur emprise sur l'île par la menace de violence contre les membres de la famille royale et pillaient sans scrupules les ressources de Chuteneige.",
        "Son antre se situe sur l'île de Skadaurak, dans le Mintarn.",
        "L'île de Mintarn se trouve à 400 miles (640 km) au sud-ouest de Waterdeep, dans la Mer des Épées.  Mintarn était un refuge populaire pour ceux qui fuyaient les autorités, ainsi qu'un terrain neutre où les parties en conflit pouvaient se mettre d'accord. Cette île magnifique ne posait aucune question et ne refusait personne. ",
        "Société Population 2 822 en 1372 CV Races orque 30%,  humain 20%, demi-orque 15%, homme-lézard 15%, ogre 10%, autres humanoïdes 9% Religion Beshaba, Cyric, Talos, Tempus, Umberlie Commerce Importations tout ce que les pirates peuvent voler, piller ou récupérer Exportations esclaves, marchandises de toutes sortes volées ou récupérées Politique Gouvernement anarchie armée",
        "Des rois mesquins et bellicistes régnaient sur les îles. Les grandes îles abritaient d'énormes rocs qui servaient de montures aux géants des tempêtes du Maelström. Les insulaires rendaient hommage aux rocs et aux géants en leur laissant de la nourriture et des trésors. Finback, l'île la plus haute des Whalebones, abritait le repaire du dragon de bronze fou, Tauntzoth des Rochers, avant sa mort.",
        "Géographie Le Ruathym est situé dans l'est de la Mer inviolée, à l'ouest de la Mer des Épées et des îles Baleinos. Caractéristiques géographiques principales Les îles du Ruathym sont une terre déchiquetée et stérile. Sites importants Les communautés et villages sont rassemblés autour des fjords et des criques de l'île.  Ruathym (ville) Habitants Voir article principal: Nordiques Société L'île interdit l'accostage de tout navire étranger. L'effondrement de Luskan, ennemi traditionnel, a rendu le Ruathym moins belliqueux et véhément.",
        "Lieux de vie Comme sur les autres îles, la plupart des établissements de Gundarlun ont été construits sous le vent, à l'abri du vent glacial. La plus grande colonie de l'île - en fait, de toutes les îles du nord de la Mer sans Voie - était la ville de Gundbarg, le 'Port d'entrée', avec une population de 12 000 habitants. L'auberge de la Tortue Dragon, située à Gundbarg près du port, était connue pour être un lieu où l'on pouvait engager des capitaines de navire, ainsi qu'un lieu de rendez-vous pour les aventuriers. Lieux remarquables :  Gundbarg, le port d'entrée.  Berranzo, une colonie minière en faillite.  L'épave de la Couronne d'or. ",
        "Voyage Estimation de la durée du voyage de la caravelle par mer (en supposant que le temps soit clément et la brise forte) :  Tuern : 2 jours et demi.  Île de Gundarlun : 3 jours.  Pic de glace : 3 jours.  Ruathym : 4 jours.  Leilon : 6 jours.  Luskan : 6 jours.  Fireshear : 6 jours et demi.  Neverwinter : 6 jours et demi.  Port Llast : 6 jours et demi.  Waterdeep : 10 jours.",
        "Ici, comme dans les communautés rurales de tout le Nord et d'autres îles extérieures comme Tuern, l'utilisation de la magie était punie de mort. Les habitants des Roches Pourpres semblaient vénérer Tempus (appelé Tempos), Auril et Umberlee, les divinités habituelles des hommes du Nord, mais leurs idoles de ces dieux montraient toutes de nombreux bras en forme de tentacules. À l'époque de la guerre des Marches d'argent, à la fin du XVe siècle, les peuples d'Utheraal et de Trisk étaient dominés par le kraken Slarkrethel.",
        "Geography Type Island Region Trackless Sea, Toril Politics Gov't type Monarchy Ruler's type King History King Selger in 1370 CV",
        "Géographie Type d'île Île Région Frozenfar, Mer sans Voie Plus grande ville Uttersea Société Démonyme Tuernish Races Humains (Hommes du Nord) Politique Type de souverain Haut Roi Histoire Haut Roi Threlked Ironfist en 1358 CV",
        "Archipels",
    ];

// vérifiez que les 5 tableaux ont la même longueur
if (frTab.length !== capitaleTab.length ||
    frTab.length !== populationTab.length ||
    frTab.length !== descriptionTab.length ||
    frTab.length !== coutumesTab.length) {
    throw new Error('Tous les tableaux doivent avoir la même longueur');
}

let sqlScript = ''; // contiendra le script SQL final

for (let i = 0; i < frTab.length; i++) {
    // Créer la requête SQL pour mettre à jour la ligne avec l'ID correspondant
    let sql = `UPDATE region SET 
                fr = "${frTab[i]}", 
                capitale = "${capitaleTab[i]}", 
                population = ${populationTab[i]}, 
                description = "${descriptionTab[i]}", 
                coutumes = "${coutumesTab[i]}" 
                WHERE id = ${i + 2};\n`;  // les ID vont de 2 à 52

    // Ajouter cette requête SQL au script final
    sqlScript += sql;
}

// À ce stade, sqlScript contient votre script SQL.
console.log(sqlScript);

*/

