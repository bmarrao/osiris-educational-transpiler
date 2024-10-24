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
    
    visitBitwise_or(ctx) {
        if (ctx.bitwise_or()) {
            // Recursive case: `bitwise_or '|' bitwise_xor`
            const left = this.visit(ctx.bitwise_or());
            const right = this.visit(ctx.bitwise_xor());
            return `${left} | ${right}`; // Combine with bitwise OR operator
        } else {
            // Base case: Just a bitwise_xor
            return this.visit(ctx.bitwise_xor());
        }
    }

    visitBitwise_xor(ctx) {
        if (ctx.bitwise_xor()) {
            // Recursive case: `bitwise_xor '^' bitwise_and`
            const left = this.visit(ctx.bitwise_xor());
            const right = this.visit(ctx.bitwise_and());
            return `${left} ^ ${right}`;  // Bitwise XOR operator in JS
        } else {
            // Base case: just a bitwise_and
            return this.visit(ctx.bitwise_and());
        }
    }
    visitBitwise_and(ctx) {
        if (ctx.bitwise_and()) {
            // Recursive case: `bitwise_and '&' shift_expr`
            const left = this.visit(ctx.bitwise_and());
            const right = this.visit(ctx.shift_expr());
            return `${left} & ${right}`;  // Bitwise AND operator in JS
        } else {
            // Base case: just a shift_expr
            return this.visit(ctx.shift_expr());
        }
    }
    visitShift_expr(ctx) {
        if (ctx.shift_expr()) {
            // Case: shift_expr ('<<' | '>>') sum
            const left = this.visit(ctx.shift_expr());
            const operator = ctx.children[1].getText();  // Get '<<' or '>>'
            const right = this.visit(ctx.sum());
            return `${left} ${operator} ${right}`;  // Use the operator in JS
        } else {
            // Base case: just a sum
            return this.visit(ctx.sum());
        }
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
            left = `${left} || ${right}`;           // Combine with the 'or'
        }

        return left; // Return the final expression
    }

    visitConjunction(ctx) {
        // Visit the first conjunction
        let left = this.visit(ctx.inversion(0)); // Get the first conjunction

        // Iterate through any additional conjunctions connected by 'or'
        for (let i = 1; i < ctx.inversion().length; i++) {
            const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
            const right = this.visit(ctx.inversion(i));      // Get the next conjunction
            left = `${left} && ${right}`;           // Combine with the 'or'
        }

        return left; // Return the final expression
    }
    
    visitInversion(ctx) {
    // Check if this is a recursive sum case
        if (ctx.inversion()) 
        {
            // Get the operator and evaluate
            const right = this.visit(ctx.inversion());
            return ("! " + right);

        }
        else 
        {
            return this.visit(ctx.comparison());
        }
    }

    visitPower(ctx) {
        // Check if there is an exponentiation operation '**'
        if (ctx.factor()) {
            // Visit the base of the exponentiation (await_primary)
            const base = this.visit(ctx.await_primary());
            // Visit the exponent part (factor)
            const exponent = this.visit(ctx.factor());
            // Return the JavaScript equivalent using the '**' operator
            return `Math.pow(${base},${exponent})`;
        } else {
            // If there is no exponentiation, just return the base (await_primary)
            return this.visit(ctx.await_primary());
        }
    }
    //TODO MAKE TEST FOR THIS WHEN PRIMARY DONE
    visitAwait_primary(ctx) {
        if (ctx.AWAIT()) {
            // Handle the 'await' expression
            const primaryExpression = this.visit(ctx.primary());
            return `await ${primaryExpression}`; // Translate 'await primary' to 'await primaryExpression'
        } else {
            // Handle just the primary expression without 'await'
            return this.visit(ctx.primary());
        }
    }
   
    visitIf(ctx) 
    {
        //TODO WHEN DEFINING THIS DONT FORGET IF HAS TO HAVE() WHILE IN PYTHON IT DOES NOT NEED IT
    }
    visitStar_atom(ctx) {
        const variableName = ctx.getText();
        return variableName;  // Otherwise, return the variable name as is
    }
    visitAtom(ctx) {
        if (ctx.tuple() || ctx.group() || ctx.genexp()) {
            return this.visit(ctx.tuple() || ctx.group() || ctx.genexp());
        } else if (ctx.list() || ctx.listcomp()) {
            return this.visit(ctx.list() || ctx.listcomp());
        } else if (ctx.dict() || ctx.set() || ctx.dictcomp() || ctx.setcomp()) {
            return this.visit(ctx.dict() || ctx.set() || ctx.dictcomp() || ctx.setcomp());
        } else if (ctx.TRUE()) {
        // Handle the case for the boolean literal True
            return 'true';
        } 
        else if (ctx.FALSE()) {
            // Handle the case for the boolean literal False
            return 'false';
        } 
        
        
        return ctx.getText(); // Default case
    }

    visitGroup(ctx) {
        console.log("Here");
        
        // Visit the inner expression
        let inside;
        if (ctx.yield_expr()) {
            inside = this.visit(ctx.yield_expr());
        } else if (ctx.named_expression()) {
            inside = this.visit(ctx.named_expression());
        } else {
            inside = ""; // Handle case where there's no valid expression
        }
        
        return "( " + inside + " )"; // Return formatted group
    }
   /*
    // Handle variable lookups (e.g., using a variable that has been previously assigned)
    visitAtom(ctx) {
        const variableValue = ctx.getText();
        return variableValue;  //
    }
    */
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
