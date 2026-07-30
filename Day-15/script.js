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

const projectsData = [
    {
        title: "50 Days Dev Web Development Challenge",
        description: "A structured journey to learn HTML, CSS and JavaScript through daily projects.",
        status: "Active"
    },

    {
        title: "Open Source Contributions",
        description: "Collaborate on GitHub repositories and improve your coding skills.",
        status: "Completed"
    },

    {
        title: "Hackathons & Innovation",
        description: "Build innovative solutions and solve real-world problems.",
        status: "Active"
    }
];

const dynamicGrid = document.getElementById("dynamic-grid");
const searchInput = document.getElementById("search-projects");

function renderProjects(dataArray) {

    dynamicGrid.innerHTML = "";

    if (dataArray.length === 0) {

    dynamicGrid.innerHTML = `
        <p class="no-results">
            No initiatives match your search.
        </p>
    `;

    return;
}

    dataArray.forEach(function(project) {

        const statusClass =
            project.status === "Active"
                ? "active-project"
                : "completed-project";

    dynamicGrid.innerHTML += `
    <div class="initiative-card ${statusClass}">
        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <p>Status: ${project.status}</p>
    </div>
    `;

});

    }

    renderProjects(projectsData);

searchInput.addEventListener("input", function () {

    const searchTerm = searchInput.value.toLowerCase();

    const filteredProjects = projectsData.filter(function(project) {

        return project.title.toLowerCase().includes(searchTerm);

    });

    renderProjects(filteredProjects);

});