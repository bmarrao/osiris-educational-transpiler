j = int(input())

ptpessoas = []
i = 0
while i<j:
    text = input()
    cartas = list(text.split())
    cartas[0] = int(cartas[0])
    cartas[1] = int(cartas[1])
    cartas[2] = int(cartas[2])
    cartas[3] = int(cartas[3])
    cartas[4] = int(cartas[4])
    cartas.sort()

    ptotal = 0
    k = 0
    while(k <= 4):
        poscarta = k
        contador = 0

        if(k <= 4):
            while(cartas[k] == cartas[poscarta]):
                contador = contador + 1
                k = k + 1
                if(k > 4):
                    break

        if(contador == 1):
            ptotal = ptotal + int(cartas[poscarta])
        if (contador == 2):
            ptotal = ptotal + 3*(int(cartas[poscarta]))
        if (contador == 3):
            ptotal = ptotal + 5*(int(cartas[poscarta]))
        if (contador == 4):
            ptotal = ptotal + 10*(int(cartas[poscarta]))

    ptpessoas.append(ptotal)
    i = i + 1

ptpessoas.sort()
vencedores = 1
l = 1
while(ptpessoas[j-1] == ptpessoas[j-1-l]):
    vencedores = vencedores + 1
    l = l + 1
    if((j-1-l) == -1):
        break

print(str(vencedores) + " " + str(ptpessoas[-1]))



