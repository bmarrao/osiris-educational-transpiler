I1, D1, I2, D2 = map(int, input().split())
temp1 = f"{I1}.{D1}"
temp1 = float(temp1)
temp2 = f"{I2}.{D2}"
temp2 = float(temp2)

if temp2 < 37:
    print("NORMAL")
else:
    str = "FEBRE"
    if temp2 > temp1:
        str += " SUBIU"
    elif temp2 == temp1:
        str += " MANTEVE"
    else:
        str += " BAIXOU"
    print(str)