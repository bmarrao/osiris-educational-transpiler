linha, coluna = [int(x) for x in input().split()]
grelha = []
for i in range(linha):
    grelha.append([x for x in input().split()])
results = 0
for i in range(linha):
    for j in range(coluna):
        if grelha[i][j] != "V":
            grelha[i][j] = int(grelha[i][j])
for x in range(linha):
    for y in range(coluna):
        if x == 0:
            continue
        if grelha[x][y] == "V":
            grelha[x][y] = 0
        else:
            if 0 < y < coluna - 1:
                up = grelha[x-1][y]
                if up == "V":
                    up = 0
                upr = grelha[x-1][y+1]
                if upr == "V":
                    upr = 0
                upl = grelha[x-1][y-1]
                if upl == "V":
                    upl = 0
                t = max(up, upl, upr)
                if t != 0:
                    if grelha[x][y] + t > grelha[x][y]:
                        grelha[x][y] = grelha[x][y] + t
                else:
                    grelha [x][y] = 0
            elif y > 0:
                up = grelha[x - 1][y]
                if up == "V":
                    up = 0
                upl = grelha[x - 1][y - 1]
                if upl == "V":
                    upl = 0
                t = max(up, upl)
                if t != 0:
                    if grelha[x][y] + t > grelha[x][y]:
                        grelha[x][y] = grelha[x][y] + t
                else:
                    grelha [x][y] = 0
            elif y < coluna - 1:
                up = grelha[x - 1][y]
                if up == "V":
                    up = 0
                upr = grelha[x - 1][y + 1]
                if upr == "V":
                    upr = 0
                t = max(up, upr)
                if t != 0:
                    if grelha[x][y] + t > grelha[x][y]:
                        grelha[x][y] = grelha[x][y] + t
                else:
                    grelha [x][y] = 0
print(max(grelha[-1]))