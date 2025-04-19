temp = input().split(" ")

estado = ""

if int(temp[2]) < 37:
    estado = "NORMAL"
elif int(temp[2]) >= 37:
    estado = "FEBRE"

    if int(temp[0]) == int(temp[2]):   
        if int(temp[1]) == int(temp[3]):
            estado = "FEBRE MANTEVE"
        elif int(temp[1]) > int(temp[3]):
            estado = "FEBRE BAIXOU"
        else:
            estado = "FEBRE SUBIU"

    elif int(temp[0]) > int(temp[2]):
        estado = "FEBRE BAIXOU"
    elif int(temp[2]) > int(temp[0]):
        estado = "FEBRE SUBIU"
    
print(estado)