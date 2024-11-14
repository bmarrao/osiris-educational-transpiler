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
    const codeGenerator = new PythonCodeGenerator({});
    const tree = parsePython(input);
    return codeGenerator.visit(tree);
}
let input = "if x > 0:\n    x= 5"
console.log("TRANSLATED PYTHON\n" + translatePython(input));
