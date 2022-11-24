/**
 * Calcul du nombre d'élèves dans la session
 */
const nombreEleves = eleves.length;
/**
 *Calcul de l'âge total
 */
// J'initialise une variable à zéro
let ageCumule = 0;
// Je crée une boucle afin de récupérer chaque âge et les additionner
for (eleve of eleves) {
    // J'ajoute l'âge du suivant à chaque itération
    ageCumule += eleve.age;
}
/**
 * Calcul de la moyenne d'âge
 */
// J'utiliseageTotal Math.round afin d'avoir un nombre entier
const moyenneAgeEntier = Math.round(ageCumule / nombreEleves);

/**
 * Injection résultats dans le HTML
 */
// Nombre total d'élèves
const nombreTotal = document.querySelector("#nombreTotal p");
nombreTotal.textContent = nombreEleves;

// Âge total des élèves
const ageTotal = document.querySelector("#ageTotal p");
ageTotal.textContent = `${ageCumule} années`;

// Moyenne d'âge des élèves
const moyenneAge = document.querySelector("#moyenneAge p");
moyenneAge.textContent = `${moyenneAgeEntier} ans`;

// Affichage de la liste des élèves
const listeEleves = document.querySelector("#listePrenoms ul");
// Je récupère mes élèves et je crée des puces à chaque fois
for (let eleve of eleves){
    // Je crée des élements de type puces (li) dans ma liste non-ordonnée (ul)
    let li = document.createElement("li");
    li.textContent = eleve.nom;
    // Pour chaque elève dans mon tableau, j'alimente une puce créée précédemment'
    listeEleves.appendChild(li);
}