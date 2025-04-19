dias_mes = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

d, m = input().split()

d = int(d)
m = int(m)


if m == 12 and d > 25:
    x = d - 25
    total = 365 - x
    print(total)
else:

    dias_mes_atual = dias_mes[m]

    dias_restantes = dias_mes_atual - d

    contador = m + 1


    while contador <= 12:
        dias_restantes += dias_mes[contador]
        contador += 1

    dias_restantes -= 6

    print(dias_restantes)






