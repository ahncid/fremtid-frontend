// Funktion til at bestemme base URL
function determineBaseURL() {
  // Tjekker om siden kører på en lokal server (typisk under udvikling)
  const isLocal =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";
  // Returnerer en tom streng, hvis siden kører lokalt, ellers angives stien til GitHub Pages-projektet
  return isLocal ? "" : "/fremtid-frontend";
}

// Funktion til at sætte baggrundsbillede stier for bestemte elementer
function setBackgroundImages() {
  // Kalder 'determineBaseURL' for at få den korrekte base URL baseret på hvor siden kører
  const baseURL = determineBaseURL();
  // Definerer et objekt, hvor hver nøgle er en CSS-selektor og værdien er stien til billedet
  const backgroundImages = {
    ".background1": "images/strongAIVSweakAI2.jpg",
    ".background2": "images/longWay.jpg",
    ".background3": "images/limits.jpg",
  };

  // Looper igennem hvert par af selektor og billedsti i 'backgroundImages' objektet
  Object.entries(backgroundImages).forEach(([selector, imagePath]) => {
    // Finder alle elementer i dokumentet, der matcher den givne selektor
    const elements = document.querySelectorAll(selector);
    // For hvert fundet element, sættes baggrundsbilledet ved at opdatere 'backgroundImage' stilen
    // Den fulde sti til billedet sammensættes af base URL'en og den specifikke billedsti
    elements.forEach((element) => {
      element.style.backgroundImage = `url(${baseURL}/${imagePath})`;
    });
  });
}

// Når hele HTML-dokumentet er indlæst, kaldes 'setBackgroundImages' funktionen
// Dette sikrer, at elementerne er tilgængelige i DOM'en, før der forsøges at sætte baggrundsbilleder
document.addEventListener("DOMContentLoaded", setBackgroundImages);
