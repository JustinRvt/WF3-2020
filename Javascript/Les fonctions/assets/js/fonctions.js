// ancienne méthode 
function addition(valeur1, valeur2) {
    return valeur1 + valeur2
}

// nouvelle notation (ES6) les fonctions fléchées
const soustraction = (valeur1, valeur2) => valeur1 - valeur2;


/**
 * Les méthodes d'instances
 */

// Je prends l'exemple d'un compte en banque
class CompteEnBanque {
    // je crée mon constructeur
    constructor(proprietaireDuCompte, balance) {
        this.proprietaireDuCompte = proprietaireDuCompte;
        this.balance = balance;
    }
    // Je rajoute une méthode de classe pour afficher le solde
    affichageSolde() {
        console.log(`Le solde de ${this.proprietaireDuCompte} est de ${this.balance}€.`)
    }
    // Je gère les dépots en passant le montant en paramètre
    depot(montant) {
        console.log(`Dépôt de ${montant}€`);
        // J'ajoute le paramètre montant à la balance existante
        this.balance += montant;
        // On rappelle notre fonction affichageSolde afin d'afficher le nouveau solde
        this.affichageSolde();
    }
    // Je gère les retraits
    retrait(montant) {
        // ce compte n'autorise pas les découverts
        if(montant > this.balance) {
            console.log("Montant autorisé dépassé");
        }
        // sinon on procède au retrait
        else {
            console.log(`Retrait de ${montant}€`);
            this.balance -= montant;
            this.affichageSolde();
        }
    }
}   

// Je crée une instance de cette classe
const nouveauCompte = new CompteEnBanque("Lynda", 5000);


// On crée une classe qui affiche un message général de politesse
class Politesse {
    // Ici, pas besoin de constructeur, à la place on va créer nos méthodes statiques grâce au mot-clef static
    static direBonjour() {
        console.log("Salut !");
    }

    static direBonjourA(prenom) {
        console.log(`Salut ${prenom} !`);
    }
}

Politesse.direBonjour();
Politesse.direBonjourA("Matin");


/**
 * NE VOUS RÉPÉTEZ PAS (DRY => DO NOT REAPEAT YOURSELF)
 * 
 * La refactorisation du code consiste à modifier la structure d'un bout de code sans changer son comportement
 */

// prenons cet exemple :
if(utilisateur1.enLigne) {
    if(utilisateur1.typeDeCompte === "normal") {
        console.log(`Salut ${utilisateur1} !`);
    }
    else {
        console.log(`Bienvenue sur votre compte premium ${utilisateur1}`);
    }
}

if(utilisateur2.enLigne) {
    if(utilisateur2.typeDeCompte === "normal") {
        console.log(`Salut ${utilisateur2} !`);
    }
    else {
        console.log(`Bienvenue sur votre compte premium ${utilisateur2}`);
    }
}

if(utilisateur3.enLigne) {
    if(utilisateur3.typeDeCompte === "normal") {
        console.log(`Salut ${utilisateur3} !`);
    }
    else {
        console.log(`Bienvenue sur votre compte premium ${utilisateur3}`);
    }
}

// correction :
const envoiMessageUtilisateur = (utilisateur) => {
    if (utilisateur === "normal"){
        console.log(`Salut ${utilisateur} !`)
    }
    else {
        console.log(`Bienvenue sur votre compte premium ${utilisateur}`);
    }
}