# Day 33 – Network Optimization & Client-Side Caching

On **Day 33** of the **50 Days Dev Web Development Challenge**, I focused on improving the performance of the **Synexus Official** platform by implementing **client-side caching** for GitHub API requests.

I created an in-memory cache using the **JavaScript `Map` object** to store previously fetched GitHub user data. Before making a new API request, the application checks whether the requested username already exists in the cache. If the data is available, it is returned immediately instead of making another network request.

I also added a console message to confirm when cached data is being served. This helped me verify that repeated searches for the same GitHub username were using the cached data rather than sending another request to the GitHub API.

### What I Learned

* Creating an in-memory cache using the JavaScript `Map` object.
* Checking cached data before making network requests.
* Using `Map.has()` to check whether data exists in the cache.
* Using `Map.get()` to retrieve cached data.
* Using `Map.set()` to store API responses.
* Reducing unnecessary HTTP requests.
* Understanding the concept of memoization.
* Improving application performance through client-side caching.
* Using console logs to verify caching behavior.
* Understanding how caching can reduce API requests and improve response speed.

### Technologies Used

* JavaScript ES6
* JavaScript `Map`
* Fetch API
* GitHub REST API
* In-Memory Storage
* Memoization
* Client-Side Caching
* Async/Await
* Local JavaScript Modules

### Outcome

Successfully implemented **client-side caching** for the GitHub contributor lookup feature in the **Synexus Official** platform.

When a GitHub username is searched for the first time, the application fetches the data from GitHub and stores it in memory. When the same username is searched again, the application retrieves the saved data from the cache, reducing unnecessary network requests and providing a faster response.

This day strengthened my understanding of **network optimization, API requests, JavaScript `Map`, memoization, asynchronous programming and client-side caching**.
