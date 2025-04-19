x=1
y=1
l=[]
cont=0

while x < x+1:
    c=int(input())
    if (c == 0 and x >= 1):
        break
    elif (c == 0 and x < 1):
        exit()
    elif c>=10:
        exit()

    if (c == 0 and x >= 2):
        break
    elif (c == 0 and x < 2):
        exit()
    l.append(c)
    if x>=10:
        exit()
    x = x + 1


print(l)

A=int(input())
if A<1 or A>=10:
    exit()

while y <y+1:
    f,d=input().split()
    if int(f)>len(l) or int(f)<0 or int(d)>len(l) or int(d)<0:
        exit()

    if (int(f) == 0 and int(d)==0 and y>=1):
        break
    elif (int(f) == 0 and int(d)==0 and y<1):
        exit()

    if int(f)==0:
        cont -= l[int(d) - 1]
    elif int(d)==0:
        cont += l[int(f) - 1]
    else:
        cont += l[int(f) - 1]
        cont -= l[int(d) - 1]

    y=y + 1
    if y>15:
        exit()
    print(cont)





if cont==A:
    print("CERTO")
else:
    print("ERRADO")










