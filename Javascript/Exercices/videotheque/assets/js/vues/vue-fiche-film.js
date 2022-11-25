const monFilm = new URLSearchParams(window.location.search).get("id");
console.log(monFilm);
console.log(films);

const rechercheId = (film)=> {
    return film._id == monFilm;
}

console.log(films.find(rechercheId));