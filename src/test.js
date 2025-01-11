import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();


const input = 'raise ValueError("Something went wrong")';

console.log(pythonTranspiler.translatePython(input))
