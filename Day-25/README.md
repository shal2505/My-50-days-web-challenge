### Day 25 – Application Engine & JavaScript Code Refactoring

On **Day 25** of the **50 Days Dev Web Development Challenge**, I refactored and organized the JavaScript functionality of the Synexus Official community website by creating a centralized **Application Engine** in a new `app.js` file. Instead of keeping different JavaScript features scattered throughout the project, I organized them into separate initialization functions such as **theme toggle, mobile menu, initiative search, membership form, testimonials, task tracker, Kanban board, modals, and scroll animations**. I also used the `DOMContentLoaded` event to ensure that the application initializes only after the HTML document has been fully loaded.

I connected the Application Engine with the existing **SPA router from Day 24** so that page-specific features are initialized whenever a new route is loaded dynamically using `innerHTML`. Global features such as **Dark Mode and the Mobile Menu** are initialized once through `initApp()`, while local features are initialized through `initPageFeatures()` whenever the required page is rendered. I also implemented and tested a custom **404 Page Not Found** route for invalid URLs. As a bonus challenge, I connected the **Kanban board with LocalStorage**, allowing dragged tasks to remain in their new columns even after refreshing the page. This helped me understand how to structure JavaScript applications more efficiently and manage initialization, state, routing, and DOM events in a larger project.

### What I Learned

* Understanding **JavaScript code refactoring** and modular organization.
* Creating a centralized **Application Engine** using `app.js`.
* Creating reusable **initialization functions** for different features.
* Using `DOMContentLoaded` to control application initialization.
* Separating **global features** from page-specific features.
* Reinitializing features after SPA route changes.
* Connecting JavaScript initialization with a **client-side router**.
* Implementing a custom **404 Page Not Found** route.
* Using `localStorage` to persist application state.
* Persisting **Kanban board tasks** after drag-and-drop operations.
* Managing multiple DOM events in a centralized JavaScript structure.
* Preventing conflicts and duplicate JavaScript execution.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* DOM Manipulation
* `DOMContentLoaded`
* LocalStorage
* History API
* Client-Side Routing
* Intersection Observer API
* Drag and Drop API
* Event Handling

### Outcome

Successfully transformed the JavaScript structure of the **Synexus Official website** into a centralized **Application Engine** using `app.js`. Global and page-specific features are now initialized in an organized way, while the existing SPA navigation continues to work correctly. I also successfully implemented and tested the **404 Page Not Found** route and completed the bonus challenge by making the **Kanban board persistent using LocalStorage**. This project strengthened my understanding of JavaScript architecture, application initialization, state management, SPA integration, and code refactoring using **Vanilla JavaScript**.
