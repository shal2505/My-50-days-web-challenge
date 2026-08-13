# Day 29 – POST Request, JSON Payload & Initiative Proposal Form

On **Day 29** of the **50 Days Dev Web Development Challenge**, I extended the **Synexus Official** platform by creating a **"Propose an Initiative"** form that allows community members to submit their own technical initiative ideas. Unlike previous tasks where the application mainly consumed data using `GET` requests, today I learned how to **send user-generated data to a server using an HTTP `POST` request**.

I created a new proposal form containing inputs for an **initiative title** and **description**. I attached a `submit` event listener to the form and used `e.preventDefault()` to prevent the browser from refreshing the page when the form is submitted.

I then constructed a JavaScript object containing the submitted initiative data and used the **Fetch API** with an Options Object to send it to the **JSONPlaceholder API**. The request uses `method: 'POST'`, the appropriate `Content-Type` header, and `JSON.stringify()` to serialize the JavaScript object into a JSON payload.

After sending the request, the application waits for the server response using **Async/Await**, converts the response into JSON, and checks for the **`201 Created`** status. When the request is successful, a confirmation message is displayed and the form is automatically reset.

As a **bonus challenge**, I implemented a submission-state system that disables the submit button immediately after submission and changes its text to **"Submitting..."**. The button is re-enabled inside the `finally` block after the network request finishes, preventing users from accidentally sending multiple duplicate proposals while the request is processing.

### What I Learned

* Understanding the difference between **GET and POST requests**.
* Creating and handling HTML form submissions with JavaScript.
* Using `e.preventDefault()` to control form submission behavior.
* Creating JavaScript objects from user input.
* Using the **Fetch API Options Object**.
* Sending data using the HTTP `POST` method.
* Setting HTTP headers using `Content-Type`.
* Understanding `application/json`.
* Converting JavaScript objects into JSON using `JSON.stringify()`.
* Sending JSON data through the `body` property of `fetch()`.
* Using `async/await` for asynchronous network requests.
* Parsing server responses using `.json()`.
* Handling the **201 Created** HTTP status.
* Providing success and error feedback to users.
* Using `try...catch...finally` for reliable request handling.
* Disabling buttons while network requests are in progress.
* Preventing duplicate form submissions.
* Resetting the form after a successful request.
* Understanding how client-side data is transmitted to an external server.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES8+)
* Fetch API
* HTTP POST
* JSON
* Async/Await
* HTTP Headers
* JSON.stringify()
* DOM Manipulation
* Form Handling
* Try/Catch/Finally
* JSONPlaceholder API
* SPA Routing

### Outcome

Successfully added a **Propose an Initiative** feature to the **Synexus Official** website. Users can now enter an initiative title and description and submit the proposal through a **POST request** to an external server.

The application provides clear feedback when the server successfully creates the proposal and prevents accidental duplicate submissions while the request is processing.

This day strengthened my understanding of **HTTP POST requests, JSON serialization, Fetch API configuration, HTTP headers, asynchronous JavaScript, form handling, server responses, error handling, and preventing duplicate network requests**.
