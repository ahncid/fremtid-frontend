document.querySelectorAll(".nav-icons li").forEach((item) => {
  item.addEventListener("click", function () {
    const url = this.getAttribute("data-href");

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
