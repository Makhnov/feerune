    <?php
    // Classe Position
    // Attributs : id, top, left, height, width, scaling, zIndex, image, idLocalite, idPersonnage, idRegion, idEmplacement
    class Position {

        // ATTRIBUTS //
        private int $id;
        private float $top;
        private float $left;
        private float $height;
        private float $width;
        private string $scaling;
        private string $zIndex;
        private string $image;
        private ?int $idLocalite;
        private ?int $idPersonnage;
        private ?int $idRegion;
        private ?int $idEmplacement;

        // CONSTRUCTEUR //
        public function __construct(int $id, float $top, float $left, float $height, float $width, string $scaling, string $zIndex, string $image, ?int $idLocalite, ?int $idPersonnage, ?int $idRegion, ?int $idEmplacement) {
            $this->id = $id;
            $this->top = $top;
            $this->left = $left;
            $this->height = $height;
            $this->width = $width;
            $this->scaling = $scaling;
            $this->zIndex = $zIndex;
            $this->image = $image;
            $this->idLocalite = $idLocalite;
            $this->idPersonnage = $idPersonnage;
            $this->idRegion = $idRegion;
            $this->idEmplacement = $idEmplacement;
        }

        // GETTERS //
        public function getId(): int {
            return $this->id;
        }

        public function getTop(): float {
            return $this->top;
        }

        public function getLeft(): float {
            return $this->left;
        }

        public function getHeight(): float {
            return $this->height;
        }

        public function getWidth(): float {
            return $this->width;
        }

        public function getScaling(): string {
            return $this->scaling;
        }

        public function getZIndex(): string {
            return $this->zIndex;
        }

        public function getImage(): string {
            return $this->image;
        }

        public function getIdLocalite(): ?int {
            return $this->idLocalite;
        }

        public function getIdPersonnage(): ?int {
            return $this->idPersonnage;
        }

        public function getIdRegion(): ?int {
            return $this->idRegion;
        }

        public function getIdEmplacement(): ?int {
            return $this->idEmplacement;
        }

        // SETTERS //
        public function setId(int $id): void {
            $this->id = $id;
        }

        public function setTop(float $top): void {
            $this->top = $top;
        }

        public function setLeft(float $left): void {
            $this->left = $left;
        }

        public function setHeight(float $height): void {
            $this->height = $height;
        }

        public function setWidth(float $width): void {
            $this->width = $width;
        }

        public function setScaling(string $scaling): void {
            $this->scaling = $scaling;
        }

        public function setZIndex(string $zIndex): void {
            $this->zIndex = $zIndex;
        }

        public function setImage(string $image): void {
            $this->image = $image;
        }

        public function setIdLocalite(?int $idLocalite): void {
            $this->idLocalite = $idLocalite;
        }

        public function setIdPersonnage(?int $idPersonnage): void {
            $this->idPersonnage = $idPersonnage;
        }

        public function setIdRegion(?int $idRegion): void {
            $this->idRegion = $idRegion;
        }

        public function setIdEmplacement(?int $idEmplacement): void {
            $this->idEmplacement = $idEmplacement;
        }
    }
    // Classe Region
    // Attributs : id, nom, fr, capitale, population, description, coutumes, idPersonnage, regionMereId
    class Region {

        // ATTRIBUTS //
        private int $id;
        private string $nom;
        private ?string $fr;
        private ?string $capitale;
        private ?int $population;
        private ?string $description;
        private ?string $coutumes;
        private ?int $idPersonnage;
        private ?int $regionMereId;

        // CONSTRUCTEUR //
        public function __construct(int $id, string $nom, ?string $fr, ?string $capitale, ?int $population, ?string $description, ?string $coutumes, ?int $idPersonnage, ?int $regionMereId) {
            $this->id = $id;
            $this->nom = $nom;
            $this->fr = $fr;
            $this->capitale = $capitale;
            $this->population = $population;
            $this->description = $description;
            $this->coutumes = $coutumes;
            $this->idPersonnage = $idPersonnage;
            $this->regionMereId = $regionMereId;
        }

        // GETTERS //
        public function getId(): int {
            return $this->id;
        }
        public function getNom(): string {
            return $this->nom;
        }
        public function getFr(): ?string {
            return $this->fr;
        }
        public function getCapitale(): ?string {
            return $this->capitale;
        }
        public function getPopulation(): ?int {
            return $this->population;
        }
        public function getDescription(): ?string {
            return $this->description;
        }
        public function getCoutumes(): ?string {
            return $this->coutumes;
        }
        public function getIdPersonnage(): ?int {
            return $this->idPersonnage;
        }
        public function getRegionMereId(): ?int {
            return $this->regionMereId;
        }

        // SETTERS //
        public function setId(int $id): void {
            $this->id = $id;
        }
        public function setNom(string $nom): void {
            $this->nom = $nom;
        }
        public function setFr(?string $fr): void {
            $this->fr = $fr;
        }
        public function setCapitale(?string $capitale): void {
            $this->capitale = $capitale;
        }
        public function setPopulation(?int $population): void {
            $this->population = $population;
        }
        public function setDescription(?string $description): void {
            $this->description = $description;
        }
        public function setCoutumes(?string $coutumes): void {
            $this->coutumes = $coutumes;
        }
        public function setIdPersonnage(?int $idPersonnage): void {
            $this->idPersonnage = $idPersonnage;
        }
        public function setRegionMereId(?int $regionMereId): void {
            $this->regionMereId = $regionMereId;
        }
    }
    ?>