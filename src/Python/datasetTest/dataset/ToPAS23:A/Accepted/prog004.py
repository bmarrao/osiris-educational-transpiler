I1, D1, I2, D2 = input().split(" ")
I1 = int(I1)
D1 = float(D1) / 10
I2 = int(I2)
D2 = float(D2) / 10
febre1 = I1+D1
febre2 = I2 + D2
if febre2 < 37:
    print("NORMAL")
if febre2 >= 37 and febre2 > febre1:
    print("FEBRE SUBIU")
if febre2 >= 37 and febre2 == febre1:
    print("FEBRE MANTEVE")
if febre2 >= 37 and febre2 < febre1:
    print("FEBRE BAIXOU")
