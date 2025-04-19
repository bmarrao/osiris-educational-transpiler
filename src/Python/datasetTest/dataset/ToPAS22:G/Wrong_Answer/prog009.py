n = input()
a = [i for i in n]
	
b = int(a[0])*1 + int(a[1])*3 + int(a[2])*1 + int(a[3])*3 + int(a[4])*1 + int(a[5])*3 + int(a[6])*1 + int(a[7])*3 + int(a[8])*1 + int(a[9])*3 + int(a[10])*1 + int(a[11])*3 

c = b % 10

d = int(10 - c)
e = 0
if d == '10':
	e = 0
else:
	e = d

if int(a[12]) == e:
	print("OK")

else:
	print("ERRO " + str(e))

