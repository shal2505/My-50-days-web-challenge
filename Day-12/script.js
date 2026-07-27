const heroHeading = document.querySelector("#hero h1");

const heroButton = document.querySelector("#hero a");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

heroButton.addEventListener("click", function () {
    heroHeading.textContent = "Welcome to the Synexus Core!";
    heroHeading.classList.toggle("active-state");

});

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
     menuToggle.classList.toggle("active");
});