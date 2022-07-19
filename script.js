const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");

hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navLink");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}
