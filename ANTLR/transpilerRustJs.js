import antlr4 from 'antlr4';
import RustParser  from './rust/RustParser.js'; // Import the generated parser
import RustParserVisitor from './rust/RustParserVisitor.js'; // Import the generated visitor base class
import RustLexer from "./rust/RustLexer.js";
export default class JSCodeGenerator extends RustParserVisitor {
    constructor(context = {}) {
        super();
        // An external context to store variables (like a symbol table)
        this.context = context;
        this.context.symbolTable = {};
    }
    //TODO : CRIAR FLATTEN PEGAR RESULT E RETIRAR ARRAY E DEIXAR SO O QUE NÃO É CONCATENADO
    visitCrate(ctx)
    {
        let x = this.visitChildren(ctx)
        console.log("On crate" + x[0][0][0])
        return x;
        //return x[0][0][0][0][0];
    }

    // Visit an assignment node (e.g., x = 5)
    visitLetStatement(ctx) {
        // Get the variable name (assuming structure based on your tree)
        const variableName = this.visit(ctx.patternNoTopAlt())
        console.log("Nome da variavel" + variableName)
        // Get the value from the right-hand side (expression)
        const value = this.visit(ctx.expression());
        console.log("Valor da variavel" + value)

        // Return the JavaScript equivalent assignment statement
        return `${variableName} = ${value};`;
    }

    visitIdentifierPattern(ctx) 
    {
        let prefix = "";
        if (ctx.KW_MUT() !== null) 
        {
            prefix = "let";
        }
        else 
        {
            prefix="const";
        }
        let variableName = this.visitChildren(ctx);
        // Continue a visitação normal
        return prefix + " " + variableName;
    }
    visitIdentifier(ctx)
    {
        const variableName = ctx.getText();
        return variableName;
    }
    visitLiteralExpression(ctx) {
        const variableResult = ctx.getText();
        return variableResult;  // Otherwise, return the variable name as is
    }

    
}

// Usage Example:

const input = `
fn main() {
    let x = 5;
    let mut y = 10;   
}
`; // Example Rust-like input

// Create a parser
// Create a new input stream from the input
const inputStream = new antlr4.InputStream(input);

// Create a lexer that feeds off the input stream
const lexer = new RustLexer(inputStream);

// Create a token stream from the lexer
const tokens = new antlr4.CommonTokenStream(lexer);

// Create a parser that feeds off the token stream
const parser = new RustParser(tokens);

// Start parsing at the desired rule (assuming 'file_input' is the start rule)
const tree = parser.crate(); // Adjust this to your start rule

// Create the JS code generator (visitor) and pass a context object
const codeGenerator = new JSCodeGenerator({});

// Visit the tree and generate JavaScript code
const outputCode = codeGenerator.visit(tree);

// Output the generated JavaScript code
console.log(outputCode);
