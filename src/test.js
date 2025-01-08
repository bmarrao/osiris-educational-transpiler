import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();

const input = `x = 5`;

console.log(pythonTranspiler.translatePython(input))
