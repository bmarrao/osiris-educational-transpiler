a,b = map(int,input().split())
c,d = map(int,input().split())
e,f = map(int,input().split())
entrada = a*60 + b
saida = c*60 + d
prima = e*60 + f
if (saida>=prima>=entrada):
	print("Encontram-se")
else:
	print("Desencontram-se")
