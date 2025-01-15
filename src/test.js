import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();



const input = 'x = f"teste {value}"';

console.log(pythonTranspiler.translatePython(input))
