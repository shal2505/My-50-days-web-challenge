const appState = {
    currentPath: window.location.pathname,
    darkMode: false
};

const appRoot = document.getElementById("app-root");

// ==========================================
// DARK MODE
// ==========================================

function initThemeToggle() {

    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        return;
    }

    const savedTheme = localStorage.getItem("synexus_theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        appState.darkMode = true;
    } else {
        appState.darkMode = false;
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        appState.darkMode =
            document.body.classList.contains("dark-theme");

        localStorage.setItem(
            "synexus_theme",
            appState.darkMode ? "dark" : "light"
        );

    });

}

// ==========================================
// MOBILE MENU
// ==========================================

function initMobileMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("nav-active");
        menuToggle.classList.toggle("active");

    });

}

const projectsData = [

    {
        title: "50 Days Dev Web Development Challenge",
        description:
            "A structured journey to learn HTML, CSS and JavaScript through daily projects.",
        status: "Active"
    },

    {
        title: "Open Source Contributions",
        description:
            "Collaborate on GitHub repositories and improve your coding skills.",
        status: "Completed"
    },

    {
        title: "Hackathons & Innovation",
        description:
            "Build innovative solutions and solve real-world problems.",
        status: "Active"
    }

];

const testimonialsData = [

    {
        name: "Aarav Nair",
        quote:
            "The 50 Days Dev Challenge helped me stay consistent and improve my frontend development skills."
    },

    {
        name: "Priya Sharma",
        quote:
            "The daily challenges made learning HTML, CSS, and JavaScript easier and more enjoyable."
    },

    {
        name: "Rahul Verma",
        quote:
            "Synexus gave me the confidence to build projects that I never thought I could create."
    },

    {
        name: "Sneha Iyer",
        quote:
            "The supportive community and practical tasks motivated me to keep learning every single day."
    },

    {
        name: "Karthik Reddy",
        quote:
            "This challenge transformed my understanding of web development through hands-on practice."
    }

];

let currentTestimonial = 0;

function debounce(func, delay) {

    let timeout;

    return function (...args) {

        clearTimeout(timeout);

        timeout = setTimeout(function () {

            func.apply(this, args);

        }, delay);

    };

}

function renderProjects(dataArray) {

    const dynamicGrid =
        document.getElementById("dynamic-grid");

    if (!dynamicGrid) {
        return;
    }

    dynamicGrid.innerHTML = "";

    if (dataArray.length === 0) {

        dynamicGrid.innerHTML = `
            <p class="no-results">
                No initiatives match your search.
            </p>
        `;

        return;
    }

    dataArray.forEach(function (project) {

        const statusClass =
            project.status === "Active"
                ? "active-project"
                : "completed-project";

        dynamicGrid.innerHTML += `

            <div class="initiative-card ${statusClass}">

                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <div class="card-footer">

                    <span class="status-badge ${statusClass}">
                        ${project.status}
                    </span>

                    <button
                        class="view-btn"
                        data-title="${project.title}">
                        View Details
                    </button>

                </div>

            </div>

        `;

    });

}

function setupInitiativeSearch() {

    const searchInput =
        document.getElementById("search-projects");

    if (!searchInput) {
        return;
    }

    renderProjects(projectsData);

    const searchHandler = debounce(function () {

        const searchTerm =
            searchInput.value.toLowerCase().trim();

        const filteredProjects =
            projectsData.filter(function (project) {

                return (
                    project.title
                        .toLowerCase()
                        .includes(searchTerm)
                );

            });

        renderProjects(filteredProjects);

    }, 300);

    searchInput.addEventListener(
        "input",
        searchHandler
    );

}

function updateTestimonial() {

    const nameElement =
        document.getElementById("testimonial-name");

    const quoteElement =
        document.getElementById("testimonial-quote");

    if (!nameElement || !quoteElement) {
        return;
    }

    const current =
        testimonialsData[currentTestimonial];

    nameElement.textContent =
        current.name;

    quoteElement.textContent =
        current.quote;

}

function setupTestimonials() {

    const previousButton =
        document.getElementById("prev-btn");

    const nextButton =
        document.getElementById("next-btn");

    if (!previousButton || !nextButton) {
        return;
    }

    currentTestimonial = 0;

    updateTestimonial();

    nextButton.addEventListener("click", function () {

        currentTestimonial++;

        if (
            currentTestimonial >=
            testimonialsData.length
        ) {

            currentTestimonial = 0;

        }

        updateTestimonial();

    });

    previousButton.addEventListener("click", function () {

        currentTestimonial--;

        if (currentTestimonial < 0) {

            currentTestimonial =
                testimonialsData.length - 1;

        }

        updateTestimonial();

    });

}

