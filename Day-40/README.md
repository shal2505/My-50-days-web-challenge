# Day 40 – Client-Side Databases (IndexedDB)

On **Day 40** of the **50 Days Dev Web Development Challenge**, I focused on implementing **client-side databases using IndexedDB** to store structured data directly in the browser and support **offline-first web applications**.

I created an **IndexedDB database** for the **Synexus Official** platform to prevent user-submitted data from being lost during network outages. Instead of relying completely on the network, the application can now store offline form submissions locally in the browser.

I implemented the **IndexedDB database setup** using `indexedDB.open()` and handled the database schema using the `onupgradeneeded` event. I created an `offline_proposals` object store with an auto-incrementing ID to uniquely identify each stored record.

I also implemented a **Promise-based database module** that allows IndexedDB's event-driven API to work smoothly with `async/await`. A `saveOfflineData()` function stores user payloads using a `readwrite` transaction and the `store.add()` method.

I integrated the database with the application's API layer by checking `navigator.onLine` before making a `POST` request. When the application is offline, the submitted data is stored locally in IndexedDB instead of attempting the network request, preventing data loss.

As a **Bonus Challenge**, I implemented a `getOfflineData()` function using a `readonly` transaction and `store.getAll()` to retrieve all data saved while the application was offline.

### What I Learned

* Understanding how **IndexedDB** works as a client-side database.
* Opening and initializing an IndexedDB database using the `indexedDB` API.
* Understanding **database versioning** and the `onupgradeneeded` event.
* Creating and managing **Object Stores**.
* Using `keyPath` and `autoIncrement` to generate unique record IDs.
* Working with **asynchronous database transactions**.
* Using `readwrite` transactions to store data.
* Using `readonly` transactions to retrieve data.
* Using `store.add()` to save offline data.
* Using `store.getAll()` to retrieve stored records.
* Wrapping IndexedDB event-based operations inside **Promises**.
* Using `async/await` with IndexedDB operations.
* Detecting network availability using `navigator.onLine`.
* Storing user data locally when the network is unavailable.
* Understanding how IndexedDB can prevent data loss during network interruptions.
* Understanding the foundation of **offline data synchronization** in Progressive Web Applications.

### Technologies Used

 HTML5
* CSS3
* JavaScript ES8+
* IndexedDB API
* Promise & Async/Await
* Browser DevTools
* Client-Side Database
* Offline-First Architecture
* Event-Driven Programming
* Progressive Web App Concepts

### Outcome

Successfully implemented a **client-side IndexedDB storage system** for the **Synexus Official** platform with database initialization, object store creation, asynchronous transactions, offline data storage and retrieval.

The application can now store user-submitted data locally when the network is unavailable, providing a more reliable experience during network interruptions.

This day strengthened my understanding of **IndexedDB, client-side databases, asynchronous transactions, offline data persistence, network state handling and offline-first architecture**, building a strong foundation for future **data synchronization and Progressive Web App development**.
