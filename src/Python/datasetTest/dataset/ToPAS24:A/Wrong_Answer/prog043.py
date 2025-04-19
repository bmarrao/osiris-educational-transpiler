
h1, h2 = input().split()
temp1 = float(h1 + "." + h2)

h3, h4 = input().split()
temp2 = float(h3 + "." + h4)


h5, h6 = input().split()
temp3 = float(h5 + "." + h6)

if temp1 <= temp3 <= temp2:
    print("Encontram-se")
else:
    print("Desencontram-se")