function setupModal() {

    const modalOverlay =
        document.getElementById("modal-overlay");

    const modalTitle =
        document.getElementById("modal-title");

    const closeModal =
        document.getElementById("close-modal");

    if (!modalOverlay) {
        return;
    }

    document.addEventListener("click", function (e) {

        if (
            e.target.classList.contains("view-btn")
        ) {

            const title =
                e.target.getAttribute("data-title");

            if (modalTitle) {
                modalTitle.textContent = title;
            }

            modalOverlay.style.display = "flex";

        }

    });

    if (closeModal) {

        closeModal.addEventListener("click", function () {

            modalOverlay.style.display = "none";

        });

    }

    modalOverlay.addEventListener("click", function (e) {

        if (e.target === modalOverlay) {

            modalOverlay.style.display = "none";

        }

    });

}

function setupMembershipForm() {

    const form =
        document.getElementById("membership-form");

    if (!form) {
        return;
    }

    const fullName =
        document.getElementById("fullname");

    const email =
        document.getElementById("email");

    const college =
        document.getElementById("college");

    const about =
        document.getElementById("about");

    const draftStatus =
        document.getElementById("draft-status");

    const savedData =
        localStorage.getItem("synexus_form_draft");

    if (savedData) {

        try {

            const formData =
                JSON.parse(savedData);

            if (fullName) {
                fullName.value =
                    formData.name || "";
            }

            if (email) {
                email.value =
                    formData.email || "";
            }

            if (college) {
                college.value =
                    formData.college || "";
            }

            if (about) {
                about.value =
                    formData.about || "";
            }

        } catch (error) {

            console.log(
                "Could not recover saved draft."
            );

        }

    }

    function saveDraft() {

        const formData = {

            name:
                fullName ? fullName.value : "",

            email:
                email ? email.value : "",

            college:
                college ? college.value : "",

            about:
                about ? about.value : ""

        };

        localStorage.setItem(
            "synexus_form_draft",
            JSON.stringify(formData)
        );

        if (draftStatus) {

            draftStatus.textContent =
                "✔ Draft Saved Automatically";

            draftStatus.style.opacity = "1";

            clearTimeout(window.draftTimer);

            window.draftTimer =
                setTimeout(function () {

                    draftStatus.style.opacity = "0";

                }, 2000);

        }

    }


    if (fullName) {
        fullName.addEventListener(
            "input",
            saveDraft
        );
    }

    if (email) {
        email.addEventListener(
            "input",
            saveDraft
        );
    }

    if (college) {
        college.addEventListener(
            "input",
            saveDraft
        );
    }

    if (about) {
        about.addEventListener(
            "input",
            saveDraft
        );
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nameValue =
            fullName ? fullName.value.trim() : "";

        const emailValue =
            email ? email.value.trim() : "";

        const collegeValue =
            college ? college.value.trim() : "";

        const aboutValue =
            about ? about.value.trim() : "";


        if (nameValue === "") {

            alert("Please enter your full name.");
            return;

        }

        if (
            emailValue === "" ||
            !emailValue.includes("@")
        ) {

            alert("Please enter a valid email address.");
            return;

        }

        if (collegeValue === "") {

            alert("Please enter your college name.");
            return;

        }

        if (aboutValue === "") {

            alert(
                "Please tell us something about yourself."
            );

            return;

        }


        console.log(
            "Membership Application:",
            {
                name: nameValue,
                email: emailValue,
                college: collegeValue,
                about: aboutValue
            }
        );


        localStorage.removeItem(
            "synexus_form_draft"
        );


        alert(
            "🎉 Your Synexus membership application is ready!"
        );

        form.reset();

    });

}

let taskState =
    JSON.parse(
        localStorage.getItem("synexus_tasks")
    ) || [];

    
    // ==========================================
// DAY 31 - INFINITE SCROLL COMMUNITY FEED
// ==========================================

let currentPage = 1;
const limit = 10;
let isLoading = false;

async function fetchNextPage() {

    if (isLoading) return;

    isLoading = true;

    const feed = document.getElementById("data-feed");
    const sentinel = document.getElementById("scroll-sentinel");

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch initiatives");
        }

        const data = await response.json();

        // No more data
        if (data.length === 0) {
            sentinel.textContent = "You've reached the end of the initiatives.";
            observer.disconnect();
            return;
        }

        data.forEach(post => {

            feed.innerHTML += `
                <article class="initiative-card community-initiative">

                    <div class="initiative-header">

                        <span class="initiative-number">
                            #${String(post.id).padStart(2, "0")}
                        </span>

                        <span class="initiative-status">
                            ● ACTIVE
                        </span>

                    </div>

                    <h3>
                        Community Initiative #${post.id}
                    </h3>

                    <p>
                        A Synexus community initiative focused on
                        learning, collaboration, innovation and
                        student development.
                    </p>

                    <div class="initiative-footer">

                        <span>
                            🌐 Synexus Community
                        </span>

                        <span>
                            Community Initiative
                        </span>

                    </div>

                </article>
            `;

        });

    } catch (error) {

        console.error("Error loading initiatives:", error);

        sentinel.textContent =
            "Unable to load more initiatives.";

    } finally {

        isLoading = false;

    }
}


// ==========================================
// DAY 31 - INTERSECTION OBSERVER
// ==========================================

