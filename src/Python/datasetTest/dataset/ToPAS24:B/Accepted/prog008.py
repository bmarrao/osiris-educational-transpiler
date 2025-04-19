dia, mes = map(int, input().split())

ipt_days = 0
a = [4,6,9,11]
b = [1, 3, 5, 7, 8, 10, 12]

for i in range(1, mes):
    if(i == 2):
        ipt_days += 28
    elif(i in a):
        ipt_days += 30
    elif(i in b):
        ipt_days += 31

if(ipt_days + dia <= 359):
    print(359 - (ipt_days + dia))
else:
    print((365 - (ipt_days + dia)) + 359)