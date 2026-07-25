const heroHeading = document.querySelector("#hero h1");

const heroButton = document.querySelector("#hero a");

heroButton.addEventListener("click", function () {
    heroHeading.textContent = "Welcome to the Synexus Core!";
    heroHeading.classList.toggle("active-state");

});