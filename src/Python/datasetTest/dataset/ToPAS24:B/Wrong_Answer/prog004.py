x, y = map(int, input().split())
if (x<=25):
    d = 25 - x
else:
    d = 25 - x
    y=0
while y != 12:
    y = y + 1
    if (y in [4, 6, 9, 11]):
        d = d+30
    if (y in [1,3,5,7,8,10, 12]):
        d = d+31
    if y==2:
        d = d+28
print(d)