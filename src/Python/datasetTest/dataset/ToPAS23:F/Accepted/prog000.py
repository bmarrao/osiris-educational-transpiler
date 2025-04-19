lista=[]
ja=0
G=0
for t in range (6):
    u=input()
    for j in range(7):
        lista.append(u[j])
def procura(listaa,i):
    NUM=0
    #procurar para baixo:
    if i+21<len(listaa):
        if listaa[i]==listaa[i+7] and listaa[i]==listaa[i+14] and listaa[i]==listaa[i+21]:
            return 1
            NUM=1
    #procurar para o lado
    if i+3 < len(listaa) and NUM==0:
        if listaa[i]==lista[i+1] and listaa[i]==lista[i+2] and listaa[i]==lista[i+3] and i//7==(i+1)//7 and i//7==(i+2)//7 and i//7==(i+3)//7 :
            return 1
            NUM=1
    #procurar para baixo direita
    if i+24<len(listaa) and NUM==0:
        if listaa[i]==listaa[i+8] and listaa[i]==listaa[i+16] and listaa[i]==listaa[i+24] and i%7==(i+8)%7-1 and i%7==(i+16)%7-2 and i%7==(i+24)%7-3 and i//7==(i+8)//7-1 and i//7==(i+16)//7-2 and i//7==(i+24)//7-3:
            return 1
            NUM=1
    #procurar para baixo esquerda
    if i+18<len(listaa) and NUM==0:
        if listaa[i]==listaa[i+6] and listaa[i]==listaa[i+12] and listaa[i]==listaa[i+18] and i%7==(i+6)%7+1 and i%7==(i+12)%7+2 and i%7==(i+18)%7+3 and i//7==(i+6)//7-1 and i//7==(i+12)//7-2 and i//7==(i+18)//7-3:
            return 1
            NUM=1
    if NUM==0:
        return 0
#procurar 4 O
if "O" in lista:
    for y in range(len(lista)):
        if lista[y]=="O" and procura(lista,y)==1:           #para cada O
            print("GANHOU O")
            G=1
            break

if "X" in lista and G==0:
    for y in range(len(lista)):
        if lista[y]=="X" and procura(lista,y)==1:           #para cada O
            print("GANHOU X")
            G=1
            break
if "." in lista and G==0:
    print("JOGANDO")
    G=1
if G==0:
    print("EMPATE")