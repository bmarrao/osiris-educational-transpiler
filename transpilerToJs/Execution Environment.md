While investigating what a client would need from this package, I encountered a problem: after transpiling the code, how would the browser run it? I explored the following solutions and, in the end, chose one of them for a specific reason. What is needed is something in which I can pause the execution to get/send IO from a terminal on the virtual learning environment and keep the state and continue the execution from that exact point . Another thing is it running on a sandboxed environment

---
- **Eval** - built-in JavaScript function that executes a string of code as if it were part of the script.
	- Pros :
		- Executes code dynamically at runtime.
		- No need for additional setup; part of the JavaScript language.
	- Cons: 
		- **Sandboxing:** Does not provide any sandboxing; executed code has full access to the global scope.
		- **Timeout on Execution:** No built-in way to enforce timeouts. Long-running or infinite loops will block the main thread, freezing the entire page.
		- **Security Risks:** Prone to code injection attacks.
		- **Input/Output (I/O):** Would not be able to stop the execution to get IO then come back from the same point ,
		- 
- **Web Workers** - browser API that lets you run JavaScript in a separate thread from the main UI thread.
	- Pros: 
		- Runs code in a separate thread, avoiding main thread blocking.
		- Doesn’t share scope with the main thread.
		- **Timeout on Execution:** Custom timeouts can be implemented by terminating the worker. Long loops do not freeze the page, as execution is isolated in a worker
		- **Sandboxing:** Provides some level of isolation as it runs in a separate thread with no direct access to the DOM.
	- Cons:
		- No direct access to the DOM, limiting use cases.
		- Requires extra setup for communication between the worker and main thread.
		- Limited by browser support and constraints on shared memory.
- **Custom JavaScript Interpreter (js-lang)** - tool designed to parse and execute JavaScript code manually. It often implements its own execution engine, allowing you to control how JavaScript	
	- Pros:
		- 
		  
