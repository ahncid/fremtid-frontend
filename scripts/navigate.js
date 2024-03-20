document.querySelectorAll(".nav-icons li").forEach((item) => {
  item.addEventListener("click", function () {
    const url = this.getAttribute("data-href");
    // Tjekker om elementet har en specifik attribut eller klasse
    // der indikerer, at linket skal åbnes i en ny fane
    if (
      this.hasAttribute("target") &&
      this.getAttribute("target") === "_blank"
    ) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  });
});
