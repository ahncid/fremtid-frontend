window.addEventListener("load", simulateLoading);

function simulateLoading() {
  const textElement = document.querySelector(".text");

  // Simulerer indlæsningstid før tekstændring
  setTimeout(() => {
    textElement.style.animation = "none"; // Stop blinking
    textElement.textContent = "";

    // Fade out effect before redirecting
    setTimeout(() => {
      const title = document.querySelector(".video-container");
      title.style.opacity = 0; // Set opacity to 0 for fade out effect
      setTimeout(() => {
        window.location.href = "/html/one-page.html";
      }, 1500); // Vent yderligere før omdirigering
    }, 500); // Vent efter indlæsningen er "færdig" før fade out
  }, 3000); // Antag at indlæsning tager 3 sekunder
}
