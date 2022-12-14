// J'ai besoin de créer une liste qui va afficher un template (vue HTML) et de le faire passer dans une boucle (qui passera dans le tableau contenant notre liste de films)

//  je récupère l'élément qui va accueillir mon template
const listeFilms = document.getElementById("listeFilms");
// Je crée une fonction avec une boucle for of pour récupérer mes films
const elementCreation = () => {
  for (let film of films) {
    // Est-ce que le film est déjà vu ?
    if (film.dejaVuCondition) {
      // Si oui, alors je passe un check vert de fontawesome
      estDejaVu = "<i class='fas fa-check vert'></i>";
      calculPourcentageVisionnageAffichage = "";
      // Si non, un cercle rouge
    } else {
      estDejaVu = "<i class='far fa-times-circle rouge'></i>";
    //   si besoin, on peut afficher le temps restant
    //   tempsRestant = film.dureeTotale - film.dureeVisionne;
      calculPourcentageVisionnageAffichage = film.calculPourcentageVisionnage();
    }

    // je crée des éléments que je vais ajouter avec appenChild()
    // ici ma 1ère div.col
    const divCol = document.createElement("div");
    divCol.classList.add("col");
    listeFilms.appendChild(divCol);
    // div.card.shadow-sm
    const divCard = document.createElement("div");
    divCard.classList.add("card", "shadow-sm");
    divCol.appendChild(divCard);
    // img.poster-movie.img-fluid
    const posterMovie = document.createElement("img");
    posterMovie.src = `assets/img/affiches_films/${film.poster}`;
    posterMovie.alt = film.titre;
    posterMovie.classList.add("poster-movie", "img-fluid");
    divCard.appendChild(posterMovie);
    // div.card-body
    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCard.appendChild(divCardBody);
    // div.d-flex
    const divFlex = document.createElement("div");
    divFlex.classList.add("d-flex");
    divCardBody.appendChild(divFlex);
    // h3
    const h3Card = document.createElement("h3");
    h3Card.textContent = film.titre;
    divFlex.appendChild(h3Card);
    // div i
    const divCheckVisionnage = document.createElement("div");
    divCheckVisionnage.classList.add("validationLecture");
    divCheckVisionnage.innerHTML = estDejaVu;
    divFlex.appendChild(divCheckVisionnage);
    // span
    const spanRealisateur = document.createElement("span");
    spanRealisateur.innerHTML = `de <b>${film.realisateur}<b>`;
    spanRealisateur.classList.add("text-muted");
    divCardBody.appendChild(spanRealisateur);
    // p.card-text.text-ellipsis--3 (texte tronqué à 3 lignes)
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.classList.add("card-text", "text-ellipsis--3");
    descriptionParagraph.innerHTML = `Desc : "${film.description}"`;
    divCardBody.appendChild(descriptionParagraph);
    // div.d-flex.justif-content-between.align-items-center
    const divAlignSettings = document.createElement("div");
    divAlignSettings.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    divCardBody.appendChild(divAlignSettings);
    // small.text-muted
    smallDuration = document.createElement("small");
    smallDuration.classList.add("text-muted");
    // Ici, j'appelle la fonction minutesToHoursConversion contenue dans utils
    smallDuration.innerHTML = `${minutesToHoursConversion(
      film.dureeTotale
    )} mins <br>${calculPourcentageVisionnageAffichage}`;
    divAlignSettings.appendChild(smallDuration);
    // div.btn-group
    divButtonGroup = document.createElement("div");
    divButtonGroup.classList.add("btn-group");
    divAlignSettings.appendChild(divButtonGroup);
    // a - _id
    const aLienFiche = document.createElement("a");
    aLienFiche.href = `${baseURL}/films/fiche-detail.html?id=${film._id}`;
    divButtonGroup.appendChild(aLienFiche);
    // button.btn.btn-sm.btn-outline.success
    buttonMoreInformation = document.createElement("button");
    buttonMoreInformation.classList.add("btn", "btn-sm", "btn-outline-success");
    buttonMoreInformation.setAttribute("type", "button");
    buttonMoreInformation.textContent = "voir la fiche du film";
    aLienFiche.appendChild(buttonMoreInformation);
  }
};

// VERSION STRING INTERPOLATION
// htmlElements += `
// <div class="col">
//     <div class="card shadow-sm">
//         <div class="card-body">
//                 <h3>${film.titre}</h3>
//                 <span> de ${film.realisateur}</span>
//                 <p class="card-text">Desc : "${film.description}"</p>
//                 <div class="d-flex justify-content-between align-items-center">
//                      <div class="btn-group">
//                           <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                           <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                       </div>
//                       <small class="text-muted">${film.dureeTotale} mins</small>
//             </div>
//         </div>
//     </div>
// </div>
// `
// listeFilms.innerHTML = htmlElements;
