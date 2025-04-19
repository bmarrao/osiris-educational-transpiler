hm1 = input().split(' ')
hm2 = input().split(' ')
hm3 = input().split(' ')


h1, m1 = hm1[0], hm1[1]
hs2, ms2 = hm2[0], hm2[1]
hb3, mb3 = hm3[0], hm3[1]

## if int(h1) >= 0 and int(hs2) >= 0 and int(hb3) >= 0 and int(h1) <= 23 and int(hs2) <= 23 and int(hb3) <= 23 and int(m1) >= 0 and int(ms2) >= 0 and int(mb3) >= 0 and int(m1) <= 59 and int(ms2) <= 59 and int(mb3) <= 59 :

if int(hb3) > int(h1) and int(hb3) < int(hs2) :
    print("Encontram-se")
if int(hb3) == int(h1) and int(mb3) >= int(m1) and int(hb3) < int(hs2) or int(hb3) == int(hs2) and int(mb3) <= int(ms2) :
    print("Encontram-se")
else :
    print("Desencontram-se")