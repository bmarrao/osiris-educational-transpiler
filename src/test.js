import PythonTranspiler from './dist/bundle.js';
import antlr4 from 'antlr4';
import PythonParser from './Python/PythonParser.js'; // Adjust the path as necessary
import PythonLexer from './Python/PythonLexer.js'; // Adjust the path as necessary

const input = `
try:
    # some code
except ValueError as e:
    error = e
`;
const inputStream = new antlr4.InputStream(input);
const lexer = new PythonLexer(inputStream);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonParser(tokens);

    // Enable tracing to see rule enter/exit events
parser.addParseListener({
        enterEveryRule(ctx) {
            console.log(`Enter Rule: ${ctx.constructor.name}`);
        },
        exitEveryRule(ctx) {
            console.log(`Exit Rule: ${ctx.constructor.name}`);
        }
    });

const pythonTranspiler = new PythonTranspiler();




console.log(pythonTranspiler.translatePython(input))
