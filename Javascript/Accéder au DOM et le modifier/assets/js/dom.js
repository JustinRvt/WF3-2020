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
 *      <div id="previous"></div>
 *      <div id="main">
 *          <p>Paragraphe 1</p>
 *          <p>Paragraphe 2</p>
 *      </div>
 *      <div id="next"></div>
 * </div>
 */
// si :
const main = document.getElementById("main");
// alors :
/**
 * main.children : retourne les éléments de type p
 * main.parentElement : retourne la div avec l'id #parent
 * main.nextElementSibling : retourne la div avec l'id #next
 * main.previousElementSibling : retourne l'id #previous
 */