// Je récupère l'élément sur lequel l'utilisateur va cliquer
const monElementClic = document.getElementById("mon-lien");
// J'écoute l'événement "click"
monElementClic.addEventListener("click",
// Je passe un paramètre à ma fonction de callback 
                                 function(event) {
    // J'utilise la fonction preventDefault() pour empêcher son comportement
    event.preventDefault();
    alert("Ne clic pas là dessus !")
    // monElementClic.innerHTML = "C'est bon, c'est cliqué !";
});