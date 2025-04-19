
d, m = map(int, input().split())

lista = [31,28,31,30,31,30,31,31,30,31,30,25]

restante = lista[m-1] - d


if m == 12 and d > 25:
    restante = 31 - d
    dias = restante
    for x in range(0, len(lista)):
        dias += lista[x]
else:
    dias = restante
    for x in range(m, len(lista)):
        dias += lista[x]

print(dias)
