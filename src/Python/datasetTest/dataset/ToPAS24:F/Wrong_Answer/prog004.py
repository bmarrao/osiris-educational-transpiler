count = int(input())
lista = []
for i in range(count):
    lista.append(int(input()))

contar = 0
listaValores = []


def repetir(numero):
    listaValores.append(lista[numero])
    global contar
    contar += 1
    if (lista[numero] == numero):
        print(contar - 1)
    elif (lista[numero] < 0 or lista[numero] >= count):
        print("POLICIA")
    else:
        if contar <= 150:
            repetir(lista[numero])
        else:
            print("INCOMPETENTE")

def igual(array):
    if (len(array) > 4):
        primeiro = ""
        for i in range(len(array)):
            primeiro = ""
            for i2 in range(i + 1):
                i2 = len(array) - 1 - (i + 1)
                if (array[i] == array[i2]):
                    primeiro = array[i]
                    for i3 in range(i2 + 1):
                        if (array[i + (i3 - i) ] == array[i3] or primeiro == array[i3]):
                            return False
    return True

repetir(int(input()))