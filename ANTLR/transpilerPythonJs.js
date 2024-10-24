import antlr4 from 'antlr4';
import PythonParser  from './Python/PythonParser.js'; // Import the generated parser
import PythonParserVisitor from './Python/PythonParserVisitor.js'; // Import the generated visitor base class
import PythonLexer from "./Python/PythonLexer.js";
import { flatten } from './tools/flatten.js';
export default class JSCodeGenerator extends PythonParserVisitor {
    constructor(context = {}) {
        super();
        // An external context to store variables (like a symbol table)
        this.context = context;
        this.context.symbolTable = {};
    }
    //TODO : CRIAR FLATTEN PEGAR RESULT E RETIRAR ARRAY E DEIXAR SO O QUE NÃO É CONCATENADO
    visitFile_input(ctx)
    {
        let x = this.visitChildren(ctx)
        //return x;
        return flatten(x)[0];
    }

    visitAssignment(ctx) {
        const variableName = this.visit(ctx.star_targets())
        const value = this.visit(ctx.star_expressions());

        // Return the JavaScript equivalent assignment statement
        return `let ${variableName} = ${value};`;
    }

    visitSum(ctx) {
        // Check if this is a recursive sum case
        if (ctx.sum()) {
            const left = this.visit(ctx.sum());

            // Get the operator and evaluate
            const operator = ctx.children[1].getText();
            const right = this.visit(ctx.term());

            return (left + " " + operator + " " + right)
        } else {
            return this.visit(ctx.term());
        }
    }

    visitTerm(ctx) {
    // Check if this is a recursive sum case
        if (ctx.term()) 
        {
            const left = this.visit(ctx.term());
            // Get the operator and evaluate
            const operator = ctx.children[1].getText();
            const right = this.visit(ctx.factor());
            if (operator === "//")
            {
                return `Math.floor(${left} / ${right})`;
            }
            else if (operator === "@")
            {
                //TODO:BRING UP THE PROBLEM WITH THE LIBRARIES, IN THE END DO I JUST IMPORT ?
               return ""; 
            }
            else 
            {
                return (left + " " + operator + " " + right);
            }

        }
        else 
        {
            // It's just a term
            return this.visit(ctx.factor());
        }
    }

    visitFactor(ctx) {
    // Check if this is a recursive sum case
        if (ctx.factor()) 
        {
            // Get the operator and evaluate
            const factor = ctx.children[0].getText();
            const right = this.visit(ctx.factor());
            return (factor + " " + right);

        }
        else 
        {
            // It's just a term
            return this.visit(ctx.power());
        }
    }


    visitDisjunction(ctx) {
        // Visit the first conjunction
        let left = this.visit(ctx.conjunction(0)); // Get the first conjunction

        // Iterate through any additional conjunctions connected by 'or'
        for (let i = 1; i < ctx.conjunction().length; i++) {
            const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
            const right = this.visit(ctx.conjunction(i));      // Get the next conjunction
            left = `${left} || ${right} `;           // Combine with the 'or'
        }

        return left; // Return the final expression
    }
    visitIf(ctx) 
    {
        //TODO WHEN DEFINING THIS DONT FORGET IF HAS TO HAVE() WHILE IN PYTHON IT DOES NOT NEED IT
    }
    visitStar_atom(ctx) {
        const variableName = ctx.getText();
        return variableName;  // Otherwise, return the variable name as is
    }

    // Handle variable lookups (e.g., using a variable that has been previously assigned)
    visitAtom(ctx) {
        const variableValue = ctx.getText();
        return variableValue;  //
    }
}

// Usage Example:

const input = `
x = + ( 5 ) % 2
`; // Example Python-like input

// Create a parser
// Create a new input stream from the input
const inputStream = new antlr4.InputStream(input);

// Create a lexer that feeds off the input stream
const lexer = new PythonLexer(inputStream);

// Create a token stream from the lexer
const tokens = new antlr4.CommonTokenStream(lexer);

// Create a parser that feeds off the token stream
const parser = new PythonParser(tokens);

// Start parsing at the desired rule (assuming 'file_input' is the start rule)
const tree = parser.file_input(); // Adjust this to your start rule

// Create the JS code generator (visitor) and pass a context object
const codeGenerator = new JSCodeGenerator({});

// Visit the tree and generate JavaScript code
const outputCode = codeGenerator.visit(tree);

// Output the generated JavaScript code
console.log(outputCode);
