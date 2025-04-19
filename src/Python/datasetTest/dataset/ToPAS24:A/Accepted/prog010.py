hc,mc=(input().split(' '))
hs,ms=(input().split(' '))
hb,mb=(input().split(' '))
hc=int(hc)
mc=int(mc)
hb=int(hb)
mb=int(mb)
hs=int(hs)
ms=int(ms)
if ((hc,mc)<=(hb,mb)<=(hs,ms)):
    print('Encontram-se')
else:
    print('Desencontram-se')
    