function setupInfiniteScroll() {

    const sentinel =
        document.getElementById("scroll-sentinel");

    if (!sentinel) {
        return;
    }

    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    currentPage++;

                    fetchNextPage();

                }

            });

        });

    observer.observe(sentinel);
 
    // Load the first page immediately
    currentPage = 1;

    fetchNextPage();

}


function saveTasks() {

    localStorage.setItem(
        "synexus_tasks",
        JSON.stringify(taskState)
    );

}

// ==========================================
// DAY 29 - POST REQUEST
// ==========================================

function setupProposalForm() {

    const form =
        document.getElementById("proposal-form");

    if (!form) {
        return;
    }

    const titleInput =
        document.getElementById("proposal-title");

    const descriptionInput =
        document.getElementById("proposal-description");

    const submitButton =
        document.getElementById("proposal-submit-btn");

    const message =
        document.getElementById("proposal-message");


    form.addEventListener("submit", async function (e) {

        e.preventDefault();


        const title =
            titleInput.value.trim();

        const description =
            descriptionInput.value.trim();


        // ==========================================
        // CONSTRUCT PAYLOAD
        // ==========================================

        const newInitiative = {

            title: title,

            body: description,

            userId: 1

        };


        // ==========================================
        // BONUS - DISABLE BUTTON
        // ==========================================

        submitButton.disabled = true;

        submitButton.textContent = "Submitting...";


       submitButton.disabled = true;
       submitButton.textContent = "Submitting...";
       
        try {

            // ==========================================
            // POST REQUEST
            // ==========================================

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {

                    method: "POST",

                    headers: {
                        "Content-type":
                            "application/json; charset=UTF-8"
                    },

                    body:
                        JSON.stringify(newInitiative)

                }
            );


            // ==========================================
            // PARSE RESPONSE
            // ==========================================

            const data =
                await response.json();


            // ==========================================
            // SUCCESS
            // ==========================================

            if (response.status === 201) {

                message.textContent =
                    "🎉 Initiative proposal submitted successfully!";

                message.style.color = "green";

                console.log(
                    "Server Response:",
                    data
                );

                form.reset();

            } else {

                message.textContent =
                    "Something went wrong. Please try again.";

                message.style.color = "red";

            }

        } catch (error) {

            console.error(
                "Proposal submission error:",
                error
            );

            message.textContent =
                "Unable to submit proposal. Please try again.";

            message.style.color = "red";


        } finally {

            // ==========================================
            // BONUS - RE-ENABLE BUTTON
            // ==========================================

            submitButton.disabled = false;

            submitButton.textContent =
                "Submit Proposal";

        }

    });

}

// ==========================================
// DAY 30 - PUT REQUEST
// ==========================================

async function updateInitiative(id) {

    const manageMessage =
        document.getElementById("manage-message");

    const updatedInitiative = {

        title: "Updated Technical Initiative [UPDATED]",

        body:
            "This initiative proposal has been updated successfully.",

        userId: 1

    };

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id,
            {

                method: "PUT",

                headers: {
                    "Content-type":
                        "application/json; charset=UTF-8"
                },

                body:
                    JSON.stringify(updatedInitiative)

            }
        );

        const data =
            await response.json();

        console.log(
            "Updated Initiative:",
            data
        );

        if (response.ok) {

            if (manageMessage) {

                manageMessage.textContent =
                    "✅ Initiative updated successfully!";

                manageMessage.style.color =
                    "green";

            }

        }

    } catch (error) {

        console.error(
            "Update Error:",
            error
        );

        if (manageMessage) {

            manageMessage.textContent =
                "❌ Unable to update initiative.";

            manageMessage.style.color =
                "red";

        }

    }

}

// ==========================================
// DAY 30 - DELETE REQUEST
// ==========================================

async function deleteInitiative(id) {

    const manageMessage =
        document.getElementById("manage-message");

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id,
            {

                method: "DELETE"

            }
        );

        if (response.ok) {

            console.log(
                "Initiative deleted successfully."
            );

            if (manageMessage) {

                manageMessage.textContent =
                    "🗑️ Initiative deleted successfully!";

                manageMessage.style.color =
                    "green";

            }

        } else {

            throw new Error(
                "Unable to delete initiative."
            );

        }

    } catch (error) {

        console.error(
            "Delete Error:",
            error
        );

        if (manageMessage) {

            manageMessage.textContent =
                "❌ Unable to delete initiative.";

            manageMessage.style.color =
                "red";

        }

    }

}

// ==========================================
// DAY 30 - MANAGEMENT BUTTONS
// ==========================================

function setupProposalManagement() {

    const updateButton =
        document.getElementById("update-btn");

    const deleteButton =
        document.getElementById("delete-btn");

    if (!updateButton || !deleteButton) {
        return;
    }


    // UPDATE

    updateButton.addEventListener(
        "click",
        function () {

            updateInitiative(1);

        }
    );


    // DELETE

    deleteButton.addEventListener(
        "click",
        function () {

            const confirmed =
                window.confirm(
                    "Are you sure you want to delete this initiative? This action cannot be undone."
                );

            if (confirmed) {

                deleteInitiative(1);

            }

        }
    );

}

