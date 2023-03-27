const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

var form = document.getElementById("contactform");

form.addEventListener("submit", function (event) {
alert("Merci pour votre message!");
event.preventDefault();
});