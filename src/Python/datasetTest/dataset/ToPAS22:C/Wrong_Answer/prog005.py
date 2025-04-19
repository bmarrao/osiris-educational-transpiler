
b = int(input())
n = int(input())
lista = []
lista2 = []
c = 0
e = 0
if b > n:
	soma = 0
	for i in range(n):
		lista.append(int(input()))

	for i in range(n):
		soma = soma + lista[i]

		
	if b < soma:
		for i in range(len(lista)):
			c = c + lista[i]

		d = b / n
		for i in range(len(lista)):
			e = lista[i] + e

		for i in range(len(lista)):
			if d >= lista[i]:
				lista2.append(lista[i])
			if d < lista[i]:
				lista2.append(int(d))

		for i in range(len(lista2)):
			print(lista2[i])

	else:
		for i in range(len(lista)):
			print(lista[i])
else:
	print()
