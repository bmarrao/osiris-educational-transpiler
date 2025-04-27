import Osiris from "./index.js"
import readlineSync from 'readline-sync';
const input = `
def transpor_matriz1(matriz):
    return [list(x) for x in zip(*matriz)]

def transpor_matriz2(matriz):
    return [[matriz[j][i] for j in range(len(matriz))] for i in range(len(matriz[0]))]

def transpor_matriz3(matriz):
    return [[matriz[j][i] for j in range(len(matriz))] for i in range(len(matriz[0]))]

def transpor_matriz5(matriz):
    return [[row[i] for row in matriz] for i in range(len(matriz[0]))]

# Testando com a matriz [[1, 2, 3], [4, 5, 6]]
print(transpor_matriz1([[1, 2, 3], [4, 5, 6]]))
print(transpor_matriz2([[1, 2, 3], [4, 5, 6]]))
print(transpor_matriz3([[1, 2, 3], [4, 5, 6]]))
print(transpor_matriz5([[1, 2, 3], [4, 5, 6]]))
`




const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
//console.log(transpiledCode)
console.log(transpiledCode.code); 
eval(transpiledCode.code);
