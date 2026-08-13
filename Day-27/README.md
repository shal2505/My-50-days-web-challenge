# Day 27 – GitHub Repository API Integration & Dynamic Project Grid

On **Day 27** of the **50 Days Dev Web Development Challenge**, I extended the **Community Contributor Lookup** feature by fetching and displaying the developer's **6 most recently updated public GitHub repositories**. Instead of showing only the contributor's profile, the application now retrieves repository data from the GitHub REST API and dynamically renders each repository as a project card.

I created a new `fetchRepositories(username)` asynchronous function and used the GitHub repositories endpoint with query parameters to sort repositories by their latest updates. The returned **JSON array** is processed using `forEach()` and dynamically inserted into a reusable `initiatives-grid`.

I also implemented **DOM clearing** before every new search to prevent old repository results from remaining on the page. The application handles the **empty state** when a user has no public repositories and displays an appropriate message.

As a **bonus challenge**, I added a fallback using the logical OR operator so repositories without descriptions display **"No description provided."** instead of `null`.

### What I Learned

* Working with **JSON arrays** returned by APIs.
* Using endpoint parameters such as `?sort=updated`.
* Fetching multiple resources from an external API.
* Using `Array.forEach()` to process repository data.
* Dynamically generating repository cards with template literals.
* Clearing existing DOM content before rendering new results.
* Handling empty API responses.
* Using logical OR (`||`) for fallback values.
* Connecting multiple asynchronous API requests.
* Reusing existing CSS grid styles for dynamic content.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* GitHub REST API
* Fetch API
* Async/Await
* JSON
* DOM Manipulation
* Array `forEach()`
* Template Literals
* SPA Routing

### Outcome

Successfully upgraded the **Community Contributor Lookup** into a dynamic developer and repository discovery feature. Users can now search for a GitHub developer, view their profile, and explore their recently updated public repositories directly within the Synexus Official website. This day strengthened my understanding of **API integration, JSON arrays, asynchronous JavaScript, dynamic DOM rendering, and handling API data states**.
