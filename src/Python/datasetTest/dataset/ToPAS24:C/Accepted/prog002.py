c=input()
l1=(input().split(' '))
l2=(input().split(' '))
v=0
p=0
for i in l1:
    for u in l1:
        if i==u:
            p+=1
    break

if p==(len(l1)):
    v+=1
p=0

for i in l2:
    for u in l2:
        if i==u:
            p+=1

if p==(len(l2)):
    v+=1
print(v)
