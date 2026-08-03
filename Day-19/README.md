### Day 19 – Event Delegation & Interactive Modal System

On **Day 19** of the **50 Days Dev Web Development Challenge**, I implemented **Event Delegation** to efficiently handle user interactions with dynamically generated project cards. Instead of attaching individual event listeners to every **"View Details"** button, I used a single event listener on the parent container and leveraged **Event Bubbling** to detect which button was clicked. This approach improves performance and ensures newly generated project cards automatically inherit the same functionality.

I enhanced the **Initiatives Gallery** by adding a **"View Details"** button to every project card. Using custom **data attributes (`data-title`)**, I dynamically identified the selected project and displayed its title inside a reusable **modal window** without reloading the page.

To create a more user-friendly experience, I designed a modal overlay that appears above the webpage and highlights the selected project information. I also implemented multiple ways to close the modal, including the **Close (×) button**, clicking outside the modal on the overlay, and pressing the **Escape** key, making the interface more intuitive and accessible.

Throughout this project, I learned how **Event Delegation** simplifies event management for dynamically generated elements while reducing memory usage compared to attaching separate listeners to every button.

### What I Learned

* Understanding **Event Bubbling** and **Event Delegation**.
* Handling events efficiently using a single parent event listener.
* Identifying clicked elements with `e.target`.
* Using `classList.contains()` for event filtering.
* Retrieving custom data using `getAttribute()`.
* Creating reusable modal components.
* Displaying and hiding elements dynamically with JavaScript.
* Implementing multiple methods to close a modal.
* Improving performance when working with dynamically generated DOM elements.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* DOM Manipulation
* Event Bubbling
* Event Delegation
* Data Attributes (`data-*`)
* Modal UI Design

### Outcome

Successfully built an interactive **Project Details Modal** powered by **Event Delegation**, allowing users to view project information through dynamically generated buttons. The implementation demonstrates efficient event handling, reusable UI components, and scalable JavaScript techniques commonly used in modern web applications.
