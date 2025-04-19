k, t = map(int, input().split())
lista = list(map(int, input().split()))
lista2 = list(map(str, input().split()))
for i in range(0, k*2, 2):
    for j in range(lista[i]-1):
        print (lista[i+1], end=" ")
    print(lista[i+1])
for i in range(0, t*2, 2):
    for j in range(int(lista2[i])-1):
        print(lista2[i+1], end="-")
    print(lista2[i+1])
