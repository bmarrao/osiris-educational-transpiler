Ntotal= 359
l = ["0","31","28","31","30","31","30","31","31","30","31","30","31"]
d,m = map(int,input().split())
contador = d
for i in range (0 , m):
	contador += int(l[i])
	
if (Ntotal-contador) < 0:
	num_dias= 31 - d + 359
	print(num_dias)
else:
	num_dias = 359 - contador	
	print(num_dias)
