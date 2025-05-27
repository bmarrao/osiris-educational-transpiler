import Osiris from "./index.js"
import readlineSync from 'readline-sync';
const input = `
test=[0,1,2,3]
console.log(test[0])
`

const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
console.log(transpiledCode.code); 
eval(transpiledCode.code);
