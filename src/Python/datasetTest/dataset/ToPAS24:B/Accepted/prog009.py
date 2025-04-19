dia, mes = map(int, input().split())

ma = [31, 28,31,30,31,30,31,31,30,31,30,31]

s = 0

for x in ma[mes-1: len(ma)]:
    s += x

s = s - (dia + 6)

if s < 0:
    s= 365 + s

print(s)

