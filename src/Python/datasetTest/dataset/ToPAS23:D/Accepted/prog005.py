j = int(input(""))

pontos = []
d = []
for i in range(j):
    d.append([])
    pontos.append(0)
    for x in range(10):
        d[i].append(0)
    ns = input("").split()
    
    for n in ns:
        value = d[i][int(n)-1]
        d[i][int(n)-1] = value+1

    for i2 in range(len(d[i])):
        if d[i][i2]:
            if d[i][i2] == 2:
                pontos[i] += 3 * (int(i2) + 1)
            elif d[i][i2] == 3:
                pontos[i] += 5 * (int(i2) + 1)
            elif d[i][i2] == 4:
                pontos[i] += 10 * (int(i2) + 1)
            else:
                pontos[i] += (int(i2) + 1)

higherPoints = 0
persons = 0
for i in pontos:
    if i > higherPoints:
        higherPoints = i
        persons = 1
    elif i == higherPoints:
        persons += 1

print(persons, higherPoints)    
