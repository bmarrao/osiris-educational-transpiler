m,n,p=input().split()
m=int(m)
n=int(n)
p=int(p)
if (m<1 or m>1000) or (n<1 or n>1000) or (p<max(m,n) or p>max(m,n)+1):
    exit()
x=[]
x.append(input().split())
y=[]
y.append(input().split())
r=[]
r.append(input().split())
a=max(len(x),len(y))
l=[0]
d=0
s=0
k=0
if len(x)>len(y):
    y=a*l+y
elif len(y)>len(x):
    x=a*l+x
for c in range(a):
    if c != (a - 1):
        k = (x[a - c] + y[a - c])
        if k>=10 and (r[a-c-1]+1)!=(x[a-c]) + y[a-c]-10:
            s+=1
    if c==(a-1):
        x=int(x[0])
        y=int(y[0])
        if x +y>=10:
            if (r[0])+1!=x[0]+y[0]:
                s+=1
        else:
            break
print(s)
