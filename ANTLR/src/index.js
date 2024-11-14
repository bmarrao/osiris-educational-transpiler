import antlr4 from 'antlr4';
import PythonParser from './Python/PythonParser.js';
import PythonLexer from './Python/PythonLexer.js';
import PythonCodeGenerator from './transpilerPythonJs.js';

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

function parsePython(input) {
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

export function translatePython(input) {
    try {
        const codeGenerator = new PythonCodeGenerator({});
        const parseResult = parsePython(input);

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

// Default export for flexibility
export default {
    translatePython
};
