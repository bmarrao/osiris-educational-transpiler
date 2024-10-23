const nearley = require("nearley");
const grammar = require("./grammar.js"); // Your compiled grammar

// Function to compile the parser
function compile(input) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(input);
    return parser.results;
}

// Function to evaluate the parse results
function evaluate(parseResults) {
    const environment = {}; // Store variable values here

    for (const result of parseResults) {
        // Assuming your results are in the format you provided earlier
        // You'll need to adjust this according to your actual parse structure
        if (Array.isArray(result) && result.length > 0) {
            // Extract the assignment
            const assignment = result[0][0];
            if (assignment && assignment[1]) { // Check if there's an assignment
                const identifier = assignment[0].value; // Get the variable name (e.g., 'x')
                const value = assignment[2][0][0].value; // Get the assigned value (e.g., '5')

                // Store the value in the environment
                environment[identifier] = value;
                console.log(`${identifier} = ${value}`); // Output the result
            }
        }
    }

    return environment; // Return the environment with variable values
}

// Read input from stdin and parse
const input = "x=5";
const results = compile(input);
console.log("RESULTS BEFORE JSON STRINGIFY", results);

// Evaluate the parse results
const environment = evaluate(results);
console.log("Environment after evaluation:", environment);

