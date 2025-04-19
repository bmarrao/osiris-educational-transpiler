count = int(input())
lista = []
for i in range(count):
    lista.append(int(input()))

contar = 0

def repetir(numero):
    global contar
    contar += 1
    if (lista[numero] == numero):
        print(contar - 1)
    elif (lista[numero] < 0 or lista[numero] >= count):
        print("POLICIA")
    else:
        if (contar < count + 1):
            repetir(lista[numero])
        else:
            print("INCOMPETENTE")

repetir(int(input()))