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

console.log(ficheDeFilm.titre);
console.log(ficheDeFilm.realisateur);
console.log(ficheDeFilm.description);
console.log(ficheDeFilm.dureeTotale);

let filmElements = `
    <h1>${ficheDeFilm.titre}</h1>
`

let matin = document.getElementById("exempleMatin");
matin.innerHTML = filmElements;