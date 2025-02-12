import antlr4 from 'antlr4';
import PythonParser from './Python/PythonParser.js';
import PythonLexer from './Python/PythonLexer.js';
import PythonCodeGenerator from './transpilerPythonJs.js';


var code_suffix = `
// Utility to wait for input from the main thread
async function waitForInput() {
    return new Promise((resolve) => {
        const inputListener = (event) => {
            if (event.data.type === "input") {
                resolve(event.data.input);
                // Remove the listener to avoid multiple triggers
                self.removeEventListener("message", inputListener);
            }
        };

        self.addEventListener("message", inputListener);
    });
}

main()
`;

// Custom error collector to store syntax errors
class ErrorCollector {
    constructor() {
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Error at line ${line}, column ${column}: ${msg}`);
    }

    getErrors() {
        return this.errors;
    }
}

class PythonTranspiler {
    constructor(language) {
        this.language = language;
        this.code = "";
        this.transpiledCode = ""
        this.worker = null;
    }

    passCode(code)
    {
        this.code=code;
        //TODO ADD LATER LOGIC WITH THE LANGUAGE VAR
        this.transpiledCode = translatePython(this.code);
        return this.transpiledCode;
    }

    sendIO(input)
    {
        console.log(this.worker)
        this.worker.postMessage({ type: "input", input: input });
    }

    runCode(code, appendToTerminal,timeout)
    {
        let Worker = window.Worker;
        let runCode = `async function main() {
        ${code}
        };
        ${code_suffix}
        `
        console.log(runCode)
        // Create a Blob with the Web Worker code
        const blob = new Blob([runCode], { type: "application/javascript" });
        this.worker = new Worker(URL.createObjectURL(blob));
        this.worker.postMessage({ type: "start" });
        this.worker.onmessage = function(event) {
            appendToTerminal(event)
        };

    }
    parsePython(input) {
        const inputStream = new antlr4.InputStream(input);
        const lexer = new PythonLexer(inputStream);
        
        // Create an error collector and assign it to the lexer
        const errorCollector = new ErrorCollector();
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorCollector);
        
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new PythonParser(tokens);
        
        // Assign the same error collector to the parser
        parser.removeErrorListeners();
        parser.addErrorListener(errorCollector);
        
        try {
            const tree = parser.file_input();
            const errors = errorCollector.getErrors();
            
            if (errors.length > 0) {
                // If there are syntax errors, return them in a structured format
                return {
                    success: false,
                    errors: errors
                };
            }
            
            return {
                success: true,
                tree: tree // Return the parse tree if there are no errors
            };
        } catch (error) {
            return {
                success: false,
                errors: [`Unexpected parsing error: ${error.message}`]
            };
        }
    }

    translatePython(input) {
        try {
            const codeGenerator = new PythonCodeGenerator(this.options);
            const parseResult = this.parsePython(input);
            
            if (!parseResult.success) {
                // If parsing was unsuccessful, return the errors
                return {
                    success: false,
                    errors: parseResult.errors
                };
            }
            
            // Proceed with code generation if parsing succeeded
            const generatedCode = codeGenerator.visit(parseResult.tree);
            
            return {
                success: true,
                code: generatedCode
            };
        } catch (error) {
            return {
                success: false,
                errors: [`Error during translation: ${error.message}`]
            };
        }
    }
}

export default PythonTranspiler;
