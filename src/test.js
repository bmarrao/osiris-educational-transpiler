import antlr4 from 'antlr4';
import PythonParser from './Python/PythonParser.js'; // Adjust the path as necessary
import PythonLexer from './Python/PythonLexer.js'; // Adjust the path as necessary

import PythonTranspiler from './index.js';

function parsePython(input) {
    const pythonTranspiler = new PythonTranspiler();
    let result = pythonTranspiler.translatePython(input) 
    console.log(result)
    if (result.success) 
    {
      return result.code
    }
    else 
    {
      return result.errors[0]
    }

}

let input = 'class Example:\n\t@staticmethod\n\tdef greet():\n\t\treturn "Hello"';

input = "class Example:\n\tclass_var = 42  # Class variable (shared across all instances)\n\n\tdef __init__(self, value):\n\t\tself.value = value  # Instance variable"

input = "class Example:\n\tdef __init__(self, value):\n\t\tself.__private = value  # Name mangling applied"

const pythonTranspiler = new PythonTranspiler();

let one = parsePython(input)

console.log(one);

