import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();


let input = "if x > 0:\n    x= 5\n    y=6"

console.log(pythonTranspiler.translatePython(input))
