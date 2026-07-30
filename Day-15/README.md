### Day 15 – Dynamic Search & Real-Time Project Filtering

On **Day 15** of the 50 Days Dev Web Development Challenge, I enhanced the Initiatives section by implementing a **real-time search and filtering system** using Vanilla JavaScript. Building upon the dynamic project cards created on Day 14, I refactored the rendering logic into a reusable function that dynamically displays projects based on user input.

I added a search input field that listens for every keystroke using the `input` event. The search functionality filters the project data using the `.filter()` method and performs case-insensitive matching with `.toLowerCase()` and `.includes()`, instantly updating the displayed project cards without reloading the page. As part of the bonus challenge, I also implemented a `"No initiatives match your search."` message that appears whenever the search does not return any matching projects, providing a better user experience.

### What I Learned

* Refactoring repetitive code into a reusable `renderProjects()` function.
* Handling real-time user input with the `input` event.
* Filtering arrays dynamically using the `.filter()` method.
* Performing case-insensitive searches with `.toLowerCase()`.
* Matching text efficiently using `.includes()`.
* Re-rendering dynamic content by updating the DOM.
* Creating a user-friendly **No Results Found** state for unmatched searches.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* Arrays & Objects
* DOM Manipulation
* Event Handling

### Outcome

Successfully transformed the Initiatives section into a fully interactive and searchable component. Users can now search projects in real time, with the webpage dynamically filtering and displaying only the relevant initiatives. When no matching project is found, a clear **"No initiatives match your search."** message is displayed, demonstrating the practical use of JavaScript functions, array methods, and DOM manipulation to create a responsive and user-friendly web interface.