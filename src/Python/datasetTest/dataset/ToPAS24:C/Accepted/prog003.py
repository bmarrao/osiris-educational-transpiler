c = int(input())

entrada1 = input()
entrada1 = entrada1.split()

entrada2 = input()
entrada2 = entrada2.split()

nivel_amizade = 0

allequals = True
testor = entrada1[0]
for i in entrada1:
    if testor != i:
        allequals = False


if allequals:
    nivel_amizade += 1



notequals = True
x = len(entrada2)-1
for i in range(x):
    for y in range(i+1,len(entrada2)):
        if entrada2[i] == entrada2[y]:
            notequals = False


if notequals:
    nivel_amizade += 1

print(nivel_amizade)





