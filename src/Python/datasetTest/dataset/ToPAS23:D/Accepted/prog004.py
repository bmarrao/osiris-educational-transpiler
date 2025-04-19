jv = 0
maximo=0
pontos=[]
jogadores = int(input())

for i in range(jogadores):
    r = 0
    cartas = []
    cartasu = []
    n1, n2, n3, n4, n5 = map(int, input().split())
    cartas.append(n1)
    cartas.append(n2)
    cartas.append(n3)
    cartas.append(n4)
    cartas.append(n5)

    for a in cartas:
        if a not in cartasu:
            cartasu.append(a)

    for a in cartasu:
        n = cartas.count(a)
        if n == 1:
            r += a
        elif n == 2:
            r += a*3
        elif n == 3:
            r += a*5
        else:
            r += a*10

    if r>maximo:
        maximo=r

    pontos.append(r)

for i in pontos:
    if i==maximo:
        jv+=1

print(jv, maximo)

