from math import *

numerofixado = int(input())
amigos = int(input())
lista = []
count = 0
lista2 = []
x = 0
for i in range(amigos):
	lista.append(int(input()))

for i in range(len(lista)):
	if lista[i] > numerofixado:
		count += 1

if count == len(lista):
	print("No free lunch")

else:
	
	for i in range(len(lista)):
		x = numerofixado - lista[i]
		if x < 0:
			continue
		else:
			lista2.append(x)
	
	lista2.sort()
			
	print(numerofixado - lista2[0])
