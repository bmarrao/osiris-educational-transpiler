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
        break
    elif(l[j] < 0 or l[j] > m):
        WhatIs = "POLICIA"
        break
    elif(0 <= l[j] < m):
        count+=1
        j = l[j]
        if(l[j] in l2):
            WhatIs = "INCOMPETENTE"
            break
        l2.append(j)

if(WhatIs != ""):
    print(WhatIs)
else:
    print(count)

