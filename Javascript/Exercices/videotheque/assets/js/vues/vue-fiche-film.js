// Je récupère l'identifiant unique liée au paramètre d'URL ?id=
const monFilm = new URLSearchParams(window.location.search).get("id");
console.log(monFilm);
console.log(films);

// Je crée une fonction qui va comparer l'ID de l'URL avec l'ID de mon objet correspondant
const rechercheId = (film)=> {
    // 
    return film._id == monFilm;
}

console.log(films.find(rechercheId));