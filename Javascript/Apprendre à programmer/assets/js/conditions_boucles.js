// CHOISISSONS LA CONDITION LA PLUS APPROPRIÉE POUR CONTRÔLER NOTRE APPLICATION

/**
 * Nous allons écrire des programmes de plus en plus évolués, par conséquent la création de vos lignes de code qui s'exécutent les unes après les autres ne vont plus suffir.
 * 
 * On commence alors à parler de la notion de déroulement du programme (ou de l'application). Ce déroulement est un terme plutôt général qui va décrire l'ordre dans lequel s'exécutent nos lignes de code. Certaines lignes vont êtres lues une seule fois, certaines plusieurs fois et d'autres seront complètement ignorées (en fonction de la situation).
 */

// LES INSTRUCTIONS CONDITIONNELLES

/**
 * Les instructions if/else (si/sinon)
 * C'est l'une des plus universelles dans le domaine de la programmation, elle peut servir pour de nombreuses applications comme par exemple, réagir à la saisie d'un utilisateur, aux résultats d'un calcul, ou tout simplement, à vérifier si un utilisateur est connecté ou non.
 * 
 * if (si) l'utilisateur est connecté alors on ouvre la page d'accueil
 * else (sinon) on revient à la page de connexion.
 */

/* Utilisons des booleans
if (myBoolean) {
    // je réagis à la valeur true de myBoolean
}
else {
    // je réagis à la valeur false de myBoolean
}
*/
// Dans le cas de notre utilisateur connecté
let isUserLoggedIn = false;

if (isUserLoggedIn) {
    console.log("Utilisateur connecté")
}
else {
    console.log("Utilisateur déconnecté")
}

// Utilisons des expressions de comparaison !

/**
 * Plutôt qu'un simple variable dans une condition if/else, nous pouvons avoir recours aux expressions de comparaison.
 * Comme leur nom l'indique, elles comparent les valeurs entre elles.
 */

/**
 * Ces expressions vous permettent de comparer lesdites valeurs grâce aux opérateurs suivants :
 * 
 * x > supérieur à
 * x < inférieur à
 * x >= supérieur ou égal à
 * x <= inférieur ou égal à
 * x == égal à 
 * x != différent de
 * x === strictement égal à
 */

let numberOfCats = 7;
let numberOfDogs = 7;
let numberOfTurtles = "7";

// Si le nombre de chats est égal au nombre de chiens
if (numberOfCats == numberOfDogs) {
    // alor je renvoie un message positif dans la console
    console.log("Le nombre de chats == le nombre de chiens");
}
else {
    // sinon, je remonte une erreur
    console.log("le nombre de chats n'est égal au nombre de chiens")
}
// Si la valeur du nombre de chats et de tortues est égale, même si leur type est différent
if (numberOfCats == numberOfTurtles) {
    // Je renvoie un message positif
    console.log("Le nombre de chats == le nombre de tortues");
}
else {
    // je remonte une erreur
    console.log("le nombre de chats n'est égal au nombre de tortues")
}
// Si le nombre de chiens et de tortues ont la même valeur et le même type
if (numberOfDogs === numberOfTurtles) {
    // Je renvoie un message positif
    console.log("Le nombre de chiens === le nombre de tortues");
}
else {
    // Je remonte une erreur car les types sont différents
    console.log("le nombre de chiens n'est égal au nombre de tortues")
}

let myLegitBoolean = true;
let myFakeBoolean = "1";
// Dans cet exemple, on "casse la Matrice", car la valeur de true est en réalité 1 ou "1" (et 0 pour false)
if (myLegitBoolean == myFakeBoolean) {
    console.log("J'ai cassé la Matrice");
}
else {
    console.log("legit est différent de fake    ")
}
// Avec l'opérateur strictement égal, ma variable myFakeBoolean n'a aucune chance d'être égale à ma variable myLegitBoolean
if (myLegitBoolean === myFakeBoolean) {
    console.log("J'ai cassé la Matrice");
}
else {
    console.log("legit est différent de fake    ")
}

// Mettons ça en pratique de façon plus concrète :

const numberOfSeats = 30;
const numberOfGuests = 25;

if (numberOfGuests < numberOfSeats) {
    // autorise plus d'invités.
}
else {
    // on ne fait plus rentrer personne.
}

// On peut chaîner les conditions afin de réagir à des conditions potentielles multiples.

if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
}
else if (numberOfGuests < numberOfSeats) {
    // autorise plus d'invités.
}
else if (numberOfGuests == 0){
    // il n'y a personne dans la salle
}
else {
    // on ne fait plus rentrer personne.
}

// Les conditions multiples
/**
 * Dans certaines situations, nous souhaitons vérifier plusieurs conditions en même temps pour un même résultat, pour cela il existe des "opérateurs logiques".
 * 
 * && - ET logique - vérifie si deux conditions sont vraies.
 * || - OU logique - vérifie si l'une des conditions est vraie.
 * !  - NON logique - vérifie si une condition n'est pas vraie.
 */

let userLoggedIn = true;
let hasPremiumAccount = true;
let hasMegaPremiumAccount = false;

