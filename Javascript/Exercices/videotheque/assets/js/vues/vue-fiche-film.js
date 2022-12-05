// Je récupère l'identifiant unique liée au paramètre d'URL ?id=
const monFilm = new URLSearchParams(window.location.search).get("id");
console.log(monFilm);
// console.log(films);
const urlFetch2 = `http://localhost:3000/api/movies/${monFilm}`
// console.log(urlFetch2)
const movieFetch2 = fetch(urlFetch2);
    movieFetch2
    .then((response) => {
        return response.json();
    })
    .then((movie) => {
        document.getElementById("lamia").innerHTML = movie.titre;
    })
    .catch(function(error) {
        console.log(error);
    })

// Je crée une fonction qui va comparer l'ID de l'URL avec l'ID de mon objet correspondant
// const rechercheId = (film)=> {
//     // 
//     return film._id == monFilm;
// }
// console.log(films)
// let ficheDeFilm = films.find(rechercheId);
// console.log(ficheDeFilm)
// document.body.classList.add("d-flex", "h-100", "text-center");

// const ficheDetail = document.getElementById("fiche-detail");
// // création section container + bg
// const sectionHeroContainer = document.createElement("section");
// sectionHeroContainer.classList.add("cover-container", "d-flex", "w-100", "h-100","p-3", "mx-auto","flex-column");
// sectionHeroContainer.style.backgroundImage = `url(${baseURL}/assets/img/affiches_films/background/${ficheDeFilm.bg_image})`;
// sectionHeroContainer.classList.add("bgHero");
// ficheDetail.appendChild(sectionHeroContainer);

// // h1
// const h1Hero = document.createElement("h1");
// h1Hero.textContent = ficheDeFilm.titre;
// h1Hero.style.color = "white";
// sectionHeroContainer.appendChild(h1Hero);