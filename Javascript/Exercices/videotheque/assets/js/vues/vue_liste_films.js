// J'ai besoin de créer une liste qui va afficher un template (vue HTML) et de le faire passer dans une boucle (qui passera dans le tableau contenant notre liste de films)

//  je récupère l'élément qui va accueillir mon template
const listeFilms = document.getElementById("listeFilms");
// Je crée une fonction avec une boucle for of pour récupérer mes films
const elementCreation = () => {
  for (let film of films) {
    // je crée des éléments que je vais ajouter avec appenChild()
    const divCol = document.createElement("div");
    divCol.classList.add("col");
    console.log(listeFilms);
    listeFilms.appendChild(divCol);
    console.log(divCol);

    const divCard = document.createElement("div");
    divCard.classList.add("card", "shadow-sm");
    divCol.appendChild(divCard);

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCard.appendChild(divCardBody);

    const h3Card = document.createElement("h3");
    h3Card.textContent = film.titre;
    divCardBody.appendChild(h3Card);

    const spanRealisateur = document.createElement("span");
    spanRealisateur.innerHTML = `de ${film.realisateur}`;
    divCardBody.appendChild(spanRealisateur);
  }
};



// listeFilms.appendChild(div);

// htmlElements += `
// <div class="col">
//     <div class="card shadow-sm">

//         <div class="card-body">
//                 <h3>${film.titre}</h3>
//                 <span> de ${film.realisateur}</span>
//                 <p class="card-text">Desc : "${film.description}"</p>
//                 <div class="d-flex justify-content-between align-items-center">
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

// je lui injecte le contenu de la variable htmlElements
listeFilms.innerHTML = htmlElements;
