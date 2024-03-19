document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const dots = document.querySelectorAll(".dot");

  // Funktion til at fjerne custom margin fra alle dots
  function resetDotsMargin() {
    dots.forEach((dot) => {
      dot.style.margin = "0px";
    });
  }

  // Funktion til at sætte margin på den aktive dot
  function setActiveDotMargin() {
    let closestSectionIndex = 0;
    let minDistance = Number.MAX_VALUE;

    sections.forEach((section, index) => {
      const distance = Math.abs(section.getBoundingClientRect().top);
      if (distance < minDistance) {
        minDistance = distance;
        closestSectionIndex = index;
      }
    });

    resetDotsMargin();
    // Sætter en margin på den dot, der matcher den tætteste sektion
    if (dots[closestSectionIndex]) {
      dots[closestSectionIndex].style.margin = "3px";
    }
  }

  // Opdater dot margin ved scroll
  window.addEventListener("scroll", setActiveDotMargin);

  // Kald funktionen ved load for at sætte margin på den korrekte dot fra start
  setActiveDotMargin();
});
