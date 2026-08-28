# Day 35 – API Security & Authentication (Bearer Tokens)

On **Day 35** of the **50 Days Dev Web Development Challenge**, I focused on improving the security of the **Synexus Official** platform by implementing **API authentication using Bearer Tokens**.

I created a secure request pipeline that retrieves an authentication token from **LocalStorage** and attaches it to API requests through the standard **Authorization header**. This ensures that sensitive operations such as **POST, PUT and DELETE requests** are only attempted when an authentication token is available.

I also implemented a centralized `getAuthHeaders()` utility as the **Bonus Challenge**, allowing the authentication header to be reused across multiple API functions instead of writing the same authorization logic repeatedly.

### What I Learned

* Understanding API authentication and authorization.
* Retrieving authentication tokens from LocalStorage.
* Using Bearer Tokens with the HTTP Authorization header.
* Creating secure API request functions.
* Protecting API operations from unauthorized requests.
* Handling missing authentication tokens.
* Handling `401 Unauthorized` responses.
* Creating reusable authentication utilities.
* Using the JavaScript spread operator to reuse headers.
* Centralizing security logic with `getAuthHeaders()`.
* Working with authenticated POST, PUT and DELETE requests.
* Understanding how authentication credentials are transmitted through HTTP headers.

### Technologies Used

* JavaScript ES8+
* Fetch API
* Async/Await
* HTTP Authorization Headers
* Bearer Tokens
* LocalStorage
* Error Handling
* JavaScript ES Modules
* Spread Operator
* Vanilla JavaScript

### Bonus Challenge

As part of the **Day 35 Bonus Challenge**, I centralized the authentication logic by creating a reusable `getAuthHeaders()` function.

The function retrieves the saved authentication token, verifies that it exists, and returns the required Bearer Token header. This utility is then reused across the **POST, PUT and DELETE** API requests.

This approach avoids duplicating authentication logic and makes the API module easier to maintain and extend.

### Outcome

Successfully implemented an **authenticated API request system** for the **Synexus Official** platform using **Bearer Token authentication**.

The application now checks for an authentication token before performing protected operations and attaches the token using the standard `Authorization: Bearer` format. Missing tokens are rejected immediately, while unauthorized server responses are handled with appropriate error messages.

The centralized authentication utility also makes the security layer reusable across multiple API operations.

This day strengthened my understanding of **API security, authentication, Bearer Tokens, HTTP headers, LocalStorage, authorization, error handling and reusable JavaScript utilities**.
