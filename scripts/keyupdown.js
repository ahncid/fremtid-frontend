document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let currentSectionIndex = 0;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  }

  window.addEventListener("keydown", (event) => {
    if (event.code === "PageDown" || event.code === "ArrowDown") {
      event.preventDefault();
      if (currentSectionIndex < sections.length - 1) {
        scrollToSection(++currentSectionIndex);
      }
    } else if (event.code === "PageUp" || event.code === "ArrowUp") {
      event.preventDefault();
      if (currentSectionIndex > 0) {
        scrollToSection(--currentSectionIndex);
      }
    }
  });
});
