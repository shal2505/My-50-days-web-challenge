# Day 30 – Completing the Cycle: PUT & DELETE Requests

On **Day 30** of the **50 Days Dev Web Development Challenge**, I completed the core **CRUD (Create, Read, Update, Delete)** cycle for the **Synexus Official** platform. After working with `GET` requests for retrieving data and `POST` requests for creating new proposals, today I learned how to **update existing data using `PUT` requests** and **remove data using `DELETE` requests**.

I extended the **Initiatives SPA** by adding a **"Manage Proposal"** section below the initiative proposal form. This section contains **Update Proposal** and **Delete Proposal** buttons, allowing the application to interact with a specific initiative using its ID.

For the update functionality, I created an asynchronous `updateInitiative(id)` function that uses the **Fetch API** with the `PUT` HTTP method. The request targets a specific JSONPlaceholder resource using its ID and sends updated information through a JSON payload. I used the `Content-Type: application/json` header and `JSON.stringify()` to convert the JavaScript object into a JSON request body.

After receiving the response, the application converts it into JSON and logs the updated object in the browser console. A success message is also displayed in the interface when the update is completed successfully.

For the deletion functionality, I created a `deleteInitiative(id)` function using the `DELETE` HTTP method. Unlike the `PUT` request, the DELETE request does not require a request body or headers. It simply targets the specific resource URL and sends the deletion command to the server.

As a **bonus challenge**, I added a `window.confirm()` confirmation dialog before deleting an initiative. This prevents accidental deletion and ensures that the user explicitly confirms the action before the DELETE request is sent.

### What I Learned

* Understanding the complete **CRUD architecture**.
* Understanding the difference between **GET, POST, PUT, and DELETE**.
* Using the HTTP `PUT` method to update existing resources.
* Using the HTTP `DELETE` method to remove resources.
* Targeting specific API resources using an **ID in the URL**.
* Creating asynchronous functions with `async/await`.
* Configuring Fetch API requests using an **Options Object**.
* Using `Content-Type: application/json` for PUT requests.
* Creating JSON request bodies with `JSON.stringify()`.
* Parsing updated server responses using `.json()`.
* Handling successful PUT responses.
* Handling successful DELETE responses.
* Using `try...catch` for API error handling.
* Connecting JavaScript event listeners to buttons.
* Using hardcoded IDs to test API operations.
* Using `window.confirm()` before destructive operations.
* Providing success and error feedback in the UI.
* Synchronizing UI state with API request results.
* Understanding how PUT and DELETE complete the CRUD workflow.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES8+)
* Fetch API
* HTTP PUT
* HTTP DELETE
* JSON
* Async/Await
* JSON.stringify()
* DOM Manipulation
* Event Listeners
* Try/Catch
* Browser `window.confirm()`
* JSONPlaceholder API
* SPA Routing

### Outcome

Successfully completed the **CRUD cycle** in the **Synexus Official** SPA by adding functionality to **update and delete initiative proposals**.
The **Manage Proposal** section allows users to trigger a PUT request to update an existing initiative and a DELETE request to remove an initiative. The application also provides visual feedback for successful operations and includes a confirmation step before deletion.
This day strengthened my understanding of **HTTP methods, REST API operations, Fetch API configuration, JSON payloads, asynchronous JavaScript, URL endpoint targeting, event handling, error handling, confirmation dialogs, and UI state synchronization**.


