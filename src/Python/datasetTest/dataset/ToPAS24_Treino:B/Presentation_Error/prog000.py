k,t=map(int, input().split(" "))
#d=k*2
q=0
a=list(map(int,input().split(" ")))
c=list(map(str,input().split(" ")))
n=len(a)
m=len(c)
while q<n:
    b=a[q+1]
    print(a[q]*f"{b} ")
    q+=2
q=0
while q<m:
    d=c[q+1]
    print(int(c[q])*f"{d} ")
    q+=2