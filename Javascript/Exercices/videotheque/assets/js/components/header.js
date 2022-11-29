// J'attends que le DOM se soit chargé entièrement afin que les variables soient prises en compte
window.addEventListener("load", function () {
  const displayBrand = document.getElementById("brand");
  displayBrand.innerHTML = `${logo} ${brand}`;
});
