const appRoot = document.getElementById("app-root");
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("synexus_theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            localStorage.setItem("synexus_theme", "dark");
            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("synexus_theme", "light");
            themeToggle.textContent = "🌙";

        }

    });

}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

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


function saveTasks() {

    localStorage.setItem(
        "synexus_tasks",
        JSON.stringify(taskState)
    );

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

    const taskCards =
        document.querySelectorAll(
            ".task-card"
        );

    const columns =
        document.querySelectorAll(
            ".column"
        );


    taskCards.forEach(function (card) {

        card.addEventListener(
            "dragstart",
            function () {

                card.classList.add(
                    "is-dragging"
                );

            }
        );

        card.addEventListener(
            "dragend",
            function () {

                card.classList.remove(
                    "is-dragging"
                );

            }
        );

    });


    columns.forEach(function (column) {

        column.addEventListener(
            "dragover",
            function (e) {

                e.preventDefault();

            }
        );


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

                }

            }
        );

    });

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

            <a href="/Day-24/about" class="read-more nav-link">
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

        <a href="/Day-24/initiatives" class="nav-link">
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

function router() {

    const path =
        window.location.pathname;


    // Remove old content

    appRoot.innerHTML = "";


    // HOME

    if (
        path === "/Day-24/" ||
        path === "/Day-24/index.html" ||
        path === "/"
    ) {

        appRoot.innerHTML =
            homePage();

    }


    // ABOUT

    else if (
        path === "/Day-24/about" ||
        path === "/about"
    ) {

        appRoot.innerHTML =
            aboutPage();

    }


    // INITIATIVES

    else if (
        path === "/Day-24/initiatives" ||
        path === "/initiatives"
    ) {

        appRoot.innerHTML =
            initiativesPage();

    }


    // TEAM

    else if (
        path === "/Day-24/team" ||
        path === "/team"
    ) {

        appRoot.innerHTML =
            teamPage();

    }


    // MEMBERSHIP

    else if (
        path === "/Day-24/membership" ||
        path === "/membership"
    ) {

        appRoot.innerHTML =
            membershipPage();

    }


    // 404

else {

    view = `
        <section class="router-page">

            <h1>404 - Page Not Found</h1>

            <p>
                Sorry, the page you are looking for does not exist.
            </p>

            <button class="nav-button" data-route="/Day-24/">
                Go Back Home
            </button>

        </section>
    `;

}


    // Reinitialize features
    // after router changes HTML

    setupInitiativeSearch();

    setupMembershipForm();

    setupTestimonials();

    setupModal();

    setupTaskTracker();

    setupKanban();

    setupAnimations();


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

        if (navLinks) {

            navLinks.classList.remove(
                "nav-active"
            );

        }

        if (menuToggle) {

            menuToggle.classList.remove(
                "active"
            );

        }

    }
);

window.addEventListener(
    "popstate",
    router
);

router();