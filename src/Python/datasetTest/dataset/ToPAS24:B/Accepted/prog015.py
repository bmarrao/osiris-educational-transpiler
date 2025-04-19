d,m=map(int,input().split(" "))
lista=[31,28,31,30,31,30,31,31,30,31,30,31]
mes = m-1
n=0
dias=0
while n<mes:
    dias+=lista[n]
    n+=1
dias+=d
diastotal=359-dias
if diastotal<0:
    diastotal=365+diastotal
print(diastotal)