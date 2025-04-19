lj = []
lf = []
p = 1
while p != 0:
    p = int(input())
    if p==0:
        break
    else:
        lj.append(p)
        lj.append("0")
        lf.append(lj)
        lj = []
l = int(input())
a = 1
b = 1
t=0
z=1
while z!=0:
    a, b = (input().split(" "))
    a=int(a)
    b=int(b)
    if a==0 and b!=0:
        j=lf[b-1]
        lf[b-1]=[j[0],j[0]]
        t=t+j[0]
    elif a>0:
        j=lf[a-1]
        x=lf[b-1]
        f=j[0]-x[0]
        if f>0:
            lf[a-1]=[j[0],j[0]]
            lf[b-1]=[x[0],f]
        elif f<0:
            f=f*-1
            lf[a-1]=[j[0],0]
            lf[b-1]=[x[0],j[0]]
    elif b==0 and a!=0:
        j=lf[a-1]
        lf[a-1]=[j[0],0]
        t=t-j[0]
    elif (a==0 and b==0):
        z=0
        break

k=len(lf)
s=0
for i in lf:
    i[1]=int(i[1])
    if i[1]<=i[0]:
        s=s+1
r=0
for i in lf:
    print(i[0], i[1])
    if i[0]>=i[1]:
        r=r+1
print(s)
print(r)
if s==k and r==k:
    print('CERTO')
else:
    print('ERRADO')
    
        
        
    
    
