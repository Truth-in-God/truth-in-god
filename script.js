function toggleMenu() {
const nav = document.getElementById("main-nav");
nav.classList.toggle("open");
}

const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}
