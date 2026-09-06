function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
