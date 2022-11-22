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

// pour déclarer une valeur à un string, on utilise "" ou '', cependant, il y a une différence.
let exempleString1 = "J'existe";
// Si j'utilise '', je dois mettre un back-slash devant mes apostrophes
let exempleString2 = 'J\'existe aussi';

/*
Pour savoir à quoi sert une variable, il s'agit de la nommer en étant le plus précis possible. On attribut donc un nom à cette dernière.

Voici quelques règles de base :
- ne commencez jamais par un chiffre
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

// Je déclare un nombre de chats, en l'occurence 6
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

/*
LA MUTABILITÉ DES VARIABLES

Une variable est mutable de base, c'est-à-dire qu'elle peut changer sa valeur au cours du temps. On déclare avec let suivi d'un nom de variable et sa valeur de départ.
*/


// LES CONSTANTES

/*
Certaines données ne sont JAMAIS modifiées durant l'exécution du programme. On les inscrit dans des constantes. Par exemple : une date de naissance, un id (identifiant unique), le nom d'un entreprise.

Les constantes sont des variables qui ne sont pas mutables. On donne une valeur au début qui ne changera jamais.
*/

const birthday = "05/11/1982";
console.log("ma date d'anniversaire est le " + birthday + ".");
// ce que je ne peux pas faire, c'est réassigner une valeur
// birthday = "06/11/1982";// retourne une erreur dans la console !


// LES TYPES PRIMITIFS
/*
Ce sont les briques de base de chaque structure de données en Javascript.
number, string et boolean seront toujours présents, peu importe la complexité de votre programme / application. En JS, il n'est pas utile de déclarer le type de d'une variable, il est néanmoins fondamental de bien comprendre leur importance et leur existence.
*/

// LE TYPE NUMBER

/*
Pour le moment, on a surtout déclaré des variables avec des nombres (donc de type number) manipulables de plusieurs façons. Elles peuvent être positives ou négatives. Elles peuvent faire partie de l'ensemble des entiers naturels (N) donc 1, 2, 3, etc. mais aussi faire partie de l'ensemble des nombres réels (R) donc 1.5, 50.34, 22.55, etc. (avec décimales).

En programmation, on peut appeler les entiers "integers" et les décimaux "floating-point".

*/

/*
Méfiance à l'arithmétique et les floating-points (ou virgules flottantes).
*/

let integerCalculation = 1 + 2;
console.log("mon calcul entre nombres entiers donne " + integerCalculation);

let stupidCalculation = 0.1 + 0.2;
console.log("On attend 0.3 comme réponse, mais l'on obtient " + stupidCalculation);

// Pour arrondir à l'entier naturel, on peut utilise Math.round(stupidCalculation), ou bien stupidCalculation.toFixed(0). 0 étant le nombre de chiffres après la virgule, on pourrait utiliser toFixed(2) pour obtenir un résultat compréhensible par l'utilisateur, notamment en ce qui concerne les prix.

/* Chaque fois que possible, on utilise des calculs entiers */

// LES VALEURS LOGIQUES OU BOULÉENNES (BOOLEAN)

/*
Les valeurs logiques sont les types de variables les plus faciles à comprendre, elles ne peuvent avoir que 2 valeurs, true ou false. Elle s'utilisent dans plusieurs cas de figure : est-ce qu'un utilisateur est admin, est-ce que telle ou telle case est cochée, est-ce qu'un ensemble de conditions est réuni ou pas ?
*/

// ici, l'utilisateur est connecté
let userIsSignedIn = true;
// là, l'utilisateur n'est pas un admin
let userIsAdmin = false;


// LES CHAÎNES DE CARACTÈRE OU STRING

/*
C'est la manière d'enregistrer du texte dans des variables. On peut enregistrer n'importe quel chaîne de caractères allant d'un seul caractère à plus de 134 millions.

Elles sont encadrées par "" ou '' :
*/

let firstName = "Justin";
let lastName ='Ravat';

// elles peuvent être concaténées (ajoutées les unes à la suite des autres) grâce à l'opérateur +

// Le contenu de " " est un espace (considéré comme un caractère)
let wholeName = firstName + " " + lastName;
console.log("Bonjour " + wholeName);

/*
Depuis quelques années, on peut utiliser un nouveau format d'écriture qui simplifie la concaténation des variables et des chaînes de caractère : la "string interpolation", pour la créer on va écrire du texte encadré par le signe ` (touche 7 + alt gr) et pour injecter une variable, on va utiliser la syntaxe suivante : ${maVariable}
*/

const myName = "Matin";
// les variables s'appellent avec ${maVariable}
const salutation = `Bienvenue sur mon site ${myName} !`;
console.log(salutation);

/*
/!\ JS est un langage à typage faible (et dynamique). Cela veut dire que l'on peut initialiser une variable avec un nombre, puis lui attribuer un string et enfin un boolean. Cela offre de la souplesse aux dev mais peut aussi amener à expérimenter des réactions un peu bizarres /!\

Attention aux types de variables et -en général- préférez les constantes dès que cela est possible.
*/

// DÉFINITION DES OBJETS ET DE LEURS ATTRIBUTS AVEC DES CLASSES

