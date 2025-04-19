faro = ["ARCO DA VILA", "MONTE DE FARO"]
lisboa = ["GRACA", "SENHORA DO MONTE", "SAO PEDRO DA ALCANTARA", "SANTA LUZIA", "SANTA CATARINA", "MONTE AGUDO", "PENHA DE FRANCA", "SAO JORDE"]
porto = ["SE CATEDRAL", "IGREJA DOS GRILOS", "TORRE DOS CLERIGOS", "SERRA DO PILAR", "VITORIA",
"JARDINS DO PALACIO DE CRISTAL"]

maior = -9999
menor = 9999


flag = 0
miradouro = []

qntv = []
mvisitados = []

i = 0
while flag == 0:
    miradouro.append(input()) 
    if miradouro[i] == "FIM":
        flag = 1
    else:
        i += 1

for x in range(len(miradouro)):
    if miradouro.count(miradouro[x]) == maior:
        maior = miradouro.count("GRACA")
        if mvisitados.__contains__(miradouro[x]) == False:
            mvisitados.append(miradouro[x])
    if miradouro.count(miradouro[x]) > maior:
        mvisitados.clear()
        maior = miradouro.count(miradouro[x])
        mvisitados.append(miradouro[x])
    if miradouro.count(miradouro[x]) < menor:
        menor = miradouro.count("GRACA")

mvisitados.sort()
arroz = str(i) + str(maior)

print(arroz)
for x in range(len(mvisitados)):
    if porto.__contains__(mvisitados[x]):
        print(mvisitados[x] + " " + "Porto")
    if lisboa.__contains__(mvisitados[x]):
        print(mvisitados[x] + " " + "Lisboa")
    if faro.__contains__(mvisitados[x]):
        print(mvisitados[x] + " " + "Faro")
