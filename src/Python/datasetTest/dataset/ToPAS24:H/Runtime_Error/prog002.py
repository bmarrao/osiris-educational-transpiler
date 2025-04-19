def down(x, y, value):
    global results
    if grelha[x][y] == "V":
        return
    if x == linha - 1:
        t = value + grelha[x][y]
        if t > results:
            results = t
        return
    path(x, y, value + grelha[x][y])
    return

def down_r(x, y, value):
    global results
    if grelha[x][y] == "V":
        return
    if x == linha - 1:
        t = value + grelha[x][y]
        if t > results:
            results = t
        return
    path(x, y, value + grelha[x][y])
    return

def down_l(x, y, value):
    global results
    if grelha[x][y] == "V":
        return
    if x == linha - 1:
        t = value + grelha[x][y]
        if t > results:
            results = t
        return
    path(x, y, value + grelha[x][y])
    return

def path(x, y, value):
    down(x+1, y, value)
    if y > 0:
        down_l(x + 1, y - 1, value)
    if y < coluna - 1:
        down_r(x+1, y+1, value)

    return

linha, coluna = [int(x) for x in input().split()]
grelha = []
for i in range(linha):
    grelha.append([x for x in input().split()])
results = 0
for i in range(linha):
    for j in range(coluna):
        if grelha[i][j] != "V":
            grelha[i][j] = int(grelha[i][j])
for y in range(coluna):
    if grelha[0][y] != "V":
        path(0, y, grelha[0][y])
print(results)