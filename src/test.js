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



const input = `try:\n\tx=5\nexcept Exception as e:\n\terror = e`;
const pythonTranspiler = new PythonTranspiler();

console.log(parsePython(input))

