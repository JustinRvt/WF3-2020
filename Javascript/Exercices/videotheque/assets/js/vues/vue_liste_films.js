// J'ai besoin de créer une liste qui va afficher un template (vue HTML) et de le faire passer dans une boucle (celle de notre liste de films)

// Pour cela, avant de créer la boucle, je déclarer une variable qui va servir de conteneur à mon template
let htmlElements = "";

// Je crée une boucle for of pour récupérer mes films
for (let film of films){
    //  je récupère l'élément qui va accueillir mon template
    const listeFilms = document.getElementById("listeFilms");
    // je crée des éléments que je vais ajouter avec appenChild()
    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    listeFilms.appendChild(div);

    // htmlElements += `
    // <div class="col">
    //     <div class="card shadow-sm">
    //         <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

    //         <div class="card-body">
    //                 <h3>${film.titre}</h3>
    //                 <span> de ${film.realisateur}</span>               
    //             <p class="card-text">Desc : "${film.description}"</p>
    //             <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                     <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
    //                     <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
    //                 </div>
    //             <small class="text-muted">${film.dureeTotale} mins</small>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // `
}


// Je cible l'élément avec l'id listeFilms
const listeFilms = document.getElementById("listeFilms");
// je lui injecte le contenu de la variable htmlElements
listeFilms.innerHTML = htmlElements