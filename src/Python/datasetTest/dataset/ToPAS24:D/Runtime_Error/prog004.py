
jarros = []
flag = True
while flag:
    numero = int(input())
    if numero != 0:
        jarros.append(numero)
    else:
        flag = False

alvo = int(input())

flag2 = True

passos = []
while flag2:
    f, d = list(map(int, input().split()))
    if f == 0 and d == 0:
        flag2 = False
    else:
        ordens = [f, d]
        passos.append(ordens)

jarros_ativos = []
for o in range(len(jarros)):
    jarros_ativos.append(0)


for x in passos:
    if x[0] == 0:
        jarros_ativos[x[1]-1] = jarros[x[1]-1]
    elif x[1] == 0:
        jarros_ativos[x[0]-1] = 0
    else:
        if jarros[x[0]-1] > jarros[x[1]-1]:
            jarros_ativos[x[0]-1] -= jarros[x[1]-1]
            jarros_ativos[x[1]-1] += jarros[x[1]-1]

        elif jarros[x[0]-1] < jarros[x[1]]-1:
            jarros_ativos[x[0]-1] = 0
            jarros_ativos[x[1]-1] += jarros_ativos[x[0]-1]


if alvo in jarros_ativos:
    print("CERTO")
else:
    print("ERRADO")

