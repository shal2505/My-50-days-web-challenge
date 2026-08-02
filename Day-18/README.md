### Day 18 – Auto-Rotating Testimonials Carousel with Timers & State Management

On **Day 18** of the **50 Days Dev Web Development Challenge**, I built a fully automated **Community Testimonials Carousel** using **Vanilla JavaScript**. Instead of displaying static testimonials, I created a dynamic component that automatically rotates through multiple community member testimonials at fixed time intervals using JavaScript timers.

I stored the testimonial information inside an **array of objects**, where each object contains a member's name and their testimonial. Using DOM manipulation, I dynamically updated the testimonial content on the webpage every three seconds with the help of the **setInterval()** function.

To manage which testimonial is currently displayed, I implemented a **state variable (`currentIndex`)** that keeps track of the active testimonial. Each time the update function executes, the index increments automatically and resets back to the beginning once it reaches the end of the array, creating a continuous looping carousel.

As part of the **Bonus Challenge**, I added **Previous** and **Next** navigation buttons that allow users to manually browse testimonials. To prevent conflicts between manual navigation and automatic rotation, I used **clearInterval()** to stop the running timer whenever a navigation button is clicked, ensuring a smooth and predictable user experience.

### What I Learned

* Understanding JavaScript timers using `setInterval()`.
* Stopping timers with `clearInterval()`.
* Managing application state using an index variable.
* Building reusable update functions.
* Dynamically updating DOM elements using `textContent`.
* Working with Arrays of Objects for structured data.
* Implementing infinite looping logic for carousels.
* Combining automatic and manual UI interactions.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* DOM Manipulation
* Arrays & Objects
* setInterval()
* clearInterval()

### Outcome

Successfully developed a fully functional, auto-rotating testimonial carousel that updates content every three seconds while also supporting manual navigation through Previous and Next buttons. The implementation demonstrates JavaScript timer functions, DOM updates, state management, and interactive UI behavior commonly used in modern websites.