// ==========================================
// WEBSOCKET CONNECTION - DAY 38
// ==========================================

let socket;

// ==========================================
// CREATE WEBSOCKET CONNECTION
// ==========================================

function connectWebSocket() {

    socket = new WebSocket(
        "wss://ws.postman-echo.com/raw"
    );

    // ==========================================
    // CONNECTION OPENED
    // ==========================================

  socket.onopen = function () {

    console.log("✅ WebSocket connection established!");

    const liveFeed =
        document.getElementById("live-feed");

    if (liveFeed) {
        liveFeed.innerHTML += `
            <p class="ws-message">
                🟢 Connected to server
            </p>
        `;
    }

};

    // ==========================================
    // MESSAGE RECEIVED
    // ==========================================

    socket.onmessage = function (event) {

        console.log(
            "📨 Message received:",
            event.data
        );

        const liveFeed =
            document.getElementById("live-feed");

        if (liveFeed) {

            liveFeed.innerHTML += `
                <p class="ws-message">
                    Server: ${event.data}
                </p>
            `;

        }

    };

    // ==========================================
    // ERROR
    // ==========================================

    socket.onerror = function (error) {

        console.error(
            "❌ WebSocket error:",
            error
        );

    };

    // ==========================================
    // CONNECTION CLOSED
    // ==========================================

   socket.onclose = function () {

    console.log("⚠️ WebSocket disconnected.");

    const liveFeed =
        document.getElementById("live-feed");

    if (liveFeed) {
        liveFeed.innerHTML += `
            <p class="ws-message">
                🔴 Disconnected. Reconnecting in 3 seconds...
            </p>
        `;
    }

    setTimeout(function () {
        connectWebSocket();
    }, 3000);

};

}


// ==========================================
// START CONNECTION
// ==========================================

connectWebSocket();


// ==========================================
// SEND LIVE MESSAGE
// ==========================================

export function sendLiveMessage(text) {

    if (
        socket &&
        socket.readyState === WebSocket.OPEN
    ) {

        socket.send(text);

        console.log(
            "📤 Message sent:",
            text
        );

    } else {

        console.warn(
            "⚠️ WebSocket is not connected yet."
        );

    }

}