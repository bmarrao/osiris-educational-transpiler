N=int(input())
cartas=[]
pontuacoes=[]
Q=1
for k in range(N):
    A,B,C,D,E=input().split()
    cartas.append(int(A))
    cartas.append(int(B))
    cartas.append(int(C))
    cartas.append(int(D))
    cartas.append(int(E))
def contador(lista,i):
    um=0
    d=0
    t=0
    q=0
    c=0
    s=0
    se=0
    o=0
    no=0
    de=0
    for u in range(5):
        if lista[i+u]==1:
            um =um +1
        if lista[i+u]==2:
            d =d +1
        if lista[i+u]==3:
            t =t +1
        if lista[i+u]==4:
            q=q +1
        if lista[i+u]==5:
            c =c +1
        if lista[i+u]==6:
            s =s +1
        if lista[i+u]==7:
            se =se +1
        if lista[i+u]==8:
            o =o +1
        if lista[i+u]==9:
            no =no +1
        if lista[i+u]==10:
            de =de +1
    contagem=[um,d,t,q,c,s,se,o,no,de]
    return contagem
def pontuador(cont):
    sitios=[]
    pontuacao=0
    if 2 in cont:
        for j in range(len(cont)):
            if cont[j]==2:
                sitios.append(j)
        for h in range(len(sitios)):
            pontuacao=pontuacao+3*(sitios[h]+1)
    if 3 in cont:
        for j in range(len(cont)):
            if cont[j]==3:
                sitio=j
        pontuacao=pontuacao+5*(sitio+1)
    if 4 in cont:
        for a in range(10):
            if cont[a]==4:
                pontuacao=pontuacao+10*(a+1)
    for p in range(len(cont)):
        if cont[p]==1:
            pontuacao=pontuacao+p+1
    return pontuacao
for U in range(N):
    pontuacoes.append(pontuador(contador(cartas,U*5)))
maior=pontuacoes[0]
for P in range(N):
    if pontuacoes[P]>maior:
        maior=pontuacoes[P]
        Q=1
    elif pontuacoes[P]==maior and P!=0:
        Q=Q+1
print(Q,maior)
