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
const draftStatus = document.getElementById("draft-status");
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("synexus_theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

} else if (savedTheme === null) {

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        document.body.classList.add("dark-theme");

    }

}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        localStorage.setItem("synexus_theme", "dark");

    } else {

        localStorage.setItem("synexus_theme", "light");

    }

});

// Recover saved draft when page loads
const savedData = localStorage.getItem("synexus_form_draft");

if (savedData) {

    const formData = JSON.parse(savedData);

    fullName.value = formData.name;
    email.value = formData.email;

}

fullName.addEventListener("input", saveDraft);
email.addEventListener("input", saveDraft);

function saveDraft() {

    const formData = {
        name: fullName.value,
        email: email.value
    };

    localStorage.setItem(
        "synexus_form_draft",
        JSON.stringify(formData)
    );

    draftStatus.textContent = "✔ Draft Saved Automatically";
draftStatus.style.opacity = "1";

draftStatus.textContent = "✔ Draft Saved Automatically";
draftStatus.style.opacity = "1";

clearTimeout(window.draftTimer);

window.draftTimer = setTimeout(function () {
    draftStatus.style.opacity = "0";
}, 2000);

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // removeErrors();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === "") {

        showError(fullName, "Please enter your full name.");

    } else if (!emailValue.includes("@")) {

        showError(email, "Please enter a valid email address.");

    } else {

        console.log("Application Ready for Server");

        localStorage.removeItem("synexus_form_draft");

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

const testimonialsData = [

    {
        name: "Aarav Nair",
        quote: "The 50 Days Dev Challenge helped me stay consistent and improve my frontend development skills."
    },

    {
        name: "Priya Sharma",
        quote: "The daily challenges made learning HTML, CSS, and JavaScript much easier and more enjoyable."
    },

    {
        name: "Rahul Verma",
        quote: "Synexus gave me the confidence to build projects that I never thought I could create."
    },

    {
        name: "Sneha Iyer",
        quote: "The supportive community and practical tasks motivated me to keep learning every single day."
    },

    {
        name: "Karthik Reddy",
        quote: "This challenge transformed my understanding of web development through hands-on practice."
    }

];

const dynamicGrid = document.getElementById("dynamic-grid");
const searchInput = document.getElementById("search-projects");

const testimonialName = document.getElementById("testimonial-name");
const testimonialQuote = document.getElementById("testimonial-quote");
const modalOverlay = document.getElementById("modal-overlay");
    const modalTitle = document.getElementById("modal-title");
    const closeModal = document.getElementById("close-modal");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;

// =========================
// TASK TRACKER
// =========================

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let taskState = JSON.parse(localStorage.getItem("synexus_tasks")) || [];
function saveTasks() {

    localStorage.setItem(
        "synexus_tasks",
        JSON.stringify(taskState)
    );

}

function renderTasks() {

    taskList.innerHTML = "";

    taskState.forEach(function (task) {

        taskList.innerHTML += `

        <li>

            <div class="task-info">

                <input
                    type="checkbox"
                    data-id="${task.id}"
                    ${task.completed ? "checked" : ""}
                >

                <span class="${task.completed ? "completed" : ""}">
                    ${task.text}
                </span>

            </div>

            <button
                class="delete-btn"
                data-id="${task.id}">
                &times;
            </button>

        </li>

        `;

    });

}

function updateTestimonial() {

    const currentData = testimonialsData[currentIndex];

    testimonialName.textContent = currentData.name;

    testimonialQuote.textContent = currentData.quote;

    currentIndex++;

    if (currentIndex === testimonialsData.length) {

        currentIndex = 0;

    }

}

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

    <button
        class="view-btn"
        data-title="${project.title}">
        View Details
    </button>

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

updateTestimonial();

let testimonialTimer = setInterval(updateTestimonial, 3000);

nextBtn.addEventListener("click", function () {

    clearInterval(testimonialTimer);

    updateTestimonial();

});

dynamicGrid.addEventListener("click", function (e) {

    if (e.target.classList.contains("view-btn")) {

        const projectTitle = e.target.getAttribute("data-title");

        modalTitle.textContent = projectTitle;

        modalOverlay.style.display = "flex";

    }

});

prevBtn.addEventListener("click", function () {

    clearInterval(testimonialTimer);

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = testimonialsData.length - 1;

    }

    testimonialName.textContent = testimonialsData[currentIndex].name;
    testimonialQuote.textContent = testimonialsData[currentIndex].quote;
    

});

closeModal.addEventListener("click", function () {

    modalOverlay.style.display = "none";

});

modalOverlay.addEventListener("click", function (e) {

    if (e.target === modalOverlay) {

        modalOverlay.style.display = "none";

    }

});

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        modalOverlay.style.display = "none";

    }

});

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    taskState.push(newTask);

saveTasks();

taskInput.value = "";

renderTasks();

});

taskList.addEventListener("click", function (e) {

    // DELETE TASK
    if (e.target.classList.contains("delete-btn")) {

        const targetId = Number(e.target.getAttribute("data-id"));

        taskState = taskState.filter(function (task) {

    return task.id !== targetId;

});

saveTasks();

renderTasks();

    }

if (e.target.matches('input[type="checkbox"]')) {

    const targetId = Number(e.target.getAttribute("data-id"));

    taskState.forEach(function (task) {

        if (task.id === targetId) {

            task.completed = !task.completed;

        }

    });

    saveTasks();

    renderTasks();

}

});

renderTasks();