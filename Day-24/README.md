### Day 24 – Client-Side Routing & Single Page Navigation

On **Day 24** of the **50 Days Dev Web Development Challenge**, I upgraded the Synexus Official community website by implementing **client-side routing and Single Page Application (SPA)-style navigation** using Vanilla JavaScript. Instead of loading a completely new HTML document for every navigation link, I created a JavaScript router that dynamically changes the content inside the main application container based on the current URL path. This allowed pages such as **Home, About, Initiatives, Core Team, and Membership** to be displayed dynamically without refreshing the entire webpage.

To implement the routing system, I used the browser's **History API**, particularly `history.pushState()`, to update the URL without triggering a traditional page reload. I also used the `popstate` event to support browser **Back and Forward navigation**. The router checks `window.location.pathname` and generates the appropriate HTML content for each route, while an additional 404 view handles invalid paths. I also maintained previously developed functionality such as **dark mode with localStorage, responsive navigation, initiative cards with status indicators, core team and mentor information, membership functionality, testimonials, search functionality, task tracking, modals, and interactive UI components**. This project helped me understand how modern websites can provide smooth navigation and application-like experiences using JavaScript without frameworks.

### What I Learned

* Understanding **client-side routing** and SPA concepts.
* Using `window.location.pathname` to identify the current route.
* Using the **History API** and `history.pushState()`.
* Handling browser navigation with the `popstate` event.
* Dynamically generating page content using JavaScript.
* Creating reusable route-based views for different website sections.
* Implementing a custom **404 Page Not Found** view.
* Preserving existing website functionality while adding routing.
* Using `localStorage` to persist user preferences such as dark mode.
* Managing DOM elements and navigation events with Vanilla JavaScript.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* History API
* `pushState()`
* `popstate` Event
* DOM Manipulation
* Event Handling
* Local Storage
* Client-Side Routing

### Outcome

Successfully transformed the **Synexus Official website** into a more interactive, SPA-style experience with **client-side routing**. Users can navigate between **Home, About, Initiatives, Core Team, and Membership** pages without traditional page reloads, while browser Back/Forward navigation continues to work correctly. The project strengthened my understanding of JavaScript routing, browser history management, dynamic DOM rendering, and building more advanced web applications using **Vanilla JavaScript**.
