// J'attends que le DOM se soit chargé entièrement afin que les variables soient prises en compte
window.addEventListener("load", function () {
  // je récupère l'année en cours
  const year = new Date().getFullYear();
  // J'injecte la date dans mon copyright
  const copyright = document.getElementById("copyright");
  // On colle © + année en cours + url du site
  copyright.innerHTML = `	&#169; ${year} - ${urlWebsite}`;
});