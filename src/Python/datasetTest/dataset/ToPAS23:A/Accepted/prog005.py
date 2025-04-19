i1, d1, i2, d2 = input("").split()

somaFebre1 = int(i1) + int(d1)/10
somaFebre2 = int(i2) + int(d2)/10

if (somaFebre2 >= 37):
    if (somaFebre2 > somaFebre1):
        print("FEBRE SUBIU")
    elif (somaFebre2 == somaFebre1):
        print("FEBRE MANTEVE")
    else:
        print("FEBRE BAIXOU")
else:
    print("NORMAL")




