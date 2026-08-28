# Day 38 – Real-Time Bidirectional Data with WebSockets

On **Day 38** of the **50 Days Dev Web Development Challenge**, I focused on implementing **real-time bidirectional communication** using the **WebSocket API**.

I created a live terminal interface for the **Synexus Official** platform that maintains a persistent connection with a WebSocket server. Unlike traditional HTTP requests, WebSockets allow the client and server to communicate continuously without repeatedly refreshing or polling for new data.

I connected the application to the **Postman WebSocket Echo Server** and implemented event-based handling for connection, incoming messages, errors and disconnections.

As a Bonus Challenge,I also implemented **automatic reconnection**.When the WebSocket connection closes, the application waits **3 seconds** and attempts to establish a new connection automatically.This makes the application more resilient to temporary network interruptions.

### What I Learned

* Understanding how WebSockets provide real-time communication.
* Creating persistent connections using the `WebSocket` object.
* Using the `onopen` event to detect successful connections.
* Using the `onmessage` event to receive server data.
* Sending data using `socket.send()`.
* Handling WebSocket errors with `onerror`.
* Handling connection termination with `onclose`.
* Building a live terminal interface for real-time communication.
* Understanding the difference between WebSockets and HTTP polling.
* Implementing automatic reconnection when the connection is lost.

### Technologies Used

* HTML5
* CSS3
* JavaScript ES6+
* WebSocket API
* WSS (WebSocket Secure)
* Event-Driven Programming
* Postman WebSocket Echo Server

### Outcome

Successfully implemented a **real-time WebSocket terminal** for the **Synexus Official** platform with bidirectional communication, connection handling, error handling and automatic reconnection.

This day strengthened my understanding of **real-time networking, persistent connections, event-driven JavaScript and WebSocket communication**.
