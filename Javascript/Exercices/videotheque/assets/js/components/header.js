// J'attends que le DOM se soit chargé entièrement afin que les variables soient prises en compte
window.addEventListener("load", function() {
  // Je vais insérer les éléments du
  const insertHomeLink = document.getElementById("insertHomeLink");
  insertHomeLink.classList.add("d-flex", "flex-row-reverse");
  // a.navbar-brand.d-flex.align-items-center
  const aInsertHomeLink = document.createElement("a");
  aInsertHomeLink.classList.add("navbar-brand", "d-flex", "align-items-center");
  //J'ai besoin de baseURL pour changer le path du lien
  aInsertHomeLink.href = `${baseURL}/index.html`;
  insertHomeLink.appendChild(aInsertHomeLink);

  // strong#brand
  const strongBrand = document.createElement("strong");
  strongBrand.id = "brand";
  aInsertHomeLink.appendChild(strongBrand);

  // Injection logo + marque
  const displayBrand = document.getElementById("brand");
  displayBrand.innerHTML = `${logo} ${brand}`;
});
