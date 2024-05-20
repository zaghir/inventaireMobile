class EntrepotDTO {
    constructor(entrepot) {
      this.code = entrepot.code;
      this.libelle = entrepot.libelle;
      // transformez les allées en un format plus simple pour le transfert
      this.allees = entrepot.allees.map(allee => new AlleeDTO(allee));
    }
  }