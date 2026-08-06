## Day 22 – Scroll Reveal Animations with the Intersection Observer API

On **Day 22** of the **50 Days Dev Web Development Challenge**, I implemented smooth **scroll reveal animations** using the **Intersection Observer API**. Instead of relying on traditional scroll event listeners, I used a more efficient browser API to detect when elements enter the viewport and trigger animations.

I created reusable CSS utility classes to define hidden and visible states. The `.hidden` class initially hides elements with reduced opacity and a downward translation, while the `.show` class restores their visibility and original position. CSS transitions were used to create a smooth fade-and-slide effect.

I then applied these classes to different sections of the Synexus website, including the About, Initiatives, Testimonials, Core Team, Task Tracker, Membership, and Footer sections. Using the Intersection Observer API, I observed all hidden elements and automatically added the `.show` class whenever they became visible on the screen.

As part of the **Bonus Challenge**, I updated the observer to remove the `.show` class when elements leave the viewport, allowing the animation to replay whenever users scroll back to those sections.

### What I Learned

* Understanding the Intersection Observer API.
* Detecting elements entering and leaving the viewport.
* Creating reusable CSS animation classes.
* Using CSS transitions with `opacity` and `transform`.
* Dynamically adding and removing classes using JavaScript.
* Building performant scroll-based animations without using scroll events.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* DOM Manipulation
* Intersection Observer API
* CSS Transitions

### Outcome

Successfully added smooth scroll reveal animations across multiple sections of the Synexus website using the Intersection Observer API. This implementation improved the website's user experience while following modern frontend development practices for performance and maintainability.
