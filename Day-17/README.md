### Day 17 – Persistent Dark Mode Theme Toggle with CSS Variables & Local Storage

On **Day 17** of the **50 Days Dev Web Development Challenge**, I enhanced the Synexus Official website by implementing a fully functional **Dark Mode Theme Toggle** that provides users with a personalized browsing experience. Instead of manually changing the styles of individual elements, I utilized **CSS Custom Properties (Variables)** to build a scalable theming system capable of updating the entire interface with a single class change.

I added a **theme toggle button** to the navigation bar and used JavaScript to dynamically toggle a `.dark-theme` class on the `<body>` element. By redefining the existing CSS variables inside the `.dark-theme` class, the website automatically switched the colors of the background, text, navigation bar, profile cards, initiative cards, and membership form. To improve usability, I stored the user's selected theme using the **Local Storage API**, ensuring the preferred theme is restored automatically whenever the website is revisited. As part of the bonus challenge, I also implemented **system theme detection** using the `prefers-color-scheme` media query, allowing the website to automatically match the user's operating system appearance when no theme preference had been previously saved.

### What I Learned

* Creating scalable themes using CSS Custom Properties (Variables).
* Applying global UI changes by toggling CSS classes with `classList.toggle()`.
* Manipulating the entire webpage through `document.body`.
* Persisting user preferences using the Local Storage API.
* Restoring application state when the page reloads.
* Detecting operating system theme preferences with `window.matchMedia()`.
* Building user-friendly interfaces that remember personalization settings.
* Understanding how modern websites implement persistent Light and Dark Mode experiences.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* CSS Variables (Custom Properties)
* DOM Manipulation
* Local Storage API
* Media Queries (`prefers-color-scheme`)

### Outcome

Successfully implemented a persistent **Dark Mode Theme Toggle** that enables users to seamlessly switch between light and dark themes while automatically remembering their preference across browser sessions. The website now delivers a more modern, accessible, and personalized user experience by combining CSS Variables, JavaScript DOM manipulation, Local Storage persistence, and operating system theme detection.