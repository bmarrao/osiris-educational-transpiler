
capj = []

cont = []

pum = True

while pum:
    lop = int(input())
    if lop == 0:
        pum = False
    else:
        capj.append(lop)

for k in range(len(capj)):
    cont.append(0)

alv = int(input())

run = True

while run:
    ent = input().split()

    if ent[0] == "0" and ent[1] == "0":
        run = False
    else:
        F = int(ent[0])
        D = int(ent[1])
        if F == 0:
            cont[D-1] = capj[D-1]
        else:
            if D == 0:
                cont[F-1] = 0
            else:
                A = capj[D-1] - cont[D-1]
                Kaput = cont[F-1] - A
                if Kaput < 0:
                    bab = A + Kaput
                else:
                    bab = A
                cont[D-1] = cont[D-1]+bab
                cont[F-1] = cont[F-1]-bab


for hh in cont:
    if hh == alv:
        print('CERTO')
        exit()


print('ERRADO')