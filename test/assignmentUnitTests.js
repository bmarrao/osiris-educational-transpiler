import { expect } from 'chai';
import antlr4 from 'antlr4';
import PythonParser from '../PythonParser.js'; // Adjust the path as necessary
import PythonLexer from '../PythonLexer.js'; // Adjust the path as necessary
import JSCodeGenerator from '../JSCodeGenerator.js'; // Adjust the path


function parse(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new PythonLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new PythonParser(tokens);
    return parser.file_input(); // Adjust this to your start rule
}

describe('JSCodeGenerator', () => {
    let codeGenerator;

    beforeEach(() => {
        codeGenerator = new JSCodeGenerator({});
    });

    it('should generate JavaScript for simple assignment', () => {
        const input = 'x = 5';
        const tree = parse(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5;');
    });

    it('should generate JavaScript for sum assignment', () => {
        const input = 'x = 5 + 2';
        const tree = parse(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 + 2;');
    });


});
