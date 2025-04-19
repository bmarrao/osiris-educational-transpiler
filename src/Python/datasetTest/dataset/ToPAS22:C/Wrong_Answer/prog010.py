# This is a sample Python script.

import math
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

num = float(input())
amigos = int(input())
soma = 0
p = []
i = 0

if num < amigos:
    t = 0
    for t in range(amigos):

        text = "{:.0f}"
        print("0")
    exit()

for i in range(amigos):
    p.append(float(input()))
    soma += p[i]

if soma <= num:
    t= 0
    for t in range(len(p)):
        text = "{:.0f}"
        print(text.format(p[t]))
else:

    j = math.floor(num/amigos)
    l = 0
    r = num/amigos
    i = 0
    s = 0


    for l in range(amigos):

        if p[l] <= j:
            r = num - p[l]
            s += 1
            i = amigos-s

    if i == 0:
        i=1

    z = math.floor(r / i)

    for t in range(amigos):
        if(p[t] > j):
            p[t] = z

        text = "{:.0f}"
        print(text.format(p[t]))