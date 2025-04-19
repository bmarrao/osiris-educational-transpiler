# This is a sample Python script.

arr = []

inp = input()
soma = 0
num_=0
r = 0
d = 0

i =0
for i in range(len(inp)):

    num = int(inp[i])

    if i % 2 != 0:
        num *= 3

    if i != 12:
        soma += num
    else:
        num_ = num

r = soma % 10
d = 10 - r

if d == num_:
    print("OK")
elif d == 10 and num_ == 0:
    print("OK")
else:
    print("Erro "+str(d))