import antlr4 from 'antlr4';
import PythonParser from './Python/PythonParser.js';
import PythonLexer from './Python/PythonLexer.js';
import PythonCodeGenerator from './transpilerPythonJs.js';

function parsePython(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new PythonLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PythonParser(tokens);
    return parser.file_input();
}

export function translatePython(input) {
    try {
        const codeGenerator = new PythonCodeGenerator({});
        const tree = parsePython(input);  // Attempt to parse the input
        return codeGenerator.visit(tree); // Generate code from the parse tree
    } catch (error) {
        // Handle the error and provide feedback
        return `Error: ${error.message}`;  // Return the error message or handle as needed
    } 
}
// Add a default export as well for flexibility
export default {
    translatePython
};
