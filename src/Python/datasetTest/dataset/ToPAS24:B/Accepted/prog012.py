m=[[1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]]
na=[25, 12]
dia,mes=(input().split(' '))
dia=int(dia)
mes=(int(mes))
ttl=0
la=[]
lb=[]
for i in m:
    if mes==12:
        if dia>25:
            x=i[1]
            ttl=ttl+365
            ttl=ttl-(dia-25)
            break
        elif dia<=25:
            ttl=ttl+(25-dia)
            break
    if i[0]==mes and i[0]!=12:
        x=i[1]
        ttl=ttl+(x-dia)
    elif i[0]>mes and i[0]!=12:
        x=i[1]
        ttl+=x
if mes!=12:
    ttl=ttl+25

print(ttl)


