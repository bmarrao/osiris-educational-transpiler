import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();

const input = `return x,y`;

console.log(pythonTranspiler.translatePython(input))
