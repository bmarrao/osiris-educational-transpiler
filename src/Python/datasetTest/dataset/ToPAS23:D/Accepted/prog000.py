jog = int(input())
baralhos = []

def _many(search, list):
    many = 0
    for l in list:
        if l == search:
            many = many + 1

    return many

for i in range(0, jog):
    baralho = input().split()
    baralhos.append(baralho)

for i, baralho in enumerate(baralhos):
    for j, b in enumerate(baralho):
        baralhos[i][j] = int(b)

pJogadores = []
for baralho in baralhos:
    blocked = []

    pontos = 0
    for carta in baralho:
        if carta in blocked:
            continue
        else:
            blocked.append(carta)

            repeated = _many(carta, baralho)
            if repeated == 2:
                pontos = pontos + carta * 3
            elif repeated == 3:
                pontos = pontos + carta * 5
            elif repeated == 4:
                pontos = pontos + carta * 10
            else:
                pontos = pontos + carta

    pJogadores.append(pontos)

for i in range(0, len(pJogadores)):
    for j in range(0, len(pJogadores) - 1):
        if pJogadores[j] > pJogadores[j + 1]:
            temp = pJogadores[j]

            pJogadores[j] = pJogadores[j + 1]
            pJogadores[j + 1] = temp

print(f"{_many(pJogadores[-1], pJogadores)} {pJogadores[-1]}")