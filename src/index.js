import antlr4 from 'antlr4';
import PythonParser from './Python/PythonParser.js';
import PythonLexer from './Python/PythonLexer.js';
import PythonCodeGenerator from './transpilerPythonJs.js';


const builtInPythonFuncs = `
function zip(...arrays) {
  // Check if the first argument is 'true' for unzipping
  if (arrays[0] === true) {
    const zipped = arrays.slice(1); // Remove the 'true' argument
    const result = [];

    // Find the maximum length of the arrays
    const maxLength = Math.max(...zipped.map(arr => arr.length));

    // Unzip by grouping elements from each array
    for (let i = 0; i < maxLength; i++) {
      const tuple = zipped.map(arr => arr[i] !== undefined ? arr[i] : null);
      result.push(tuple);
    }

    return result;
  } else {
    const minLength = Math.min(...arrays.map(arr => arr.length));
    const result = [];

    for (let i = 0; i < minLength; i++) {
      const tuple = arrays.map(arr => arr[i]);
      result.push(tuple);
    }

    return result;
  }
}
function myRemove(collection, value) {
  if (Array.isArray(collection)) {
    // If it's a list, remove the first occurrence of the value
    const index = collection.indexOf(value);
    if (index !== -1) {
      collection.splice(index, 1);
    } else {
      throw new Error("ValueError: list.remove(x): x not in list");
    }
  } else if (collection instanceof Set) {
    // If it's a set, use delete()
    collection.delete(value);
  } else {
    throw new Error("myRemove: collection must be an array or a set");
  }
}

function myPop(collection, ...args) {
  if (Array.isArray(collection)) {
    // Caso seja uma lista (array)
    if (args.length === 0) {
      return collection.pop();
    } else if (args.length === 1) {
      const index = args[0];
      if (index < 0 || index >= collection.length) {
        throw new Error("IndexError: pop index out of range");
      }
      return collection.splice(index, 1)[0];
    } else {
      throw new Error("Invalid arguments for list pop: expects 0 or 1 argument.");
    }
  } else if (collection instanceof Set) {
    // Caso seja um conjunto (set)
    if (args.length > 0) {
      throw new Error("set.pop() takes no arguments");
    }
    if (collection.size === 0) {
      throw new Error("KeyError: pop from an empty set");
    }
    const iterator = collection.values();
    const firstValue = iterator.next().value;
    collection.delete(firstValue);
    return firstValue;
  } else if (collection !== null && typeof collection === "object") {
    // Caso seja um dicionário (objeto)
    if (args.length === 0) {
      throw new Error("dict.pop() requires at least one argument (the key)");
    }
    const key = args[0];
    if (collection.hasOwnProperty(key)) {
      const value = collection[key];
      delete collection[key];
      return value;
    } else {
      if (args.length >= 2) {
        return args[1];
      } else {
        throw new Error("KeyError");
      }
    }
  } else {
    throw new Error("myPop: collection must be an array, set, or object");
  }
}


function sorted(iterable, { key = null, reverse = false } = {}) {
  let arr = [...iterable];
  arr.sort((a, b) => {
    let valA = key ? key(a) : a;
    let valB = key ? key(b) : b;
    return valA > valB ? 1 : valA < valB ? -1 : 0;
  });
  return reverse ? arr.reverse() : arr;
}

function max(iterable, key = x => x) {
  if (!Array.isArray(iterable)) iterable = [...arguments]; // Allow separate args
  return iterable.reduce((max, item) => (key(item) > key(max) ? item : max));
}

function min(iterable, key = x => x) {
  if (!Array.isArray(iterable)) iterable = [...arguments];
  return iterable.reduce((min, item) => (key(item) < key(min) ? item : min));
}
function type(obj) {
  if (obj === null) return "NoneType";
  if (Array.isArray(obj)) return "list";
  if (obj instanceof Function) return "function";
  if (obj instanceof Map) return "dict";
  if (obj instanceof Set) return "set";
  if (typeof obj === "number") return Number.isInteger(obj) ? "int" : "float";
  if (typeof obj === "string") return "str";
  if (typeof obj === "boolean") return "bool";
  return typeof obj; // fallback for other types
}


function sum(iterable, start = 0) {
  return iterable.reduce((acc, val) => acc + val, start);
}

function range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  return Array.from({ length: Math.max(0, Math.ceil((stop - start) / step)) }, (_, i) => start + i * step);
}

function len(input) {
  if (typeof input === "string" || Array.isArray(input)) {
    return input.length;
  }

  if (input instanceof Set || input instanceof Map) {
    return input.size;
  }

  if (input instanceof Object) {
    return Object.keys(input).length;
  }

  if (typeof input === "function" && typeof input.length !== "undefined") {
    return input.length; // Number of function parameters
  }

  throw new Error("Unsupported type for len function");
}

function extend(arr, iterable) {
  arr.push(...iterable);
}

`
/**
 * @constant {string[]} supportedLangs
 * @description List of supported programming languages.
 */
const supportedLangs = ["Python"]

/**
 * @constant {string} code_suffix
 * @description Contains code to add as suffix with the function wait for input and calls the main function that starts execution in a web worker.
 */
var code_suffix = `
// Utility to wait for input from the main thread
async function waitForInput(message) {
    postMessage(message)
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


${builtInPythonFuncs}


postMessage("Execution started")
main()
`;

/**
 * Custom error listener class that extends antlr4's ErrorListener.
 * Collects syntax errors during parsing.
 * @class
 * @extends antlr4.error.ErrorListener
 */
class CustomErrorListener extends antlr4.error.ErrorListener {
    /**
     * Creates an instance of CustomErrorListener.
     */
    constructor() {
        super();
        this.errors = [];
    }

