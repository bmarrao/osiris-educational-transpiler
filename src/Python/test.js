import Osiris from "./index.js"

const input = `
def func():
  print(list(filter(lambda x: x > 0, [-1, 0, 1])))
`


const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
console.log(transpiledCode.code); 

const fct = eval(`(${transpiledCode.code})`);
fct.call(null) // fct.call(null, ...args);

