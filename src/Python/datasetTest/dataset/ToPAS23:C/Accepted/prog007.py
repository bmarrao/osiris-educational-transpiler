media = int(input())
dias = int(input())

dados = list(range(0,dias))

for i in range(dias):
    dados[i] = int(input())

numVAl = 0



for i in range(dias):
    if( (dados[i] - media) > 5):
        numVAl += 1
    else:
        numVAl = 0

    # print("NUMVAL = " + str(numVAl))

    if numVAl >= 6:
        print("WAVE")
        break


if numVAl < 6:
    print("FLAT")



