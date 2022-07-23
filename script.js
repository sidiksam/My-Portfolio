const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navMenu = document.querySelector('.navMenu');
const navLink = document.querySelectorAll('.navLink');
function mobileMenu() {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
}
hamburgerMenu.addEventListener('click', mobileMenu);

function closeMenu() {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));

// VALIDATION
const form = document.getElementById('contact-Form');
const email = document.getElementById('email');
const errorDisplay = document.getElementById('errorDisplay');
const checker = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

form.addEventListener('submit', (e) => {
  if (!email.value.match(checker)) {
    e.preventDefault();
    errorDisplay.style.visibility = 'visible';
    errorDisplay.classList.add('error-message');
    errorDisplay.textContent = '*Your email address should be all in lowercase';
  } else {
    errorDisplay.style.visibility = 'hidden';
  }
});
