n = -1

jarros_capacidade = {}
jarros_capacidade_atual = {}
contador = 1


while True:
    n = int(input())
    if n == 0:
        break
    jarros_capacidade[contador] = n
    jarros_capacidade_atual[contador] = 0
    contador += 1

a = int(input())



while True:
    f, d = input().split()
    f = int(f)
    d = int(d)

    if f == 0 and d == 0:
        break

    if f == 0:
        jarros_capacidade_atual[d] += jarros_capacidade[d]

    elif d == 0:
        jarros_capacidade_atual[f] = 0
    else:
        if jarros_capacidade[d] > jarros_capacidade[f]:
            jarros_capacidade_atual[d] += jarros_capacidade_atual[f]
            jarros_capacidade_atual[f] = 0
        else:
            fica = jarros_capacidade_atual[f]-jarros_capacidade[d]

            jarros_capacidade_atual[d] = jarros_capacidade[d]
            jarros_capacidade_atual[f] = fica


certo = False
for value in jarros_capacidade_atual.values():
    if value == a:
        certo = True
        break


if certo:
    print("CERTO")
else:
    print("ERRADO")








