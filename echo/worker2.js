let counter = 0;

// Main event listener for "start"
async function handleStart() {

        postMessage("Execution started");

        // Pause execution to wait for input
        let userInput = await waitForInput();
        postMessage(`Received input: ${userInput}`);

        // Continue execution after input
        counter += userInput;
        postMessage(`Counter updated to ${counter}`);
        // Continue asking for input as needed
        while (true) {
            postMessage("Execution started");
            userInput = await waitForInput();
            counter += userInput;
            postMessage(`Counter updated to ${counter}`);
        }
};

// Utility to wait for input from the main thread
async function waitForInput() {
    return new Promise((resolve) => {
        const inputListener = (event) => {
            if (event.data.type === "input") {
                resolve(event.data.input);
                // Remove the listener to avoid multiple triggers
                self.removeEventListener("message", inputListener);
            }
        };

        self.addEventListener("message", inputListener);
    });
}

await handleStart()
