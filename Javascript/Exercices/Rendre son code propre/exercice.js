//-----CODE NON DRY------

//variable de différentes personnes
let personne1 = "Meijuan";
let personne2 = "Thibaut";
let personne3 = "Lamïa";

//On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
personne1 = personne1[0].toUpperCase() + personne1.substring(1);
const longueurPrenom1 = personne1.length;
console.log(
  `Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`
);

//On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
personne2 = personne2[1].toUpperCase() + personne2.substring(1);
const longueurPrenom2 = personne2.length;
console.log(
  `Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`
);

//On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
personne3 = personne3[2].toUpperCase() + personne3.substring(1);
const longueurPrenom3 = personne3.length;
console.log(
  `Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`
);

// Correction
// Je crée une fonction saluer avec le prénom en paramètre
const saluer = (prenom) => {
  const monPrenom = prenom[0].toUpperCase() + prenom.substring(1);
  const longueurPrenom = monPrenom.length;
  console.log(
    `Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres.`
  );
};

//-----CODE MAL NOMMÉ------

//tableau des ages des élèves dans la classe
const lrf = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const kf = lrf.length;
// variable pour calculer la somme des ages
let mf = 0;
for (let df of lrf) {
  mf += df;
}
//moyenne d'age dans la classe
const mld = mf / kf;
console.log(
  "Il y a " + kf + " élèves dans la classe et la moyenne d'age est " + mld
);

// Correction
//tableau des ages des élèves dans la classe
const agesElevesDeClasse = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const nombreEleves = agesElevesDeClasse.length;
// variable pour calculer la somme des ages
let sommeAges = 0;
for (let age of agesElevesDeClasse) {
  sommeAges += age;
}
//moyenne d'age dans la classe
const moyenneAgeDeClasse = sommeAges / nombreEleves;
console.log(
  "Il y a " +
    nombreEleves +
    " élèves dans la classe et la moyenne d'age est " +
    moyenneAgeDeClasse
);

//-----CODE MAL MIS EN FORME------

const temperature = 25;

if (temperature < 10) {
  console.log("Il fait très froid");
} else if (temperature < 0) {
  console.log("Il fait froid");
} else if (temperature < 10) {
  console.log("Il fait frais");
} else if (temperature < 20) {
  console.log("Il fait doux");
} else if (temperature < 30) {
  console.log("Il fait bon");
} else {
  console.log("Il fait chaud");
}
