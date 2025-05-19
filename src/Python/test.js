import Osiris from "./index.js"
import readlineSync from 'readline-sync';
const input = `
    print(mov[1::], n * mm, sep="  ")
`

const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
//console.log(transpiledCode)
console.log(transpiledCode.code); 
eval(transpiledCode.code);
