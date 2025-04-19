c=int(input())
con=0
lista=list(map(int, input().split()))
lista2=list(map(int, input().split()))

cont1 = lista.count(lista[0])
if (cont1 == len(lista)):
    con +=1

cont2 = 1
for i in range(len(lista2)-1):
    if (lista2[i] != lista2[i+1]):
        cont2 +=1
if (cont2 == len(lista2)):
    con +=1

print(con)
