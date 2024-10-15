import { expect } from 'chai';
import antlr4 from 'antlr4';
import PythonParser from '../Python/PythonParser.js'; // Adjust the path as necessary
import PythonLexer from '../Python/PythonLexer.js'; // Adjust the path as necessary
import PythonCodeGenerator from '../transpilerPythonJs.js'; // Adjust the path
import RustParser from '../rust/RustParser.js'; // Adjust the path as necessary
import RustLexer from '../rust/RustLexer.js'; // Adjust the path as necessary
import RustCodeGenerator from '../transpilerRustJs.js'; // Adjust the path



function parsePython(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new PythonLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PythonParser(tokens);
    return parser.file_input(); // Adjust this to your start rule
}

function parseRust(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new RustLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new RustParser(tokens);
    return parser.file_input(); // Adjust this to your start rule
}


describe('Python', () => {
    let codeGenerator;

    beforeEach(() => {
        codeGenerator = new PythonCodeGenerator({});
    });

    it('should generate JavaScript from Python for simple assignment', () => {
        const input = 'x = 5';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5;');
    });

    it('should generate JavaScript from Python sum assignment', () => {
        const input = 'x = 5 + 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 + 2;');
    });


});
describe('Rust', () => {
    let codeGenerator;

    beforeEach(() => {
        codeGenerator = new RustCodeGenerator({});
    });

    it('should generate JavaScript from Rust for simple assignment', () => {
        const input = 'x = 5';
        const tree = parseRust(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5;');
    });

    it('should generate JavaScript from Rust sum assignment', () => {
        const input = 'x = 5 + 2';
        const tree = parseRust(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 + 2;');
    });



