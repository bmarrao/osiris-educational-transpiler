amigos = int(input())
liguais = input().split()
ldiferentes = input().split()
repetidos = []
contagem = 0
flag1 = False
flag2 = False
for i in ldiferentes:
	if ldiferentes.count(i) >1:
		repetidos.append(8)
	
if liguais.count(liguais[0]) == amigos :
	flag1 = True

if len(repetidos) == 0:
	flag2 = True	

if flag1 and flag2 :
	print(2)
elif flag1 or flag2:
	print(1)
else:
	print(0)		

