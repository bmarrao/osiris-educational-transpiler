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

    it('should generate JavaScript from Python minus assignment', () => {
        const input = 'x = 5 - 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 - 2;');
    });
    
     it('should generate JavaScript from Python multiplication assignment', () => {
        const input = 'x = 5 * 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 * 2;');
    });

     it('should generate JavaScript from Python division assignment', () => {
        const input = 'x = 5 / 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 / 2;');
    });

     it('should generate JavaScript from Python mod assignment', () => {
        const input = 'x = 5 % 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 % 2;');
    });
    
     it('should generate JavaScript from Python floor division assignment', () => {
        const left = 5 ; 
        const right = 2 ;
        const input = 'x = 5 // 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal(`let x = Math.floor(${left} / ${right});`);
        expect(eval(`Math.floor(${left} / ${right})`)).to.equal(2);
    });


     it('should generate JavaScript from Python + factor and plus assignment', () => {
        const input = 'x = + ( 5 ) % 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = + ( 5 ) % 2;');
    });

    it('should generate JavaScript from Python - factor and minus assignment', () => {
        const input = 'x = - ( 5 ) - 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = - ( 5 ) - 2;');

    });

    it('should generate JavaScript from Python ~ factor and + assignment', () => {
        const input = 'x = ~ ( 5 ) + 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ~ ( 5 ) + 2;');
    });

    it('should generate JavaScript from Python - factor and logical OR assignment', () => {
        const input = 'x = ( 5 or 2 )';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 || 2 );');
    });

    it('should generate JavaScript from Python ~ factor and logical OR assignment', () => {
        const input = 'x = ~ 5 or 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ~ 5 || 2;');
    });
        
    it('should generate JavaScript from Python with multiple ors as true and false', () => {
        const input = 'x = true or false or true';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = true || false || true;');
    });

    it('should generate JavaScript from Python with multiple ors as true and false', () => {
        const input = 'x = (5+2) * 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 + 2 ) * 3;');
    });

    it('should generate JavaScript from Python with multiple ors as true and false', () => {
        const input = 'x = ( 5 + ( 6* 3) )* 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 + ( 6 * 3 ) ) * 3;');
    });

    it('should generate JavaScript from Python - factor and logical AND assignment', () => {
        const input = 'x = ( 5 and 2 )';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 && 2 );');
    });

    it('should generate JavaScript from Python ~ factor and logical AND assignment', () => {
        const input = 'x = ~ 5 and 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ~ 5 && 2;');
    });

    it('should generate JavaScript from Python with multiple ands as true and false', () => {
        const input = 'x = true and false and true';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = true && false && true;');
    });

    it('should handle complex logical expressions', () => {
        const input = 'x = not (True and False)';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ! ( true && false );');
    });

    it('should generate JavaScript for bitwise OR between two numbers', () => {
        const input = 'x = 5 | 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 | 3;');
    });

    it('should generate JavaScript for bitwise OR between two variables', () => {
        const input = 'x = y | b';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = y | b;');
    });

    it('should generate JavaScript for complex bitwise OR operation', () => {
        const input = 'x = (5 | 3) | (8 | 2)';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 | 3 ) | ( 8 | 2 );');
    });

    it('should generate JavaScript for bitwise XOR between two numbers', () => {
        const input = 'x = 5 ^ 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 ^ 3;');
 //       expect(eval(outputCode)).to.equal(6); // 5 (101) ^ 3 (011) = 6 (110)
    });

    it('should generate JavaScript for nested XOR operations', () => {
        const input = 'x = ( 5 ^ 3 )  ^ 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 ^ 3 ) ^ 2;');
   //     expect(eval(outputCode)).to.equal(4); // Result of the nested XOR operations
    });

    it('should generate JavaScript for XOR between variables', () => {
        const input = 'x = a ^ b';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = a ^ b;');
    });

    it('should generate JavaScript for bitwise AND between two numbers', () => {
        const input = 'x = 5 & 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 & 3;');
      //  expect(eval(outputCode)).to.equal(1); // 5 (101) & 3 (011) = 1 (001)
    });

    it('should generate JavaScript for nested AND operations', () => {
        const input = 'x = (5 & 3) & 1';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 & 3 ) & 1;');
      //  expect(eval(outputCode)).to.equal(1); // Result of the nested AND operations
    });

    it('should generate JavaScript for AND between variables', () => {
        const input = 'x = a & b';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = a & b;');
    });


    it('should generate JavaScript for left shift', () => {
        const input = 'x = 5 << 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 5 << 2;');
    //    expect(eval(outputCode)).to.equal(20); // 5 (101) << 2 = 20 (10100)
    });

    it('should generate JavaScript for right shift', () => {
        const input = 'x = 16 >> 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = 16 >> 2;');
  //      expect(eval(outputCode)).to.equal(4); // 16 (10000) >> 2 = 4 (100)
    });

    it('should generate JavaScript for combined shift expressions', () => {
        const input = 'x = (5 << 2) >> 1';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = ( 5 << 2 ) >> 1;');
//        expect(eval(outputCode)).to.equal(10); // (5 << 2) = 20, then 20 >> 1 = 10
    });

    it('should generate JavaScript from Python power expression using Math.pow()', () => {
        const input = 'x = 2 ** 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = Math.pow(2,3);');
    });

    it('should generate JavaScript from Python power with parentheses using Math.pow()', () => {
        const input = 'x = (2 + 3) ** 2';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = Math.pow(( 2 + 3 ),2);');
    });

    it('should generate JavaScript from Python power with complex base using Math.pow()', () => {
        const input = 'x = (5 - 2) ** (3 + 1)';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = Math.pow(( 5 - 2 ),( 3 + 1 ));');
    });

    it('should generate JavaScript from nested Python power expression using Math.pow()', () => {
        const input = 'x = (5 ** 2) ** 3';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        expect(outputCode).to.equal('let x = Math.pow(( Math.pow(5,2) ),3);');
    });

     it('should generate JavaScript from Python if statement', () => {
        const input = 'if true:\n    x = 5';
        const tree = parsePython(input);
        const outputCode = codeGenerator.visit(tree);
        console.log(outputCode)
        expect(outputCode).to.equal('if (x > 0) {\n    let x = 5;\n}');
    });
});
/*
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
});
*/
