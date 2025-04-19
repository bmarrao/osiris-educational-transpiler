a,b,c,d=input().split()
i=int(a)
d=int(b)
i2=int(c)
d2 =int (d)
t1=i+0.1*d
t2=i2+0.1*d2
if t2<37:
    print("NORMAL")
else:
    print("FEBRE")
    if t1<t2:
        print("SUBIU")
    elif t1>t2:
        print("BAIXOU")
    else:
        print("MANTEVE")