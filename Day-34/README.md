# Day 34 – Resilient Networks & Exponential Backoff

On **Day 34** of the **50 Days Dev Web Development Challenge**, I focused on improving the reliability of the **Synexus Official** platform by implementing an automatic **network retry system with Exponential Backoff**.

I created a reusable `fetchWithRetry()` utility that automatically retries failed network requests instead of immediately showing an error to the user. Each failed attempt waits for an increasing amount of time before trying again, starting with a **500ms delay**, followed by **1000ms** and **2000ms**.

I also integrated the retry utility into the API module so that network requests can automatically recover from temporary connection failures.

### What I Learned

* Creating reusable async functions for network requests.
* Using `for` loops inside asynchronous functions.
* Handling failed network requests using `try/catch`.
* Retrying failed API requests automatically.
* Using Promises to create asynchronous delays.
* Understanding Exponential Backoff.
* Increasing retry delays using mathematical multiplication.
* Returning successful responses immediately.
* Throwing errors after the final retry attempt.
* Creating reusable network utilities.
* Improving application reliability during temporary network failures.

### Technologies Used

* JavaScript ES8+
* Fetch API
* Async/Await
* Try/Catch
* Promises
* Exponential Backoff
* Network Error Handling
* JavaScript ES Modules
* Vanilla JavaScript

### Outcome

Successfully implemented a **resilient network request system** for the **Synexus Official** platform using automatic retries and **Exponential Backoff**.

When a network request temporarily fails, the application now attempts the request again instead of immediately giving up. The delay between attempts increases progressively, giving the network or server time to recover before the next request.

This day strengthened my understanding of **network reliability, asynchronous JavaScript, error handling, Promises, retry mechanisms and Exponential Backoff**.
