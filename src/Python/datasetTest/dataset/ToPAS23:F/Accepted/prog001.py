lista = []
for i in range(0, 6):
    x = input()
    lista.append(x)

cheios = 0
for i, l in enumerate(lista):
    for j, c in enumerate(l):
        if c == ".":
            break

        cheios = cheios + 1

finished = False
if cheios == 7 * 6:
    print("EMPATE")
    finished = True

for i, l in enumerate(lista):
    for j, c in enumerate(l):
        if j <= len(l) - 4:
            if lista[i][j] == lista[i][j + 1] and lista[i][j] == lista[i][j + 2] and lista[i][j] == lista[i][j + 3]:
                if lista[i][j] == 'O':
                    print("GANHOU O")
                    finished = True
                    break
                elif lista[i][j] == "X":
                    print("GANHOU X")
                    finished = True
                    break

        if finished == True:
            break

        if i + 4 <= len(lista):
            if lista[i][j] == lista[i + 1][j] and lista[i][j] == lista[i + 2][j] and lista[i][j] == lista[i + 3][j]:
                if lista[i][j] == 'O':
                    print("GANHOU O")
                    finished = True
                    break
                elif lista[i][j] == "X":
                    print("GANHOU X")
                    finished = True
                    break

        if finished == True:
            break

        if j <= len(l) - 4 and i + 4 <= len(lista):
            if lista[i][j] == lista[i + 1][j + 1] and lista[i][j] == lista[i + 2][j + 2] and lista[i][j] == lista[i + 3][j + 3]:
                if lista[i][j] == 'O':
                    print("GANHOU O")
                    finished = True
                    break
                elif lista[i][j] == "X":
                    print("GANHOU X")
                    finished = True
                    break

        if finished == True:
            break

        if j - 4 >= -1 and i + 4 <= len(lista):
            if lista[i][j] == lista[i + 1][j - 1] and lista[i][j] == lista[i + 2][j - 2] and lista[i][j] == lista[i + 3][j - 3]:
                if lista[i][j] == 'O':
                    print("GANHOU O")
                    finished = True
                    break
                elif lista[i][j] == "X":
                    print("GANHOU X")
                    finished = True
                    break


if finished == False:
    print("JOGANDO")