const heroHeading = document.querySelector("#hero h1");
const heroButton = document.querySelector("#hero a");

heroButton.addEventListener("click", function () {
    heroHeading.textContent = "Welcome to the Synexus Core!";
    heroHeading.classList.toggle("active-state");
});


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
});

const form = document.querySelector("#membership form");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    removeErrors();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === "") {

        showError(fullName, "Please enter your full name.");

    } else if (!emailValue.includes("@")) {

        showError(email, "Please enter a valid email address.");

    } else {

        console.log("Application Ready for Server");

        form.reset();
    }

});