C=int(input())
p1=input()
p1=p1.split()

p2=input()
p2=p2.split()

T=0
for x in range(0,C):
    if p1[0]==p1[x]:
        T+=1
T=T/C
F=0
for x in range(1,C):
    if p2[0]!=p2[x]:
        F+=1
F=F/(C-1)



if T==1 and F==1:
    print("2")
elif T==1 and F!=1 or T!=1 and F==1:
    print("1")
else:
    print("0")


