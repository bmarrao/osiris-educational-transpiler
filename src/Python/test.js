import Osiris from "./index.js"
import readlineSync from 'readline-sync';
const input = `
def main():
    num = int(2)

    n = int(2)

    lista = []

    c = 0

    for i in range(n):
        ansn = int(2)
        lista.append(ansn)
        c += ansn

    a = num//n

    if num >= c:
        for i in lista:
            print(i)
    elif a == 0:
        for _ in lista:
            print(0)
    else:
        e = 0
        tlista = lista.copy()
        while e != 1:
            e = 1
            for i in tlista:
                if i <= a:
                    num -= i
                    n -= 1
                    a = num // n
                    e = 0
                    tlista.remove(i)

        for i, k in enumerate(lista):
            if k <= a:
                continue
            else:
                lista[i] = a

        for i in lista:
            print(i)


if __name__ == "__main__":
    main()


'''
13
4
5
5
2
3
'''
`


const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
console.log(transpiledCode)
console.log(transpiledCode.code); 
    eval(transpiledCode.code);