userLoggedIn && hasPremiumAccount; // true
userLoggedIn && hasMegaPremiumAccount; // false
userLoggedIn || hasPremiumAccount; // true
userLoggedIn || hasMegaPremiumAccount; // true
!userLoggedIn; // false
!hasMegaPremiumAccount; // true

// APPRENONS LE SCOPE DES VARIABLES
/**
 * En JavaScript, les variables créées grâce à let et const ne sont vues ou utilisées qu'à l'intérieur d'un même bloc dans lequel elles sont déclarées.
 * 
 * Ce phénomène a un nom : la portée des variables ou "block scope" en anglais.
 */

if (userLoggedIn) {
    let welcomeMessage = "Bon retour chez nous !"
    // Renvoie "Bon retour" dans la console car userLoggedin = true
    console.log(welcomeMessage);
}
else {
    // ne renvoie rien, sauf si if(!userLoggedIn)
    let welcomeMessage = "Bienvenue chez nous !"
    console.log(welcomeMessage);
}
// renvoie un undefined
// console.log(welcomeMessage);

// Pour palier à cela, on va définir la variable dans la portée extérieure

let welcomeMessage = "";

if (userLoggedIn) {
    welcomeMessage = "Bon retour chez nous !"
}
else {
    // ne renvoie rien, sauf si if(!userLoggedIn)
    welcomeMessage = "Bienvenue chez nous !"
}
// renvoie un undefined
console.log(welcomeMessage);


// UTILISONS L'INSTRUCTION SWITCH
/**
 * Si l'on souhaite vérifier la valeur d'une variable par rapport à une liste de valeurs attendues, on utilise "switch".
 * Dans notre exemple, on a plusieurs utilisateurs et l'on veut vérifier à quel type de compte ils sont associés afin d'envoyer un message personnalisé :
 */

 let firstUser = {
    name: "Matin",
    age: 42,
    accountLevel : "normal"
}
let secondUser = {
    name: "Meijuan",
    age: 32,
    accountLevel : "premium"
}
let thirdUser = {
    name: "Maxime",
    age: 27,
    accountLevel : "mega-premium"
}

switch (firstUser.accountLevel){
    case 'normal': console.log("Votre compte est normal");
    // Si l'on n'écrit pas "break" alors JS continuera l'exécution des cas suivants en cascade jusqu'à ce qu'il tombe sur une instruction break (si elle existe) ou la fin de l'instruction switch.
    break;

    case 'premium': console.log("Votre compte est premium");
    break;
    
    case 'mega-premium': console.log("Votre compte est mega premium");
    break;

    // On peut aussi rajouter un cas "default" qui ne sera exécuté que si aucune des conditions n'est vraie.
    default : console.log("Type de compte inconnu");
    // Pas besoin de mettre break, puisque l'on arrive à la fin de l'instruction switch
}

// UTILISONS LES BONNES BOUCLES POUR RÉPÉTER LES TÂCHES

/**
 * En programmation,il y a des ensembles d'instructions que nous serons amenés à répéter plusieurs fois. Il arrive que l'on connaisse à l'avance le nombre de répétitions, mais parfois non. Il est aussi tout à fait possible que ce nombre là ne soit pas important et que l'on souhaite simplement répéter le code jusqu'à tomber sur une condition en particulier. Nous utiliserons donc des boucles !
 */

// La boucle "for" pour savoir "combien de fois ?"

const numberOfPassengers = 12;
// Auparavant, on utilisait cette syntaxe pour faire une boucle :
// Pour cette boucle for, on crée une variable d'indice i (par convention) qui sert de compteur pour le nombre de fois où l'on exécute la boucle. Elle démarre donc à zéro. 
for (
        // Pour cette boucle for, on crée une variable d'indice i (par convention) qui sert de compteur pour le nombre de fois où l'on exécute la boucle. Elle démarre donc à zéro. 
        let i = 0;
        // Cette commande est la condition de poursuite de la boucle. Quand elle passera à false, alors la boucle s'arrêtera.
        i < numberOfPassengers;
        // La dernière commande sert à incrémenter la valeur de i (ajouter 1 à chaque fois), c'est ce qui permet de suivre le nombre d'exécutions de la boucle.
        i++
    ){
    console.log("passager à bord");
}


// La boucle for of
const passengers = [
    {name :"Matin",ticketNumber:89789},
    {name :"Thibaut",ticketNumber:43234},
    {name :"Tristan",ticketNumber:55543},
    {name :"Meijuan",ticketNumber:21132},
    {name :"Falilou",ticketNumber:53543},
    {name :"Mouloud",ticketNumber:11133},
    {name :"Maxime",ticketNumber:22321},
    {name :"Christelle",ticketNumber:89009},
    {name :"Lamïa",ticketNumber:78678},
    {name :"Adam",ticketNumber:444445},
    {name :"Linda",ticketNumber:131214},
    {name :"Kyllian", ticketNumber:89781}
];

for(let passenger of passengers) {
    console.log(`J'embarque ${passenger.name} avec le numéro de ticket : ${passenger.ticketNumber}`);
}