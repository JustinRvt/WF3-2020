// Je crée une classe afin d'instancier mes films
class Film {
    // je crée un constructeur avec les paramètres requis
    constructor(titre, realisateur, dateSortie, description, dureeTotale, dureeVisionne){
        this.titre = titre;
        this.realisateur = realisateur;
        this.dateSortie = dateSortie;
        this.description = description;
        this.dureeTotale = dureeTotale;
        this.dureeVisionne = dureeVisionne;
    }
}

// j'instancie mes films dans un tableau
const films = [
    new Film("13: Game of Death", "Chookiat Sakveerakul" , 2006, "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.", 114, 114),
    new Film("Alien", "Ridley Scott", 1979, "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.", 117, 117),
    new Film("Magnolia", "Paul Thomas Anderson", 1999, "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.", 188, 188),
    new Film("Donnie Darko", "Richard Kelly", 2001, "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.", 113, 113),
    new Film("Dobermmann", "Jan Kounen", 1997, "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?", 94, 94),
    new Film("Starship Troopers", "Paul Verhoeven", 1997, "Humans in a fascist, militaristic future wage war with giant alien bugs.", 129, 129)
];