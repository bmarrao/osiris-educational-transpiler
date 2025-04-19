x = int(input())
l = list(map(int, input().split()))
m = list(map(int, input().split()))
n =0
if l.count(l[0])== len(l):
    n = n+1
b = 0
for i in m:
    if m.count(i) != 1:
        b = 1
if b==0:
    n = n+1
print(n)