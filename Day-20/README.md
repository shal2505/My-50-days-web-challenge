### Day 20 – Stateful Task Tracker with CRUD Operations & LocalStorage Persistence

On **Day 20** of the **50 Days Dev Web Development Challenge**, I built a fully interactive **Roadmap Progress Task Tracker** using **Vanilla JavaScript**. This project introduced me to the fundamentals of **state-driven applications**, where the user interface is completely controlled by a JavaScript array acting as the application's single source of truth.

I created a dedicated task management section that allows users to **add**, **complete**, and **delete** daily tasks dynamically. Every task is stored as an object containing a unique ID, task description, and completion status. Using a centralized **renderTasks()** function, the application automatically re-renders the interface whenever the task state changes, ensuring that the UI always stays synchronized with the underlying data.

To efficiently manage dynamically generated elements, I implemented **Event Delegation** on the task list container instead of attaching multiple event listeners to individual tasks. This approach allows the application to handle checkbox toggles and delete actions through a single optimized event listener.

As part of the **Bonus Challenge**, I integrated **LocalStorage** to persist the task data. Every change made to the task list is automatically saved, and when the page reloads, the application restores all tasks along with their completion status, providing a seamless user experience.

### What I Learned

* Understanding state management using JavaScript arrays.
* Creating structured task objects with unique IDs.
* Performing CRUD operations (Create, Read, Update, Delete).
* Rendering dynamic UI components using a reusable `renderTasks()` function.
* Managing dynamically generated elements using Event Delegation.
* Updating object properties and synchronizing the UI with application state.
* Persisting application data using LocalStorage.
* Building scalable, state-driven web applications.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* DOM Manipulation
* Arrays & Objects
* Event Delegation
* LocalStorage
* CRUD Operations

### Outcome

Successfully developed a fully functional **Task Tracker** that supports adding, completing, and deleting tasks while maintaining synchronization between the application's state and the user interface. By integrating LocalStorage persistence, the tracker retains all tasks across browser sessions, demonstrating the core principles of modern state-driven web application development.