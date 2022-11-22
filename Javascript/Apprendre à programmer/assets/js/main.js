// LES COMMENTAIRES EN JS

/* 
Ils sont de 2 natures, monoligne (voir haut dessus),
ou en multilignes, comme sur cet exemple.
*/

// DECLARONS DES VARIABLES ET MODIFIONS LEURS VALEURS

/* Le premier objectif d'un programme informatique c'est de faire quelque chose de ces données. Notre programme va utiliser des variables pour stocker et manipuler ces données là. Une variable pourrait donc être assimiliée à un conteneur qui enregistrer une donnée spécifique. 
Par exemple : quantité de chaussettes restantes à la vente, des coordonnées, nom d'utilisateur
*/

/*
Chaque donnée stockée dans une variable s'appelle une valeur. Les valeurs peuvent être de nature différentes.

Il en existe 3 types :
- Number (valeur numéraire)
- String (chaîne de caractère, de type "azerty123@test.fr")
- Boolean (true or false)

*/

/*
Pour savoir à quoi sert une variable, il s'agit de la nommer en étant le plus précis possible. On attribut donc un nom à cette dernière.

Voici quelques règles de base :*
- utilisez une langue et une seule ! (pas de mélange franglais)
- utilisez des noms suffisamment descriptifs dans TOUT votre code, par exemple :
socksQuantityInStock ou quantiteChaussettesRestantes



- évitez les abréviations, par exemple : annualRev devient annualRevenue

*/

// CRÉEONS UNE VARIABLE EN DÉCLARANT

/*
Afin d'utiliser une variable nous devons la créer. 
On appelle cela "déclarer une variable"

Pour cela, nous allons nous servir du mot-clef "let"
*/

// Je déclare un nombre de chats, en l'occurence 7
let numberOfCats = 6;
console.log("Les apprennants possèdent " + numberOfCats + " chats.");
// Je déclare un nombre de chiens
let numberOfDogs = 1;

// MODIFIONS LA VALEUR DE NOS VARIABLES

/*
La façon la plus simple de changer la valeur d'une variable est de lui en attribuer une nouvelle. Nous avons voir cela grâce à la console DevTools (inspecter la page) et console.log() !
*/

numberOfCats = 7;

console.log("En rajoutant le formateur, le nombre de chats s'élève à " + numberOfCats);

/*
Ce n'est pas la seule manière de modifier des valeurs, on peut également utiliser les opérateurs arithmétiques qui nous permettent de réaliser des opérations de base telles que les additions, les soustractions, les multiplications ou encore les divisions.
*/

// Pour ajouter 2 variables, on utilise +
let totalCDs = 21;
let totalVynils = 34;

let totalMusic = totalCDs + totalVynils;
console.log("ma sonothèque comporte " + totalMusic + " oeuvres musicales, tout format confondu. En réalité, je possède " + totalCDs + " CDs et " + totalVynils + " vynils.");

// Pour soustraire, on utilise - 
let candiesInBottle = 10;
let candiesRemoved = 2;

let candiesLeftInBottle = candiesInBottle - candiesRemoved;
console.log("Il reste " + candiesLeftInBottle + " bonbons dans la bouteille.");

// Pour ajouter ou soustraire un nombre d'une variable nous avons à notre disposition les opérateurs += et -= 

let cookiesInJar = 10;
// Je mange 3 cookies
cookiesInJar -= 3; // ici, il me reste 7 cookies;
console.log("Il reste " + cookiesInJar + " cookies dans le pot.");
// Je cuis une nouvelle fournée de cookies
cookiesInJar += 12; // j'ai donc ici 19 cookies
console.log("Après cuisson, nous retrouvons " + cookiesInJar + " cookies !");
// Enfin, on peut utiliser ++ ou -- afin de rajouter ou soustraire 1 à chaque fois. On appelle cela l'incrémentation (+) et la décrémentation (-)

// On a 10 likes sur notre photo de profil
let numberOfLikes = 10;
// Christelle arrive et rajoute le sien
numberOfLikes++;
console.log("j'ai désormais " + numberOfLikes + " likes sur ma photo de profil.")
// Je lui vole sa brioche à la pause, de rage, elle retire son like
numberOfLikes--;
console.log("je me retrouve à " + numberOfLikes + " likes.");   
// Elle convaint Maxime de faire pareil
numberOfLikes--;
console.log("je me retrouve à " + numberOfLikes + " likes.");

/*
Multiplications et divisions utilisent respectivement les opérateurs * et / et surtout pas x ni :
*/

let costPerProduct = 20;
let numberOfProducts = 5;

let totalCost = costPerProduct * numberOfProducts;
console.log("Le coût total est de " + totalCost + "€.");

let averageCostPerProducts = totalCost / numberOfProducts
console.log("Le coût moyen par produit est de " + averageCostPerProducts + "€.");

// Comme pour les additions et les soustractions, on peut utiliser les opérateurs *= et /=

numberOfCats *=2; // le nombre de chats est désormais de 14
numberOfCats /=7; // le nombre de chats tombe à 2