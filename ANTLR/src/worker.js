let counter = 0;

self.onmessage = function (event) {
    const { type, value } = event.data;

    if (type === "init") {
        counter = value || 0; // Initialize counter with provided value or default to 0
        postMessage(`Counter initialized to ${counter}`);
    } else if (type === "increment") {
        counter += 1; // Increment the counter
        postMessage(`Counter incremented to ${counter}`);
    } else {
        postMessage("Unknown message type");
    }
};
