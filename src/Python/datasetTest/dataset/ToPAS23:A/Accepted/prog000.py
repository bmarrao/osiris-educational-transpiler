text = input()

i1,d1,i2,d2 = text.split()

i1 = int(i1)
i2 = int(i2)
d1 = int(d1)
d2 = int(d2)

if i2<37:
    print("NORMAL")
elif i2>= 37:
    if i1<i2:
        print("FEBRE SUBIU")
    elif i1>i2:
        print("FEBRE BAIXOU")
    elif i1==i2:
        if d1 > d2:
            print("FEBRE BAIXOU")
        elif d1<d2:
            print("FEBRE SUBIU")
        elif d1 == d2:
            print("FEBRE MANTEVE")
