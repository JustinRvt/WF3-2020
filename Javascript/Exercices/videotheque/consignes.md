# Exercice à réaliser
## sur plusieurs jours

### JOUR 1 :

Je veux créer une vidéothèque, à terme, elle sera en mesure d'accueillir plusieurs centaines, voire milliers d'oeuvres. Pour le moment, je n'ai que 6 films mais je ne veux pas créer d'objets manuellement pour chacun de ceux-là.

J'ai besoin d'un titre, d'un-e réalisateur-rice, d'une durée totale en minutes, d'une durée visionnée (en cours) en minutes et d'une courte description.

Je dois afficher toutes ces oeuvres dans la console (pour le moment).

Maintenant, je dois afficher les films grâce à une boucle sur la page d'accueil


Prochaine étape, calculer les %ages de visionnage par film, puis de toute la collection. Ensuite le temps total potentiellement visionnable de la vidéothéque.
Afficher les durées en heures et plus en minutes
Appliquer un signe distinctif (fontawesome ?) selon l'état du visionnage (vu à 100% ou non)

Pour chaque film, j'ai besoin d'un ID (unique donc). Grâce à la propriété [URLSearchParams][https://developer.mozilla.org/fr/docs/Web/API/URLSearchParams], je veux récupérer cet ID sur une page (vue produit) qui affichera la fiche complète de mon film. 

/!\ Pensez à définir le lien vers la vue au moyen de l'id, par exemple :
#### <a href="fiche-film.html?xxxxxxxxx>">mon lien</a> xxxxxxx étant l'id

