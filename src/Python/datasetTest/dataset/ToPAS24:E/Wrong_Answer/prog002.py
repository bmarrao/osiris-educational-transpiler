t1, t2, t3 = map(lambda x: int(x), input().split())
x = list(map(lambda x: int(x), input().split()))
y = list(map(lambda x: int(x), input().split()))
r = list(map(lambda x: int(x), input().split()))
x.reverse()
y.reverse()
r.reverse()

a = x

if (t2 > t1):
    x = y
    y = a

maisUm = False
count = 0

for i in range(len(x)):
    if (i < len(y)):
        if (maisUm):
            maisUm = False
            if (str(x[i] + y[i] + 1)[len(str(x[i] + y[i] + 1)) - 1] != str(r[i])):
               count += 1
        if (x[i] + y[i] > 9):
            maisUm = True
    else:
        if (maisUm):
            maisUm = False
            if (str(x[i] + 1)[len(str(x[i] + 1)) - 1] != str(r[i])):
               count += 1
            if (x[i] + 1 > 9):
                maisUm = True

if (maisUm): count += 1
print(count)