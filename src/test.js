import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();

const input = '(a, b) = (1, 2)';

console.log(pythonTranspiler.translatePython(input))
