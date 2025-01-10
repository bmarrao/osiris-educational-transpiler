import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();

const input = `nonlocal x\nx=7`;

console.log(pythonTranspiler.translatePython(input))
