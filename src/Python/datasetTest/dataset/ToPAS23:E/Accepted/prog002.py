local_visitado_distinto = []
local_visitado = []
count_locais_visitados = 0;
while (True):
    str = input()

    if str == "FIM": break

    local_visitado.append(str)
    if str not in local_visitado_distinto:
        local_visitado_distinto.append(str)
    count_locais_visitados += 1


maior = -1
for local in local_visitado_distinto:
    total = local_visitado.count(local)

    if(maior < total): maior = total

resultados = []
for local in local_visitado_distinto:
    if(local_visitado.count(local) == maior):
        resultados.append(local)


print(count_locais_visitados, maior)
resultados.sort()
for resultado in resultados:
    if(resultado == "ARCO DA VILA"): print(resultado, "Faro")
    elif(resultado == "GRACA"): print(resultado, "Lisboa")
    elif(resultado == "IGREJA DOS GRILOS"): print(resultado, "Porto")
    elif(resultado == "JARDINS DO PALACIO DE CRISTAL"): print(resultado, "Porto")
    elif(resultado == "MONTE AGUDO"): print(resultado, "Lisboa")
    elif(resultado == "MONTE DE FARO"): print(resultado, "Faro")
    elif(resultado == "PENHA DE FRANCA"): print(resultado, "Lisboa")
    elif(resultado == "SANTA CATARINA"): print(resultado, "Lisboa")
    elif(resultado == "SANTA LUZIA"): print(resultado, "Lisboa")
    elif (resultado == "SAO JORGE"):
        print(resultado, "Lisboa")
    elif (resultado == "SAO PEDRO DE ALCANTARA"):
        print(resultado, "Lisboa")
    elif (resultado == "SE CATEDRAL"):
        print(resultado, "Porto")
    elif (resultado == "SENHORA DO MONTE"):
        print(resultado, "Lisboa")
    elif (resultado == "SERRA DO PILAR"):
        print(resultado, "Porto")
    elif (resultado == "TORRE DOS CLERIGOS"):
        print(resultado, "Porto")
    elif (resultado == "VITORIA"):
        print(resultado, "Porto")