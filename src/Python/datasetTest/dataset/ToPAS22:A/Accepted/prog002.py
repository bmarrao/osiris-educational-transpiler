a, b = map(int, input().split())
c, d = map(int, input().split())

if a > c:
	e = a - c
else:
	e = c - a

if b > d:
	f = b -d
else:
	f = d - b

h = e + f

print(h)
