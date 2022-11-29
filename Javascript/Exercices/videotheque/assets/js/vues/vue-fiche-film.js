// Je récupère l'identifiant unique liée au paramètre d'URL ?id=
const monFilm = new URLSearchParams(window.location.search).get("id");
// console.log(monFilm);
// console.log(films);

// Je crée une fonction qui va comparer l'ID de l'URL avec l'ID de mon objet correspondant
const rechercheId = (film)=> {
    // 
    return film._id == monFilm;
}
console.log(films.find(rechercheId));

let ficheDeFilm = films.find(rechercheId);

// document.body.classList.add("d-flex", "h-100", "text-center");

const ficheDetail = document.getElementById("fiche-detail");
// création section container + bg
const sectionHeroContainer = document.createElement("section");
sectionHeroContainer.classList.add("cover-container", "d-flex", "w-100", "h-100","p-3", "mx-auto","flex-column");
sectionHeroContainer.style.backgroundImage = `url(${baseURL}/assets/img/affiches_films/background/${ficheDeFilm.bg_image})`;
sectionHeroContainer.classList.add("bgHero");
ficheDetail.appendChild(sectionHeroContainer);

// h1
const h1Hero = document.createElement("h1");
h1Hero.textContent = ficheDeFilm.titre;
h1Hero.style.color = "white";
sectionHeroContainer.appendChild(h1Hero);