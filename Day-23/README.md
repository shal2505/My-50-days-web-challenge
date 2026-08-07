### Day 23 – HTML5 Drag & Drop Kanban Board

On **Day 23** of the **50 Days Dev Web Development Challenge**, I transformed the Task Tracker into an interactive **Kanban Board** using the **HTML5 Drag and Drop API**. Instead of managing tasks in a simple list, I created a visual workflow with three columns—**To Do**, **In Progress**, and **Done**—allowing users to organize tasks by dragging and dropping them between different stages. This replicates the core functionality of modern project management tools such as Trello, Jira, and Asana.

To implement this feature, I made each task card draggable using the `draggable="true"` attribute and handled the **dragstart** and **dragend** events to track the currently selected task while providing visual feedback through CSS. I then configured each workflow column as a valid drop zone by using the **dragover** event with `e.preventDefault()`, enabling the browser to accept dropped elements. Finally, I used JavaScript's `appendChild()` method to dynamically move the dragged task into the selected column, updating the interface instantly without reloading the page. Through this project, I gained a deeper understanding of browser drag-and-drop events, DOM manipulation, and how interactive workflow applications are built using native JavaScript without relying on external libraries.

### What I Learned

* Understanding the HTML5 Drag and Drop API.
* Using the `draggable` attribute.
* Handling `dragstart`, `dragend`, `dragover`, and `drop` events.
* Using `e.preventDefault()` to enable drop functionality.
* Dynamically moving elements with `appendChild()`.
* Creating interactive Kanban-style workflow interfaces.
* Improving user experience with visual drag feedback.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* HTML5 Drag & Drop API
* DOM Manipulation
* Event Handling

### Outcome

Successfully built a functional **Kanban Board** where task cards can be dragged and dropped between **To Do**, **In Progress**, and **Done** columns. This project strengthened my understanding of native drag-and-drop functionality, event-driven programming, and dynamic user interface development using modern JavaScript.
