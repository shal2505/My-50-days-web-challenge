// ==========================================
// WEB WORKER - DAY 41
// ==========================================

self.onmessage = function (e) {

    console.log("Worker received:", e.data);

    if (e.data === "START") {

        let result = 0;

        // Heavy CPU-intensive process
        for (let i = 0; i < 100000000; i++) {
            result += i;
        }

        // Send result back to main thread
        self.postMessage(result);
    }
};