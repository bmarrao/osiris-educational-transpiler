m, n = input().split()
linha = input().split()

total = 0
for i, x in enumerate(linha[::-1]):
    total = + total + int(x) * 10 ** i

lastNumero = total
sementes = []

for i in range(0, int(m)):
    lastNumero = f"{int(lastNumero) ** 2}"

    if len(lastNumero) < 4 * int(n):
        for i in range(0, 4 * int(n) - len(lastNumero)):
            lastNumero = f"0{lastNumero}"

    toMinMax = len(lastNumero) - (2 * int(n))
    min, max = 1, 5

    if toMinMax % 2 == 0:
        if len(lastNumero) == 4:
            min = 1
            max = 3
        else:
            min = int(toMinMax / 2)
            max = int(toMinMax / 2) + 2 * int(n)
    else:
        min = int(toMinMax // 2)
        max = int(toMinMax // 2) + 2

    lastNumero = lastNumero[min:max]
    sementes.append(lastNumero)

for semente in sementes:
    print(f"0,{semente}")