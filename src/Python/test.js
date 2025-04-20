import Osiris from "./index.js"

const input = `
def x():
   name = input('What is your name? ');
   print (f"Hello, {name}!");
   age = input('How old are you? ');
   print(f"You are {age} years old.");
`


const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
console.log(transpiledCode.code); 

const fct = eval(`(${transpiledCode.code})`);
fct.call(null) // fct.call(null, ...args);

