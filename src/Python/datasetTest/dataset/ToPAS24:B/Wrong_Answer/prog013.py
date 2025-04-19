ANO = [[1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]]
D, M = input().split()
D=int(D)
M=int(M)

cont=0
if M<1 and M>13:
    exit()
elif M==12:
    if D<25:
        cont+=(25-D)
    elif D>25:
        cont+=(365-(D-25))
elif M==1:
    cont+=(31-D)
    cont+=25

for x in range(M+1,12-M):
    if x==2:
        cont+=28
    elif x==4 or x==6 or x==9 or x==11:
        cont+=30
    else:
        cont+=31

for y in range(0,11):
    if ANO[y][0]==M:
        cont+=(ANO[y][1]-D)



print(cont)



