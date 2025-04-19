d,m=input().split()
if (int(m)<1 or int(m)>12):
    exit()
if int(m)==2:
    if (int(d)<1 or int(d)>28):
        exit()
elif int(m)==4 or int(m)==6 or int(m)==9 or int(m)==11:
    if int(d)<1 or int(d)>30:
        exit()
else:
    if int(d)<1 or int(d)>31:
        exit()
l=[31,28,31,30,31,30,31,31,30,31,30,31]
d=int(d)
dias=l[int(m)-1]-d
if int(m)<12:
    for x in range(int(m),11):
        dias+=l[x]
    dias+=25
    print(dias)
if int(m)==12:
    if int(d)<25:
        dias=25-d
        print(dias)
    elif int(d)>25:
        dias=31-d+359
        print(dias)
    else:
        dias=0
        print(dias)