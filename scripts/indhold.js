document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dots");

  function deactivateAllDots() {
    dots.forEach((dot) => {
      dot.style.margin = "0px"; // Fjerner ekstra margin fra alle dots
    });
  }

  function updateActiveDotBasedOnScroll() {
    let closestSection = null;
    let minDistance = Infinity;

    dots.forEach((dot) => {
      const targetClass = dot.getAttribute("data-target");
      const section = document.querySelector(`.${targetClass}`);

      const distance = Math.abs(section.getBoundingClientRect().top);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = dot;
      }
    });

    deactivateAllDots(); // Fjerner 'active' klasse og ekstra margin fra alle dots

    // Sætter 'active' klassen og margin til den nærmeste dot
    if (closestSection) {
      closestSection.style.margin = "3px"; // Tilføjer ekstra margin
      closestSection.classList.add("active"); // Tilføjer 'active' klassen for yderligere styling
    }
  }

  // Funktion til at scrolle til sektionen, når en dot klikkes
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const targetClass = this.getAttribute("data-target");
      const targetSection = document.querySelector(`.${targetClass}`);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Opdater den aktive dot ved scroll
  window.addEventListener("scroll", updateActiveDotBasedOnScroll);

  // Initial opdatering af den aktive dot ved indlæsning
  updateActiveDotBasedOnScroll();
});