    /**
     * Called when a syntax error is encountered.
     * @param {object} recognizer - The parser instance.
     * @param {object} offendingSymbol - The offending token.
     * @param {number} line - The line number of the error.
     * @param {number} column - The column number of the error.
     * @param {string} msg - The error message.
     * @param {Error} e - The error object.
     */
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Syntax error at line ${line}, column ${column}: ${msg}`);
    }

    /**
     * Handles ambiguity detection.
     * @param {object} recognizer 
     * @param {object} dfa 
     * @param {number} startIndex 
     * @param {number} stopIndex 
     * @param {boolean} exact 
     * @param {object} ambigAlts 
     * @param {object} configs 
     */
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        console.log("Ambiguity detected but resolved.");
    }

    /**
     * Handles attempts to use full context during parsing.
     * @param {object} recognizer 
     * @param {object} dfa 
     * @param {number} startIndex 
     * @param {number} stopIndex 
     * @param {object} conflictingAlts 
     * @param {object} configs 
     */
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        console.log("Attempting full context but continuing.");
    }

    /**
     * Handles context sensitivity events during parsing.
     * @param {object} recognizer 
     * @param {object} dfa 
     * @param {number} startIndex 
     * @param {number} stopIndex 
     * @param {object} prediction 
     * @param {object} configs 
     */
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        console.log("Context sensitivity detected but resolved.");
    }

    /**
     * Retrieves the collected errors.
     * @returns {string[]} Array of error messages.
     */
    getErrors() {
        return this.errors;
    }
}

/**
 * Parses Python code.
 * @param {string} input - The code to be parsed.
 * @returns {object} An object indicating success or failure. On success, returns the parse tree; on failure, returns the errors.
 */
function parsePython(input) {
    console.log("Before parse");
    const inputStream = new antlr4.InputStream(input);
    const lexer = new PythonLexer(inputStream);

    // Create an error collector and assign it to the lexer
    const errorCollector = new CustomErrorListener();
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
            return {
                success: false,
                errors: errors
            };
        }

        return {
            success: true,
            tree: tree
        };
    } catch (error) {
        return {
            success: false,
            errors: [`Unexpected parsing error: ${error.message}`]
        };
    }
}

/**
 * Translates Python code to JavaScript.
 * @param {string} input - The Python code to be parsed and translated.
 * @param {boolean} runOnBrowser - Indicates if the code is meant to run on a web browser.
 * @returns {object} An object indicating success or failure. On success, returns the generated code; on failure, returns the errors.
 */
export function translatePython(input,runOnBrowser) {
    try {
        const codeGenerator = new PythonCodeGenerator(runOnBrowser);
        const parseResult = parsePython(input);

        console.log("Before parse")
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


export function translatePythonTest(input)  {
        const codeGenerator = new PythonCodeGenerator(false);
        const parseResult = parsePython(input);

        console.log("Before parse")
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
}
/**
 * Custom error collector class for syntax errors.
 * @class
 */
class ErrorCollector {
    /**
     * Creates an instance of ErrorCollector.
     */
    constructor() {
        // console.log("DEBUG")
        this.errors = [];
    }

    /**
     * Called when a syntax error is encountered.
     * @param {object} recognizer - The parser instance.
     * @param {object} offendingSymbol - The offending token.
     * @param {number} line - The line number of the error.
     * @param {number} column - The column number of the error.
     * @param {string} msg - The error message.
     * @param {Error} e - The error object.
     */
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Error at line ${line}, column ${column}: ${msg}`);
    }

    /**
     * Retrieves the collected errors.
     * @returns {string[]} Array of error messages.
     */
    getErrors() {
        return this.errors;
    }
}

/**
 * Transpiles Python code to JavaScript and handles code execution in a web worker.
 * @class
 */
class Osiris
{
    /**
     * Creates an instance of Osiris.
     * @param {string} language - The target language.
     */
    constructor(language) {
        this.language = language;
        this.code = "";
        this.transpiledCode = "";
        this.worker = null;
    }
    
    /**
     * Returns a list of supported languages.
     * @returns {string[]} Array of supported languages.
     */
    supporteLanguages() {
        return supportedLangs;
    }

    /**
     * Sets the code to transpile and performs the transpilation.
     * @param {string} code - The Python code to be transpiled.
     * @returns {object} The result of the transpilation containing success status and generated code or errors.
     */
    passCode(code) {
        this.code = code;
        //TODO ADD LATER LOGIC WITH THE LANGUAGE VAR
        this.transpiledCode = translatePython(this.code, false);
        this.transpiledCode.code += builtInPythonFuncs
        return this.transpiledCode;
    }

    /**
     * Sends input to the web worker.
     * @param {string} userInput - The userInput to send.
     */
    sendIO(userInput) {
        // console.log(this.worker)
        this.worker.postMessage({ type: "input", input: input });
    }

    /**
     * Runs the transpiled code in a web worker.
     * @param {function} appendToTerminal - Callback function to append output to the terminal.
     * @param {number} timeout - Timeout value (not currently used , to be implemented).
     */
    runCode(appendToTerminal, timeout) {
      try {
        let Worker = window.Worker;

        let insideCode = translatePython(this.code, true);
        let runCodeStr = `async function main() {
          ${insideCode.code}
        };
        ${code_suffix}`;
        console.log(`CODE: ${runCodeStr}`);
        const blob = new Blob([runCodeStr], { type: "application/javascript" });
        this.worker = new Worker(URL.createObjectURL(blob));
        this.worker.postMessage({ type: "start" });
        this.worker.onmessage = (event) => {
          appendToTerminal(event);
        };
        // console.log("FINISHED RUNNING");
      } catch (error) {
        console.error("Error in runCode:", error);
      }
    }
}

export default Osiris;

