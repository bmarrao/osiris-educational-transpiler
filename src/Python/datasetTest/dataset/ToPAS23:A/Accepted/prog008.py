a,b,c,yh=input().split()
i=int(a)
d=int(b)
i2=int(c)
d2 =int(yh)
t1=i+0.1*d
t2=i2+0.1*d2
if t2<37:
    print("NORMAL")
else:
    if t1<t2:
        pio=("SUBIU")
    elif t1>t2:
        pio=("BAIXOU")
    else:
        pio=("MANTEVE")
    print("FEBRE", pio)