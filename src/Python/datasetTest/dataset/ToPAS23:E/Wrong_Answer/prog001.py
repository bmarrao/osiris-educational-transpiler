faro = ["ARCO DA VILA", "MONTE DE FARO"]
lisboa = ["GRACA", "SENHORA DO MONTE", "SAO PEDRO DA ALCANTARA", "SANTA LUZIA", "SANTA CATARINA", "MONTE AGUDO", "PENHA DE FRANCA", "SAO JORDE"]
porto = ["SE CATEDRAL", "IGREJA DOS GRILOS", "TORRE DOS CLERIGOS", "SERRA DO PILAR", "VITORIA", "JARDINS DO PALACIO DE CRISTAL"]

flag = 0
miradouro = list(range(0, 9999))
v = list(range(0, 9999))

i = 0
while flag == 0 :
    miradouro[i] = input()
    if miradouro[i] == "FIM":
        flag = 1
    else:
        i += 1
    
for k in range(i):
    v[k] = miradouro.count(miradouro[k])

maior = 0
nomeMaiores = list(range(0, 999))

pos = 0
for x in range(i):
    if v[x] >= v[x - 1]:
        maior = v[x]
        #print("MIRADOURO = " + miradouro[x])

        if ( nomeMaiores.count(miradouro[x]) ) == 0:
            nomeMaiores[pos] = miradouro[x]
            pos += 1

print(str(i) + " " + str(maior))    


for w in range(int(maior)):
    for a in range(len(porto)):
        #print("Maiores = " + str(nomeMaiores[a]))
        if nomeMaiores[w] == porto[a]:
            print(nomeMaiores[w] + " Porto")
            break

    for a in range(len(lisboa)):
        if nomeMaiores[w] == lisboa[a]:
            print(nomeMaiores[w] + " Lisboa")
            break

    for a in range(len(faro)):
        if nomeMaiores[w] == faro[a]:
            print(nomeMaiores[w] + " Faro")
            break
        
    