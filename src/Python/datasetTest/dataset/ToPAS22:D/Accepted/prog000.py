def main():
    x, y = map(int, input().split())

    tabela = []

    for i in range(x):
        tabela.append(list(map(int, input().split())))

    pos = [0, 0]
    mov = "0"
    n = 1
    mm = tabela[0][0]

    while True:
        if pos[0] + 1 < x and tabela[pos[0] + 1][pos[1]] == mm and mov[-1] != "C":
            pos[0] += 1
            n += 1
            mov += "B"
        elif pos[0] - 1 >= 0 and tabela[pos[0] - 1][pos[1]] == mm and mov[-1] != "B":
            pos[0] -= 1
            n += 1
            mov += "C"
        elif pos[1] + 1 < y and tabela[pos[0]][pos[1] + 1] == mm and mov[-1] != "E":
            pos[1] += 1
            n += 1
            mov += "D"
        elif pos[1] - 1 >= 0 and tabela[pos[0]][pos[1] - 1] == mm and mov[-1] != "D":
            pos[1] -= 1
            n += 1
            mov += "E"
        else:
            break

    print(mov[1::], n * mm, sep="\n")


if __name__ == "__main__":
    main()
