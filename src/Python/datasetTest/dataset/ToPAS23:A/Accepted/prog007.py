temp1, dec1, temp2, dec2 = map(int, input().split())

if temp2 < 37:
    print("NORMAL")
    exit()
elif temp2 >= 37 or (temp2 == 37 and dec2 >= 0):
    if temp2 > temp1 or (temp2 == temp1 and dec2 > dec1):
        print("FEBRE SUBIU")
    elif temp2 == temp1 and dec2 == dec1:
        print("FEBRE MANTEVE")
    elif temp2 < temp1 or (temp2 == temp1 and dec2 < dec1):
        print("FEBRE BAIXOU")