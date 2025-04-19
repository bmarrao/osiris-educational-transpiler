cidadesMiradouros = {"Faro" : ["ARCO DA VILA", "MONTE DE FARO"],
                     "Lisboa" : ["GRACA", "MONTE AGUDO", "PENHA DE FRANCA", "SANTA CATARINA", "SANTA LUZIA", "SAO JORGE", "SAO PEDRO DE ALCANTARA", "SENHORA DO MONTE"],
                     "Porto":["IGREJA DOS GRILOS", "JARDINS DO PALACIO DE CRISTAL", "SE CATEDRAL", "SERRA DO PILAR", "TORRE DOS CLERIGOS", "VITORIA"]}
visitas = {}
nvisitas = 0

while True:
    miradouro = input()
    if miradouro == "FIM":
        break
    else:
        nvisitas += 1
        if miradouro in visitas.keys():
            visitas[miradouro] += 1
        else:
            visitas[miradouro] = 1

maisvisitados = {"teste":0}

for igmira in visitas:
    nvisita = visitas[igmira]
    if nvisita > list(maisvisitados.values())[0]:
        maisvisitados.clear()
        maisvisitados[igmira] = nvisita
    elif visitas[igmira] == list(maisvisitados.values())[0]:
        maisvisitados[igmira] = nvisita

print(nvisitas,list(maisvisitados.values())[0])

maisvisitados = list(maisvisitados.keys())
maisvisitados.sort()

for empVisit in maisvisitados:
    for cidade in cidadesMiradouros:
        if empVisit in cidadesMiradouros[cidade]:
            print(empVisit+" "+cidade)