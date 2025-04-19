c=int(input())
con=0
f=0
lista=list(map(int, input().split()))
lista2=list(map(int, input().split()))
for i in range(len(lista)-1):
    if(lista[i]==lista[i+1]):
        f=1
if(f==1):
    con+=1
f=0
for i in range(len(lista2)-1):
    if(lista2[i]==lista2[i+1]):
        f=1
if(f==0):
    con+=1
print(con)