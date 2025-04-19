linha, coluna = [int(x) for x in input().split()]
grelha = []
for i in range(linha):
    grelha.append([x for x in input().split()])
results = 0

lin = []
for i in grelha[0]:
    if i != "V":
        lin.append(int(i))
    else:
        lin.append(-1)
for i in grelha:
    print(*i)
for x in range(1, linha):
    for y in range(coluna):
        if grelha[x][y] == "V":
            lin[y] = -1
            continue
        if y == 0:
            if grelha[x][0] == "V":
                lin[0] = -1
                continue
            elif lin[0] == -1 and lin[1] == -1:
                continue
            t = max(int(grelha[x][0]), int(grelha[x][1]))
            lin[0] = lin[0] + t
        elif y == coluna - 1:
            if grelha[x][-1] == "V":
                lin[-1] = -1
                continue
            elif lin[-1] == -1 and lin[-2] == -1:
                continue
            t = max(int(grelha[x][-1]), int(grelha[x][-2]))
            lin[-1] = t + lin[-1]
        else:
            if grelha[x][y] == "V":
                lin[y] = -1
                continue
            elif lin[y - 1] == -1 and lin[y] == -1 and lin[y + 1] == -1:
                continue
            t = max(grelha[x][y - 1], grelha[x][y], grelha[x][y + 1])
            lin[y] = t + lin[y]
        print(lin)
print(max(lin))