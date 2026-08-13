# Day 28 – GitHub Developer Lookup with AbortController & API Error Handling

On **Day 28** of the **50 Days Dev Web Development Challenge**, I upgraded the **Community Contributor Lookup** feature by creating a complete GitHub developer search system. The application now allows users to enter a GitHub username and dynamically fetch their **public GitHub profile information and repositories** using the GitHub REST API.

I implemented an asynchronous `fetchGithubUser(username)` function using **Fetch API** and **Async/Await**. The application retrieves the developer's profile, including their name, username, bio, profile picture, public repository count, and GitHub profile link.

I also added a second API request to retrieve the developer's **6 most recently updated public repositories**. Repository information such as the repository name, description, star count, programming language, and repository link is dynamically displayed using reusable initiative cards.

As a **bonus challenge**, I implemented **AbortController** to cancel previous API requests when the user starts a new search. This prevents unnecessary requests and helps avoid displaying outdated results. I also added **debouncing** to the search input so the GitHub API is not called on every single keystroke.

The application also includes proper handling for **GitHub API errors**, including user-not-found errors, rate limits, too many requests, failed API responses, empty repository results, and cancelled requests.

### What I Learned

* Working with the **GitHub REST API**.
* Fetching data from multiple API endpoints.
* Using `async/await` with asynchronous JavaScript.
* Using `fetch()` to retrieve API data.
* Processing API responses using `.json()`.
* Dynamically displaying API data using DOM manipulation.
* Using `Array.forEach()` to generate repository cards.
* Implementing **AbortController** to cancel previous requests.
* Understanding API status codes such as `403`, `404`, and `429`.
* Handling API errors using `try...catch`.
* Using **debouncing** for real-time search.
* Using `encodeURIComponent()` to safely handle usernames.
* Displaying fallback values using the logical OR (`||`) operator.
* Managing loading, success, empty, and error states.
* Opening external GitHub links securely using `target="_blank"` and `rel="noopener noreferrer"`.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* GitHub REST API
* Fetch API
* Async/Await
* JSON
* DOM Manipulation
* AbortController
* Debounce
* Array `forEach()`
* Template Literals
* Error Handling
* SPA Routing

### Outcome

Successfully transformed the **Community Contributor Lookup** into a complete **GitHub Developer Discovery Tool**. Users can now search for a GitHub developer, view their profile information, explore their **6 recently updated repositories**, and access their GitHub profile and repository pages directly.

This day strengthened my understanding of **REST API integration, asynchronous JavaScript, Fetch API, AbortController, debouncing, JSON processing, dynamic DOM rendering, API error handling, and real-time search functionality**.
