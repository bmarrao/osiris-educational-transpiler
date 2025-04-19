x,y,r = map(int, input().split())
lista1 = list(map(str, input().split()))
lista2 = list(map(str, input().split()))
lista3 = list(map(str, input().split()))
num1 = ""
for i in range(x):
    num1 += lista1[i]
num1 = int(num1)
num2 = ""
for i in range(y):
    num2 += lista2[i]
num2 = int(num2)
num3 = ""
for i in range(r):
    num3 += lista3[i]
num3 = int(num3)

soma = num1 + num2
sub = soma - num3

sub = str(sub)
c = sub.count("1")
print (c)