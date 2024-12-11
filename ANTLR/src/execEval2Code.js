import { Interpreter } from "eval5";

// Create a new interpreter
const firstInterpreter = new Interpreter();

// Run some code in the interpreter's context
firstInterpreter.evaluate(`
    var counter = 0;
    var message = "Hello, Eval5!";
    counter++;
`);

// Log the result of the evaluated code
console.log(firstInterpreter.evaluate("counter")); // 1
console.log(firstInterpreter.evaluate("message")); // "Hello, Eval5!"

// Save the current global state (the context)
const savedState = firstInterpreter.context;
console.log(savedState);
const secondInterpreter = new Interpreter(savedState);
secondInterpreter.evaluate("counter++;");
console.log(secondInterpreter.evaluate("counter")); // 2
