locais = {
    'ARCO DA VILA': 'Faro',
    'GRACA': 'Lisboa',
    'IGREJA DOS GRILOS': 'Porto',
    'JARDINS DO PALACIO DE CRISTAL': 'Porto',
    'MONTE AGUDO': 'Lisboa',
    'MONTE DE FARO': 'Faro',
    'PENHA DE FRANCA': 'Lisboa',
    'SANTA CATARINA': 'Lisboa',
    'SANTA LUZIA': 'Lisboa',
    'SAO JORGE': 'Lisboa',
    'SAO PEDRO DE ALCANTARA': 'Lisboa',
    'SE CATEDRAL': 'Porto',
    'SENHORA DO MONTE': 'Lisboa',
    'SERRA DO PILAR': 'Porto',
    'TORRE DOS CLERIGOS': 'Porto',
    'VITORIA': 'Porto'
}

def _many(search, list):
    many = 0
    for i in list:
        if i == search:
            many = many + 1

    return many

def _sort(list):
    for i in range(0, len(list)):
        for j in range(0, len(list) - 1):
            if list[j] > list[j + 1]:
                temp = list[j]

                list[j] = list[j + 1]
                list[j] = temp
    return list

visitados = []
x = input()
visitados.append(x)

while x != "FIM":
    x = input()
    if x == "FIM":
        break

    visitados.append(x)

nVisitas = []
for v in visitados:
    nVisitas.append(_many(v, visitados))

print(f"{len(visitados)} {max(nVisitas)}")

mostVisited = []
blocked = []
for i in range(0, len(nVisitas)):
    if nVisitas[i] == max(nVisitas) and visitados[i] not in blocked:
        blocked.append(visitados[i])
        mostVisited.append({ 'local': visitados[i], 'monumento': locais[f'{visitados[i]}']})

mostVisited.sort(key=lambda x: x['local'])
for visitado in mostVisited:
    print(f"{visitado['local']} {visitado['monumento']}")