media=int(input())
n=int(input())
lista=[]
y=0
for x in range(n):
    g=int(input())
    lista.append(g)
for t in range(n-6):
    if (lista[t]>media+5) and (lista[t+1]>media+5) and (lista[t+2]>media+5) and (lista[t+3]>media+5) and (lista[t+4]>media+5) and (lista[t+5]>media+5) :
        y=y+1
if y==0:
    print("FLAT")
else:
    print("WAVE")