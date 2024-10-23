const parser = require('./parser.js'); // Adjust the path as necessary

// Input to parse
const inputString = 'x = 5'; // Example input

// Parse the input string
try {
    const result = parser.parse(inputString);
    console.log("Parsing Result:", result);
} catch (e) {
    console.error("Parsing error:", e.message);
}

