// Først tilføjer vi en event listener til .ellipsis for at toggle active klassen ved klik
document.querySelector(".ellipsis").addEventListener("click", function () {
  let navIcons = document.querySelector(".navigation .nav-icons");
  let ellipsis = document.querySelector(".ellipsis");

  navIcons.classList.toggle("active");
  ellipsis.classList.toggle("active");
});

// Derefter tilføjer vi en event listener til window for at fjerne active klassen ved scroll
window.addEventListener("scroll", function () {
  let navIcons = document.querySelector(".navigation .nav-icons");
  let ellipsis = document.querySelector(".ellipsis");

  if (navIcons.classList.contains("active")) {
    navIcons.classList.remove("active");
  }

  if (ellipsis.classList.contains("active")) {
    ellipsis.classList.remove("active");
  }
});
