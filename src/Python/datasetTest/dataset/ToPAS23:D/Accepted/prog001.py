n=int(input())
l=[]
lp=[]
l2=[]
for i in range (n):
    s=0
    sTotal = 0;
    l2=[]
    l=[]
    str=input("")
    str=str.split(" ")
    l.append(int(str[0]))
    l.append(int(str[1]))
    l.append(int(str[2]))
    l.append(int(str[3]))
    l.append(int(str[4]))
    for k in range (5):
        w=l[k]
        if w not in l2:
            y=l.count(l[k])
            if (y==2):
                s=s+(3*l[k])
            elif (y==3):
                s=s+(5*l[k])
            elif (y==4):
                s=s+(10*l[k])
            else:
                s=s+l[k]
        l2.append(w)

    #print(s)
    lp.append(s)
    s = 0
r=lp.count(max(lp))
print(r, max(lp))