function githubLookupPage() {

    return `

        <section
            id="github-lookup"
            class="router-page hidden">

            <h1>Community Contributor Lookup</h1>

            <p>
                Search for a GitHub developer and view
                their public profile.
            </p>

            <div class="github-search-box">

                <input
                    type="text"
                    id="github-username"
                    placeholder="Enter GitHub username"
                >

            </div>

            <div id="dev-profile-card"></div>

            <div id="repos-grid" class="initiatives-grid"></div>

        </section>

    `;
}

function renderTasks() {

    const taskList =
        document.getElementById("task-list");

    if (!taskList) {
        return;
    }

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

                    <span
                        class="${task.completed ? "completed" : ""}">
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


function setupTaskTracker() {

    const taskInput =
        document.getElementById("task-input");

    const addTaskBtn =
        document.getElementById("add-task-btn");

    const taskList =
        document.getElementById("task-list");

    if (
        !taskInput ||
        !addTaskBtn ||
        !taskList
    ) {
        return;
    }


    renderTasks();


    addTaskBtn.addEventListener("click", function () {

        const taskText =
            taskInput.value.trim();

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


    taskList.addEventListener(
        "click",
        function (e) {


            // DELETE
            if (
                e.target.classList.contains(
                    "delete-btn"
                )
            ) {

                const targetId =
                    Number(
                        e.target.getAttribute(
                            "data-id"
                        )
                    );

                taskState =
                    taskState.filter(function (task) {

                        return task.id !== targetId;

                    });

                saveTasks();

                renderTasks();

            }


            // COMPLETE
            if (
                e.target.matches(
                    'input[type="checkbox"]'
                )
            ) {

                const targetId =
                    Number(
                        e.target.getAttribute(
                            "data-id"
                        )
                    );

                taskState.forEach(function (task) {

                    if (task.id === targetId) {

                        task.completed =
                            !task.completed;

                    }

                });

                saveTasks();

                renderTasks();

            }

        }
    );

}

function setupKanban() {

    const board = document.querySelector(".board");

    if (!board) {
        return;
    }

    const columns = document.querySelectorAll(".column");

    // Load saved Kanban data
    const savedKanban =
        localStorage.getItem("synexus_kanban");

    if (savedKanban) {

        try {

            const kanbanData =
                JSON.parse(savedKanban);

            columns.forEach(function (column, index) {

                if (kanbanData[index]) {

                    column.innerHTML =
                        `<h3>${kanbanData[index].title}</h3>`;

                    kanbanData[index].tasks.forEach(
                        function (task) {

                            const taskCard =
                                document.createElement("div");

                            taskCard.className =
                                "task-card";

                            taskCard.draggable = true;

                            taskCard.textContent = task;

                            column.appendChild(
                                taskCard
                            );

                        }
                    );

                }

            });

        } catch (error) {

            console.log(
                "Could not load saved Kanban data."
            );

        }

    }


    // Drag Start
    board.addEventListener(
        "dragstart",
        function (e) {

            if (
                e.target.classList.contains(
                    "task-card"
                )
            ) {

                e.target.classList.add(
                    "is-dragging"
                );

            }

        }
    );


    // Drag End
    board.addEventListener(
        "dragend",
        function (e) {

            if (
                e.target.classList.contains(
                    "task-card"
                )
            ) {

                e.target.classList.remove(
                    "is-dragging"
                );

            }

        }
    );


    // Allow Drop
    columns.forEach(function (column) {

        column.addEventListener(
            "dragover",
            function (e) {

                e.preventDefault();

            }
        );


        // Drop
        column.addEventListener(
            "drop",
            function (e) {

                e.preventDefault();

                const draggedCard =
                    document.querySelector(
                        ".is-dragging"
                    );

                if (draggedCard) {

                    column.appendChild(
                        draggedCard
                    );

                    saveKanban();

                }

            }
        );

    });

}

function saveKanban() {

    const columns =
        document.querySelectorAll(".column");

    const kanbanData = [];

    columns.forEach(function (column) {

        const titleElement =
            column.querySelector("h3");

        const taskCards =
            column.querySelectorAll(".task-card");

        const tasks = [];

        taskCards.forEach(function (card) {

            tasks.push(
                card.textContent.trim()
            );

        });

        kanbanData.push({

            title:
                titleElement
                    ? titleElement.textContent.trim()
                    : "",

            tasks: tasks

        });

    });

    localStorage.setItem(
        "synexus_kanban",
        JSON.stringify(kanbanData)
    );

}

function setupAnimations() {

    const hiddenElements =
        document.querySelectorAll(
            ".hidden"
        );

    if (
        !("IntersectionObserver" in window)
    ) {

        hiddenElements.forEach(
            function (element) {

                element.classList.add("show");

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            }
        );


    hiddenElements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

}

function homePage() {

    return `

        <!-- HERO -->

        <section id="hero">

            <h1>
                Welcome to Synexus Official
            </h1>

            <p>
                Learn, build, collaborate and grow
                through real-world development challenges.
            </p>

            <a href="#about" id="hero-button">
                Explore Synexus
            </a>

        </section>


        <!-- ABOUT -->

        <section id="about-preview" class="hidden">

            <h2>About Synexus</h2>

            <p>
                Synexus Official is a student-driven
                technology community focused on learning,
                collaboration, coding challenges and
                real-world projects.
            </p>

            <p>
                We provide students with opportunities to
                learn new technologies, work on projects,
                collaborate with other developers and
                develop practical skills.
            </p>

            <a href="/Day-25/about" class="read-more nav-link">
                Read More →
            </a>

        </section>


        <!-- INITIATIVES -->

        <section id="initiatives" class="hidden">

    <h2>Our Initiatives</h2>

    <p>
        Explore the projects, challenges, and activities
        that help Synexus members learn, build, and grow.
    </p>

    <input
                type="text"
                id="search-projects"
                placeholder="Search initiatives..."
            >

    <div class="initiatives-grid">

        <!-- Initiative 1 -->
        <div class="initiative-card active-project">

            <h3>50 Days Dev Web Development Challenge</h3>

            <p>
                A structured journey to learn HTML, CSS and
                JavaScript through daily hands-on projects.
            </p>

            <div class="card-footer">

                <span class="status-badge">
                    Active
                </span>

            </div>

        </div>


        <!-- Initiative 2 -->
        <div class="initiative-card completed-project">

            <h3>Open Source Contributions</h3>

            <p>
                Collaborate on GitHub repositories and improve
                your coding skills through real-world projects.
            </p>

            <div class="card-footer">

                <span class="status-badge">
                    Completed
                </span>

            </div>

        </div>


        <!-- Initiative 3 -->
        <div class="initiative-card active-project">

            <h3>Hackathons & Innovation</h3>

            <p>
                Build innovative solutions and participate in
                hackathons to solve real-world problems.
            </p>

            <div class="card-footer">

                <span class="status-badge">
                    Active
                </span>

            </div>

        </div>

    </div>

    <!-- READ MORE -->
    <div style="text-align: center; margin-top: 25px;">

        <a href="/Day-25/initiatives" class="nav-link">
            Read More →
        </a>

    </div>

</section>


        <!-- CORE TEAM -->

        ${teamSection()}


        <!-- MEMBERSHIP -->

        ${membershipSection()}


        <!-- TESTIMONIALS -->

        ${testimonialSection()}


        <!-- TASK TRACKER -->

        ${taskTrackerSection()}


        <!-- KANBAN -->

        ${kanbanSection()}

    `;

}

function teamSection() {

    return `

        <section id="team" class="hidden">

            <h2>Core Team</h2>

            <div class="team-grid">


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder profile image"
                    >

                    <h3>Shalini A</h3>

                    <p>
                        Web Developer & Participant
                    </p>

                </div>


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder profile image"
                    >

                    <h3>Vinay Maurya</h3>

                    <p>
                        Web Developer
                    </p>

                </div>


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder profile image"
                    >

                    <h3>Alan</h3>

                    <p>
                        Web Developer
                    </p>

                </div>

            </div>


            <h2>Core Mentors</h2>

            <div class="team-grid">


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder mentor image"
                    >

                    <h3>Anant Sharma</h3>

                    <p>
                        Founder
                    </p>

                </div>


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder mentor image"
                    >

                    <h3>Abhay Aditya</h3>

                    <p>
                        Chief Coordination Officer
                    </p>

                </div>


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder mentor image"
                    >

                    <h3>Harshit Singh</h3>

                    <p>
                        Chief Product Officer (CPO)
                    </p>

                </div>


                <div class="profile-card">

                    <img
                        src="https://placehold.co/120x120"
                        alt="Placeholder mentor image"
                    >

                    <h3>Pavithra</h3>

                    <p>
                        Core Team Member
                    </p>

                </div>

            </div>

        </section>

    `;

}

function membershipSection() {

    return `

        <section id="membership" class="hidden">

            <h2>Join Synexus</h2>

            <form id="membership-form">

                <label for="fullname">
                    Full Name
                </label>

                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                >


                <label for="email">
                    Email Address
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                >


                <label for="college">
                    College Name
                </label>

                <input
                    type="text"
                    id="college"
                    name="college"
                    placeholder="Enter your college name"
                    required
                >


                <label for="about">
                    Tell Us About Yourself
                </label>

                <textarea
                    id="about"
                    name="about"
                    rows="5"
                    placeholder="Tell us about yourself, your interests, skills or goals..."
                    required
                ></textarea>


                <button type="submit">
                    Apply for Membership
                </button>


                <p id="draft-status">
                    ✔ Draft Saved Automatically
                </p>

            </form>

        </section>

    `;

}

// ==========================================
// PROPOSE AN INITIATIVE - DAY 29
// ==========================================

function proposalSection() {

    return `

        <section id="proposal" class="hidden">

            <h2>Propose an Initiative</h2>

            <p>
                Have an idea for a technical initiative?
                Share it with the Synexus community.
            </p>

            <form id="proposal-form">

                <label for="proposal-title">
                    Initiative Title
                </label>

                <input
                    type="text"
                    id="proposal-title"
                    placeholder="Enter initiative title"
                    required
                >

                <label for="proposal-description">
                    Description
                </label>

                <textarea
                    id="proposal-description"
                    rows="5"
                    placeholder="Describe your initiative..."
                    required
                ></textarea>

                <button type="submit" id="proposal-submit-btn">
                    Submit Proposal
                </button>

                <p id="proposal-message"></p>

            </form>

            <!-- MANAGE PROPOSAL - DAY 30 -->

<section id="manage-proposal" class="hidden">

    <h2>Manage Proposal</h2>

    <p>
        Update or delete an existing initiative proposal.
    </p>

    <button id="update-btn">
        Update Proposal
    </button>

    <button id="delete-btn" class="btn-danger">
        Delete Proposal
    </button>

    <p id="manage-message"></p>

</section>

        </section>

    `;
}

function testimonialSection() {

    return `

        <section
            id="testimonials"
            class="hidden">

            <h2>
                What Our Members Say
            </h2>

            <div id="testimonial-container">

                <h3 id="testimonial-name">
                    Aarav Nair
                </h3>

                <p id="testimonial-quote">
                    The 50 Days Dev Challenge
                    helped me stay consistent.
                </p>

                <div class="testimonial-buttons">

                    <button id="prev-btn">
                        ← Previous
                    </button>

                    <button id="next-btn">
                        Next →
                    </button>

                </div>

            </div>

        </section>

    `;

}

function taskTrackerSection() {

    return `

        <section
            id="task-tracker"
            class="hidden">

            <h2>
                My Learning Tasks
            </h2>

            <div class="task-input-area">

                <input
                    type="text"
                    id="task-input"
                    placeholder="Add a learning task..."
                >

                <button id="add-task-btn">
                    Add Task
                </button>

            </div>


            <ul id="task-list"></ul>

        </section>

    `;

}

function kanbanSection() {

    return `

        <section
            id="kanban-board"
            class="hidden">

            <h2>
                Learning Roadmap
            </h2>

            <div class="board">


                <div class="column">

                    <h3>
                        To Learn
                    </h3>

                    <div
                        class="task-card"
                        draggable="true">

                        HTML & Semantic Structure

                    </div>

                    <div
                        class="task-card"
                        draggable="true">

                        CSS Flexbox

                    </div>

                </div>


                <div class="column">

                    <h3>
                        In Progress
                    </h3>

                    <div
                        class="task-card"
                        draggable="true">

                        JavaScript DOM

                    </div>

                </div>


                <div class="column">

                    <h3>
                        Completed
                    </h3>

                    <div
                        class="task-card"
                        draggable="true">

                        CSS Grid

                    </div>

                </div>

            </div>

        </section>

    `;

}

function aboutPage() {

    return `

        <section id="about" class="router-page hidden">

            <h1>About Synexus</h1>

            <p>
                Synexus Official is a student-driven technology
                community focused on learning, collaboration,
                coding challenges and real-world projects.
            </p>

            <p>
                Our community provides students with opportunities
                to learn new technologies, participate in challenges,
                collaborate with other developers and build
                practical projects.
            </p>

            <h2>What We Do</h2>

                <div class="initiative-card">

                    <h3>Learn</h3>

                    <p>
                        Learn web development, programming and
                        emerging technologies through structured
                        challenges and practical activities.
                    </p>

                </div>

                <div class="initiative-card">

                    <h3>Build</h3>

                    <p>
                        Turn your ideas into real projects and
                        strengthen your technical skills through
                        hands-on development.
                    </p>

                </div>

                <div class="initiative-card">

                    <h3>Collaborate</h3>

                    <p>
                        Work with other students, share ideas,
                        contribute to projects and learn together
                        as a community.
                    </p>

                </div>

            </div>

            <h2>Our Mission</h2>

            <p>
                Our mission is to create a supportive environment
                where students can continuously learn, experiment,
                collaborate and grow as technology professionals.
            </p>

        </section>

    `;

}

function initiativesPage() {

    return `

        <section
            id="initiatives"
            class="router-page hidden">

            <h1>Our Initiatives</h1>

            <p>
                Explore the programs, challenges and activities
                organized by Synexus Official to help students
                learn, build and collaborate.
            </p>


            <input
                type="text"
                id="search-projects"
                placeholder="Search initiatives..."
            >


            <div
                id="dynamic-grid"
                class="initiatives-grid">
            </div>


            <h2>What You Can Expect</h2>

            <div class="initiatives-grid">

                <div class="initiative-card">

                    <h3>Practical Learning</h3>

                    <p>
                        Learn by working on real projects instead
                        of only studying theoretical concepts.
                    </p>

                </div>


                <div class="initiative-card">

                    <h3>Community Collaboration</h3>

                    <p>
                        Connect with other learners, developers
                        and mentors to exchange ideas and knowledge.
                    </p>

                </div>


                <div class="initiative-card">

                    <h3>Innovation</h3>

                    <p>
                        Participate in hackathons and innovation
                        activities to solve real-world problems.
                    </p>

                </div>

            </div>

            ${proposalSection()}

            <!-- DAY 31 - INFINITE SCROLL -->

<section id="data-section">

    <h2>Community Feed</h2>

    <div id="data-feed"></div>

    <div id="scroll-sentinel" class="loading-spinner">
        Loading more...
    </div>

</section> 

        </section>

    `;

}

function teamPage() {

    return `

        ${teamSection()}

    `;

}

function membershipPage() {

    return `

        ${membershipSection()}

    `;

}



// ==========================================
// GITHUB DEVELOPER LOOKUP - DAY 28
// ==========================================

function setupGithubLookup() {

    const usernameInput =
        document.getElementById("github-username");

    const profileContainer =
        document.getElementById("dev-profile-card");

    if (!usernameInput || !profileContainer) {
        return;
    }


    // ==========================================
    // FETCH GITHUB CONTRIBUTOR
    // ==========================================

 async function fetchRepositories(username) {

    const reposGrid =
        document.getElementById("repos-grid");

    if (!reposGrid) {
        return;
    }

    reposGrid.innerHTML = `
        <p class="github-message">
            Loading repositories...
        </p>
    `;

    try {

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
            throw new Error(
                `GitHub API error: ${response.status}`
            );
        }

        const data = await response.json();

        // Make sure GitHub returned an array
        if (!Array.isArray(data)) {

            console.error(
                "Unexpected GitHub response:",
                data
            );

            throw new Error(
                "GitHub did not return a repository list."
            );
        }

        reposGrid.innerHTML = "";

        if (data.length === 0) {

            reposGrid.innerHTML = `
                <p class="no-results">
                    No public repositories found.
                </p>
            `;

            return;
        }

        data.forEach(function (repo) {

            reposGrid.innerHTML += `

                <div class="initiative-card">

                    <h3>
                        ${repo.name}
                    </h3>

                    <p>
                        ${repo.description || "No description provided."}
                    </p>

                    <p>
                        ⭐ Stars: ${repo.stargazers_count}
                    </p>

                    <p>
                        💻 Language:
                        ${repo.language || "Not specified"}
                    </p>

                    <a
                        href="${repo.html_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="github-profile-btn"
                    >
                        View Repository
                    </a>

                </div>

            `;

        });

    } catch (error) {

        console.error(
            "Repository Fetch Error:",
            error
        );

        reposGrid.innerHTML = `
            <p class="github-error">
                ${error.message}
            </p>
        `;

    }

}

}

// ==========================================
// PAGE-SPECIFIC FEATURE INITIALIZATION
// ==========================================

function initPageFeatures() {

    setupInitiativeSearch();
    setupMembershipForm();
    setupTestimonials();
    setupProposalForm();
    setupProposalManagement();
    setupModal();
    setupTaskTracker();
    setupKanban();
    setupAnimations();
    setupGithubLookup();
    setupInfiniteScroll(); 

}

function router() {

    const path =
        window.location.pathname;


    // Remove old content

    appRoot.innerHTML = "";


    // HOME

    if (
    path === "/Day-25/" ||
    path === "/Day-25/index.html" ||
    path === "/"
) {

        appRoot.innerHTML =
            homePage();

    }


    // ABOUT

    else if (
    path === "/Day-25/about" ||
    path === "/about"
) {

        appRoot.innerHTML =
            aboutPage();

    }


    // INITIATIVES

    else if (
        path === "/Day-25/initiatives" ||
        path === "/initiatives"
    ) {

        appRoot.innerHTML =
            initiativesPage();

    }


    // TEAM

    else if (
        path === "/Day-25/team" ||
        path === "/team"
    ) {

        appRoot.innerHTML =
            teamPage();

    }


    // MEMBERSHIP

    else if (
        path === "/Day-25/membership" ||
        path === "/membership"
    ) {

        appRoot.innerHTML =
            membershipPage();

    }

    // GITHUB LOOKUP

else if (
    path === "/Day-25/github-lookup" ||
    path === "/github-lookup"
) {

    appRoot.innerHTML =
        githubLookupPage();

}


    // 404

// 404

else {

    appRoot.innerHTML = `
        <section class="router-page">

            <h1>404 - Page Not Found</h1>

            <p>
                Sorry, the page you are looking for does not exist.
            </p>

            <button id="back-home-btn">
                Go Back Home
            </button>

        </section>
    `;

    document
        .getElementById("back-home-btn")
        .addEventListener("click", function () {

            window.history.pushState(
                {},
                "",
                "/Day-25/"
            );

            router();

        });

    return;
}

    // Reinitialize features
    // after router changes HTML

initPageFeatures();

    // Hero button

    const heroButton =
        document.getElementById(
            "hero-button"
        );

    const heroHeading =
        document.querySelector(
            "#hero h1"
        );

    if (
        heroButton &&
        heroHeading
    ) {

        heroButton.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                heroHeading.textContent =
                    "Welcome to the Synexus Core!";

                heroHeading.classList.toggle(
                    "active-state"
                );

            }
        );

    }

}

document.addEventListener(
    "click",
    function (e) {

        const link =
            e.target.closest(
                ".nav-link"
            );

        if (!link) {
            return;
        }


        const href =
            link.getAttribute(
                "href"
            );


        // Allow external links

        if (
            href.startsWith("http")
        ) {
            return;
        }

        e.preventDefault();


        window.history.pushState(
            {},
            "",
            href
        );


        router();


        // Close mobile menu

      const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

if (navLinks) {
    navLinks.classList.remove("nav-active");
}

if (menuToggle) {
    menuToggle.classList.remove("active");
}

    }
);

window.addEventListener(
    "popstate",
    router
);

function initApp() {

    initThemeToggle();
    initMobileMenu();
    router();

}

document.addEventListener(
    "DOMContentLoaded",
    initApp
);

// ==========================================
// GITHUB DEVELOPER LOOKUP - DAY 28
// ==========================================

function setupGithubLookup() {

    const usernameInput =
        document.getElementById("github-username");

    const profileContainer =
        document.getElementById("dev-profile-card");

    const reposGrid =
        document.getElementById("repos-grid");

    if (!usernameInput || !profileContainer || !reposGrid) {
        return;
    }

    let githubController = null;

    async function fetchGithubUser(username) {

        if (username.trim() === "") {
            profileContainer.innerHTML = "";
            reposGrid.innerHTML = "";
            return;
        }

        profileContainer.innerHTML = `
            <p class="github-message">
                Loading GitHub profile...
            </p>
        `;

        reposGrid.innerHTML = "";

        try {

            // ==========================================
            // FETCH USER PROFILE
            // ==========================================

            const userResponse = await fetch(
                `https://api.github.com/users/${encodeURIComponent(username)}`
            );

            if (!userResponse.ok) {
                throw new Error("GitHub user not found.");
            }

            const userData =
                await userResponse.json();


            // ==========================================
            // DISPLAY PROFILE
            // ==========================================

            profileContainer.innerHTML = `

                <div class="initiative-card github-profile-card">

                    <img
                        src="${userData.avatar_url}"
                        alt="${userData.login} GitHub profile"
                        class="github-avatar"
                    >

                    <h2>
                        ${userData.name || userData.login}
                    </h2>

                    <p>
                        ${userData.bio || "No bio available."}
                    </p>

                    <p>
                        <strong>Username:</strong>
                        @${userData.login}
                    </p>

                    <p>
                        <strong>Public Repositories:</strong>
                        ${userData.public_repos}
                    </p>

                    <a
                        href="${userData.html_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="github-profile-btn"
                    >
                        View GitHub Profile
                    </a>

                </div>

            `;


            // ==========================================
            // FETCH REPOSITORIES
            // ==========================================

            reposGrid.innerHTML = `
                <p class="github-message">
                    Loading repositories...
                </p>
            `;

            const repoResponse = await fetch(
                `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
            );

            if (!repoResponse.ok) {
                throw new Error(
                    "Unable to load repositories."
                );
            }

            const repositories =
                await repoResponse.json();


            // Make sure response is an array

            if (!Array.isArray(repositories)) {

                throw new Error(
                    "GitHub did not return a repository list."
                );

            }


            // ==========================================
            // NO REPOSITORIES
            // ==========================================

            if (repositories.length === 0) {

                reposGrid.innerHTML = `
                    <p class="no-results">
                        No public repositories found.
                    </p>
                `;

                return;
            }


            // ==========================================
            // DISPLAY REPOSITORIES
            // ==========================================

            reposGrid.innerHTML = "";

            repositories.forEach(function (repo) {

                reposGrid.innerHTML += `

                    <div class="initiative-card">

                        <h3>
                            ${repo.name}
                        </h3>

                        <p>
                            ${repo.description ||
                            "No description provided."}
                        </p>

                        <p>
                            ⭐ Stars:
                            ${repo.stargazers_count}
                        </p>

                        <p>
                            💻 Language:
                            ${repo.language ||
                            "Not specified"}
                        </p>

                        <a
                            href="${repo.html_url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="github-profile-btn"
                        >
                            View Repository
                        </a>

                    </div>

                `;

            });

        } catch (error) {

            console.error(
                "GitHub Fetch Error:",
                error
            );

            profileContainer.innerHTML = `
                <p class="github-error">
                    ${error.message}
                </p>
            `;

            reposGrid.innerHTML = "";

        }

    }


    // ==========================================
    // SEARCH WHEN USER TYPES 
    // ==========================================

    usernameInput.addEventListener(
        "input",
        debounce(function () {

            const username =
                usernameInput.value.trim();

            fetchGithubUser(username);

        }, 500)
    );

}