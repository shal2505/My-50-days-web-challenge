### Day 14 – Dynamic UI Generation with Arrays, Objects & DOM Injection

On **Day 14** of the **50 Days Dev Web Development Challenge**, I transformed the Initiatives section from a static HTML layout into a fully dynamic, data-driven component using **Vanilla JavaScript**. Instead of manually writing every initiative card in HTML, I stored the project information inside an **array of objects** and used JavaScript to automatically generate and display each card on the webpage.

I cleared the hardcoded initiative cards from the HTML, selected the empty container using the DOM, and used the `.forEach()` loop to iterate through the project data. With **template literals**, I dynamically injected each project's title, description, and status into the page using `innerHTML`. As part of the bonus challenge, I implemented **conditional rendering**, automatically applying different CSS classes based on each project's status to visually distinguish **Active** and **Completed** initiatives.

### What I Learned

* Creating and managing data using JavaScript Arrays and Objects.
* Separating application data from the user interface.
* Iterating through data using the `.forEach()` loop.
* Building dynamic HTML with template literals (`` ` ``).
* Injecting content into the DOM using `innerHTML`.
* Implementing conditional rendering with `if/else`.
* Dynamically applying CSS classes based on data values.
* Understanding the fundamentals of data-driven web interfaces.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* Arrays & Objects
* DOM Manipulation
* Template Literals

### Outcome

Successfully converted the Initiatives section into a dynamic, scalable component that automatically generates project cards from JavaScript data. The webpage now separates data from presentation, making it easier to add, update, or remove initiatives while demonstrating the foundation of modern dynamic web development.