import string

table = [
    {'cidade':'Lisboa', 'miradouros': ['GRACA', 'MONTE AGUDO', 'PENHA DE FRANCA', 'SANTA CATARINA', 'SANTA LUZIA', 'SAO JORGE', 'SAO PEDRO DE ALCANTARA', 'SENHORA DO MONTE']},
    {'cidade':'Faro', 'miradouros': ['ARCO DA VILA', 'MONTE DE FARO']},
    {'cidade':'Porto', 'miradouros': ['IGREJA DOS GRILOS', 'JARDINS DO PALACIO DE CRISTAL', 'SE CATEDRAL', 'SERRA DO PILAR', 'TORRE DOS CLERIGOS', 'VITORIA']}
]

array = []
lista = {}

while True:
    local = input("")

    if local == "FIM":
        break
    else:
        array.append(local)
        lista[local] = {'nome': local, 'vezes': 0}


for i in range(len(array)):
    lista[array[i]]['vezes'] += 1

higherVezes = 0
higherNomes = []

for i in lista:
    if lista[i]['vezes'] > higherVezes:
        higherVezes = lista[i]['vezes']
        higherNomes = []
        higherNomes.append(lista[i]['nome'])
    elif lista[i]['vezes'] == higherVezes:
        higherNomes.append(lista[i]['nome'])

d = []
for i in higherNomes:
    for i2 in range(3):
        for i3 in table[i2]['miradouros']:
            if i3 == i:
                d.append({'miradouro': i, 'cidade':table[i2]['cidade']})

temp = []
for i in d:
    for i2 in range(len(d)-1):
        try:
            boas1 = (d[i2]['miradouro'])[0]
            boas2 = (d[i2+1]['miradouro'])[0]

            if boas1 > boas2:
                temp = d[i2]
                d[i2] = d[i2+1]
                d[i2+1] = temp
                temp = []
        except:
            pass

print(len(array), higherVezes)
for i in range(len(d)):
    print(d[i]['miradouro'] + " " + d[i]['cidade'])

