a=[]
z=1
j=0
while z!=0:
    b=int(input())
    if b==0:
        z=0
        break
    a.append(b)
l=int(input())
jarro=[0]*(len(a)+1)
z=1
while z!=0:
    c,d=map(int,input().split(" "))
    if c==0 and d==0:
        z=0
        break
    if c==0:
        jarro[d]=a[d-1]
    elif d==0:
        jarro[c]=0
    else:
        jarro[c]-=a[d-1]
        jarro[d]+=a[d-1]
        if jarro[c]<0:
            jarro[d]+=jarro[c]
            jarro[c]=0
        if jarro[d]>a[d-1]:
            jarro[c]+=(jarro[d]-a[d-1])
            jarro[d]=a[d-1]
    if jarro[c]==l:
        j=1
    else:
        j=0
if j==1:
    print("CERTO")
else:
    print("ERRADO")