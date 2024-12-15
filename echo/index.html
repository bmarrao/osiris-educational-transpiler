<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Worker Terminal</title>
    <style>
        /* Basic styles for the terminal */
        #terminal {
            background-color: #1e1e1e;
            color: #00ff00;
            font-family: monospace;
            padding: 10px;
            height: 300px;
            overflow-y: scroll;
            white-space: pre-wrap;
            margin-bottom: 10px;
        }
        #inputArea {
            width: 100%;
            padding: 5px;
            font-family: monospace;
            background-color: #333;
            color: white;
            border: 1px solid #666;
        }
    </style>
</head>
<body>
    <h1>Web Worker Terminal</h1>
    <div id="terminal"></div>
    <input type="text" id="inputArea" placeholder="Type your input here...">
    
    <script>
        
        const worker = new Worker('worker2.js', { type: 'module' });

        // Get the terminal and input elements
        const terminal = document.getElementById('terminal');
        const inputArea = document.getElementById('inputArea');
        // Append messages to the terminal
        function appendToTerminal(message) {
            terminal.textContent += message + '\n';
            terminal.scrollTop = terminal.scrollHeight;  // Scroll to the bottom
        }
        // Receive messages from the worker
        worker.onmessage = function(event) {
            const data = event.data;
            appendToTerminal(data);
            if (data === "Execution started") {
                enableInput(); // Allow user to input something when worker asks
            }
        };
        console.log(worker.onmessage)
        // Enable input and focus the input field
        function enableInput() {
            inputArea.disabled = false;  // Enable input field
            inputArea.focus();
        }
        // Send the input to the worker
        inputArea.addEventListener('keydown', function(event) {
            if (event.key === "Enter" && inputArea.value.trim() !== "") {
                const userInput = inputArea.value.trim();
                inputArea.value = ""; // Clear the input field
                // Disable input field while waiting for response
                inputArea.disabled = true; 
                // Send input to the worker
                worker.postMessage({ type: "input", input: parseInt(userInput) });
            }
        });
        // Start the worker execution
        worker.postMessage({ type: "start" });
    </script>
</body>
</html>
