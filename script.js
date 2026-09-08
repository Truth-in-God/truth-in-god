function toggleMenu() {
const nav = document.getElementById("main-nav");
nav.classList.toggle("open");
}

document.getElementById("year").textContent = new Date().getFullYear();
