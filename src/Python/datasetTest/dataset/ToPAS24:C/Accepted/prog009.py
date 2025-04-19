c=int(input())
p1=input().split()
p2=input().split()
g=2
flag = True

if c<2 or c>8:
    exit()
for x in range(0,c):
    if int(p1[x])>20 or int(p1[x])<1:
        exit()
    if int(p2[x])>20 or int(p2[x])<1:
        exit()


for x in range(0,c):
    for y in range(0,c):
        if x == y:
            break
        if int(p1[x]) != int(p1[y]):
            g=g-1
            flag=False
            break
    if flag==False:
        break
flag=True
for l in range(0,c):
    for i in range(0,c):
        if l == i:
            break
        if int(p2[l]) == int(p2[i]):
            g=g-1
            flag = False
            break
    if flag == False:
        break

print(g)