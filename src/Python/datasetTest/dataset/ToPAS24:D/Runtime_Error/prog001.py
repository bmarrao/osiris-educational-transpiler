nj = int(input())

capj = []

cont = []

for k in range(nj):
    cont.append(0)

for k in range(nj):

    lop = int(input())
    if lop == 0:
        break
    capj.append(lop)

if len(capj) < nj:
    for dghjkjgj in range(nj-len(capj)):
        capj.append(1)

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