/**
 * Lorsque l'on pense à un objet dans le monde réel, on énumère une série de caractéristiques (ou d'attributs) qui sert de modèle pour cet objet.
 * 
 * En langage de programmation, on va appeler cela une "classe". On choisit nous-même le nom de la classe. Avant de plonger dans ce concept, nous allons étudier les objets.
 */

// LES OBJETS

/**
 * En Javascript, les objets sont écrits sous format JSON (JavaScript Object Notation). Ils s'expriment sous forme de paires clefs/valeurs séparées par des virgules et entourées d'accolades {}
 */

let myBook = {
    title : "Bel Ami",
    author : "Maupassant",
    numberOfPages : 267,
    isAvailable : true
}

console.log(myBook);

/**
 * Chaque clef est une chaîne (title, author, etc.) et les valeurs associées peuvent prendre n'importe quel type. Cela nous permet de regrouper les attributs d'une même "chose" (même objet) unique à un même emplacement.
 */

/**
 * Pour accéder à nos valeurs à l'intérieur de l'objet, on utilise la notation pointée (ou "dot notation") comme par exemple :
 */
// DOT NOTATION
let bookTitle = myBook.title;
console.log(`Le titre de mon livre est ${bookTitle}.`);
// ou : console.log(`Le titre de mon livre est ${myBook.title}.`);

let bookPages = myBook.numberOfPages;
console.log(`Ce dernier comporte ${bookPages} pages.`);
/**
 * Ou la notation en bracket
 */
// BRACKET NOTATION
let bookAuthor = myBook["author"];
console.log(`Cet ouvrage a été rédigé par ${bookAuthor}`);

let bookAvailability = myBook["isAvailable"];
console.log(`Ce titre est disponible, true ou false ? ${bookAvailability}`);

// MANIPULATION DES CLASSES

/**
 * La construction d'un objet "à la main" peut s'avérer fastidieuse. Cela convient pour des objets simples et uniques mais il y a très souvent des objets de même type ! C'est là qu'interviennent les classes.
 * 
 * Une classe est un MODÈLE pour un objet dans notre code. Elle permet de constuire plusieurs objets du même type (que l'on appelle des instances) plus facilement, plus rapidement et surtout avec plus de fiabilité.
 */

// Pour écrire une classe en Javascript, on va utilise le mot-clef "Class"
class Book {
    // Pour cette classe, nous souhaitons reprendre les éléments de l'objet myBook, soit un titre, un auteur, un nombre de pages et une disponibilité. Nous allons donc utiliser un constructeur. Le constructeur d'une classe, c'est la fonction qui est appelée lorsque l'on crée une nouvelle instance de cette classe grâce au mot-clef "new"
    constructor(title, author, numberOfPages, isAvailable){
        // On va utiliser le mot-clef "this" pour attribuer le titre, l'auteur, etc. reçu à la création de l'instance.
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isAvailable = isAvailable;
    }
}   

// On va instancier notre premier livre
let myBook1 = new Book("Dialogue de bêtes", "Colette", 240, true);

console.log(myBook1);

// REGROUPONS NOS DONNÉES AVEC DES TABLEAUX ET DES OBJETS

/**
 * Imaginons que nous soyons responsables de la gestion des places d'un théâtre. AU 1er rang, il y aurait les amis / familles des comédien-nes.
 */
// Ceci peut fonctionner avec 2 invités, mais quid d'une rangée de 30 ?
let firstGuestName = "Lamïa";
let SecondGuestName ="Adam";

// On va utiliser un tableau pour enregistrer une liste ordonnées d'éléments
let guests = [];
// une fois les invité-es désigné-es, on remplit le tableau
guests = [
    "Matin","Thibaut","Tristan","Meijuan","Falilou","Mouloud","Maxime","Christelle","Lamïa","Adam","Linda","Kyllian"
];

console.log(guests);

let firstGuest = guests[0];
console.log(`le premier invité est ${firstGuest}`);

let thirdGuest = guests[2];
console.log(`le troisième invité est ${thirdGuest}`);

let errorGuest = guests[12];
console.log(`l'error guest est ${errorGuest}`);

// TRAVAILLONS SUR LES TABLEAUX

/**
 * En JS, les tableaux sont très puissants et très utilisés, ils ont beaucoup d'attributs et de méthodes très utiles.
 */

// Pour compter les éléments on utilise length :
let howManyGuests = guests.length;
console.log(`Il y a ${howManyGuests} invités en tout.`);

// Pour ajouter et supprimer des éléments

// pour ajouter un élément à la fin du tableau, on utilise la méthode push
guests.push("Justin");
console.log(guests);

// pour ajouter un élément au début du tableau, on utilise la méthode unshift
guests.unshift("Cécile");
console.log(guests);

// pour supprimer le dernier élément d'un tableau, on utilise la méthode pop
guests.pop();
console.log(guests);

// pour supprimer le premier élément d'un tableau, on utilise la méthode shift
guests.shift();
console.log(guests);

// pour supprimer un élément en fonction de son index, on utilise la syntaxe suivante : delete guests[4];