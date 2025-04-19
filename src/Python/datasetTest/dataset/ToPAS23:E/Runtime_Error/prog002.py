cidade = ""

cidades = {
    "ARCO DA VILA": 0,
    "GRACA": 0,
    "IGREJA DOS GRILOS": 0,
    "JARDINS DO PALACIO DE CRISTAL": 0,
    "MONTE AGUDO": 0,
    "MONTE DE FARO": 0,
    "PENHA DE FRANCA": 0,
    "SAHTA CATARINA": 0,
    "SANTA LUZIA": 0,
    "SAO JORGE": 0,
    "SAO PEDRO DE ALCANTARA": 0,
    "SE CATEDRAL": 0,
    "SENHORA DO MONTE": 0,
    "SERRA DO PILAR": 0,
    "TORRE DOS CLERIGOS": 0,
    "VITORIA": 0,
}

capitais = {
    "ARCO DA VILA": "Faro",
    "GRACA": "Lisboa",
    "IGREJA DOS GRILOS": "Porto",
    "JARDINS DO PALACIO DE CRISTAL": "Porto",
    "MONTE AGUDO": "Lisboa",
    "MONTE DE FARO": "Faro",
    "PENHA DE FRANCA": "Lisboa",
    "SANTA CATARINA": "Lisboa",
    "SANTA LUZIA": "Lisboa",
    "SAO JORGE": "Lisboa",
    "SAO PEDRO DE ALCANTARA": "Lisboa",
    "SE CATEDRAL": "Porto",
    "SENHORA DO MONTE": "Lisboa",
    "SERRA DO PILAR": "Porto",
    "TORRE DOS CLERIGOS": "Porto",
    "VITORIA": "Porto",
}

count = 0

cidades_max = []

max = 0

while cidade != "FIM":
    cidade = input()

    if cidade != "FIM":
        count += 1

        cidades[cidade] = cidades[cidade] + 1

        if max == 0:
            max = cidades[cidade]
            cidades_max.append(cidade)
        else:
            if cidades[cidade] > max:
                max = cidades[cidade]
                cidades_max = []
                cidades_max.append(cidade)
            else:
                if cidades[cidade] == max:
                    cidades_max.append(cidade)

print(count, max)

cidades_max = sorted(cidades_max)

for i in cidades_max:
    print(i, capitais[i])

