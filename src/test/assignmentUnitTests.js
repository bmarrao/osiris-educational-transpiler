import { expect } from 'chai';
import antlr4 from 'antlr4';
import PythonParser from '../Python/PythonParser.js'; // Adjust the path as necessary
import PythonLexer from '../Python/PythonLexer.js'; // Adjust the path as necessary
import PythonCodeGenerator from '../transpilerPythonJs.js'; // Adjust the path
import RustParser from '../rust/RustParser.js'; // Adjust the path as necessary
import RustLexer from '../rust/RustLexer.js'; // Adjust the path as necessary
import RustCodeGenerator from '../transpilerRustJs.js'; // Adjust the path
import PythonTranspiler from '../index.js';


function parsePython(input) {
    const pythonTranspiler = new PythonTranspiler();
    let result = pythonTranspiler.translatePython(input) 
    if (result.success)
    {
      return result.code
    }
    else 
    {
      return result.errors[0]
    }

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
// TODO: DESCRIBE POR REGRA DA GRAMATICA
// TODO: TEST WITH EXPRESSIONS CONTEXT, DIFERENTES PRIORIDADES
// TODO: 1 > x >= 5 != 1 > x && x >= 5  teste
// TODO: TESTAR REGRAS EM SI SÓ NÂO SEMPRE COM ATRIBUIÇÕES
// TODO : CONCATENAÇÃO DE STRING
    beforeEach(() => {
        codeGenerator = new PythonCodeGenerator({});
    });

    describe('if statement', () => {
      it('should generate correct JavaScript for a simple if statement', () => {
        let input = "if x > 0:\n\tx= 5"
        
        const outputCode = parsePython(input);
        console.log(outputCode);
        expect(outputCode).to.equal(`if (x > 0) {\n\t\tlet x = 5;\n}`);
      });

      it('should generate correct JavaScript for an if-elif-else statement', () => {
        const input = `if x > 0:\n\tx = 5\nelif x < 0:\n\ty = 6\nelse:\n\ty += 6`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`if (x > 0) {\n\t\tlet x = 5;\n}else if (x < 0) {\n\t\tlet y = 6;\n}else {\n\t\tlet y += 6;\n}`);
      });
/*
      it('should generate correct JavaScript for a nested if statement', () => {
        const input = `
          if x > 0:
              if y > 0:
                  print('both positive')
              else:
                  print('x positive, y non-positive')
          else:
              print('x non-positive')
          `;
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`if (x > 0) {\n    if (y > 0) {\n        console.log('both positive');\n    } else {\n        console.log('x positive, y non-positive');\n    }\n} else {\n    console.log('x non-positive');\n}`);
      });
      */
    });
    describe('Python to JavaScript translation: for statement', () => {
      it('should generate correct JavaScript for a simple for loop', () => {
        const input = `for item in items:\n\tprint(item)`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`for (const item of items) {\n\t\tconsole.log(item);\n}`);
      });

      it('should throw an error for async for loops', () => {
        const input = `async for item in items:\n\tprint(item)`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal("Translation error: Async for-loops are not supported in JavaScript.");
      });

      it('should throw an error for a for loop with an else block', () => {
        const input = `for item in items:\n\tprint(item)\nelse:\n\tprint("Done")`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal("Translation error: Else blocks in for-loops are not supported in JavaScript.");
      });

      it('should handle a for loop with step increments in the range', () => {
        const input = `for i in range(0, 10, 2):\n\tprint(i)`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`for (let i = 0; i < 10; i += 2) {\n\t\tconsole.log(i);\n}`);
      });

      it('should handle a for loop with negative step increments in the range', () => {
        const input = `for i in range(10, 0, -2):\n\tprint(i)`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`for (let i = 10; i > 0; i -= 2) {\n\t\tconsole.log(i);\n}`);
      });

      it('should handle a for loop with multiple statements in the body', () => {
        const input = `for item in items:\n\tprint(item)\n\tcount += 1`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`for (const item of items) {\n\t\tconsole.log(item);\n\t\tcount += 1;\n}`);
      });

      it('should handle nested for loops', () => {
        const input = `for i in range(3):\n\tfor j in range(2):\n\t\tprint(i, j)`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(
          `for (const i of range(3)) {\n\t\tfor (const j of range(2)) {\n\t\t\tconsole.log(i, j);\n\t\t}\n\t}`
        );
      });

      it('should handle an empty for loop', () => {
        const input = `for item in items:\n\tpass`;
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`for (const item of items) {\n\t\t/* pass */\n}`);
      });
  });

    
  describe('Python to JavaScript translation: while statement', () => {

    it('should generate correct JavaScript for a simple while loop', () => {
      const input = `while x < 10:\n\ty = 1`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`while (x < 10) {\n\t\tlet y = 1;\n}`);
    });

    it('should generate correct JavaScript for a while loop with an else block', () => {
      const input = `while x < 10:\n\tx = 1\nelse:\n\tx = 0`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`Error during translation: Translation error: Else after while block is unsupported `);
    });

    it('should handle a while loop with multiple statements in the body', () => {
      const input = `while x < 10:\n\tx = 1\n\ty = 1`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`while (x < 10) {\n\t\tlet x = 1;\n\t\tlet y = 1;\n}`);
    });

    it('should handle a while loop with multiple statements in the else block', () => {
      const input = `while x < 10:\n\tx += 1\nelse:\n\tx = 0\n\ty = 1`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`Error during translation: Translation error: Else after while block is unsupported `);
    });

   });

  describe('except statement', () => {

    it('should generate correct JavaScript for an except block with a specific exception type', () => {
      const input = `try:\n\tx=5\nexcept ValueError as e:\n\terror = e`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`Error during translation: Translation error: Unsupported exception type 'ValueError'`);
    });

    it('should generate correct JavaScript for a general except block', () => {
      const input = `try:\n\tx=5\nexcept Exception:\n\terror = "General error occurred"`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`try {\n\t\tlet x = 5;\n}\ncatch (e) {\n\t\terror = "General error occurred";\n}`);
    });

    it('should throw an error for unsupported exception types', () => {
      const input = `try:\n\tx=5\nexcept ValueError as err:\n\terror = err`;
      expect(() => parsePython(input)).to.throw("Translation error: Unsupported exception type 'ValueError'");
    });

  });

  describe('finally block', () => {

    it('should generate correct JavaScript for a simple finally block', () => {
      const input = `try:\n\tx=5\nfinally:\n\tcleanup = true`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`try {\n\t\tlet x = 5;\n}\nfinally {\n\t\tlet cleanup = true;\n}`);
    });

    it('should generate correct JavaScript for a finally block with multiple statements', () => {
      const input = `try:\n\tx=5\nfinally:\n\tcleanup1 = true\n\tcleanup2 = false`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`try {\n\t\tlet x = 5;\n}\nfinally {\n\t\tlet cleanup1 = true;\n\t\tlet cleanup2 = false;\n}`);
    });

  });

  describe('try statement', () => {

    it('should generate correct JavaScript for a try statement with except and finally', () => {
      const input = `try:\n\tx=5\nexcept Exception as e:\n\terror = e\nfinally:\n\tcleanup = true`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`try {\n\t\tlet x = 5;\n}\ncatch (e) {\n\t\tlet error = e;\n}\nfinally {\n\t\tlet cleanup = true;\n}`);
    });

    it('should generate correct JavaScript for a try statement with except* and finally', () => {
      const input = `try:\n\tx=5\nexcept *Exception as e:\n\terror = "General error"\nfinally:\n\tcleanup = true`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`try {\n\t\tlet x = 5;\n}\ncatch (e) {\n\t\tlet error = "General error";\n}\nfinally {\n\t\tlet cleanup = true;\n}`);
    });

    it('should generate correct JavaScript for a try statement with else and finally', () => {
      const input = `try:\n\tx=5\nexcept Exception:\n\terror = "Error"\nelse:\n\tsuccess = true\nfinally:\n\tcleanup = true`;
      const outputCode = parsePython(input);
      expect(outputCode).to.equal(`try {\n\t\tlet x = 5;\n}\ncatch (e) {\n\t\tlet error = "Error";\n}\nelse {\n\t\tlet success = true;\n} finally {\n\t\tlet cleanup = true;\n}`);
    });

  });

    /*
    describe('block', () => {
      it('should generate correct JavaScript for a block with a single statement', () => {
        const input = `
          if x > 0:
              print('positive')
          `;
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`if (x > 0) {\n    console.log('positive');\n}`);
      });

      it('should generate correct JavaScript for a block with multiple statements', () => {
        const input = `
          if x > 0:
              print('positive')
              x = x - 1
              print('decremented x')
          `;
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`if (x > 0) {\n    console.log('positive');\n    x = x - 1;\n    console.log('decremented x');\n}`);
      });

      it('should generate correct JavaScript for a block with a compound statement', () => {
        const input = `
          if x > 0:
              while x > 0:
                  print('positive')
                  x = x - 1
          `;
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`if (x > 0) {\n    while (x > 0) {\n        console.log('positive');\n        x = x - 1;\n    }\n}`);
      });
    });
    */
    describe('bitwise_or', () => {
      it('should generate JavaScript for bitwise OR between two numbers', () => {
        const input = '5 | 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 | 3');
      });

      it('should generate JavaScript for bitwise OR between two variables', () => {
        const input = 'y | b';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('y | b');
      });

      it('should generate JavaScript for complex bitwise OR operation', () => {
        const input = '(5 | 3) | (8 | 2)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('( 5 | 3 ) | ( 8 | 2 )');
      });
    });
    
    describe('comparison', () => {
      it('should generate JavaScript for a simple comparison between two operands', () => {
          const input = 'a == b';
          
          const outputCode = parsePython(input);
          expect(outputCode).to.equal('a == b');
      });

      it('should generate JavaScript for a comparison with multiple operands', () => {
          const input = 'a == b != c';
          
          const outputCode = parsePython(input);
          expect(outputCode).to.equal('a == b != c');
      });

      it('should generate JavaScript for comparisons with different operators', () => {
          const input = 'a <= b > c';
          
          const outputCode = parsePython(input);
          expect(outputCode).to.equal('a <= b > c');
      });

      it('should generate JavaScript for complex comparisons with multiple operators', () => {
          const input = 'a == b != c <= d';
          
          const outputCode = parsePython(input);
          expect(outputCode).to.equal('a == b != c <= d');
      });

      it('should generate JavaScript for nested comparisons', () => {
          const input = '( a == b ) != ( c <= d )';
          
          const outputCode = parsePython(input);
          expect(outputCode).to.equal('( a == b ) != ( c <= d )');
      });
  });
    

    describe('bitwise_xor', () => {
      it('should generate JavaScript for bitwise XOR between two numbers', () => {
        const input = '5 ^ 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 ^ 3');
      });

      it('should generate JavaScript for nested XOR operations', () => {
        const input = '(5 ^ 3) ^ 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('( 5 ^ 3 ) ^ 2');
      });

      it('should generate JavaScript for XOR between variables', () => {
        const input = 'a ^ b';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('a ^ b');
      });
    });

    describe('bitwise_and', () => {
      it('should generate JavaScript for bitwise AND between two numbers', () => {
        const input = '5 & 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 & 3');
      });

      it('should generate JavaScript for nested AND operations', () => {
        const input = '(5 & 3) & 1';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('( 5 & 3 ) & 1');
      });

      it('should generate JavaScript for AND between variables', () => {
        const input = 'a & b';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('a & b');
      });
    });

    describe('shift_expr', () => {
      it('should generate JavaScript for left shift', () => {
        const input = '5 << 1';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 << 1');
      });

      it('should generate JavaScript for right shift', () => {
        const input = '5 >> 1';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 >> 1');
      });
    });

    describe('sum', () => {
      it('should generate JavaScript for addition', () => {
        const input = '5 + 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 + 2');
      });

      it('should generate JavaScript for subtraction', () => {
        const input = '5 - 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 - 2');
      });
    });

    
    describe('nonlocal', () => {
      it('should generate javascript for non local assignment', () => {
        const input = 'nonlocal x\nx = 7'
        const outputcode = parsePython(input);
        expect(outputcode).to.equal('let x = 7;');
      });
    });

    describe('global', () => {
      it('should generate javascript for global', () => {
        const input = 'global x\nx = 7'
        const outputcode = parsePython(input);
        expect(outputcode).to.equal('let x = 7;');
      });
    });

    describe('term', () => {
      it('should generate JavaScript for multiplication', () => {
        const input = '5 * 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 * 2');
      });

      it('should generate JavaScript for division', () => {
        const input = '5 / 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 / 2');
      });

      it('should generate JavaScript for floor division', () => {
        const input = '5 // 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('Math.floor(5 / 2)');
      });

      it('should generate JavaScript for modulus', () => {
        const input = '5 % 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5 % 2');
      });
    });

    describe('factor', () => {
      it('should generate JavaScript for unary plus', () => {
        const input = '+ ( 5 )';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('+ ( 5 )');
      });

      it('should generate JavaScript for unary minus', () => {
        const input = '- ( 5 )';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('- ( 5 )');
      });

      it('should generate JavaScript for bitwise NOT', () => {
        const input = '~ ( 5 )';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('~ ( 5 )');
      });
    });

    describe('power', () => {
      it('should generate JavaScript for exponentiation', () => {
        const input = '5 ** 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('Math.pow(5,2)');
      });

    });

    describe('atom' , () => {
       it('should generate integer number', () => {
        const input = '5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5');
      });
       it('should generate float number', () => {
        const input = '5.5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('5.5');
      });
        
     it('should generate true boolean', () => {
        const input = 'True';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('true');
      });

     it('should generate false boolean', () => {
        const input = 'False';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('false');
      });

     it('should generate None', () => {
        const input = 'None';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('null');
      });

     it('should generate string', () => {
        const input = "'Hello'";
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal("'Hello'"); // Convert single quotes to double quotes
      });

     it('should generate tuple', () => {
        const input = '(1, 2, 3)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('(1,2,3)');
      });

     it('should generate list', () => {
        const input = '[1, 2, 3]';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('[1,2,3]');
      });
     it('should generate dictionary', () => {
        const input = '{ "key": "value", "number": 1 }';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('{"key":"value","number":1}');
      });

     it('should generate set', () => {
        const input = '{1, 2, 3}';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('new Set([1,2,3])'); // JavaScript representation of a set
      });

     it('should generate ellipsis', () => {
        const input = '...';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('...'); // Ellipsis in Python often translates to undefined in JS
      });

    }); 

    describe('return', () => {
      it('should generate JavaScript from Python return with expression', () => {
        const input = 'return x + 1';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('return x + 1;');
      });

      it('should generate JavaScript from Python return without expression', () => {
        const input = 'return';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('return;');
      });

      it('should generate JavaScript from Python return with multiple expressions', () => {
        const input = 'return x, y';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('return [x, y];');
      });

      it('should generate JavaScript from Python return with a function call', () => {
        const input = 'return foo(5)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('return foo(5);');
      });

      it('should generate JavaScript from Python return with a unary operator', () => {
        const input = 'return -x';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('return - x;');
      });

      it('should generate JavaScript from Python return with a binary expression', () => {
        const input = 'return x * y';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('return x * y;');
      });

    });

    describe('assignment', () => {

      it('should generate JavaScript from Python tuple assignment', () => {
        const input = '(a, b) = (1, 2)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let a = 1, b = 2;');
      });

      // TODO ADD MORE TEST CASES FOR F STRING 
      it('should generate JavaScript from Python f-string', () => {
          const input = 'x = f"teste {value}"';
          
          const outputCode = parsePython(input);
          expect(outputCode).to.equal('let x = `teste ${ value }`;');
      });


      // Test subscript assignment (list or dictionary-like assignment)
      it('should generate JavaScript from Python subscript assignment', () => {
        const input = 'my_list[0] = 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let my_list[0] = 5;');
      });

      // Test assignment with multiple star targets
      it('should generate JavaScript from Python star target assignment', () => {
        const input = '*a, *b = (1, 2, 3, 4)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let ...a = 1, ...b = 2, 3, 4;');
      });

      it('should generate JavaScript from Python star target assignment', () => {
        const input = 'a = 5; a,b  = 2,3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let ...a = 1, ...b = 2, 3, 4;');
      });
      // Test augmented assignment (e.g., +=)
      it('should generate JavaScript from Python augmented assignment (+=)', () => {
        const input = 'x += 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x += 5;');
      });
      it('should generate JavaScript from Python augmented assignment (+=) repeated', () => {
        const input = 'x += 5\nx+=6';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x += 5;\nx += 6;');
      });
      // Test augmented assignment (e.g., -=)
      it('should generate JavaScript from Python augmented assignment (-=)', () => {
        const input = 'x -= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x -= 5;');
      });

      // Test augmented assignment (e.g., *=)
      it('should generate JavaScript from Python augmented assignment (*=)', () => {
        const input = 'x *= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x *= 5;');
      });

      // Test augmented assignment (e.g., /=)
      it('should generate JavaScript from Python augmented assignment (/=)', () => {
        const input = 'x /= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x /= 5;');
      });

      // Test augmented assignment (e.g., %=)
      it('should generate JavaScript from Python augmented assignment (%=)', () => {
        const input = 'x %= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x %= 5;');
      });

      // Test augmented assignment (e.g., |=)
      it('should generate JavaScript from Python augmented assignment (|=)', () => {
        const input = 'x |= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x |= 5;');
      });

      // Test augmented assignment (e.g., &=)
      it('should generate JavaScript from Python augmented assignment (&=)', () => {
        const input = 'x &= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x &= 5;');
      });

      // Test augmented assignment (e.g., ^=)
      it('should generate JavaScript from Python augmented assignment (^=)', () => {
        const input = 'x ^= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x ^= 5;');
      });

      // Test augmented assignment (e.g., <<=)
      it('should generate JavaScript from Python augmented assignment (<<=)', () => {
        const input = 'x <<= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x <<= 5;');
      });

      // Test augmented assignment (e.g., >>=)
      it('should generate JavaScript from Python augmented assignment (>>=)', () => {
        const input = 'x >>= 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x >>= 5;');
      });

      // Test assignment with type comments (Python-specific, we handle the type comment)
      it('should generate JavaScript from Python assignment with type comment', () => {
        const input = 'x: int = 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5;');
      });

      it('should generate JavaScript from Python for simple assignment', () => {
        const input = 'x = 5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5;');
      });

      it('should generate JavaScript from Python for simple assignment', () => {
        const input = 'x = 5\nx=5';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5;\nlet x = 5;');
      });
      it('should generate JavaScript from Python sum assignment', () => {
        const input = 'x = 5 + 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 + 2;');
      });

      it('should generate JavaScript from Python minus assignment', () => {
        const input = 'x = 5 - 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 - 2;');
      });

      it('should generate JavaScript from Python multiplication assignment', () => {
        const input = 'x = 5 * 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 * 2;');
      });

      it('should generate JavaScript from Python division assignment', () => {
        const input = 'x = 5 / 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 / 2;');
      });

      it('should generate JavaScript from Python mod assignment', () => {
        const input = 'x = 5 % 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 % 2;');
      });

      it('should generate JavaScript from Python floor division assignment', () => {
        const left = 5;
        const right = 2;
        const input = 'x = 5 // 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal(`let x = Math.floor(${left} / ${right});`);
        expect(eval(`Math.floor(${left} / ${right})`)).to.equal(2);
      });

      it('should generate JavaScript from Python + factor and plus assignment', () => {
        const input = 'x = + ( 5 ) % 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = + ( 5 ) % 2;');
      });

      it('should generate JavaScript from Python - factor and minus assignment', () => {
        const input = 'x = - ( 5 ) - 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = - ( 5 ) - 2;');
      });

      it('should generate JavaScript from Python ~ factor and + assignment', () => {
        const input = 'x = ~ ( 5 ) + 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ~ ( 5 ) + 2;');
      });

      it('should generate JavaScript from Python - factor and logical OR assignment', () => {
        const input = 'x = ( 5 or 2 )';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 || 2 );');
      });

      it('should generate JavaScript from Python ~ factor and logical OR assignment', () => {
        const input = 'x = ~ 5 or 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ~ 5 || 2;');
      });
      
      it('should generate JavaScript from Python with multiple ors as true and false', () => {
        const input = 'x = true or false or true';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = true || false || true;');
      });

      it('should generate JavaScript from Python with multiple ors as true and false', () => {
        const input = 'x = (5+2) * 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 + 2 ) * 3;');
      });

      it('should generate JavaScript from Python with multiple ors as true and false', () => {
        const input = 'x = ( 5 + ( 6* 3) )* 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 + ( 6 * 3 ) ) * 3;');
      });

      it('should generate JavaScript from Python - factor and logical AND assignment', () => {
        const input = 'x = ( 5 and 2 )';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 && 2 );');
      });

      it('should generate JavaScript from Python ~ factor and logical AND assignment', () => {
        const input = 'x = ~ 5 and 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ~ 5 && 2;');
      });

      it('should generate JavaScript from Python with multiple ands as true and false', () => {
        const input = 'x = true and false and true';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = true && false && true;');
      });

      it('should handle complex logical expressions', () => {
        const input = 'x = not (True and False)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ! ( true && false );');
      });

      it('should generate JavaScript for bitwise OR between two numbers', () => {
        const input = 'x = 5 | 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 | 3;');
      });

      it('should generate JavaScript for bitwise OR between two variables', () => {
        const input = 'x = y | b';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = y | b;');
      });

      it('should generate JavaScript for complex bitwise OR operation', () => {
        const input = 'x = (5 | 3) | (8 | 2)';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 | 3 ) | ( 8 | 2 );');
      });

      it('should generate JavaScript for bitwise XOR between two numbers', () => {
        const input = 'x = 5 ^ 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 ^ 3;');
        // expect(eval(outputCode)).to.equal(6); // 5 (101) ^ 3 (011) = 6 (110)
      });

      it('should generate JavaScript for nested XOR operations', () => {
        const input = 'x = ( 5 ^ 3 )  ^ 2';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 ^ 3 ) ^ 2;');
        // expect(eval(outputCode)).to.equal(4); // Result of the nested XOR operations
      });

      it('should generate JavaScript for XOR between variables', () => {
        const input = 'x = a ^ b';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = a ^ b;');
      });

      it('should generate JavaScript for bitwise AND between two numbers', () => {
        const input = 'x = 5 & 3';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 & 3;');
        // expect(eval(outputCode)).to.equal(1); // 5 (101) & 3 (011) = 1 (001)
      });

      it('should generate JavaScript for nested AND operations', () => {
        const input = 'x = (5 & 3) & 1';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = ( 5 & 3 ) & 1;');
        // expect(eval(outputCode)).to.equal(1); // Result of the nested AND operations
      });

      it('should generate JavaScript for AND between variables', () => {
        const input = 'x = a & b';
        
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = a & b;');
      });
    });
    
    describe('assert statement', () => {
      it('should generate JavaScript for assert without a message', () => {
        const input = 'assert x == 5';
        const outputCode = parsePython(input);
        console.log(outputCode);
        expect(outputCode).to.equal(`if (!(x==5)) {\n  throw new Error("Assertion failed : x==5 ");\n}`);
      });

      it('should generate JavaScript for assert with a message', () => {
        const input = 'assert x == 5, "x should be 5"';
        const outputCode = parsePython(input);
        console.log(outputCode);
        expect(outputCode).to.equal(`if (!(x==5)) {\n  throw new Error("x should be 5");\n}`);
      });
    });
   
    describe('Raise', () => {

        it('should generate correct JavaScript for raise without from', () => {
            const input = 'raise ValueError("Something went wrong")';

            const outputCode = parsePython(input);
            console.log(outputCode);
            expect(outputCode).to.equal('throw new Error("Something went wrong");');
        });

        it('should generate correct JavaScript for raise with from', () => {
            const input = 'raise ValueError("Something went wrong") from e';

            const outputCode = parsePython(input);
            console.log(outputCode);
            expect(outputCode).to.equal('throw new Error("Something went wrong", { cause: e });');
        });
    });
    /*
     it('should generate JavaScript from Python if statement', () => {
        const input = 'if true:\n    x = 5';
        
        const outputCode = parsePython(input);
        console.log(outputCode)
        expect(outputCode).to.equal('if (x > 0) {\n    let x = 5;\n}');
    });
*/
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
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5;');
    });

    it('should generate JavaScript from Rust sum assignment', () => {
        const input = 'x = 5 + 2';
        const tree = parseRust(input);
        const outputCode = parsePython(input);
        expect(outputCode).to.equal('let x = 5 + 2;');
    });
});
 */
