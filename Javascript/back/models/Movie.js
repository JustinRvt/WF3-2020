const movies = [
    {
      "titre" : "13: Game of Death",
      "realisateur" : "Chookiat Sakveerakul",
      "description" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
      "dureeTotale" : 114,
      "imageUrl" : "13_game_of_death.jpg"
    },
    {
      "titre" : "Alien",
      "realisateur" : "Ridley Scott",
      "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "dureeTotale" : 117,
      "imageUrl" : "alien.jpg"
    },
    {
      "titre" : "Magnolia",
      "realisateur" : "Paul Thomas Anderson",
      "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
      "dureeTotale" : 188,
      "imageUrl" : "magnolia.jpg"
    },
    {
      "titre" : "Donnie Darko",
      "realisateur" : "Richard Kelly",
      "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "dureeTotale" : 113,
      "imageUrl" : "donnie_darko.jpg"
    },
    {
      "titre" : "Dobermann",
      "realisateur" : "Jan Kounen",
      "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
      "dureeTotale" : 94,
      "imageUrl" : "dobermann.jpg"
    },
    {
      "titre" : "Starship Troopers",
      "realisateur" : "Paul Verhoeven",
      "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
      "dureeTotale" : 129,
      "imageUrl" : "starship_troopers.jpg"
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




