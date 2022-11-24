// je crée une classe afin d'instancier mes élèves
class Eleve {
    // constructor avec 2 paramètres, le nom et l'âge
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
}

// J'instancie mes élèves dans un tableau
const eleves = [
    new Eleve("Matin", 42),
    new Eleve("Thibaut", 25),
    new Eleve("Tristan", 24),
    new Eleve("Meijuan", 32),
    new Eleve("Christelle", 55),
    new Eleve("Maxime", 27),
    new Eleve("Mouloud", 50),
    new Eleve("Falilou", 26),
    new Eleve("Lamïa", 28),
    new Eleve("Adam", 19),
    new Eleve("Lynda", 21),
    new Eleve("Kylian", 22),
];
