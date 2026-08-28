# Day 36 – Deep Linking & URL Search Parameters

On **Day 36** of the **50 Days Dev Web Development Challenge**, I focused on connecting the **GitHub Developer Lookup** feature with the browser's URL using **URL Search Parameters**.

I implemented a two-way synchronization between the search input and the URL. When a GitHub username is included in the URL, the application automatically reads the parameter and triggers the GitHub profile search when the page loads.

This allows GitHub profile searches to be **shared through a URL** and restored after refreshing the page.

### What I Learned

* Using the `URLSearchParams` API.
* Reading query parameters using `window.location.search`.
* Using `params.get()` to retrieve URL values.
* Hydrating application state from the URL on page load.
* Automatically triggering an input event from JavaScript.
* Connecting URL state with UI state.
* Using browser history APIs for URL state synchronization.
* Creating shareable/deep-linked application states.
* Maintaining state after refreshing the page.

### Technologies Used

* HTML5
* CSS3
* JavaScript ES6+
* URLSearchParams API
* `window.location.search`
* Browser History API
* `pushState`
* GitHub API
* DOM Manipulation
* Local Development Server

### Outcome

Successfully connected the **GitHub Developer Lookup** feature with URL search parameters.

A GitHub profile can now be represented through a URL containing the username parameter, allowing the search state to be restored automatically when the page is opened or refreshed.

This day strengthened my understanding of **URL state management, deep linking, browser history, query parameters and state hydration in Single Page Applications (SPAs)**.
