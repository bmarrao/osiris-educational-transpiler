capacidades = {}
c = 0
while True:
    n = int(input())
    if n == 0:
        break
    capacidades[c] = n
    c += 1
alvo = int(input())
conteudo = []
for i in range(c):
    conteudo.append(0)
while True:
    F, D = [int(x) for x in input().split()]
    if F == 0 and D == 0:
        break
    if F == 0:
        conteudo[D - 1] = capacidades[D - 1]
    elif D == 0:
        conteudo[F - 1] = 0
    else:
        if conteudo[F-1] > capacidades[D-1] - conteudo[D-1]:
            excesso = conteudo[F-1] + conteudo[D-1] - capacidades[D - 1]
            conteudo[D-1] = capacidades[D - 1]
            conteudo[F-1] = excesso
        else:
            conteudo[D-1] += conteudo[F-1]
            conteudo[F-1] = 0
if alvo in conteudo:
    print("CERTO")
else:
    print("ERRADO")
