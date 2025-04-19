c=int(input())
a=list(map(int,input().split(" ")))
b=list(map(int,input().split(" ")))
m=1
r=1
n=0
while n<(c-1):
    if a[n] != a[n+1]:
        m=0
    n+=1
n=0
while n<(c-1):
    if b[n]==b[n+1]:
        r=0
    n+=1
print(m+r)