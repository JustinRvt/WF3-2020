// import * as global from "./utils/global.js";
// console.log(global)
// Mon nom
const brand = "Ma vidéothèque perso";
// Mon logo
const logo = '<i class="fa-solid fa-film"></i>';
// Baseline
const baseline = "Retrouvez tous les titres qui m'ont marqué !";

let remplacement = / /gi;
// Je vais produire une URL à partir de la const Brand
const urlWebsite =
  brand
    // je supprime les espaces les remplacant par ""
    .replace(remplacement, "")
    // je supprime les accents
    .replace("é", "e")
    .replace("è", "e")
    // je passe le tout en minuscule
    .toLowerCase() +
  // J'utilise la concaténation afin de rajouter le .fr
  ".fr";

// Promesse pour afficher le layout header sur toutes les pages
fetch("layout/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  });

// Promesse pour afficher le layout footer sur toutes les pages
  fetch("layout/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  })
