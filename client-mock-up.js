const { transpilePython, transpileRust } = require('seu-pacote');

const pythonCode = `print("Hello, World!")`;
const jsCodeFromPython = transpilePython(pythonCode);
console.log(jsCodeFromPython);

const rustCode = `fn main() { println!("Hello, World!"); }`;
const jsCodeFromRust = transpileRust(rustCode);
console.log(jsCodeFromRust);
