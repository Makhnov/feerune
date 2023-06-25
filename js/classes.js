// Classe Position
// Attributs : id, top, left, height, width, scaling, zIndex, image, idLocalite, idPersonnage, idRegion, idEmplacement
class Position {
    // CONSTRUCTEUR
    constructor(id, top, left, height, width, scaling, zIndex, image, idLocalite, idPersonnage, idRegion, idEmplacement) {
        this.id = id;
        this.top = top;
        this.left = left;
        this.height = height;
        this.width = width;
        this.scaling = scaling;
        this.zIndex = zIndex;
        this.image = image;
        this.idLocalite = idLocalite;
        this.idPersonnage = idPersonnage;
        this.idRegion = idRegion;
        this.idEmplacement = idEmplacement;
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
        return this.idLocalite;
    }

    getIdPersonnage() {
        return this.idPersonnage;
    }

    getIdRegion() {
        return this.idRegion;
    }

    getIdEmplacement() {
        return this.idEmplacement;
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

    setIdLocalite(idLocalite) {
        this.idLocalite = idLocalite;
    }

    setIdPersonnage(idPersonnage) {
        this.idPersonnage = idPersonnage;
    }

    setIdRegion(idRegion) {
        this.idRegion = idRegion;
    }

    setIdEmplacement(idEmplacement) {
        this.idEmplacement = idEmplacement;
    }
}
// Classe Region
// Attributs : id, nom, fr, capitale, population, description, coutumes, idPersonnage, regionMereId
class Region {
    // CONSTRUCTEUR
    constructor(id, nom, fr, capitale, population, description, coutumes, idPersonnage, regionMereId) {
        this.id = id;
        this.nom = nom;
        this.fr = fr;
        this.capitale = capitale;
        this.population = population;
        this.description = description;
        this.coutumes = coutumes;
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

    getFr() {
        return this.fr;
    }

    getCapitale() {
        return this.capitale;
    }

    getPopulation() {
        return this.population;
    }

    getDescription() {
        return this.description;
    }

    getCoutumes() {
        return this.coutumes;
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

    setFr(fr) {
        this.fr = fr;
    }

    setCapitale(capitale) {
        this.capitale = capitale;
    }

    setPopulation(population) {
        this.population = population;
    }

    setDescription(description) {
        this.description = description;
    }

    setCoutumes(coutumes) {
        this.coutumes = coutumes;
    }

    setIdPersonnage(idPersonnage) {
        this.idPersonnage = idPersonnage;
    }

    setRegionMereId(regionMereId) {
        this.regionMereId = regionMereId;
    }
}