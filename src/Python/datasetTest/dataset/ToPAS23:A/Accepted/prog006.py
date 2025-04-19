i1, d1, i2, d2=(int(i) for i in input().split(' '))
d1=d1*0.10
t1=i1+d1
d2=d2*0.10
t2=i2+d2
if t2<37:
    print('NORMAL')
else:
    if t1<t2:
        print('FEBRE SUBIU')
    elif t1==t2:
        print('FEBRE MANTEVE')
    else:
        print('FEBRE BAIXOU')
        
