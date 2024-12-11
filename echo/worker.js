let counter = 0;

self.onmessage = async function (event) {
    const { type, input } = event.data;

    if (type === "start") {
        postMessage("Execution started");

        // Pause execution to wait for input
        let userInput = await waitForInput();
        postMessage(`Received input: ${userInput}`);

        // Continue execution after input
        counter += userInput;
        postMessage(`Counter updated to ${counter}`);
        // Continue asking for input as needed
        while (true) {
            postMessage("Waiting for input")
            userInput = await waitForInput();
            counter += userInput;
            postMessage(`Counter updated to ${counter}`);
        }
    }
};

// Utility to wait for input from the main thread
function waitForInput() {
    return new Promise((resolve) => {
        self.onmessage = (event) => {
            if (event.data.type === "input") {
                resolve(event.data.input);
            }
        };
    });
}
