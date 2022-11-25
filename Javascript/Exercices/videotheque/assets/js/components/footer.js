// je récupère l'année en cours
const year = new Date().getFullYear();
// J'injecte la date dans mon copyright
const copyright = document.getElementById("copyright");
copyright.innerHTML = `	&#169; ${year} - ${urlWebsite}`;