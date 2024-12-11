// Create a new Web Worker
const worker = new Worker('worker.js');

// Initialize state
worker.postMessage({
    type: 'init',
    code: `
        var counter = 0;
        var message = "Hello, Web Worker!";
        counter++;
    `
});

// Log the initial state
worker.onmessage = (event) => {
    if (event.data.type === 'state') {
        console.log(event.data.state); // Logs the state
    }

    if (event.data.type === 'result') {
        console.log('Result:', event.data.result);
    }
};

// Perform additional operations
setTimeout(() => {
    worker.postMessage({
        type: 'evaluate',
        code: 'counter++;'
    });
}, 1000);

// Terminate the worker after operations
setTimeout(() => {
    worker.terminate();
    console.log('Worker terminated.');
}, 3000);

