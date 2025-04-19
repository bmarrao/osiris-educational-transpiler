c=int(input())
while c<2 or c>8:
    c=int(input())
a=list(map(int,input().split(" ")))
b=list(map(int,input().split(" ")))
if c!=len(a) or c!=len(b):
    quit()
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
print(int(m+r))