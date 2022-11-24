// document.getElementById()
/**
 * Si l'on part du code HTML suivant : <p id="elt"></p>
 * alors :
 */
const elt = document.getElementById("elt");

// document.getElementByClassName()
/**
 * <div>
 *      <p class="content"></p>
 *      <p class="content"></p>
 *      <p class="content"></p>
 * </div>
 */

const contents = document.getElementsByClassName("content");

// document.getElementByTagName("...")
/**
 * <div>
 *      <article></article>
 *      <article></article>
 *      <article></article>
 * </div>
 */

const articles = document.getElementsByTagName("article");

// document.querySelector("...")
/**
 * <div id="myId">
 *  <p>
 *      <span><a href="#">Lien 1</a></span>
 *      <a href="#">Lien 2</a>
 *      <span><a href="#">Lien 3</a></span>
 *  </p>
 *  <p class="myClass">
 *      <span><a href="#">Lien 4</a></span>
 *      <span><a href="#">Lien 5</a></span>
 *      <a href="#">Lien 6</a>
 *  </p>
 *  <p>
 *      <a href="#">Lien 7</a>
 *      <span><a href="#">Lien 8</a></span>
 *      <span><a href="#">Lien 9</a></span>
 *  </p>
 * </div>
 * */
const selectors = document.querySelector("#myId p.myClass > a");

// Les Recherches par éléments
/**
 * <div id="parent">
 *      <div id="precedant"></div>
 *      <div id="main">
 *          <p>Paragraphe 1</p>
 *          <p>Paragraphe 2</p>
 *      </div>
 *      <div id="suivant"></div>
 * </div>
 */
// si :
const main = document.getElementById("main");
// alors :
/**
 * main.children : retourne les éléments de type p
 * main.parentElement : retourne la div avec l'id #parent
 * main.nextElementSibling : retourne la div avec l'id #suivant
 * main.previousElementSibling : retourne l'id #precedant
 */

// MODIFIONS LE DOM
const javascript = "JavaScript ©";
// innerHTML
let injectionHTML = document.getElementById("exInnerHTML");
injectionHTML.innerHTML = `<b>Je suis injecté depuis ${javascript} grâce à <u>innerHTML</u></b>`;
// textContent
let injectionText = document.getElementById("exTextContent");
injectionText.textContent = "<b>Pareil, mais avec <u>textContent</u></b>";

// MODIFIONS LES CLASSES

// Je cible la 1ère puce du bloc avec l'id exClassList
let addClassBigFont = document.querySelector("#exClassList li:first-of-type");
// J'ajoute les classes bigFont et bold
addClassBigFont.classList.add("bigFont", "bold");

// Je cible la 2ème puce (li) du bloc avec l'id exClassList
let deleteClassBlue = document.querySelector("#exClassList li:nth-child(2)");
// Je retire la classe .blue
deleteClassBlue.classList.remove("blue");

// Je cible la 3ème puce
let replaceClassBlue = document.querySelector("#exClassList li:nth-child(3)");
// je remplace le classe blue par la classe red, sous forme replace("ancien", "nouveau")
replaceClassBlue.classList.replace("blue", "red");

// Je cible la dernière puce
let containTotoOrNot = document.querySelector("#exClassList li:last-of-type");
// Je vérifie que la puce comporte bien la classe toto
console.log(containTotoOrNot.classList.contains("toto"));

// CHANGER LES STYLES AVEC LA PROPRIÉTÉ STYLE
const changeStyle = document.getElementById("changeStyle");
// On change la couleur du paragraphe
changeStyle.style.color = "orange";
// On change le backgrdoun
changeStyle.style.background = "black";
// On passe le texte en gras
changeStyle.style.fontWeight = "bold";

//  MODIFICATION DES ATTRIBUTS
const attributeExemple = document.querySelector("#attributeExemple input");
// On change le type de l'input
attributeExemple.setAttribute("type", "password");
// Je change le nom
attributeExemple.setAttribute("name", "my-password");
// Je le passe en required (je met une chaine de caractères vide en 2nd paramètres car setAttribute exige qu'il y en ait 2)
attributeExemple.setAttribute("required", "");

// CREATIONS DES ELEMENTS
const h2 = document.createElement("h2");
h2.textContent = "Créons des éléments";
// L'élément ainsi créé ne fait encore partie du document, il va falloir l'ajouter en tant qu'enfant à un autre élément
const elementParent = document.getElementById("createElements");
// Grâce à appendChild, je crée l'élément l'enfant <h2>
elementParent.appendChild(h2);
/**
 * removeChild() va supprimer un élément enfant
 * replaceChild() va remplacer un élément
 */
// Equivalent avec string interpolation :
// const titreCreationElement = "Créons des éléments"
// elementParent.innerHTML = `<h2>${titreCreationElement}</h2>`

