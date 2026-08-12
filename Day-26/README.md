# Day 26 – GitHub API Integration & Developer Lookup

On **Day 26** of the **50 Days Dev Web Development Challenge**, I extended the Synexus Official website by integrating the **GitHub REST API** and creating a **Community Contributor Lookup** feature. This feature allows users to enter a GitHub username and retrieve their public GitHub profile information directly within the website.

I used JavaScript's **Fetch API** with `async/await` to send requests to GitHub and process the returned JSON data. The application dynamically creates a profile card containing the contributor's **profile picture, name, username, bio, number of public repositories, and a link to their GitHub profile**.

I also added **input validation, loading messages, error handling, and Enter-key support** to make the lookup feature more user-friendly. The feature was integrated into the existing **SPA routing system**, allowing it to work correctly when the GitHub Lookup page is loaded dynamically.

As a bonus challenge, I added a **loading state** while GitHub data is being fetched and allowed users to press **Enter** to perform the lookup instead of clicking the button.

### What I Learned

* Understanding and using **REST APIs**.
* Integrating the **GitHub API** with a website.
* Using JavaScript `fetch()` for API requests.
* Working with **async/await** and Promises.
* Processing JSON responses from APIs.
* Dynamically creating HTML using JavaScript.
* Handling API errors and invalid usernames.
* Creating loading and error states.
* Using `encodeURIComponent()` for safe URL parameters.
* Handling button clicks and keyboard events.
* Integrating API functionality with an existing SPA router.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* GitHub REST API
* Fetch API
* Async/Await
* JSON
* DOM Manipulation
* History API
* LocalStorage

### Outcome

Successfully implemented a **Community Contributor Lookup** system for Synexus Official. Users can search for any public GitHub username and view their profile information without leaving the website. This day helped me understand how real-world websites communicate with external APIs and strengthened my knowledge of **API integration, asynchronous JavaScript, dynamic DOM manipulation, and error handling**.




