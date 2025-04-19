# This is a sample Python script.

import math
# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

e = int(input())
i = 0
arr=[]

u = 0

for u in range(e):
    arr.append(1)

for i in range(e):
    r = 1

    n = int(input())
    t = input().split()

    y = 0
    for y in range(len(t)):
        t[y] = int(t[y])


    while len(t)>n:
        t = input().split()

    p = 0
    for p in range(n-2):

        if p + 1 <= len(t):
            if t[p] + 1 == t[p+1] or t[p] + 2 == t[p+1] or t[p] + 2 == t[p+1] or t[p] + 2 == t[p+2] or t[p] + 4 == t[p+2]:
                r = 1
            else:
                r = 0
                p = n-2

        o = 0
        k = 0
        for o in range(len(t)):
            if t[o] == -1:
                k+=1

            if k == len(t):
                r = 1
            else:
                o = len(t)

        if r == 1:
            arr[i] = "Possivel"
        else:
            arr[i] = "Impossivel"

for m in range(len(arr)):
    print(arr[m])