import Osiris from "./index.js"
import readlineSync from 'readline-sync';
const input = `
def main():
    num = int(input())

    n = int(input())

    ia = 0

    for i in range(n):
        ab = int(input())
        if num >= ab > ia:
            ia = ab

    if ia != 0:
        print(ia)
    else:
        print("No free lunch")


if __name__ == "__main__":
    main()

`


const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
console.log(transpiledCode)
/*
if(transpiledCode.sucess)
{
    console.log(transpiledCode.code); 
    eval(transpiledCode.code);
}
else 
{
    console.log("Translation ERROR"); 
}
*/
