x, y = map(int, input().split())

if (y==12 and x>25):
    d = 31 -x + 25
    y=1
else:
    d = 25 - x
while y <12:

    if (y in [4, 6, 9, 11]):
        d = d+30
    if (y in [1,3,5,7,8,10,12]):
        d = d+31
    if y==2:
        d = d+28
    y = y + 1
print(d)