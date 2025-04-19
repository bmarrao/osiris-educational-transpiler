n = ""
l = []
w = []
while n !=0:
    n = int(input())
    if (n!=0):
        l.append(n)
        w.append(0)
num = int(input())
x = ""
y = ""
s = 1
while (s !=0):
    x, y = map(int,input().split())
    if (x == 0 and y!=0):
        w[y-1]=l[y-1]
    elif (x != 0 and y == 0):
        w[x-1]=0
    elif (x != 0 and y != 0):
        w[y-1] = w[y-1] + w[x - 1]
        w[x - 1] = 0
        if (w[y-1]>l[y-1]):
            w[x - 1] = w[y-1]-l[y-1]
            w[y - 1] = l[y - 1]

    else:
        s = 0

if (w.count(num)!=0):
    print("CERTO")
else:
    print("ERRADO")