# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

num = int(input())
amigos = int(input())
soma = 0
p = []
i = 0

for i in range(amigos):
    p.append(int(input()))
    soma += p[i]


if soma <= num:
    t= 0
    for t in range(len(p)):
        print(p[t])
else:

    j = num/amigos
    l = 0
    k = 0
    r = 0
    for l in range(len(p)):
        if p[l] <= j:
            p[l] = p[l]
            r = num - p[l]
            i = amigos - (l+1)



    for t in range(len(p)):

        z = r / i

        if(p[t] > j):
            p[t] = z


    for t in range(len(p)):
        text = "{:.0f}"
        print(text.format(p[t]))