m=int(input())
l=[]
for i in range(m):
    l.append(int(input()))
o=int(input())
a = True
j = o
count = 0
WhatIs = ""
l2 = []
while(a == True):
    if(l[j] == j):
        a = False
    elif(l[j] < 0 or l[j] >= m):
        WhatIs = "POLICIA"
        a = False
    else:
        count+=1
        j = l[j]
        if(l[j] in l2):
            WhatIs = "INCOMPETENTE"
            a = False
        l2.append(j)

a = False

if(WhatIs != ""):
    print(WhatIs)
else:
    print(count)