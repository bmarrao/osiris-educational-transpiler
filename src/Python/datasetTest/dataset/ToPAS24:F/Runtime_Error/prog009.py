count = int(input())
lista = []
mapa = {}
for i in range(count):
    mapa[i] = 0
    lista.append(int(input()))

contar = 0


def repetir(numero):
    global contar
    contar += 1
    mapa[lista[numero]] += 1
    if (lista[numero] == numero):
        print(contar - 1)
    elif (lista[numero] < 0 or lista[numero] >= count):
        print("POLICIA")
    else:
        if mapa[lista[numero]] == 1:
            repetir(lista[numero])
        else:
            print("INCOMPETENTE")

repetir(int(input()))