const navigationArrows = document.querySelectorAll("#arrow-click");

navigationArrows.forEach((div) => {
  div.addEventListener("click", function () {
    const destinationUrl = this.getAttribute("data-href");

    window.location.href = destinationUrl;
  });
});
