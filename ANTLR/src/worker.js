// worker.js
self.onmessage = function(event) {
    const { counter } = event.data;
    postMessage(counter + 1);  // Increment the counter and send it back to the main thread
};

