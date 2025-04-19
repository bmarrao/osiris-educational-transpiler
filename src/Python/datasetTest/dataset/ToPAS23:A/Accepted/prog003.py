i1, d1, i2, d2 = input().split()

i1 = float(i1)
i2 = float(i2)
d1 = float(d1)
d2 = float(d2)

first = i1 + d1 / 10
second = i2 + d2 / 10

if second < 37:
    print("NORMAL")
else:
    text = "FEBRE "
    if second > first:
        text = text + "SUBIU"
    elif second == first:
        text = text + "MANTEVE"
    else:
        text = text + "BAIXOU"

    print(text)