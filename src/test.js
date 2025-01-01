import PythonTranspiler from './dist/bundle.js';

const pythonTranspiler = new PythonTranspiler();

let string= "x += 5";

pythonTranspiler.translatePython(string);
