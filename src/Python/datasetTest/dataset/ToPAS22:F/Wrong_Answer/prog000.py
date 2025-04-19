# This is a sample Python script.

import math
# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

e = int(input())
i = 0
arr=[]
n = []

u = 0


for i in range(e):
    r = 1

    n.append(int(input()))
    t = input().split()

    while len(t) > n[i]:
        t = input().split()


p = 0
for p in range(len(n)):

    if p + 2 < len(t):
        if int(t[p]) + 1 == int(t[p+1]) or int(t[p]) + 2 == int(t[p+1]) or int(t[p]) + 2 == int(t[p+1]) or int(t[p]) + 2 == int(t[p+2]) or int(t[p]) + 4 == int(t[p+2]):
            r = 1
        elif int(t[p]) != -1 or int(t[p+1])!= -1:
            r = 0
            p = len(n)

    o = 0
    k = 0
    for o in range(len(t)):
        if t[o] == "-1":
            k+=1

        if k == len(t):
            r = 1
        else:
            o = len(t)

    if r == 1:
        arr.append("Possivel")
    else:
        arr.append("Impossivel")

for m in range(len(arr)):
    print(arr[m])