p = int(input())
lista = []
d = 0
for i in range(p):
	b = input()
	c = int(input())
	lista.append(c)

for i in range(len(lista)):
	d = d + lista[i]
	
print(d)
