x=int(input())
lista=[]
c=0
cont = 0
flag =0
flag2 =0
cont2 =0
for i in range (x):
    y=int(input())
    lista.append(y)

z=int(input())
while (flag ==0):
        if (cont2 > x):
            flag=1
            break
        cont2 = cont2+1
        if (lista[z] == z):
            print(cont)
            flag2 = 1
            flag=1
        elif(lista[z]<=0 or lista[z]>=x):
            print("POLICIA")
            flag2 = 1
            flag=1
        else:
            z = lista[z]
            cont = cont + 1
if (flag2 ==0):
        print("INCOMPETENTE")

