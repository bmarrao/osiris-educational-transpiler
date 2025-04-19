c=int(input())
g=input().split()
h=input().split()
gg=[]
gg.append(g[0])
hh=[]
a=True
b=True
for i in g:
    if i not in gg:
        a=False
        break
for i in h:
    if i not in hh:
        hh.append(i)
    else:
        b=False
        break
if a==True and b==True:
    print(int(2))
elif a==False and b==False:
    print(int(0))
else:
    print(int(1))