
h1, m1 = input().split()
temp1 = float(h1 + "." + m1)

h2, m2 = input().split()
temp2 = float(h2 + "." + m2)

h3, m3 = input().split()
temp3 = float(h3 + "." + m3)

if temp1 <= temp3 <= temp2:
    print("Encontram-se")
else:
    print("Desencontram-se")
