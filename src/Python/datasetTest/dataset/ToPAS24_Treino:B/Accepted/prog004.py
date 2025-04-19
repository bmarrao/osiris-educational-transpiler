x, y = map(int, input().split())
n = list(map(int, input().split()))
l = list(map(str, input().split()))
i =0
while i < len(n):
    for j in range(n[i]):
        if j != 0:
            print(" ", end="")
        print(n[i+1], end="")
    print()
    i = i+2
i = 0
while i < len(l):
    for j in range(int(l[i])):
        if j != 0:
            print(" ", end="")
        print(l[i+1], end="")
    print()
    i = i+2
