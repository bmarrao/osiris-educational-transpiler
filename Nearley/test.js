const nearley = require("nearley");
const grammar = require("./grammar.js");


const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("x = 5");

console.log(parser.results); // Print the parse results

